import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../../components/Project/Project';

import classes from './Projects.module.scss';

import projects_1 from '../../img/mafex-link.png';
import projects_2 from '../../img/cryptoDashboard-link.png';
import projects_3 from '../../img/twitterInsights-link.png';
import projects_4 from '../../img/stockPredict-link.png';
import projects_5 from '../../img/JozefKravec-link.png';
import projects_6 from '../../img/UkCovid-link.png';

const Projects = () => {
    const cardStyle = {
        minHeight: '21rem',
        margin: '1rem 0',
        backgroundSize: 'cover',
    };

    return (
        <>
            <Row>
                <Col>
                    <h1 className='display-5 section-headline'>My past projects</h1>
                    <p className={classes['main-text']}>
                        Here you can find a portfolio of my past projects. The oldest ones are my
                        university projects, some are websites for small businesses, and others are
                        my personal demo projects.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Project
                        href='https://uk-covid-statistics.web.app/'
                        img={projects_6}
                        title='UK Covid statistics'
                        description='This is a demo app that gets data from the UK Covid dataset, processes it, and visualizes the results on G2 charts.'
                        techStack='Next.js | ReactJs | TypeScript | Ant Design | G2'
                        cardStyle={cardStyle}
                    />
                </Col>
                <Col>
                    <Project
                        href='https://jozefkravec-4b52e.web.app/'
                        img={projects_5}
                        title='Jozef Kravec'
                        description='Presentational website built for a company focusing on plumbing, heating, and gas services.'
                        techStack='ReactJs | TypeScript | Material UI'
                        cardStyle={cardStyle}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Project
                        href='https://mafex.sk/'
                        img={projects_1}
                        title='Mafex'
                        description='Presentational website built for a construction company focusing on multiple services.'
                        techStack='JavaScript | Bootstrap'
                        cardStyle={cardStyle}
                    />
                </Col>
                <div className='w-100 d-block d-md-none'></div>
                <Col>
                    <Project
                        href='https://crypto-dashboard-react.web.app/'
                        img={projects_2}
                        title='Crypto Dashboard'
                        description='My diploma project which used machine learning for cryptocurrency pattern analysis.'
                        techStack='ReactJs | TypeScript | Bootstrap'
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
                        description='Twitter Insights Dashboard is a web application that collects data from public Twitter posts, analyzes them, and visualizes the results on custom widgets.'
                        techStack='JavaScript | Bootstrap'
                        cardStyle={cardStyle}
                    />
                </Col>
                <div className='w-100 d-block d-md-none'></div>
                <Col>
                    <Project
                        href='https://stock-predict-b6b9d.web.app/'
                        img={projects_4}
                        title='Stock Predict'
                        description='My bachelor’s thesis application focused on monitoring financial markets in the cloud using predictive algorithms'
                        techStack='JavaScript | Bootstrap'
                        cardStyle={cardStyle}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Projects;
