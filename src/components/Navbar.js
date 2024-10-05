import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SocialApp
        </Typography>
        <Button color="inherit" component={Link} to="/feed">
          Feed
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          My Profile
        </Button>
        <Button color="inherit" component={Link} to="/news">
          News
        </Button>
        <Button color="inherit" component={Link} to="/friends">
          Friends
        </Button>
        <Button color="inherit" component={Link} to="/messages">
          Messages
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
