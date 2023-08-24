import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Container, Grid, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const twitterUrl = "https://twitter.com/wahabrai536";
  const facebookurl = "https://www.facebook.com/rai.wahaab/";
  const instaUrl = "https://www.instagram.com/rai_wahab7/";
  return (
    <Paper
      style={{
        backgroundColor: "#172D13",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <Typography variant="caption" sx={{ color: "#6BB77B" }}>
        Contact Me
      </Typography>
      <Container>
        <Grid>
          <IconButton href={twitterUrl} target="_blank">
            <TwitterIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "#6BB77B",
                },
              }}
            />
          </IconButton>
          <IconButton href={facebookurl} target="_blank">
            <FacebookRoundedIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "#6BB77B",
                },
              }}
            />
          </IconButton>
          <IconButton href={instaUrl} target="_blank">
            <InstagramIcon
              sx={{
                color: "white",
                "&:hover": {
                  color: "#6BB77B",
                },
              }}
            />
          </IconButton>
        </Grid>
      </Container>
      <Typography variant="body1">
        © 2023 AbdulWahab. All rights reserved.
      </Typography>
      <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
        <Link
          style={{ textDecoration: "none", color: "#6BB77B" }}
          to="/privacy"
        >
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link style={{ textDecoration: "none", color: "#6BB77B" }} to="/terms">
          Terms of Service
        </Link>
      </Typography>
    </Paper>
  );
};

export default Footer;
