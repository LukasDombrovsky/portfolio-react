import classes from './ImageCard.module.scss';

interface ImageCardProps {
  img: string;
  additionalStyle?: { [key: string]: string };
  scaleOnHover?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img, additionalStyle, scaleOnHover } = props;

  const style: { [key: string]: string } = {
    background: `url(${img}) no-repeat center`,
    backgroundSize: 'cover',
  };

  if (additionalStyle) {
    Object.keys(additionalStyle).forEach((k) => {
      style[k] = additionalStyle[k];
    });
  }

  return (
    <div
      style={style}
      className={scaleOnHover ? classes.scaleOnHover : ''}
    ></div>
  );
};

export default ImageCard;
