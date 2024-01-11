import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
/* Project Image Path */
import currenyfx from "../../Assets/Projects/CurrencyFX.png";
import movierecom from "../../Assets/Projects/MovieRecommender.png";
import kodekraken from "../../Assets/Projects/Kodekraken.png";
import moviebook from "../../Assets/Projects/Moviebook.png"
import ecomm from "../../Assets/Projects/E-Commerce.jpg";
import sociopedia from "../../Assets/Projects/Sociopedia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kodekraken}
              isBlog={false}
              title="KodeKraken"
              description="Second year PBL project built in flutter and used firebase as backend. Implemented uploading of assignments, version control, inbuilt code editor, student and teacher login functionality."
              ghLink="https://github.com/ninad-moree/KodeKraken"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviebook}
              isBlog={false}
              title="Moviebook"
              description="Explore an immersive cinematic journey through a user-friendly Flutter app. Discover enticing plot summaries, renowned cast details, and popular, trending, and upcoming films effortlessly. Enjoy personalized experiences, seamless feedback, and flexible login options via TMDB credentials or guest access."
              ghLink="https://github.com/ninad-moree/MovieBook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sociopedia}
              isBlog={false}
              title="Sociopedia"
              description="A full stack MERN responsive website. Website has user login options and each user can post images on the website and like each others post, comment on post and add or remove a user as friend. Light and dark mode is also implemented in the website."
              ghLink="https://github.com/ninad-moree/Sociopedia"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movierecom}
              isBlog={false}
              title="Movie Recommender"
              description="Create a user-friendly Streamlit website powered by Python's data science libraries to offer personalized movie recommendations based on a content-based machine learning model. Users input a movie name and receive top 10 related movie suggestions, complete with posters, utilizing cosine similarity for accurate results."
              ghLink="https://github.com/ninad-moree/MovieRecommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currenyfx}
              isBlog={false}
              title="CurrencyFX"
              description="We have created a dashboard which allows the users to analyze the exchange rates between two currencies over a period of time. Users have the option of selecting weekly, monthly, quarterly and yearly charts. The app displays the date on which the highest and lowest value of the currency has occured."
              ghLink="https://github.com/ninad-moree/PICT-Team16-CurrencyFX"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="E Commerce App"
              description="This Flutter-based e-commerce app is designed to provide users with a seamless shopping experience. The application integrates Firebase for backend services, leveraging Firestore for managing product data and user information. It incorporates Google Sign-In for user authentication, ensuring a secure login experience."
              ghLink="https://github.com/ninad-moree/E-Commerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;