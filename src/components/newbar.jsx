import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';
import About from './about';
import Skills from './skills';
import {} from "../styles/sidebar.css";
import profilePicture from "../assets/profile-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <About></About>
        <Skills></Skills>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
