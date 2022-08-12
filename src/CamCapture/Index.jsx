import { Component } from "react";
import { Row, Button, Col } from "reactstrap";
import WebcamComponent from "./WebCam";
class WebcamCapture extends Component {
  render() {
    return (
      <>
        <Row>
          <Row>
            <WebcamComponent />
          </Row>
          <Col>
            <Button>Start</Button>
          </Col>
          <Col>
            <Button>End</Button>
          </Col>
        </Row>
      </>
    );
  }
}
export default WebcamCapture;
