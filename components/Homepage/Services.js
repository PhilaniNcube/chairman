import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  .container {
    min-height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .sub-heading {
      color: var(--blue);
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding: 2rem 0;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .service {
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        border-radius: 5px;
        background-color: var(--white);

        .service-heading {
          font-size: 1.4rem;
          font-weight: 300;
          color: var(--blue);
          padding-bottom: 10px;
        }
      }
    }
  }
`;

const Services = () => {
  return (
    <Wrapper id="services">
      <div className="container">
        <h2 className="sub-heading">Our Services</h2>
        <div className="cards">
          <div className="service">
            <h3 className="service-heading">Disciplinary Hearings</h3>
            <article>
              We offer an independent and fair procedure when it comes to
              chairing a disciplinary hearing. Our services are provided by
              impartial, objective and non-biased individuals who are not
              partisan to neither the employer nor employee. Matters are decided
              on applicable policies/laws and facts.
            </article>
          </div>
          <div className="service">
            <h3 className="service-heading">Mediation</h3>
            <article>
              Litigation is expensive! It is for this reason, amongst others,
              that South African courts of law consider mediation as an
              alternative form of dispute resolution. It is for this reason that
              we offer mediation services in an independent, rapid, and
              cost-effective manner.
            </article>
          </div>
          <div className="service">
            <h3 className="service-heading">General legal advice </h3>
            <article>
              Not every problem requires consultation with an attorney/advocate.
              Some problems do not even require extensive legal intervention. We
              offer general legal advice services to ensure that you resolve
              matters internally. Where necessary, you will be referred to a
              legal practitioner at preferential rates.
            </article>
          </div>
          <div className="service">
            <h3 className="service-heading">Compliance management</h3>
            <article>
              Most corporates face penalties for due to non-compliance with
              regulations/law. In modern day business, customers, employees, and
              stakeholders/shareholders expect companies to be legally compliant
              in their specific industries. It is important to have someone in
              your corner whom you can turn to for advice on compliance issues.
              We offer this service to save you escalating compliance costs.
            </article>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
