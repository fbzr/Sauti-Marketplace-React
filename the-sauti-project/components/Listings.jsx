import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ListingItem from './ListingItem';
import { Grid, Container } from '@material-ui/core';

const Listings = props => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.get('http://africanmarketplace.ddns.net:5000/api/listings');
            setListings(res.data);
        }
        // Check if listings were passed through props
        if (props.listings) {
            setListings(props.listings);
        } else {
            fetchData(); // Fetch all listings
        }
    }, [props])
    
    return (
        <Container>
            <Grid justify='flex-start' container>
                { listings.map(item => (
                    <ListingItem key={item.id} listing={item} />
                )) }
            </Grid>
        </Container>
    )
}

export default Listings
