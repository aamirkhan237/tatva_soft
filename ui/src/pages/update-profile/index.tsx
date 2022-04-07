import React from "react";
import { editStyle } from "./style";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import {
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UpdateProfile: React.FC = () => {
  const classes = editStyle();
  const materialClasses = materialCommonStyles();
  const history = useHistory();
  return (
    <div className={classes.editWrapper}>
      <div className="container">
        <Typography variant="h1">Update Profile</Typography>
        <div className="form-row-wrapper">
          <div className="form-col">
            <TextField
              id="first-name"
              name="firstName"
              label="First Name *"
              variant="outlined"
              inputProps={{ className: "small" }}
            />
          </div>
          <div className="form-col">
            <TextField
              id="last-name"
              name="lastName"
              label="Last Name *"
              variant="outlined"
              inputProps={{ className: "small" }}
            />
          </div>
          <div className="form-col">
            <TextField
              id="email"
              name="email"
              label="Email *"
              variant="outlined"
              inputProps={{ className: "small" }}
            />
          </div>
          <div className="form-col">
            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password "
              variant="outlined"
              inputProps={{ className: "small" }}
            />
          </div>
          <div className="form-col">
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password "
              variant="outlined"
              inputProps={{ className: "small" }}
            />
          </div>
        </div>
        <div className="btn-wrapper">
          <Button
            className="green-btn btn"
            variant="contained"
            type="submit"
            color="primary"
            disableElevation
            onClick={() => {
              history.push("/");
            }}
          >
            Save
          </Button>
          <Button
            className="pink-btn btn"
            variant="contained"
            type="submit"
            color="primary"
            disableElevation
            onClick={() => {
              history.push("/");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
