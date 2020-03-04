import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import { Container } from '@material-ui/core';

const PriceListMaterialTable = () => {
    // TODO token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6OSwiaWF0IjoxNTgzMzQ5MjAyLCJleHAiOjE1ODM0MzU2MDJ9.AIa9vshllTsHHXFmJ8E_yp65tsQ3fCcUtbG9BroPGnM';

    const [prices, setPrices] = useState([]);
    const [table, setTable] = useState({
        columns: [
            { title: 'Product', field: 'product' },
            { title: 'Category', field: 'product_cat' },
            { title: 'Subcategory', field: 'sub_category' },
            { title: 'Avg. Price', field: 'avg_price', type: 'numeric' }
        ],
        data: []
    });

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
    }, []);

    useEffect(() => {
        setTable(table => ({
            ...table,
            data: prices.map(item => (item))
        }));
    }, [prices]);

    const addPrice = newData => {
        setPrices(prevPrices => [...prevPrices, newData]);
    }

    const removePrice = oldData => {
        setPrices(prevPrices => {
            const data = [...prevPrices];
            return data.splice(data.indexOf(oldData));
        })
    }

    const updatePrice = (oldData, newData) => {
        setPrices(prevPrices => {
            const data = [...prevPrices];
            data[data.indexOf(oldData)] = newData;
            console.log(data);
            return data;
        })
    }


    return (
        <Container>
            <MaterialTable
            title="Price List"
            columns={table.columns}
            data={table.data}
            editable={{
                onRowAdd: newData =>
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        addPrice(newData);
                    }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        if (oldData) {
                            updatePrice(oldData, newData);
                        }
                    }, 600);
                }),
                onRowDelete: oldData =>
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                        removePrice(oldData);
                    }, 600);
                }),
            }}
            />
        </Container>
      );
}

export default PriceListMaterialTable
