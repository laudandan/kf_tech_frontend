import * as React from "react";
import DropDownBtn from "./components/DropDownBtn";
import TableEx from "./components/TableEx";
import FormLogin from "./components/FormLogin";
import "../../boostrap.css"
import Form from "react-bootstrap/Form";
import {FormText, Image} from "react-bootstrap";

export default function Home() {
    return (
        <>
        <div className={"container"}>
            <Form.Check />
            <DropDownBtn />
        </div>
        <div className={"card-body container"} style={{border: 2}} >
            <Form.Check />
            <Image style={{background: "grey"}} rounded={true}/>
            <Form.Label>Insert your name</Form.Label>
            <Form.Control  />
            <Form.Text>Insert your full name.</Form.Text>
            <Form.Label>Insert your email</Form.Label>
            <Form.Control type={"email"} />
            <Form.Text>Insert your email.</Form.Text>
            <FormLogin></FormLogin>
            <TableEx />
        </div>
        </>
    );
}