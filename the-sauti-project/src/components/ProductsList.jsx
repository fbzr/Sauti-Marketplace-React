import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Product from './Product';
import { Grid, Container } from '@material-ui/core';

const ProductsList = () => {
    const [productsList, setProductsList] = useState([]);
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.get('http://africanmarketplace.ddns.net:5000/api/listings');
            setProductsList(res.data);
            setListSearch(res.data);        
        }

        fetchData();
    }, [])
    
    return (
        <Container>
            <Grid justify='center' container>
                { listSearch.map(item => (
                    <Product key={item.id} product={item} />
                )) }
            </Grid>
        </Container>
    )
}

export default ProductsList
