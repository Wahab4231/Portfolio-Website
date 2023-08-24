import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IntroUnit from "./IntroUnit";

const heroUnitStyles = {
  backgroundColor: "#172D13",
  paddingTop: "100px",
  paddingBottom: "100px",
};

const heroImageStyles = {
  maxWidth: "60%",
  height: "30rem",
  innerWidth: "auto",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
};

const HeroUnit = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const heroTextStyles = {
    textAlign: "center",
    color: "white",
    transition: "color 0.3s",
  };

  return (
    <>
      <IntroUnit />
      <div style={heroUnitStyles}>
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                style={{
                  ...heroImageStyles,
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                src="https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/367488175_1563567261115016_4463408381720319060_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=dX8Zd0LS0k4AX94v6EP&_nc_ht=scontent.flhe7-1.fna&oh=00_AfCpicpqbtXVg-nXkXWHd_qCvMasp-JHm82zwkkNWOUXWw&oe=64EA2169"
                alt="Hero"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={heroTextStyles}>
                <Typography variant="h3" component="h1" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="h6" paragraph>
                  Hello, I'm Abdul Wahab, a student in the Computer Science
                  Department at the University of Lahore. I'm currently in my
                  7th semester, pursuing my passion for technology and learning.
                  Alongside my studies
                </Typography>
                <Typography variant="body1" paragraph>
                  I've honed my skills as a React JS web application developer,
                  creating dynamic and engaging digital experiences. I also have
                  a solid understanding of WordPress, allowing me to craft
                  user-friendly and visually appealing websites. My programming
                  repertoire includes proficiency in C++, a language that fuels
                  my problem-solving enthusiasm. Beyond the digital realm, I'm
                  an avid football enthusiast, finding joy in the camaraderie
                  and competition of the sport. Join me in exploring the endless
                  possibilities that the world of technology has to offer!
                </Typography>
                <Link to="SignUp">
                  <Button
                    variant="filled"
                    sx={{
                      backgroundColor: "#6BB77B",
                      color: "white",
                      marginBottom: "1rem",
                    }}
                  >
                    Join Me
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HeroUnit;
