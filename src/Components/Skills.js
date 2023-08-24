import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const skillsData = [
  {
    id: 1,
    title: "React JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/640px-React_Native_Logo.png",
    description:
      "I'm proficient in building dynamic web applications using React JS.I will create a Single page Websites for U",
  },
  {
    id: 2,
    title: "WordPress",
    image:
      "https://www.pngkit.com/png/detail/198-1980326_wordpress-logo-black-png.png",
    description:
      "I have a solid understanding of WordPress, allowing me to craft user-friendly and visually appealing websites.",
  },
  {
    id: 3,
    title: "Python",
    image:
      "https://logowik.com/content/uploads/images/t_python4089.logowik.com.webp",
    description:
      "I have a solid understanding of Python and C++ , That take my problem solving activites to another level .",
  },
  {
    id: 4,
    title: "Css",
    image: "https://logowik.com/content/uploads/images/123_css3.jpg",
    description:
      "I have a solid understanding of CSS take my Website Designing to another level and helps me to build my own themes",
  },
  {
    id: 5,
    title: "Material UI",
    image:
      "https://miro.medium.com/v2/resize:fit:480/1*7LOWVelUHYS1iqeX34Whzg.png",
    description:
      "I have a solid understanding of UI Designs  another level and helps me to build my own themes",
  },
  {
    id: 6,
    title: "Php",
    image: "https://logowik.com/content/uploads/images/t_php.jpg",
    description:
      "I have a solid understanding of Php that helps me to performs various server-side form collection and tasks.",
  },
];

const Skills = () => {
  const [expandedCard, setExpandedCard] = React.useState(null);
  const handleExpand = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  return (
    <Box sx={{ pt: "2%", pb: "2%" }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          sx={{ flexGrow: "1" }}
        >
          {skillsData.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.id}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  alt={skill.title}
                  src={skill.image}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ pt: "2px" }}
                  >
                    {skill.description}
                  </Typography>
                </CardContent>
                {expandedCard !== skill.id && (
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => handleExpand(skill.id)}
                  >
                    Learn More
                  </Button>
                )}
                {expandedCard === skill.id && (
                  <Typography variant="body2">
                    Additional information about {skill.title}.
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
