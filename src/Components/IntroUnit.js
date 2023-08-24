import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const IntroUnit = () => {
  const introunitstyles = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1581397867212-e05b3692d16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwZ3JlZW4lMjBwaWNzJTIwb2YlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60) center/cover",
    textAlign: "center",
    color: "white",
    height: "30rem",
    maxWidth: "100%",
    transition: "background-color 0.3s, color 0.3s",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <>
      <div style={introunitstyles}>
        <Container>
          <Grid xs={12} md={12}>
            <Typography variant="h3" paddingBottom={"2rem"}>
              Crafting Digital Experiences that Captivate
            </Typography>
            <Typography variant="h6" paddingBottom={"2rem"}>
              Elevate your Brand with Stunning Designs and Seamless
              Functionality
            </Typography>
            <Typography variant="caption" paddingBottom={"2rem"}>
              Already Have an Account
            </Typography>
            <Link to={"SignIn"}>
              <Button
                size="sm"
                sx={{
                  marginLeft: "1rem",
                  color: "#6BB77B",
                  "&:hover": {
                    backgroundColor: "#172D13",
                  },
                }}
              >
                Click to Sign In
              </Button>
            </Link>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default IntroUnit;
