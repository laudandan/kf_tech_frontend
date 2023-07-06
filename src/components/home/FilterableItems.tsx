import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function FilterableItems() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                        1 of 2
                    </Col>
                    <Col sm={4}>2 of 2</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
            <Container>
            </Container>
        </>
    );
}