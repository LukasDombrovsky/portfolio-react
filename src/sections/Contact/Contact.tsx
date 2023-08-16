import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Button/Button';
import ContactModal from '../../components/ContactModal/ContactModal';

import classes from './Contact.module.scss';

import email from '../../img/icons/email.svg';
import linkedIn from '../../img/icons/linkedIn.svg';
import github from '../../img/icons/gitHub.svg';

const Contact = () => {
  const [contactFormOpened, setContactFormOpened] = useState(false);

  const openContactFormHandler = () => {
    setContactFormOpened(true);
  };

  const closeContactFormHandler = () => {
    setContactFormOpened(false);
  };

  return (
    <>
      {contactFormOpened && (
        <ContactModal title='Contact form' onClose={closeContactFormHandler} />
      )}
      <Row style={{ marginBottom: '32px' }}>
        <Col>
          <h1 className='display-5 section-headline'>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Get In Touch</h2>
          <p className={classes.socialIcons}>
            <a href='mailto:lukas.dombrovsky@gmail.com'>
              <img src={email} alt='email' className={classes.socialIcon} />
            </a>
            <a
              href='https://linkedin.com/in/lukasdombrovsky'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={linkedIn}
                alt='linkedIn'
                className={classes.socialIcon}
              />
            </a>
            <a
              href='https://github.com/LukasDombrovsky'
              target='_blank'
              rel='noreferrer'
            >
              <img src={github} alt='github' className={classes.socialIcon} />
            </a>
          </p>
        </Col>
        <Col>
          <h2>Contact form</h2>
          <p>You can also contact me directly through this form.</p>
          <Button type='button' onClick={openContactFormHandler}>
            Send me message
          </Button>
        </Col>
      </Row>
      <Row>
        <div
          className={`col d-flex justify-content-center ${classes.copyright}`}
        >
          Copyright ©2023 All rights reserved | Ing. Lukas Dombrovsky
        </div>
      </Row>
    </>
  );
};

export default Contact;
