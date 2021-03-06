import React from "react";
import { Container, Row, Col } from "reactstrap";
import FurnitureCard from "./FurnitureCard";
import { Loading } from './LoadingComponent';
// import { Fade, Stagger } from 'react-animation-components';

function FurnitureGroupPage(props) {
    if (props.isLoading) {
        return (
            <div className="entirePage">
                <Loading />
            </div>
        );
    } else if (props.errMess) {
        return (
            <h3 className="entirePage">{props.errMess}</h3>
        );
    } else {
        return (
                <Container className={"my-4 py-4"}>
                <Row className={"my-4 py-4"} >
                    <Col>
                        <h1>{props.type}</h1>
                    </Col>
                </Row>
                <Row>
                {props.furnitures.map(furniture => {
                    return (
                            <FurnitureCard
                                furniture={furniture}
                                setFurnitureQuantity={props.setFurnitureQuantity}
                                key={furniture.id}
                            />
                    );
                })}
                </Row>
            </Container>
        );
    }
}

export default FurnitureGroupPage;