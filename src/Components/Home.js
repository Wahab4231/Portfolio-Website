import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Hidden from "@mui/material/Hidden";
import HeroUnit from "./HeroUnit";
import Skills from "./Skills.js";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        variant="outlined"
        position="static"
        sx={{
          backgroundColor: "#6BB77B",
        }}
      >
        <Toolbar>
          <Link to="SignUp">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6BB77B",
                color: "white",
                "&:hover": {
                  backgroundColor: "#172D13",
                },
                marginRight: "1rem",
              }}
            >
              Sign Up
            </Button>
          </Link>

          <Link to="SignIn">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6BB77B",
                color: "white",
                "&:hover": {
                  backgroundColor: "#172D13",
                },
              }}
            >
              Sign In
            </Button>
          </Link>

          <Hidden smDown>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
              AbdulWahab
            </Typography>
          </Hidden>

          <Button
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: "inherit",
              marginLeft: "auto",
            }}
          >
            <MenuIcon />
          </Button>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6BB77B",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#172D13",
                    },
                  }}
                >
                  About Me
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="Skills">
                {" "}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6BB77B",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#172D13",
                    },
                  }}
                >
                  Skills
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="Footer">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6BB77B",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#172D13",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <HeroUnit />
      <Skills />
    </>
  );
};

export default Home;
