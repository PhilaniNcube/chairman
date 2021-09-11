import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

const Wrapper = styled.header`
  max-width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: var(--blue);
  color: var(--white);

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;

      h3 {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    .mobile-menu {
      height: 100%;
      align-items: center;
      display: none;
      font-size: 1.8rem;

      &.open {
        color: var(--red);
      }

      @media screen and (max-width: 768px) {
        display: flex;
      }
    }

    .menu {
      height: 100%;
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        position: absolute;
        top: 100%;
        right: 0;
        height: 50vh;
        background-color: var(--blue);
        width: 50vw;
        /* transform: translateX(100%); */
        flex-direction: column;
        justify-content: space-around;

        &.closed {
          transform: translateX(200%);
          opacity: 0;
        }
      }

      li {
        padding-left: 1rem;

        @media screen and (max-width: 768px) {
          padding-left: 0;
          color: var(--white);
        }

        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <h3 className="logo-text">Chairman</h3>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}
        >
          {isOpen ? <HiOutlineX /> : <HiMenu />}
        </div>

        <nav className={`menu ${isOpen ? 'open' : 'closed'}`}>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link href="#services">
              <a className="nav-link">Services</a>
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link href="#about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link href="#profile">
              <a className="nav-link">Profile</a>
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link href="#contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
