import { Fragment } from 'react-is';
import styled from 'styled-components';
import About from '../components/Homepage/About';
import Contact from '../components/Homepage/Contact';
import Hero from '../components/Homepage/Hero';
import Profile from '../components/Homepage/Profile';
import Services from '../components/Homepage/Services';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <Profile />
      <Contact />
    </Fragment>
  );
}
