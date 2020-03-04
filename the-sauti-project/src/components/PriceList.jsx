import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PriceItem from './PriceItem';

const PriceList = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6OSwiaWF0IjoxNTgzMjYxMjM4LCJleHAiOjE1ODMzNDc2Mzh9.3teldLkKlu-DW4fM4u5-lTQ_2WVtg4QbXMoA4PKmZcQ';
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const config = { headers: { 'Authorization':token } }
            try {
                const res = await Axios.get('http://africanmarketplace.ddns.net:5000/api/prices', config);
                setPrices(res.data);
            } catch(err) {
                console.log(err.message);
            }   
        }
        fetchData();
    }, [])
    
    return (
        prices.map(item => <PriceItem key={item.id} priceItem={item} />)
    )
}

export default PriceList
