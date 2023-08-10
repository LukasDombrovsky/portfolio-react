import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button/Button';
import ImageSection from '../../components/ImageSection/ImageSection';

import classes from './Home.module.scss';

import logo from '../../img/coding.png';
import bgImage from '../../img/cover.png';

export interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = (props) => {
  const { id } = props;

  return (
    <ImageSection id={id} bgImage={bgImage} className={classes.home}>
      <Container>
        <Row>
          <Col className={classes.headline}>
            <h1 className='display-3'>
              Welcome on my
              <div className='w-100'></div>
              portfolio page
            </h1>
            <Button type='button' href='#projects'>
              See my past projects
            </Button>
          </Col>
          {/* Force next columns to break to new line at sm breakpoint and down */}
          <div className='w-100 d-block d-sm-none'></div>
          <Col className='d-flex justify-content-center'>
            <img src={logo} alt='coding logo' />
          </Col>
        </Row>
      </Container>
    </ImageSection>
  );
};

export default Home;
