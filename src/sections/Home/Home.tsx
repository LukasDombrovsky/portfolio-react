import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';

import classes from './Home.module.scss';

import logo from '../../img/coding.png';

export interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = (props) => {
  const { id } = props;

  return (
    <Section
      id={id}
      className={classes.home}
      background='linear-gradient(135deg, #2a0634, #462bc9)'
    >
      <Row>
        <Col className={classes.container}>
          <h1 className={`display-3 ${classes.headline}`}>
            Welcome to my
            <div className='w-100'></div>
            portfolio site!
          </h1>
          <Button type='button' href='#projects'>
            See my past projects
          </Button>
        </Col>
        {/* Force next columns to break to new line at sm breakpoint and down */}
        <div className='w-100 d-block d-sm-none'></div>
        <Col className='d-flex justify-content-center align-items-center'>
          <img src={logo} alt='coding logo' />
        </Col>
      </Row>
    </Section>
  );
};

export default Home;
