import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import {Container} from "@material-ui/core";
import {HashLink as Link} from 'react-router-hash-link';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2, 2.5),
    textDecoration: "none",
    color: "inherit",
    fontWeight: "500"
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar color="default" style={{top: "auto", bottom: 0, position: "relative", textAlign: "center", padding: "1em 0"}}>
      <Container maxWidth="sm">
        <div>Copyright © 24Vita LLC 2020.</div>
        <div>111 Monroe St #2C Brooklyn NY, 11216</div>
        <Link variant="button" to="/term" className={classes.link}>
          Terms & Conditions
        </Link>
      </Container>
    </AppBar>
  );

}
