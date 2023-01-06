import { Button, makeStyles, TextField } from "@material-ui/core";
import { useRef } from "react";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  add: {
    marginTop: "65px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2c77ad",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  block: {
    height: "100vh",
    width: "70%",
    marginTop: "40px",
    marginBottom: "50px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "10px",
    backgroundColor: "white",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  head: {
    fontSize: "40px",
    fontFamily: "Lato,sans-serif",
    color: "#3659b5",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  info: {
    fontFamily: "Josefin Sans, sans-serif",
    marginTop: "5px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
  },
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  inputField: {
    width: "90%",
    marginTop: "10px",
    marginLeft: "0px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginLeft: "0px",
      width: "100%",
    },
  },
  firstInput: {
    width: "550px",
    marginBottom: "0px",
    [theme.breakpoints.down("xs")]: {
      width: "320px",
    },
  },
  button: {
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
        marginTop:"20px"
      },
  },
}));

export default function Add() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j27hfbf",
        "template_puzx58l",
        form.current,
        "user_c1F1DlVkf87LtWz4PbCqY"
      )
      .then(
        (result) => {
          alert(
            "You have successfuly submitted the form. We will send you a confirmation message if your application is selected."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={classes.add}>
      <div className={classes.block}>
        <div className={classes.head}>School Admission Form</div>
        <div className={classes.info}>
          School Admission Forms are processed within 48 hours. You will receive
          a message on your phone if your application is selected.
        </div>
        <div className={classes.form}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                required
                label="Student's Name"
                variant="outlined"
                className={classes.inputField}
                name="stu_name"
              ></TextField>
            </div>
            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                required
                label="Student's Birth Date"
                variant="outlined"
                defaultValue="DD/MM/YYYY"
                className={classes.inputField}
                name="dob"
              ></TextField>
            </div>
            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                required
                label="Father's Name"
                variant="outlined"
                className={classes.inputField}
                name="from_name"
              ></TextField>
            </div>

            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                required
                label="Mother's Name"
                variant="outlined"
                className={classes.inputField}
                name="mother_name"
              ></TextField>
            </div>
            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                required
                label="Phone Number"
                variant="outlined"
                className={classes.inputField}
                name="phone_number"
              ></TextField>
            </div>
            <div className={classes.firstInput}>
              <TextField
                id="outlined-basic"
                label="Please leave your Address"
                variant="outlined"
                required
                multiline
                rows={5}
                className={classes.inputField}
                name="address"
              />
            </div>
            <div className={classes.button}>
              <Button
                variant="contained"
                value="Send"
                type="submit"
                color="primary"
              >
                Submit Form
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
