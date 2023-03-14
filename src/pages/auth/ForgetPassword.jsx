import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import classes from "./login.module.css";
import loginImage from "../../assets/forget.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../firebase/config";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  function resetPassowrd(e) {
    e.preventDefault();
    sendPasswordResetEmail(getAuth(), email)
      .then(() => {
        toast.success("Reset Email has been sent!");
      })
      .catch((error) => {
        toast.error(error.message);
        // ..
      });
  }
  return (
    <div className={classes.modal}>
      <img
        src={loginImage}
        alt="login"
        className={classes.image}
        style={{ marginTop: 10 }}
      />
      <div className={classes.card}>
        <h2>Reset Password</h2>
        <form onSubmit={resetPassowrd}>
          <div className={classes.section}>
            <label>Email</label>
            <TextField
              required
              id="outlined"
              size="small"
              margin="dense"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              width: 200,
              padding: 1.3,
              fontWeight: 600,
              marginTop: 3,
              bgcolor: "#d3963c",
              ":hover": {
                bgcolor: "#e19d36ae",
              },
            }}
          >
            Reset Password
          </Button>
        </form>
        <div className={classes.text}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p className={classes.forget}>Login</p>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p className={classes.forget}>Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
