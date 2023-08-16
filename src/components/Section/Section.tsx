import { Container } from 'react-bootstrap';

export interface SectionProps {
  id: string;
  className?: string;
  background?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { id, className, background, children } = props;

  const style: { [key: string]: string } = {};

  if (background) {
    style['background'] = background;
  }

  return (
    <div
      id={id}
      className={`${className} d-flex align-items-center ${background}`}
      style={style}
    >
      <Container className='section-container'>{children}</Container>
    </div>
  );
};

export default Section;
