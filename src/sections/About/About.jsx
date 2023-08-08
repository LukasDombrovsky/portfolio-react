import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from '../../components/ImageCard/ImageCard';

import classes from './About.module.scss';

import aboutMe_1 from '../../img/aboutMe_1.png';
import aboutMe_2 from '../../img/aboutMe_2.png';

const About = () => {
  const additionalStyle = {
    minHeight: '25rem',
    margin: '0.5rem 0',
  };

  return (
    <Row>
      <Col>
        <h1 className={classes['display-5']}>About me</h1>
        <p className={classes.maxWidthSet}>
          I have more than three years of experience with building minimal, but
          detail oriented web applications. I code in React and if I am done
          with coding, I go cycling.
        </p>
      </Col>
      {/* Force next columns to break to new line at md breakpoint and down */}
      <div className='w-100 d-block d-md-none'></div>
      <Col>
        <ImageCard img={aboutMe_1} addionalStyle={additionalStyle}></ImageCard>
      </Col>
      <div className='w-100 d-block d-md-none'></div>
      <Col>
        <ImageCard img={aboutMe_2} addionalStyle={additionalStyle}></ImageCard>
      </Col>
    </Row>
  );
};

export default About;
