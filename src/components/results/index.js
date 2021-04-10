import React from "react";
import { Container, Row, Col } from "reactstrap";
import RenderCard from "../cardResults";
import { Loading } from "../isLoading";

export default function Results(props) {
  if (props.isLoading || !props.data) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <RenderCard businesses={props.data} />
      </div>
    );
  }
  // return (
  //   <div>
  //     <h1 className="text-center pt-3 pb-4"> Results</h1>
  //     <Container>
  //       <Row>
  //         <Col>
  //           <GetData
  //             location={props.location}
  //             term={props.term}
  //             onSubmit={props.onSubmit}
  //           />
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );
}
