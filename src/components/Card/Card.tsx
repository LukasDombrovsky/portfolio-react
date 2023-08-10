import classes from './Card.module.scss';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
