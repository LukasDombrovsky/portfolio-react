import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button/Button';

import classes from './Projects.module.scss';

import projects_1 from '../../img/mafex-link.png';
import projects_2 from '../../img/cryptoDashboard-link.png';
import projects_3 from '../../img/twitterInsights-link.png';
import projects_4 from '../../img/stockPredict-link.png';
import ImageCard from '../../components/ImageCard/ImageCard';

const Projects = () => {
  const cardStyle = {
    minHeight: '21rem',
    margin: '1rem 0',
  };

  return (
    <>
      <Row>
        <Col>
          <h1 className='display-5 section-headline'>My past projects</h1>
          <p className={classes['main-text']}>
            Here you can find portfolio of my past projects. The oldest ones are
            my university projects, some of them are websites for small
            businesses and the others are my personal demo projects.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='https://mafex.sk/' rel='noreferrer' target='_blank'>
            <ImageCard
              img={projects_1}
              scaleOnHover
              additionalStyle={cardStyle}
            />
          </a>
          <h2>Mafex</h2>
          <p>Presentational website built for construction company.</p>
          <Button type='button' href='https://mafex.sk/' target='_blank'>
            Open app
          </Button>
        </Col>
        <div className='w-100 d-block d-md-none'></div>
        <Col>
          <a
            href='https://crypto-dashboard-react.web.app/'
            rel='noreferrer'
            target='_blank'
          >
            <ImageCard
              img={projects_2}
              scaleOnHover
              additionalStyle={cardStyle}
            />
          </a>
          <h2>Crypto Dashboard</h2>
          <p>
            My diploma’s project which used machine learning for cryptocurrency
            pattern analysis.
          </p>
          <Button
            type='button'
            href='https://crypto-dashboard-react.web.app/'
            target='_blank'
          >
            Open app
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href='https://twitter-insights-react.web.app/'
            rel='noreferrer'
            target='_blank'
          >
            <ImageCard
              img={projects_3}
              scaleOnHover
              additionalStyle={cardStyle}
            />
          </a>
          <h2>Twitter Insights</h2>
          <p>
            Twitter insights dashboard is web application that collects data
            from public Twitter posts, analyzes them and visualize the results
            on custom widgets.
          </p>
          <Button
            type='button'
            href='https://twitter-insights-react.web.app/'
            target='_blank'
          >
            Open app
          </Button>
        </Col>
        <div className='w-100 d-block d-md-none'></div>
        <Col>
          <a
            href='https://stock-predict-b6b9d.web.app/'
            rel='noreferrer'
            target='_blank'
          >
            <ImageCard
              img={projects_4}
              scaleOnHover
              additionalStyle={cardStyle}
            />
          </a>
          <h2>Stock Predict</h2>
          <p>
            My bachelor’s thesis application about monitoring financial markets
            in cloud using predictive algorithms.
          </p>
          <Button
            type='button'
            href='https://stock-predict-b6b9d.web.app/'
            target='_blank'
          >
            Open app
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
