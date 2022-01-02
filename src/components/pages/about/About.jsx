import { Grid, makeStyles } from "@material-ui/core";
import Appro from "../../images/aboutimg.jpg";
import Princi from "../../images/princi.jpg";
import Kids from "../../images/misson.jpg";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  about: {
    marginTop: "65px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "55px",
    },
  },
  child: {
    height: 600,
    backgroundColor: "#e4f9ff",
    paddingLeft: "40px",
    paddingTop: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  head: {
    fontSize: "120px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "100px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
      lineHeight: "40px",
    },
  },
  spanHead: {
    fontSize: "100px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  info: {
    paddingTop: "20px",
    paddingRight: "100px",
    lineHeight: "22px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "50px",
    },
  },
  chidImg: {
    height: 600,
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  aboutImg: {
    width: "100%",
    height: 600,
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  mobileChild: {
    height: 650,
    backgroundColor: "#e4f9ff",
    paddingLeft: "40px",
    paddingTop: "50px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  blank: {
    width: "100%",
    height: 60,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contain: {
    height: 1150,
    backgroundColor: "#b0cbe1",
    [theme.breakpoints.down("sm")]: {
      height: 800,
    },
  },
  containImg: {
    margin: "100px 40px 50px 40px",
    backgroundColor: "white",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: 250,
    },
  },
  princiImg: {
    height: 400,
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  headImg: {
    marginLeft: "40px",
    fontFamily: "Merriweather, serif",
    color: "#05244f",
    fontSize: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      fontSize: "30px",
    },
  },
  para1: {
    margin: "30px 40px 20px 40px",
    lineHeight: "25px",
  },
  contain2: {
    height: 50,
    backgroundColor: "#8bcbf4",
    [theme.breakpoints.down("sm")]: {
      height: 800,
    },
  },
  value: {
    backgroundColor: "#e4f9ff",
    height: 800,
  },
  valueText: {
    margin: "100px 0px 50px 100px",
    color: "#05244f",
    fontSize: "55px",
    fontFamily: "Merriweather, serif",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 0px 25px 50px",
      fontSize: "25px",
    },
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
  bullet: {
    color: "#d43c2b",
    marginLeft: "100px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
      marginRight: "10px",
    },
  },
  bulletText: {
    fontSize: "75px",
    fontFamily: "Merriweather, serif",
    color: "#05244f",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.child}>
          <div className={classes.head}>
            About <span className={classes.spanHead}>Our School</span>
          </div>
          <div className={classes.info}>
            BROOKFIELD SCHOOL was established in January 1998 with 14 children
            in the Nursery Class. With God’s blessings and the good wishes of
            the people of Lakhimpur, the school added just one class each year
            until our first batch of 17 students appeared for the HSLC exam in
            February 2012 with satisfactory results.
          </div>
          <div className={classes.info}>
            A new building with additional playgrounds was added to accommodate
            the growth. A concrete boundary wall was constructed for the safety
            of the children. A computer room with ten new computers was added.
            The school has plans to add more buildings and add facilities for
            the children and their teachers.
          </div>
          <div className={classes.info}>
            BROOKFIELD is a private, co-educational English medium,
            non-residential school situated in the middle of the town on K. B.
            Road.
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.chidImg}>
          <img className={classes.aboutImg} src={Appro} alt="" />
        </Grid>
        <Grid item sm={6} xs={12} className={classes.mobileChild}>
          <div className={classes.head}>
            About <span className={classes.spanHead}>Our School</span>
          </div>
          <div className={classes.info}>
            BROOKFIELD SCHOOL was established in January 1998 with 14 children
            in the Nursery Class. With God’s blessings and the good wishes of
            the people of Lakhimpur, the school added just one class each year
            until our first batch of 17 students appeared for the HSLC exam in
            February 2012 with satisfactory results.
          </div>
          <div className={classes.info}>
            A new building with additional playgrounds was added to accommodate
            the growth. A concrete boundary wall was constructed for the safety
            of the children. A computer room with ten new computers was added.
            The school has plans to add more buildings and add facilities for
            the children and their teachers.
          </div>
          <div className={classes.info}>
            BROOKFIELD is a private, co-educational English medium,
            non-residential school situated in the middle of the town on K. B.
            Road.
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} className={classes.space}>
          <div className={classes.blank}></div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6} xs={12} className={classes.contain}>
          <div className={classes.containImg}>
            <img className={classes.princiImg} src={Princi} alt="" />
          </div>
          <div className={classes.headImg}>Principal's Welcome</div>
          <div className={classes.para1}>
            Brookfield School started with just a Nursery class in January 1998.
            The first batch of 14 students, however, left us when they got to
            class I. The next batch of students continued till they got to class
            X in 2011 and appeared for the Board Exam in 2012.
          </div>
          <div className={classes.para1}>
            Students are at the heart of Brookfield School and it is their well
            being, their upbringing and their mental, intellectual and physical
            development that we are all concerned with. To nurture and help
            students grow up to be good, decent human beings with upright moral
            values, Brookfield School relies largely on its very capable
            teachers who undergo regular in-house training besides participating
            in other training programmes.
          </div>
          <div className={classes.para1}>
            After thoughtful considerations, we have kept the number of students
            in each class within 28 so that teachers can take good care of the
            small number of students. With a little over 300 students and 24
            teachers, we are a small institution, realizing that quality
            education is most important. It is our continued hope that we will
            be able to provide a secure and stimulating learning environment
            which will enable our children to achieve their full potential and
            encourage them to develop skills for life in the 21st century.
          </div>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.contain2}>
          <div className={classes.containImg}>
            <img className={classes.princiImg} src={Kids} alt="" />
          </div>
          <div className={classes.headImg}>Mission</div>
          <div className={classes.para1}>
            The primary aim of the school is to help the pupils form an
            enlightened conscience and a strong character, enabling them to
            assume their responsibilities in the family and the society and also
            to give them a good academic training from the very beginning with
            the active collaboration of their parents who are the first
            educators.
          </div>
          <div className={classes.para1}>
            Emphasis is given to a strong sense of discipline, polite conduct
            and good behaviour. Habits of cleanliness, orderliness and
            punctuality are insisted upon. The school endeavours to instill a
            sense of morality and to help each student develop his/her
            individual capabilities for a well rounded life.
          </div>
          <div className={classes.para1}>
            Brookfield’s primary purpose is to prepare our students to become
            independent thinkers, responsible citizens and effective leaders. To
            achieve this purpose, the curriculum is challenging and balanced,
            class sizes are small and students are held to high academic and
            behavioral standards. This provides a solid foundation for graduate
            and post graduate studies. The number of students in each classroom
            is kept between 22 and 25 so that proper attention and guidance can
            be given to each child.
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} className={classes.space}>
          <div className={classes.blank}></div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.value}>
          <div className={classes.valueText}>Vision & Values</div>
          <div className={classes.list}>
            <FiberManualRecordIcon className={classes.bullet} />
            <div className={classes.bulletText}>Respect</div>
          </div>
          <div className={classes.list}>
            <FiberManualRecordIcon className={classes.bullet} />
            <div className={classes.bulletText}>Responsibility</div>
          </div>
          <div className={classes.list}>
            <FiberManualRecordIcon className={classes.bullet} />
            <div className={classes.bulletText}>Integrity</div>
          </div>
          <div className={classes.list}>
            <FiberManualRecordIcon className={classes.bullet} />
            <div className={classes.bulletText}>Compassion</div>
          </div>
          <div className={classes.list}>
            <FiberManualRecordIcon className={classes.bullet} />
            <div className={classes.bulletText}>Courage</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
