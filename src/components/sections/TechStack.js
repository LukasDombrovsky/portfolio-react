import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DivWithBgImage from "../UI/DivWithBgImage";

import tech_1 from "../../img/techStack-1.png";
import tech_2 from "../../img/techStack-2.png";
import tech_3 from "../../img/techStack-3.png";
import tech_4 from "../../img/techStack-4.png";
import tech_5 from "../../img/techStack-5.png";
import tech_6 from "../../img/techStack-6.png";
import tech_7 from "../../img/techStack-7.png";
import tech_8 from "../../img/techStack-8.png";

const technologies = {
  firstRow: [
    {
      name: "ReactJs",
      link: "https://reactjs.org/",
      image: tech_1,
    },
    {
      name: "JavaScript",
      link: "https://www.javascript.com/",
      image: tech_2,
    },
    {
      name: "CSS",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
      image: tech_3,
    },
    {
      name: "Redux",
      link: "https://reactjs.org/",
      image: tech_4,
    },
  ],
  secondRow: [
    {
      name: "TypeScript",
      link: "https://www.npmjs.com/package/typescript",
      image: tech_5,
    },
    {
      name: "Next.js",
      link: "https://nextjs.org/",
      image: tech_6,
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      image: tech_7,
    },
    {
      name: "SASS",
      link: "https://sass-lang.com/",
      image: tech_8,
    },
  ],
};

const additionalStyle = {
  minHeight: "9rem",
  margin: "1rem 0",
  transition: "transform 400ms ease-out",
  backgroundSize: "contain",
};

const TechStack = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className="display-5">My tech stack</h1>
          <p>I actively use following technologies and libraries:</p>
        </Col>
      </Row>
      <Row>
        {technologies.firstRow.map((technology) => (
          <Col key={technology.name}>
            <a
              href={technology.link}
              rel="noreferrer"
              target="_blank"
              title={technology.name}
            >
              <DivWithBgImage
                img={technology.image}
                addionalStyle={additionalStyle}
                scaleOnHover={true}
              ></DivWithBgImage>
            </a>
          </Col>
        ))}
      </Row>
      <Row>
        {technologies.secondRow.map((technology) => (
          <Col key={technology.name}>
            <a
              href={technology.link}
              rel="noreferrer"
              target="_blank"
              title={technology.name}
            >
              <DivWithBgImage
                img={technology.image}
                addionalStyle={additionalStyle}
                scaleOnHover={true}
              ></DivWithBgImage>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TechStack;
