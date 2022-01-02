import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    width:"94%",
    [theme.breakpoints.down("sm")]: {
      width: "94%",
    },
  },
  input2: {
    width: "94%",
  },
  button: {
      marginTop:"30px"
  }
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <form autoComplete="on">
        <TextField
          className={classes.input}
          id="standard-basic"
          label="First Name"
        />
        <TextField
          className={classes.input}
          id="standard-basic"
          label="Last Name"
        />
        <TextField
          className={classes.input2}
          required
          id="standard-required"
          label="Email"
        />
        <TextField
          className={classes.input2}
          id="standard-basic"
          label="Subject"
        />
        <TextField
          className={classes.input2}
          id="standard-basic"
          label="Leave us a Message..."
        />
      </form>
      <Button className={classes.button} variant="outlined" color="primary">
        Submit
      </Button>
    </div>
  );
}
