import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../UI/Button";
import DivWithBgImage from "../UI/DivWithBgImage";

import classes from "./Projects.module.scss";

import projects_1 from "../../img/mafex-link.png";
import projects_2 from "../../img/cryptoDashboard-link.png";
import projects_3 from "../../img/twitterInsights-link.png";
import projects_4 from "../../img/stockPredict-link.png";

const Projects = () => {
  const additionalStyle = {
    minHeight: "21rem",
    margin: "1rem 0",
    transition: "transform 400ms ease-out",
  };

  return (
    <>
      <Row>
        <Col>
          <h1 className="display-5">My past projects</h1>
          <p className={classes.main}>
            Here you can find portfolio of my past projects. Originally they
            were written in different languages and technolgies, but I rewrited
            most of them with React.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://mafex.sk/" rel="noreferrer" target="_blank">
            <DivWithBgImage
              img={projects_1}
              addionalStyle={additionalStyle}
              scaleOnHover={true}
            ></DivWithBgImage>
          </a>
          <h1 className="display-6">Mafex</h1>
          <p>Presentational website built for construction company.</p>
          <Button
            as="a"
            variant="primary"
            href="https://mafex.sk/"
            target="_blank"
            type="button"
            size="lg"
          >
            Open app
          </Button>
        </Col>
        <div className="w-100 d-block d-md-none"></div>
        <Col>
          <a
            href="https://crypto-dashboard-react.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <DivWithBgImage
              img={projects_2}
              addionalStyle={additionalStyle}
              scaleOnHover={true}
            ></DivWithBgImage>
          </a>
          <h1 className="display-6">Crypto Dashboard</h1>
          <p>
            My diploma’s project which used machine learning for cryptocurrency
            pattern analysis.
          </p>
          <Button
            variant="primary"
            href="https://crypto-dashboard-react.web.app/"
            target="_blank"
            type="button"
            size="lg"
          >
            Open app
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://twitter-insights-react.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <DivWithBgImage
              img={projects_3}
              addionalStyle={additionalStyle}
              scaleOnHover={true}
            ></DivWithBgImage>
          </a>
          <h1 className="display-6">Twitter Insights</h1>
          <p>
            Twitter insights dashboard is web application that collects data
            from public Twitter posts, analyzes them and visualize the results
            on custom widgets.
          </p>
          <Button
            variant="primary"
            href="https://twitter-insights-react.web.app/"
            target="_blank"
            type="button"
            size="lg"
          >
            Open app
          </Button>
        </Col>
        <div className="w-100 d-block d-md-none"></div>
        <Col>
          <a
            href="https://stock-predict-b6b9d.web.app/"
            rel="noreferrer"
            target="_blank"
          >
            <DivWithBgImage
              img={projects_4}
              addionalStyle={additionalStyle}
              scaleOnHover={true}
            ></DivWithBgImage>
          </a>
          <h1 className="display-6">Stock Predict</h1>
          <p>
            My bachelor’s thesis application about monitoring financial markets
            in cloud using predictive algorithms.
          </p>
          <Button
            variant="primary"
            href="https://stock-predict-b6b9d.web.app/"
            target="_blank"
            type="button"
            size="lg"
          >
            Open app
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
