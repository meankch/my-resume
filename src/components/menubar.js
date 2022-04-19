import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {} from "../styles/sidebar.css";
import profilePicture from "../assets/profile-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ListItemButton, Link } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="text-center profile-section">
        <img src={profilePicture} alt="profile-pic" />
        <h2>
          <a href="index.html">Mean Kaenchan</a>
        </h2>
        <div className="column-content">
          <span className="email social-links">
            <a id="mail-var" href="mailto:napasorn.kch@gmail.com">
              <FontAwesomeIcon icon={solid("envelope")} color="dark" />{" "}
              napasorn.kch@gmail.com
            </a>
          </span>
          <span className="linkedin-link social-links">
            <a
              href="https://www.linkedin.com/in/nkaenchan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands("linkedin")} /> nkaenchan
            </a>
          </span>
          <span className="github-link social-links">
            <a
              href="https://github.com/meankch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands("github")} /> meankch
            </a>
          </span>
        </div>
      </div>
      <Divider />
      <List>
        <ListItemButton key="About" component={Link} href="#about">
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton key="Experiences" component={Link} href="#experiences">
          <ListItemText primary="Experiences" />
        </ListItemButton>
        <ListItemButton key="Skills" component={Link} href="#skills">
          <ListItemText primary="Skills" />
        </ListItemButton>
      </List>
      <Divider />
      <div className="sidebar-footer">
        <p>
          <small>
            Made with
            <FontAwesomeIcon icon={solid("heart")} color="red" beat />
          </small>
        </p>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" open={false} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
