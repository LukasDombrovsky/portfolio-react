import Button from '../Button/Button';
import ImageCard from '../ImageCard/ImageCard';

export interface ProjectProps {
  href?: string;
  img: string;
  title: string;
  description: string;
  cardStyle?: { [key: string]: string };
}

const Project: React.FC<ProjectProps> = (props) => {
  const { href, img, title, description, cardStyle } = props;

  return (
    <>
      <a href={href ? href : ''} rel='noreferrer' target='_blank'>
        <ImageCard img={img} scaleOnHover additionalStyle={cardStyle} />
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button type='button' href={href ? href : ''} target='_blank'>
        Open app
      </Button>
    </>
  );
};

export default Project;
