import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: var(--blue);

  .container {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--white);

    article {
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      letter-spacing: 2px;
    }
  }
`;

const About = () => {
  return (
    <Wrapper id="about">
      <div className="container">
        <article>About Us</article>
        <p className="sub-heading">
          Our panel consists of experienced attorneys and advocates who are
          committed to quality, professional, and ethical service to all our
          clients. Rest assured that you are in good hands.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
