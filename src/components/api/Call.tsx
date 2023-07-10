import {useState} from 'react';
import * as React from "react";
import axios from 'axios';
import {Button} from "react-bootstrap";

interface MeasurementsDto {
    name?: string;
    value?: number;
}

type PropertyDto = {
    category?: string;
    measurements: MeasurementsDto[];
}

const array: HTMLSpanElement[] = [];

const buttonHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element: HTMLSpanElement = event.currentTarget;
    const idElement: any = element.parentElement?.id;
    var value = window.prompt("Input the cell value");
    array.push(element);
    element.innerText = value + "*";
    element.style.background = "red";
};

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
    const [items, setItems] = useState<PropertyDto[]>([]);
    React.useEffect(()=>{
        getItems(url).then(res=> {setItems(res.data.items);})
    }, [])

    const saveChanges = (evenet: React.MouseEvent<HTMLButtonElement>) => {

       array.map(prop => {
           var value = prop.innerText;
           var splitted = value.split("*");

           prop.innerText = splitted[0];
           prop.style.background = "";

       });

    };

    var index: number = 0;

    return (
        <div className={"navbar-container"}>
        <table align={"center"} id={"itemsTable"}>
            <thead>
            <tr>
                <th>Category</th>
                <th>Measurements</th>
                <th>Values</th>
            </tr>
            </thead>
            <>
                {
                    items.map(item => {
                        let size = item.measurements.length;
                        return (
                            <>
                                <tr>
                                    <td rowSpan={size}>{item.category}</td>
                                    <td>{item.measurements[0].name}</td>
                                    <td id={(++index).toString()}><span onClick={buttonHandler}>{item.measurements[0].value}</span></td>
                                </tr>
                                {item.measurements.map(prop => (
                                    <>
                                        {(prop.name != item.measurements[0].name) ?
                                            <tr>
                                                <td>{prop.name}</td>
                                                <td id={(++index).toString()}><span onClick={buttonHandler}>{prop.value}</span></td>
                                            </tr>
                                            : null}
                                    </>
                                ))}
                            </>
                        )})
                }

            </>

            <Button onClick={saveChanges}>Save changes</Button>
        </table>
        </div>
    );
}