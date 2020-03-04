import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6OSwiaWF0IjoxNTgzMjYxMjM4LCJleHAiOjE1ODMzNDc2Mzh9.3teldLkKlu-DW4fM4u5-lTQ_2WVtg4QbXMoA4PKmZcQ';

    const userId = useParams().id;

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const config = { headers: { 'Authorization':token } }
            try {
                const res = await Axios.get(`http://africanmarketplace.ddns.net:5000/api/   users/${userId}/listings`, config);
                setListings(res.data);
            } catch(err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [userId])

    return (
        <div>
            Users Products
        </div>
    )
}

export default User
