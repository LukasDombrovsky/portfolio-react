import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../../components/Project/Project';

import classes from './Projects.module.scss';

import projects_1 from '../../img/mafex-link.png';
import projects_2 from '../../img/cryptoDashboard-link.png';
import projects_3 from '../../img/twitterInsights-link.png';
import projects_4 from '../../img/stockPredict-link.png';

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
          <Project
            href='https://mafex.sk/'
            img={projects_1}
            title='Mafex'
            description='Presentational website built for construction company.'
            cardStyle={cardStyle}
          />
        </Col>
        <div className='w-100 d-block d-md-none'></div>
        <Col>
          <Project
            href='https://crypto-dashboard-react.web.app/'
            img={projects_2}
            title='Crypto Dashboard'
            description='My diploma’s project which used machine learning for cryptocurrency pattern analysis.'
            cardStyle={cardStyle}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Project
            href='https://twitter-insights-react.web.app/'
            img={projects_3}
            title='Twitter Insights'
            description='Twitter insights dashboard is web application that collects data from public Twitter posts, analyzes them and visualize the results on custom widgets.'
            cardStyle={cardStyle}
          />
        </Col>
        <div className='w-100 d-block d-md-none'></div>
        <Col>
          <Project
            href='https://stock-predict-b6b9d.web.app/'
            img={projects_4}
            title='Stock Predict'
            description='My bachelor’s thesis application about monitoring financial markets in cloud using predictive algorithms.'
            cardStyle={cardStyle}
          />
        </Col>
      </Row>
    </>
  );
};

export default Projects;
