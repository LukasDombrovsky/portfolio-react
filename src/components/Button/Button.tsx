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
  const { children, type, href, target, onClick } = props;

  return (
    <Btn
      className={classes.button}
      type={type}
      href={href}
      target={target}
      onClick={onClick}
    >
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
