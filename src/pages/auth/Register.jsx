import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import classes from "./login.module.css";
import loginImage from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [missMatch, setMissMatch] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    console.log(email, password, cpassword);
    if (password !== cpassword) {
      setMissMatch(true);
      return;
    } else {
      setMissMatch(false);
    }
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError(false);
        console.log(user);
        console.log("Success");
        navigate("/login");
      })
      .catch((error) => {
        console.log("error");
        const errorCode = error.code;
        console.log(errorCode);
        if (error) {
          setError(true);
        }

        // ..
      });
  };
  return (
    <div className={classes.modal}>
      <img
        src={loginImage}
        alt="login"
        className={classes.image}
        style={{ marginTop: 10 }}
      />
      <div className={classes.card}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <div className={classes.section}>
            <label>Email</label>
            <TextField
              required
              id="outlined"
              type="email"
              size="small"
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.section}>
            <label>Password</label>
            <TextField
              required
              id="outlined"
              size="small"
              margin="dense"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.section}>
            <label>Confirm Password</label>
            <TextField
              required
              id="outlined"
              size="small"
              margin="dense"
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          {missMatch && <p style={{ color: "red" }}>passwords dont match</p>}
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              width: 150,
              padding: 1.3,
              fontWeight: 600,
              marginTop: 2,
              bgcolor: "#d3963c",
              ":hover": {
                bgcolor: "#e19d36ae",
              },
            }}
          >
            Register
          </Button>
          {error && <p style={{ color: "red" }}>Registration Failed</p>}
        </form>
        <p>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <strong>Login</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
