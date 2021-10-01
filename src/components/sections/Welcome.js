import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../UI/Button";
import SectionWithBgImage from "../UI/SectionWithBgImage";

import classes from "./Welcome.module.scss";

import logo from "../../img/coding.png";
import bgImage from "../../img/cover.png";

const Welcome = (props) => {
  return (
    <SectionWithBgImage
      id={props.id}
      bgImage={bgImage}
      className={classes.welcome}
      height="100vh"
    >
      <Container>
        <Row>
          <Col className={classes.headline}>
            <h1 className="display-3">
              Welcome on my
              <div className="w-100"></div>
              portfolio page
            </h1>
            <Button variant="primary" href="#projects" type="button" size="lg">
              See my past projects
            </Button>
          </Col>
          {/* Force next columns to break to new line at sm breakpoint and down */}
          <div className="w-100 d-block d-sm-none"></div>
          <Col className="d-flex justify-content-center">
            <img src={logo} className="img-fluid" alt="coding logo" />
          </Col>
        </Row>
      </Container>
    </SectionWithBgImage>
  );
};

export default Welcome;
