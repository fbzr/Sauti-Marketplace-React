import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, makeStyles, Table, TableCell, TableBody, TableRow, TableHead, TableContainer, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper
    },
    tableContainer: {
        maxWidth: '600px',
        maxHeight: '500px'
    },
    header: {
        backgroundColor: theme.palette.primary
    }

}))

const headCells = [
    { id: 'product', label: 'Product' },
    { id: 'product_cat', label: 'Category' },
    { id: 'sub_category', label: 'Subcategory' },
    { id: 'avg_price', label: 'Avg. Price' }
  ];

const PriceList = () => {
    const classes = useStyles();

    // TODO change to dinamic token
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
        <Container className={classes.root}>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            { headCells.map(headCell => (
                                <TableCell className={classes.header} key={headCell.id}>
                                    <Typography variant='h6' component='subtitle1'>{headCell.label}</Typography>
                                </TableCell>
                            )) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { prices.map(item => (
                        <TableRow>
                            <TableCell>{item.product}</TableCell>
                            <TableCell>{item.product_cat}</TableCell>
                            <TableCell>{item.sub_category}</TableCell>
                            <TableCell>${item.avg_price.toFixed(2)}</TableCell>
                        </TableRow>
                    )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default PriceList
