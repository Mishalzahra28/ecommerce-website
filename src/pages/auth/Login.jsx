import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import classes from "./login.module.css";
import loginImage from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    console.log(email, password);

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
        setFail(true);
      });
  }
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
        <h2>LOGIN</h2>
        <form onSubmit={loginUser}>
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
            <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
              <p className={classes.forget}>Forgot Password</p>
            </Link>
          </div>

          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              width: 150,
              padding: 1.3,
              fontWeight: 600,
              bgcolor: "#d3963c",
              ":hover": {
                bgcolor: "#e19d36ae",
              },
            }}
          >
            Login
          </Button>
        </form>
        <p>--or--</p>
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            width: 250,
            padding: 1.3,
            fontWeight: 600,
            bgcolor: "#d3783c",
            ":hover": {
              bgcolor: "#e19d36ae",
            },
          }}
          onClick={signInWithGoogle}
        >
          Login with google
        </Button>
        {fail && (
          <p style={{ color: "red" }}>Email or Password is not correct</p>
        )}
        <p>
          dont have an account?
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>Register</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
