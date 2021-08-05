import React from "react";
import styled from "styled-components";
import { Container, Title, Description, SubTitle } from "../Custom_Component";
import profile from "../assetes/me.jpg";

const About = () => {
  const desp = `A software developer currently working on 
  FrontEnd Development using ReactJS, NextJS. 
  Aim to become FullStack Developerment after learning BackEnd Development.`;
  return (
    <Container>
      <Img src={profile} alt="Photo" />
      <Title>Nesh Amlani</Title>
      <SubTitle>ReactJS Developer at CipherNutz IT Services</SubTitle>
      <Description>{desp}</Description>
    </Container>
  );
};

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export default About;
