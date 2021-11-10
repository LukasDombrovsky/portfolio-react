import Container from "react-bootstrap/Container";

const Section = (props) => {
  return (
    <div id={props.id} className="d-flex align-items-center">
      <Container className="section-container">{props.children}</Container>
    </div>
  );
};

export default Section;
