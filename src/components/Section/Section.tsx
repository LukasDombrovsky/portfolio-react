import Container from 'react-bootstrap/Container';

export interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { id, children } = props;

  return (
    <div id={id} className='d-flex align-items-center'>
      <Container className='section-container'>{children}</Container>
    </div>
  );
};

export default Section;
