import classes from './Card.module.scss';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { children, className } = props;

  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
