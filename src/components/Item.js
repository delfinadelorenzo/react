import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="p-2 cards">
              <Card style={{ width: "18rem" }}>
                <img src={item.pictureUrl} alt={item.tittle} />

                <Card.Body>
                  <div className="tittle">
                    <span>
                      <Card.Title> {item.tittle} </Card.Title>
                    </span>
                  </div>

                  <div>
                    <span className="precio">
                      <Card.Text> ${item.price} </Card.Text>
                    </span>
                  </div>

                  <div>
                    <Link to={`/detalle/${item.id}`}>+Info</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Item;
