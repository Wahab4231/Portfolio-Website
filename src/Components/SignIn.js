import * as React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <form>
          <TextField label="Email" margin="normal" fullWidth />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
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
        </form>
        <Link to="/">
          <Button
            sx={{
              color: "#172D13",
            }}
          >
            Back
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default SignIn;
