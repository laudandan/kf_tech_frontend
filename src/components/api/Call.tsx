import {useState} from 'react';
import * as React from "react";
import axios from 'axios';
import {Col, Container, Row} from "react-bootstrap";
export default function Call() {
    const url =
        'https://api.npoint.io/3ce1c03db000aa9430d0';
    const getItems = async (url: any) => {

        return axios
            .get(url)
            .then((response) => {
                return response;
            });
    };
    const [items, setItems] = useState<any[]>([]);
    const [columns, setColumns] = useState<any[]>([]);
    React.useEffect(()=>{
        getItems(url).then(res=> {setItems(res.data.items); setColumns(Object.keys(res.data.items[0]))})
    }, [])

    return (
            <Container >
                <Row>
                {columns.map(column=><Col>{column}</Col>)}
                </Row>
            {
                items.map(item=>{
                    return (<Row>
                        <Col>{item.category}</Col>
                        <Col>{item[0].name}</Col>
                        <Col>{item[0].value}</Col>
                    </Row>)
                })
            }
            </Container>

    );
}