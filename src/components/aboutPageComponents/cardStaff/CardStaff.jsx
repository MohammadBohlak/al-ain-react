import React from "react";
import {Card, Col } from "react-bootstrap";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";


function CardStaff({ image, name, job }) {
   let data= {
        image, name, job
    }

  return (
    <>
      <Col xs={12} sm={6} md={6} lg={3}>
        <Card style={{ borderColor: "var(--main-color)" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
              <PrimaryText>{data.name}</PrimaryText>
              <SecondaryText>{data.job}</SecondaryText>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardStaff;
