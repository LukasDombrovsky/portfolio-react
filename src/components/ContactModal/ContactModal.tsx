import Card from '../Card/Card';
import ContactForm from '../ContactForm/ContactForm';
import CloseButton from 'react-bootstrap/CloseButton';

import classes from './ContactModal.module.scss';

export interface ContactModalProps {
  title: string;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = (props) => {
  const { title, onClose } = props;

  return (
    <div>
      <div className={classes.backdrop} onClick={onClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
          <CloseButton
            className={classes.close}
            variant='white'
            onClick={onClose}
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
