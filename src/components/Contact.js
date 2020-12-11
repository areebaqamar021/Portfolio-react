import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#002146",
    height: "100vh",
  },
  heading: {
    color: "#FFE4B5",
    textAlign: "center",
    marginBottom: "1rem",
    fontFamily: "'Bree Serif', serif",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    fontFamily: "'Bree Serif', serif",
  },
  input: {
    color: "#FFE4B5",
    fontFamily: "'Bree Serif', serif",
  },
  button: {
    marginTop: "1rem",
    color: "#FFE4B5",
    borderColor: "#FFE4B5",
    fontFamily: "'Bree Serif', serif",
    fontSize: "20px"
  },
  field: {
    margin: "1rem 0rem",
    fontFamily: "'Bree Serif', serif",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FFE4B5",
    },
    "& label": {
      color: "#FFE4B5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFE4B5",
      },
      "&:hover fieldset": {
        borderColor: "#FFE4B5",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#FFE4B5",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            <h2>Hire Or Contact Me...</h2>
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
