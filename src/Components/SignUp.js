import * as React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      toast.success("Data submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      window.location.reload();
    }, 1000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            margin="normal"
            style={{ width: "100%" }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            margin="normal"
            style={{ width: "100%" }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
            style={{ width: "100%" }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            margin="normal"
            style={{ width: "100%" }}
          />
          <Button
            type="submit"
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
            Sign Up
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
      <ToastContainer />
    </div>
  );
};

export default SignUp;
