import classes from './ImageCard.module.scss';

interface ImageCardProps {
  img: string;
  additionalStyle?: { [key: string]: string };
  scaleOnHover?: boolean;
  children?: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img, additionalStyle, scaleOnHover, children } = props;

  const style: { [key: string]: string } = {
    background: `url(${img}) no-repeat center`,
    backgroundSize: 'cover',
  };

  if (additionalStyle) {
    Object.keys(additionalStyle).map((k) => {
      return (style[k] = additionalStyle[k]);
    });
  }

  return (
    <div style={style} className={scaleOnHover ? classes.scaleOnHover : ''}>
      {children}
    </div>
  );
};

export default ImageCard;
