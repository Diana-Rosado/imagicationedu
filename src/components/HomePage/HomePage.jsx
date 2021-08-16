import React, { useState } from "react";
import Home from "./home/home.jsx";
import HowItWorks from "./howitworks/howitworks.jsx";
import Contact from "./contact/contact.jsx";
import { makeStyles, Button } from "@material-ui/core";
import HomePageStyles from './HomePageStyles.js';
import Header from './header.js';
import Footer from './footer.js';
import heroImg from '../Icons/hero-img.png'
import laptop from '../Icons/laptop.PNG'
import planet from '../Icons/svg/planet.svg'
import cloud from '../Icons/svg/cloud.svg'
import asteroid from '../Icons/svg/asteroid.svg'
import Diana from '../Icons/team/1.jpg'
import Bryan from '../Icons/team/2.PNG'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from '../firestore.js'

const useStyles = makeStyles(HomePageStyles);

function HomePage() {

  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const contactInfo = () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    // const userRef = db.collection("users").add({
    db.collection("newsletter").add({
      name: name,
      email: email,
      comment: comment,
    });
  };


  return (
    <div>
      <Header style={{ zIndex: '1' }} />
      {/*  Hero*/}
      <section id="hero" >
        <div id="home" class="hero-container" data-aos="fade-in" >
          <h1 style={{ color: '#8B66B7' }}>Securing your Future</h1>
          <h2>Bringing the guidance counselor that you deserve</h2>
          <img src={heroImg} alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100" style={{ width: '39%' }} />
          {/* <Button class="btn-get-started scrollto" component={Link} to="/home"><a href="#contact">Get started</a></Button> */}
          <a href="#newsletter"> <Button class="btn-get-started scrollto" >Contact us</Button></a>
        </div>
      </section>
      {/* Hero */}
      <section id="get-started" class="padd-section text-center">
        <div class="container" data-aos="fade-up">
          <div class="section-title text-center">
            <h2 >Perfecting your College Plan</h2>
            <p class="separator">One platform with all the student features you need to secure your future</p>
          </div>
        </div>

        <div class="container">
          <div class="row">

            <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div class="feature-block">

                <img src={cloud} alt="img" class="img-fluid" />
                <h4>Personalized Road Maps</h4>
                <p>Through a series of questions and interactions, Imagication will curate a road map specially made for you!</p>

              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="feature-block">

                <img src={planet} alt="img" class="img-fluid" />
                <h4>Interactive Modules</h4>
                <p>We break down your college planning journey into manageable chunks.</p>

              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="feature-block">

                <img src={asteroid} alt="img" class="img-fluid" />
                <h4>Free & Accessible</h4>
                <p>Getting a private counselor is too much money which is why it's free for you to use!</p>

              </div>
            </div>

          </div>
        </div>

      </section>



      {/* About Us */}
      <section id="about-us" class="about-us padd-section">
        <div class="container" data-aos="fade-up">
          <div class="row justify-content-center">

            <div class="col-lg-7 col-lg-6">
              <img src={laptop} alt="About" data-aos="zoom-in" data-aos-delay="100" />
            </div>

            <div class="col-md-7 col-lg-5">
              <div class="about-content" data-aos="fade-left" data-aos-delay="100">

                <h2><span>Imagication</span>Design </h2>
                <p>Imagication focuses on creating a smooth user experience while also emphasizing on important tasks.
                </p>

                <ul class="list-unstyled">
                  <li><i class="fa fa-angle-right"></i>Creative Design</li>
                  <li><i class="fa fa-angle-right"></i>Free for you</li>
                  <li><i class="fa fa-angle-right"></i>Easy to Use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" class="padd-section text-center">

        <div class="container" data-aos="fade-up">
          <div class="section-title text-center">

            <h2 >Meet the Team</h2>
            <p class="separator">Two college students who want nothing more than
              to help high school students with their future </p>
          </div>

          <div class="row" style={{ display: 'flex', justifyContent: 'center' }}>

            <div class="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
              <div class="team-block bottom">
                <img src={Diana} class="img-responsive" alt="img" />
                <div class="team-content">
                  <ul class="list-unstyled">
                    <li><a href="https://www.instagram.com/dianairosado/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/diana-rosado" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                  <span>CEO & President</span>
                  <h4>Diana Rosado</h4>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
              <div class="team-block bottom">
                <img src={Bryan} class="img-responsive" alt="img" />
                <div class="team-content">
                  <ul class="list-unstyled">
                    <li><a href="https://www.linkedin.com/in/bryanpinos/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                  <span>Treasurer & Secretary</span>
                  <h4>Bryan Pinos</h4>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      {/* contact */}
      <section id="contact" class="padd-section">

        <div class="container" data-aos="fade-up">
          <div class="section-title text-center">
            <h2>Interested in Imagication?</h2>
            <p class="separator">Feel free to contact us through our social platforms</p>
          </div>

          <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          </div>
        </div>
      </section>

      <section id="newsletter" class="newsletter text-center">
        <div class="overlay padd-section" >
          <div class="container" data-aos="zoom-in">

            <ul class="list-unstyled">
              <li><a href="https://www.linkedin.com/company/imagication/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/imagication.co/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
              <li><a href="https://twitter.com/Imagication_" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>
              <li><a href="mailto:info@imagication.co" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i></a></li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
