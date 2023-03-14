import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Icon } from "@iconify/react";
import clothingStore from "@iconify/icons-maki/clothing-store";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const myTheme = createTheme({
  root: {
    display: "flex",
  },
  typography: {
    fontFamily: "Lato, Arial",
    fontSize: 12,
    Button: {
      fontFamily: "Lato, Arial",
      fontSize: 70,
      fontWeight: 400,
      paddingLeft: 20,
    },

    h5: {
      fontFamily: "Lato, Arial",
      fontSize: 30,
      fontWeight: 500,
    },
  },
});

export default function SearchAppBar() {
  const navigate = useNavigate();
  function logoutUser() {
    signOut(getAuth())
      .then(() => {
        toast.success("Logout Successful");
        console.log("logout");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#000" }}>
          <Toolbar>
            <Icon icon={clothingStore} color="white" width="30" height="30" />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              DesiVibes
            </Typography>

            <Button
              color="inherit"
              sx={{ fontSize: 15, paddingLeft: 5, paddingRight: 0 }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Button>
            {/* <Button color="inherit" sx={{ fontSize: 15, paddingLeft: 3 }}>
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Admin
              </Link>
            </Button> */}

            <Button
              color="inherit"
              sx={{ fontSize: 15, paddingLeft: 3, paddingRight: 3 }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>

            {/* <Button
              aria-label="add to shopping cart"
              sx={{ color: "#fff", fontSize: 15, paddingRight: 3 }}
            >
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                My Orders
              </Link>
            </Button> */}
            <Button
              aria-label="add to shopping cart"
              sx={{ color: "#fff", fontSize: 15, paddingRight: 3 }}
              onClick={logoutUser}
            >
              Logout
            </Button>
            <Button
              aria-label="add to shopping cart"
              sx={{ color: "#fff", fontSize: 15 }}
            >
              <AddShoppingCartIcon />
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
