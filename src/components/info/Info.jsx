import { Grid, makeStyles } from "@material-ui/core";
import Form from "../form/Form";

const useStyles = makeStyles((theme) => ({
  contact: {
    height: 450,
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  title: {
    padding: "50px 0px",
    marginLeft: "30px",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    fontSize: "20px",
  },
  details2: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    fontSize: "20px",
    cursor: "pointer",
  },
  contactForm: {
    height: 450,
  },
  titleForm: {
    paddingTop: "50px",
    marginLeft: "30px",
    paddingBottom: "20px",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  form: {
    marginLeft: "30px",
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <div className={classes.contact}>
            <div className={classes.title}>Brookfield School</div>
            <div className={classes.details}>
              KB Road <span>Ward No. 11</span> North Lakhimpur, Assam
            </div>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.contact}>
            <div className={classes.title}>Join the Community</div>
            <div className={classes.details2}>
              Facebook <span>Instagram</span> Twitter
            </div>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.contactForm}>
            <div className={classes.titleForm}>Contact</div>
            <div className={classes.form}>
              <Form />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
