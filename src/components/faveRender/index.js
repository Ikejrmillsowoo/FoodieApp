import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

function FaveRenders() {
  const faveData = useSelector((state) => state.favorites.data);
  const cards = faveData.map((business) => {
    return (
      <Col key={business.id} xs={12} md={6} lg={4}>
        <Card className="m-3 card_item">
          <CardTitle className="text-center">
            <h4>{business.name}</h4>
          </CardTitle>
          <CardBody className="mx-auto card_body">
            <CardImg
              variant="top"
              src={business.image_url}
              alt={business.name}
              className="img-fluid img-thumbnail card_image"
            />
            <CardText>
              Phone: {business.phone} <br />
              Address: {business.address} <br />
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
        </Card>
      </Col>
    );
  });
  return <div>{cards}</div>;
}

export default FaveRenders;
