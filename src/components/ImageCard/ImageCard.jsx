import classes from './ImageCard.module.scss';

const ImageCard = (props) => {
  const style = {
    background: `url(${props.img}) no-repeat center`,
    backgroundSize: 'cover',
  };

  if (props.addionalStyle) {
    Object.keys(props.addionalStyle).map((k) => {
      return (style[k] = props.addionalStyle[k]);
    });
  }

  return (
    <div
      style={style}
      className={props.scaleOnHover ? classes.scaleOnHover : null}
    >
      {props.children}
    </div>
  );
};

export default ImageCard;
