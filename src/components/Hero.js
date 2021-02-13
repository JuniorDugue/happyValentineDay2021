import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #fff;
    background: #ff0000;
    background: linear-gradient(-150deg, #d62121, #c72c2c, #3a1111);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background: linear-gradient(-150deg, #3a1111, #c72c2c, #d62121);
  }
`;

const Hero = ({ image, title, description }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Learn more</button>
      </Container>
    </Section>
  );
};

export default Hero;
