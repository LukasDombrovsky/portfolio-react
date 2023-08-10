export interface ImageSectionProps {
  id: string;
  className?: string;
  bgImage: string;
  height?: string;
  children?: React.ReactNode;
}

const ImageSection: React.FC<ImageSectionProps> = (props) => {
  const { id, className, bgImage, height, children } = props;

  const style: { [key: string]: string } = {
    background: `url(${bgImage}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  if (height) {
    style['height'] = height;
  }

  return (
    <div
      id={id}
      className={`${className} d-flex align-items-center`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ImageSection;
