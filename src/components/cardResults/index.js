import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import Favorite from "../favorites";
import "./style.css";

function RenderCard(props) {
  const cards = props.businesses.map((business) => {
    return (
      <Col key={business.id} xs={12} md={6} lg={4}>
        <Card className="m-3 card_item">
          <CardTitle className="text-center">
            <h4>{business.name}</h4>
          </CardTitle>
          <CardBody className="mx-auto">
            <CardImg
              variant="top"
              src={business.image_url}
              alt={business.name}
              className="img-fluid img-thumbnail card_image"
            />
            <CardText>
              Phone: {business.phone} <br />
              Address: {business.location.display_address} <br />
              Rating: {business.rating} <br />
              {business.is_closed === true ? "Closed" : "Open"}
            </CardText>
          </CardBody>
          <Button
            width="50%"
            color="primary"
            className="card_link m-1 "
            href={business.url}
            target="_blank"
          >
            More Info.
          </Button>
          <Favorite favBusiness={business} />
        </Card>
      </Col>
    );
  });
  return (
    <Container>
      <Row>{cards}</Row>
    </Container>
  );
}
export default RenderCard;
