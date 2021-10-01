import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ContactModal from "./ContactModal";

import classes from "./Contact.module.scss";

const Contact = () => {
  const [contactFormOpened, setContactFormOpened] = useState(false);

  const openContactFormHandler = () => {
    setContactFormOpened(true);
  };

  const closeContactFormHandler = () => {
    setContactFormOpened(false);
  };

  // const submitContactFormHandler = (values) => {
  //   // sent data to my email
  //   setContactFormOpened(false);
  //   console.log(values);
  // }

  return (
    <>
      {contactFormOpened && (
        <ContactModal title="Contact form" onClose={closeContactFormHandler} />
      )}
      <Row>
        <Col>
          <h1 className="display-5">Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Ing. Lukas Dombrovsky</p>
          <p className={classes["contact-row"]}>lukas.dombrovsky@gmail.com</p>
          <p className={classes["contact-row"]}>+421 940 063 988</p>
          <p className={classes["contact-row"]}>
            <a href="linkedin.com/in/lukasdombrovsky" target="_blank">
              linkedin.com/in/lukasdombrovsky
            </a>
          </p>
        </Col>
        <Col>
          <h1 className={classes["display-6"]}>Contact form</h1>
          <p>You can also contact me directly through this form.</p>
          <Button
            variant="primary"
            href=""
            type="button"
            size="lg"
            onClick={openContactFormHandler}
          >
            Send me message
          </Button>
        </Col>
      </Row>
      <Row>
        <div
          className={`col d-flex justify-content-center ${classes.copyright}`}
        >
          Copyright ©2021 All rights reserved | Ing. Lukas Dombrovsky
        </div>
      </Row>
    </>
  );
};

export default Contact;
