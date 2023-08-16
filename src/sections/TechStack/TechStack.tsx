import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../../components/ImageCard/ImageCard';
import classes from './TechStack.module.scss';

import tech_1 from '../../img/techStack-1.png';
import tech_2 from '../../img/techStack-2.png';
import tech_3 from '../../img/techStack-3.png';
import tech_4 from '../../img/techStack-4.png';
import tech_5 from '../../img/techStack-5.png';
import tech_6 from '../../img/techStack-6.png';
import tech_7 from '../../img/techStack-7.png';
import tech_8 from '../../img/techStack-8.png';
import tech_9 from '../../img/techStack-9.png';

const technologies = {
  firstRow: [
    {
      name: 'ReactJs',
      link: 'https://reactjs.org/',
      image: tech_1,
    },
    {
      name: 'TypeScript',
      link: 'https://www.npmjs.com/package/typescript',
      image: tech_2,
    },
    {
      name: 'JavaScript',
      link: 'https://www.javascript.com/',
      image: tech_3,
    },
  ],
  secondRow: [
    {
      name: 'Next.js',
      link: 'https://nextjs.org/',
      image: tech_4,
    },
    {
      name: 'Redux',
      link: 'https://reactjs.org/',
      image: tech_5,
    },
    {
      name: 'Tailwind CSS',
      link: 'https://tailwindcss.com/',
      image: tech_6,
    },
  ],
  thirdRow: [
    {
      name: 'Material UI',
      link: 'https://material-ui.com/',
      image: tech_7,
    },
    {
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/',
      image: tech_8,
    },
    {
      name: 'Ant Design',
      link: 'https://ant.design/',
      image: tech_9,
    },
  ],
};

const cardStyle = {
  minHeight: '9rem',
  margin: '1rem 0',
  backgroundSize: 'contain',
};

export interface TechStackProps {
  id: string;
}

const TechStack: React.FC<TechStackProps> = (props) => {
  const { id } = props;

  return (
    <div id={id} className={classes.techStack}>
      <Container className='section-container'>
        <Row>
          <Col>
            <h1 className='display-5 section-headline'>My tech stack</h1>
            <p>I actively use following technologies and libraries:</p>
          </Col>
        </Row>
        <Row>
          {technologies.firstRow.map((technology) => (
            <Col key={technology.name}>
              <a
                href={technology.link}
                rel='noreferrer'
                target='_blank'
                title={technology.name}
              >
                <ImageCard
                  img={technology.image}
                  scaleOnHover
                  additionalStyle={cardStyle}
                />
              </a>
            </Col>
          ))}
        </Row>
        <Row>
          {technologies.secondRow.map((technology) => (
            <Col key={technology.name}>
              <a
                href={technology.link}
                rel='noreferrer'
                target='_blank'
                title={technology.name}
              >
                <ImageCard
                  img={technology.image}
                  scaleOnHover
                  additionalStyle={cardStyle}
                />
              </a>
            </Col>
          ))}
        </Row>
        <Row>
          {technologies.thirdRow.map((technology) => (
            <Col key={technology.name}>
              <a
                href={technology.link}
                rel='noreferrer'
                target='_blank'
                title={technology.name}
              >
                <ImageCard
                  img={technology.image}
                  scaleOnHover
                  additionalStyle={cardStyle}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TechStack;
