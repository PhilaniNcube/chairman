import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.footer`
  width: 100%;
  min-height: 20vh;
  background-color: var(--black);
  color: var(--white);
  padding: 3rem 0;

  .container {
    min-height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="container">
        <div className="contact">
          <article>
            Email: <span>edwardmokoena@yahoo.com</span>
          </article>
          <article>
            Tel: <span>+27 73 979 7118</span>
          </article>
        </div>
        <div className="info">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <p>
            Website by{' '}
            <Link href="https://www.athenamedia.co.za">Athena Media</Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
