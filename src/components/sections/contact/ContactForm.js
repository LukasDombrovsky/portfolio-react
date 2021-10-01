import { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../UI/Button";
import emailjs from "emailjs-com";

import classes from "./ContactForm.module.scss";

import check from "../../../img/check.png";
import error from "../../../img/error.png";

const ContactForm = (props) => {
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("First name field cannot be empty"),
    lastName: yup.string().required("Last name field cannot be empty"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email field cannot be empty"),
    subject: yup.string().required("Subject field cannot be empty"),
    message: yup.string().required("Message field cannot be empty"),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  const sendEmail = (object) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        object,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setThankYouMessage(true);
        },
        (error) => {
          setErrorMessage(true);
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <>
      {errorMessage && (
        <div className={classes.message}>
          <img src={error} alt="error icon" />
          <h3 className={classes.errorHeading}>
            An error occurred, Please try again.
          </h3>
        </div>
      )}
      {thankYouMessage && (
        <div className={classes.message}>
          <img src={check} alt="check icon" />
          <h3>Message Sent, We will get back to you shortly.</h3>
        </div>
      )}
      {!thankYouMessage && !errorMessage && (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            terms: false,
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              sendEmail(values);
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className={classes.form}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={errors.firstName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="w-100 d-block d-sm-none"></div>
                <Form.Group as={Col} controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={touched.lastName && errors.lastName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="validationFormik03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="9" controlId="validationFormik04">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    isValid={touched.subject && !errors.subject}
                    isInvalid={touched.subject && errors.subject}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationFormik05">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    as="textarea"
                    rows={7}
                    isValid={touched.message && !errors.message}
                    isInvalid={touched.message && errors.message}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  type="checkbox"
                  name="terms"
                  label="I agree to the processing of submitted personal data. My data will not be made available or provided to third parties or published without my consent."
                  onChange={handleChange}
                  isInvalid={touched.terms && errors.terms}
                  feedback={errors.terms}
                  id="validationFormik0"
                />
              </Form.Group>
              <Button type="submit" variant="primary" size="lg">
                Send me message
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default ContactForm;
