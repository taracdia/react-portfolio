import React, { Component } from "react";
import Cart from "./CartComponent.js";
import CheckoutForm from "./CheckoutForm";
import { Col, Row, Container } from "reactstrap";

function CheckoutPage(props) {
    // todo: make it so that when these are true these messages are shown

    const loggedInMessage = props.isLoggedIn ? (
        <Row>
            <Col>
                <h3>You are logged in!</h3>
            </Col>
        </Row>
    ) : "";
    if (props.isThankDisplayed) {
        return (
            <Row>
                <Col>
                    <h3>Thank you for shopping with FurnitureNow!</h3>
                </Col>
            </Row>
        );
    } else if (props.isCartEmpty) {
        return (
            <Row>
                <Col>
                    <h3>Your cart is empty</h3>
                </Col>
            </Row>
        );
    } else {
        return (
            <Container className="py-5">
                {loggedInMessage}
                <Row>
                    <Col xl={5} pb-xl={1} pb={5}>
                        <Cart
                            furnitureItems={props.furnitureItems}
                            addSingleFurniture={props.addSingleFurniture}
                            removeSingleFurniture={props.removeSingleFurniture}
                            setMultipleFurnitures={props.setMultipleFurnitures}
                            deleteFurnitures={props.deleteFurnitures}
                        />
                    </Col>
                    <Col xl={7} pt-xl={1} pt={5}>
                        <CheckoutForm />
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default CheckoutPage;