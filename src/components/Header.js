import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import {Parallax} from "react-parallax";

import "../static/styles/styles.css";
import backgroundImage from "../static/images/background.svg";

export default function Header() {
  return (
    <div style={{paddingTop: '4em'}}>
      <Parallax
        bgImage={backgroundImage}
        strength={100}
      >
        <div className="header-div">
          <Container maxWidth="sm" color="default" component="main" className="header-container">
            <Typography style={{color: "#FFF", fontSize: '3em'}} variant="p" component="p" align="left" gutterBottom>
              Your virtual health relationship manager is here
            </Typography>
            <Typography style={{color: "#FFF", fontSize: '1.5em'}} variant="p" align="left" component="p">
              Our reliable Health Relationship Managers (HRMs) help providers document comprehensive notes in real-time
              and
              coordinate patient activities between clinicians, departments and healthcare organizations. All in one.
            </Typography>
          </Container>
        </div>
      </Parallax>

    </div>
  );
}
