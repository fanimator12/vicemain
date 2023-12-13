import { AppBar, Toolbar, Button, Grid, Link } from "@mui/material";

const Header = () => {
  const appBar = {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
  };

  const toolbar = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
  };

  const navLinks = {
    display: "flex",
    gap: 15,
    width: "auto",
    justifyContent: "space-between",
  };

  const user = {
    display: "flex",
    width: "20%",
    gap: 15,
    justifyContent: "flex-end",
  };

  const button = {
    color: "#023E8A",
    fontFamily: "Amiko SemiBold",
    textTransform: "capitalize",
    fontSize: "15px",
  };

  return (
    <AppBar position="sticky" sx={appBar}>
      <Toolbar sx={toolbar}>
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Link
              sx={{
                color: "#023E8A",
                fontSize: "15px",
                textTransform: "uppercase",
                fontFamily: "Amiko Bold",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              href="/"
              underline="none"
            >
              VICEMAIN
            </Link>
          </Grid>

          <Grid item style={navLinks}>
            <Button sx={button}>Home</Button>
            <Button sx={button}>About Us</Button>
            <Button sx={button}>Services</Button>
            <Button sx={button}>Contact Us</Button>
          </Grid>

          <Grid item style={user}>
            <Button
              id="outlined-button"
              variant="outlined"
              sx={{
                pl: 2,
                pr: 2,
                textTransform: "capitalize",
                fontSize: "15px",
              }}
            >
              Sign Up
            </Button>
            <Button
              sx={{
                pl: 2,
                pr: 2,
                textTransform: "capitalize",
                fontSize: "15px",
              }}
              id="contained-button"
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
