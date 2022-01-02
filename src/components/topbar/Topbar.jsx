import {
  AppBar,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  item: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  list: {
    marginRight: "20px",
    cursor: "pointer",
  },
  title: {
    fontFamily: "Pacifico",
    fontSize: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "right",
      marginRight: "10px",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerLogo: {
    marginTop: 40,
    fontFamily: "Open Sans Condensed, sans-serif",
  },
  drawerList: {
    padding: "5px",
    fontFamily: "Zen Maru Gothic, sans-serif",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Brookfield
          </Typography>
          <div className={classes.item}>
            <Typography variant="h6" className={classes.list}>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.list}>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.list}>
              Faculty
            </Typography>
            <Typography variant="h6" className={classes.list}>
              Notifications
            </Typography>
            <Typography variant="h6" className={classes.list}>
              Contact Us
            </Typography>
          </div>
        </Toolbar>
        <SwipeableDrawer
          className={classes.drawer}
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div className={classes.drawerLogo}>
            <Typography variant="h6" className={classes.drawerList}>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.drawerList}>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.drawerList}>
              Faculty
            </Typography>
            <Typography variant="h6" className={classes.drawerList}>
              Notifications
            </Typography>
            <Typography variant="h6" className={classes.drawerList}>
              Contact Us
            </Typography>
          </div>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
}
