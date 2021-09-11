import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 70vh;
  background-color: var(--blue);
  color: var(--white);

  .container {
    padding: 2rem 0;

    small {
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h2 {
      margin-bottom: 2rem;
    }

    article {
      margin: 1rem 0;
    }
  }
`;

const Profile = () => {
  return (
    <Wrapper id="profile">
      <div className="container">
        <small>Founder</small>
        <h2 className="sub-heading">Eddie Mokoena</h2>
        <article>
          Eddie spent more than 17 years in the legal services division of the
          Department of Defence. He dealt with legal issues in various
          capacities as a prosecutor, a defence counsel, and an operational
          legal advisor. He also interacted, on behalf of the DoD, with the
          Office of the State Attorney and briefed counsel at the Advocates’
          Club / Chambers. Eddie holds two legal qualifications (B. Juris &
          LL.B).
        </article>
        <article>
          From 2011 until 2018, Eddie was assigned as a Regional Law office
          manager in the DoD. He was in charge of two law offices (Port
          Elizabeth & Grahamastown). It was through this appointment that Eddie
          decided to equip himself with the second highest management /
          administration degree. He successfully completed an MBA degree and
          this consolidated his management experience with the requisite
          administration qualification.
        </article>
        <article>
          Eddie’s military experience made him to appreciate that discipline and
          humanity must be balanced especially where employers and employees are
          human and therefore, fallible. Hence the need for an “outsider” who
          will provide a fair and balanced service to both the employer and
          employee.
        </article>
      </div>
    </Wrapper>
  );
};

export default Profile;
