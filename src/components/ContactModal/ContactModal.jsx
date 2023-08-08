import Card from '../Card/Card';
import ContactForm from '../ContactForm/ContactForm';
import CloseButton from 'react-bootstrap/CloseButton';

import classes from './ContactModal.module.scss';

const ContactModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
          <CloseButton
            className={classes.close}
            variant='white'
            onClick={props.onClose}
          />
        </header>
        <div className={classes.content}>
          <ContactForm />
        </div>
      </Card>
    </div>
  );
};

export default ContactModal;
