import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/hero-bg.jpg');

  .container {
    min-height: 80vh;
    height: 100%;

    .text {
      min-height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem 0;

      h1 {
        color: var(--blue);
        letter-spacing: 1px;
      }

      .sub-heading {
        max-width: 25ch;
        margin-top: 1rem;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text">
          <h1 className="heading">
            Labour Dispute <br />
            Consultancy
          </h1>
          <p className="sub-heading">
            Committment to quality, professionalism and integrity.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
