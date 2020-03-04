import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ListingItem from './ListingItem';
import { Grid, Container } from '@material-ui/core';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [listingsSearch, setListingsSearch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.get('http://africanmarketplace.ddns.net:5000/api/listings');
            setListings(res.data);
            setListingsSearch(res.data);        
        }

        fetchData();
    }, [])
    
    return (
        <Container>
            <Grid justify='center' container>
                { listingsSearch.map(item => (
                    <ListingItem key={item.id} listing={item} />
                )) }
            </Grid>
        </Container>
    )
}

export default Listings
