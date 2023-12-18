import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import NavLink from "./NavLink";
import { getMenuItems } from "../dummydata/menu";

interface HeaderProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const Header = ({ handleDrawerToggle, mobileOpen }: HeaderProps) => {
  const button = {
    transition: "none",
    color: "transparent",
    "& .MuiTypography-root": {
      textTransform: "capitalzie",
      fontFamily: "Amiko SemiBold",
    },
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  const menuItems = getMenuItems();

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "90%",
          margin: "0 auto",
        }}
      >
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

          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent={{ sm: "flex-end", md: "center" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                float: "right",
              }}
            >
              <MenuIcon sx={{ color: "#023E8A" }} />
            </IconButton>
            {mobileOpen ? (
              <NavDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
              />
            ) : (
              ""
            )}

            <Grid
              item
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                width: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  marginLeft: "10px",
                  width: "auto",
                }}
              >
                <Button sx={button}>
                  {menuItems.map((item: { title: string; url: string }) => (
                    <NavLink
                      key={item.title}
                      title={item.title}
                      url={item.url}
                    />
                  ))}
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              width: "auto",
              justifyContent: "center",
              alignItems: "center",
              gap: 1
            }}
          >
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
