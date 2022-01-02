import { Grid, makeStyles } from "@material-ui/core";
import "./Hero.css";
import "react-alice-carousel/lib/alice-carousel.css";
import Kid from "../images/kid.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  hero: {},
  heroImg: {
    width: "100%",
    height: 800,
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  left: {
    backgroundColor: "#287498",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 800,
    [theme.breakpoints.down("xs")]: {
      height: 250,
      marginTop: "-10px",
    },
  },
  leftText: {
    color: "white",
    fontFamily: "Merriweather, serif",
    fontSize: "55px",
    padding: "0 40px 0 40px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "60px",
    animationName: "moveinleft",
    animationDuration: "3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      lineHeight: "35px",
    },
  },
  span1: {
    fontFamily: "PT Sans, sans-serif",
    fontSize: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  link: {
    textDecoration: "none",
    color:"inherit"
  },
  span2: {
    color: "white",
    fontSize: "20px",
    animationName: "moveinright",
    animationDuration: "3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      marginTop: "5px",
    },
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Grid container>
        <Grid item xs={12} sm={7} className={classes.right}>
          <img src={Kid} alt="" className={classes.heroImg} />
        </Grid>
        <Grid item xs={12} sm={5} className={classes.left}>
          <div className={classes.leftText}>
            Brookfield School
            <span className={classes.span1}>A Great place to learn</span>
            <div className={classes.span2}>
              <Link className={classes.link} to="/about">
                About our school
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
