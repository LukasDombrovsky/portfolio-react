import Btn from 'react-bootstrap/Button';

import classes from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Btn className={classes.button} {...props}>
      {props.children}
    </Btn>
  );
};

export default Button;
