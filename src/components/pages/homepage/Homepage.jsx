import {Button, Grid, makeStyles } from "@material-ui/core";
import Hero from "../../hero/Hero";
import Third from "../../images/third.jpg";
import "./homepage.css";
import Safety from "../../images/safety.jpg";
import Program from "../../images/038.jpg";
import Group from "../../images/group.jpg";
import Parent from "../../images/parent.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Award from "../../icons/award.png";
import Academy from "../../icons/academy.png";
import Teacher from "../../icons/teacher.png";
import Footer from "../../Footer/Footer";
import Info from "../../info/Info";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  safety: {
    backgroundColor: "#c9ecf5",
    height: 800,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
      height: 300,
    },
  },
  safetyText: {
    backgroundColor: "#e4f9ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 800,
    marginTop: "-10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
      height: 300,
    },
  },
  safetyImg: {
    width: "90%",
    height: 400,
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
  },
  leftText: {
    color: "#05244f",
    fontFamily: "Merriweather, serif",
    fontSize: "45px",
    padding: "0 40px 0 40px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "40px",
    animationName: "moveinleft",
    animationDuration: "3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      lineHeight: "35px",
    },
  },
  span1: {
    fontSize: "20px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  span2: {
    color: "#05244f",
    fontSize: "16px",
    animationName: "moveinright",
    animationDuration: "3s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  question: {
    height: 200,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
  },
  questionText: {
    color: "#05244f",
    fontSize: "50px",
    marginLeft: "20px",
    fontFamily: "Merriweather, serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      marginLeft: "20px",
    },
  },
  approach: {
    height: 600,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  approImg: {
    width: "100%",
    height: 600,
    objectFit: "cover",
    backdropFilter: "blur(150px)",
  },
  approText: {
    position: "absolute",
    width: "60%",
    top: "8px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontSize: "50px",
    fontFamily: "Merriweather, serif",
    left: "16px",
    backdropFilter:"blur(1.5px)"
  },
  approLink: {
    marginTop: "18px",
    color: "inherit",
    fontSize: "20px",
  },
  admission: {
    height: 600,
    backgroundColor: "#0094a4",
    [theme.breakpoints.down("xs")]: {
      height: 350,
    },
  },
  addText: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "90%",
    marginTop: "10px",
    marginLeft: "20px",
    fontSize: "50px",
    fontFamily: "Merriweather, serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop: "60px",
    },
  },
  addSpan2: {
    marginTop: "20px",
    color: "inherit",
    fontSize: "18px",
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile1: {
    height: 300,
  },
  mobileImg: {
    height: 300,
    width: "100%",
    objectFit: "cover",
  },
  mobile2: {
    height: 350,
    backgroundColor: "#003e53",
  },
  programs: {
    backgroundColor: "#c0cada",
    height: 600,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  programImg: {
    height: 600,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  progamImgText: {
    position: "absolute",
    top: "50px",
    left: "40px",
    width: "80%",
    fontSize: "45px",
    color: "white",
    fontFamily: "Merriweather, serif",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  news: {
    //backgroundColor: "#287498",
    backgroundColor: "#77a2c7",
    height: 600,
    [theme.breakpoints.down("xs")]: {
      height: 300,
      backgroundColor: "#106195",
    },
  },
  newsText: {
    marginTop: "50px",
    marginLeft: "40px",
    width: "80%",
    fontSize: "45px",
    color: "white",
    fontFamily: "Merriweather, serif",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  learnMobile: {
    height: 300,
    backgroundColor: "#287498",
  },
  mobileText: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Merriweather, serif",
    fontSize: "30px",
    marginTop: "50px",
    marginLeft: "40px",
  },
  programsMobile: {
    backgroundColor: "pink",
    height: 600,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  grid: {
    height: 600,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  parent: {
    backgroundColor: "#287498",
    height: 600,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logoImg: {
    height: 600,
    backgroundColor: "#e4f9ff",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  hourIcon: {
    width: "150px",
    height:"150px",
    objectFit:"cover",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height:"100px"
    },
  },
  hourText: {
    fontSize: "100px",
    color: "#05244f",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  hourText2: {
    fontSize: "30px",
    color: "#05244f",
    textAlign: "center",
    fontFamily: "Zen Old Mincho, serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  blank: {
    height: 600,
    backgroundColor: "#0094a4",
    [theme.breakpoints.down("xs")]: {
      height:350
    },
  },
  newsTex: {
    marginTop: "70px",
    marginLeft: "40px",
    width: "80%",
    fontSize: "45px",
    color: "white",
    fontFamily: "Merriweather, serif",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      marginTop:"50px"
    },
  },
  button : {
    color:"black",
    width:"60%",
    marginTop:"20px",
    backgroundColor:"#e4f9ff",
    fontFamily: "Merriweather, serif",
    [theme.breakpoints.down("xs")]: {
      width:"45%"
    },
  },
  link : {
    color:"black",
    textDecoration:"none"
  }
}));

export default function Homepage() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className={classes.homepage}>
      <Hero />
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.safety}>
          <img className={classes.safetyImg} src={Safety} alt="" />
        </Grid>
        <Grid item sm={6} xs={12} className={classes.safetyText}>
          <div data-aos="fade-right" className={classes.leftText}>
            Safety First
            <span className={classes.span1}>
              Full reopening plans for this year, include a physically-distanced
              in-person learning model
            </span>
            <a className={classes.span2} href="www.google.com">
              {/* Learn More */}
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.question}>
          <div data-aos="fade-up" className={classes.questionText}>
            Why Brookfield School?
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={8} xs={12} className={classes.approach}>
          <img className={classes.approImg} src={Third} alt="" />
          <div data-aos="fade-left" className={classes.approText}>
            Our Approach{" "}
            <span className={classes.span1}>
              The primary aim of the school is to help the pupils form an
              enlightened conscience and a strong character, enabling them to
              assume their responsibilities in the family and the society and
            </span>{" "}
            <a className={classes.approLink} href="www.google.com">
              Learn More
            </a>{" "}
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.admission}>
          <div data-aos="fade-right" className={classes.addText}>
            Admission{" "}
            <span className={classes.span1}>
              {" "}
              Admisson for Nursery will start on January 7 2023. Parents are
              requested to fill in the details with caution. It is to be noted
              that admission is given on first come first served basis. Form link
              will open at sharp 10:30 am
            </span>{" "}
             <Link to='/admission'>
            <Button variant="outlined" className={classes.button}>
            <div>
              Enroll Today
            </div>{" "}
            </Button>
            </Link> 
            
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.mobile}>
        <Grid item xs={12} className={classes.mobile1}>
          <img className={classes.mobileImg} src={Third} alt="" />
        </Grid>
        <Grid item xs={12} className={classes.mobile2}>
          <div data-aos="fade-up" className={classes.addText}>
            Our Approach{" "}
            <span className={classes.span1}>
              The primary aim of the school is to help the pupils form an
              enlightened conscience and a strong character, enabling them to
              assume their responsibilities in the family and the society and
            </span>{" "}
            <a className={classes.addSpan2} href="www.google.com">
              Learn More
            </a>{" "}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={4} xs={12} className={classes.programs}>
          <img className={classes.programImg} src={Program} alt="" />
          <div data-aos="fade-left" className={classes.progamImgText}>
            Enhange Learning{" "}
            <span className={classes.span1}>
              Brookfield’s primary purpose is to prepare our students to become
              independent thinkers, responsible citizens and effective leaders.
            </span>
            <a className={classes.addSpan2} href="www.google.com">
              View Programs
            </a>{" "}
          </div>
        </Grid>
        <Grid container className={classes.mobile}>
          <Grid item xs={12} className={classes.learnMobile}>
            <div data-aos="fade-up" className={classes.mobileText}>
              Enhange Learning{" "}
              <span className={classes.span1}>
                Brookfield’s primary purpose is to prepare our students to
                become independent thinkers, responsible citizens and effective
                leaders.
              </span>
              <a className={classes.addSpan2} href="www.google.com">
                View Programs
              </a>{" "}
            </div>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.programsMobile}>
            <img className={classes.programImg} src={Group} alt="" />
          </Grid>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.news}>
          <div data-aos="fade-up" className={classes.newsText}>
            Latest News & Events{" "}
            <span className={classes.span1}>
              Look into our school ongoings and stay up-to-date with the latest
              notifications. In case of any doubts please feel free to contact
              us.
            </span>
            <a className={classes.addSpan2} href="www.google.com">
              View All
            </a>{" "}
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.grid}>
          <img className={classes.programImg} src={Group} alt="" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={4} xs={12} className={classes.parent}>
          <div data-aos="fade-left" className={classes.newsText}>
            For the Parents
            <span className={classes.span1}>
              Please look into the code of conduct of the school that should be
              followed by your ward at all times.
            </span>
            <a className={classes.addSpan2} href="www.google.com">
              Get Informed
            </a>{" "}
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.programs}>
          <img className={classes.programImg} src={Parent} alt="" />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.blank}>
          <div data-aos="fade-right" className={classes.newsTex}>
            Gallery
            <span className={classes.span1}>
              Feel free to peek through our gallery. The photos here belong to
              the Brookfield community and any wrongdoing using these photos is
              a punishable offence.
            </span>
            <Link to="/photos" className={classes.addSpan2} href="www.google.com">
              See Photos
            </Link>{" "}
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.mobile}>
        <Grid item xs={12} className={classes.learnMobile}>
          <div data-aos="fade-up" className={classes.mobileText}>
            For the Parents{" "}
            <span className={classes.span1}>
              Please look into the code of conduct of the school that should be
              followed by your ward at all the times.
            </span>
            <a className={classes.addSpan2} href="www.google.com">
              Get Informed
            </a>{" "}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.question}>
          <div data-aos="fade-up" className={classes.questionText}>
            Brookfield School in Numbers
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={4} xs={12} className={classes.logoImg}>
          <img className={classes.hourIcon} src={Award} alt="" />
          <div data-aos="fade-up" className={classes.hourText}>
            20
          </div>
          <div data-aos="fade-up" className={classes.hourText2}>
            Years of excellence
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.logoImg}>
          <img className={classes.hourIcon} src={Academy} alt="" />
          <div data-aos="fade-up" className={classes.hourText}>
            140
          </div>
          <div data-aos="fade-up" className={classes.hourText2}>
            HSLC pass out with distinction and star marks
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.logoImg}>
          <img className={classes.hourIcon} src={Teacher} alt="" />
          <div data-aos="fade-up" className={classes.hourText}>
            30
          </div>
          <div data-aos="fade-up" className={classes.hourText2}>
            Certified teachers
          </div>
        </Grid>
      </Grid>
      <Info />
      <Footer />
    </div>
  );
}
