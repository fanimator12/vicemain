import {
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { getMenuItems } from "../dummydata/menu";
import NavLink from "./NavLink";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const button = {
    transition: "none",
    color: "#0085FF",
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
    <footer
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Grid
        container
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{
          padding: "5em 0 2em 0",
        }}
      >
        <Button sx={button}>VICEMAIN</Button>

        {menuItems.map((item, index) => (
          <Button sx={button} key={index}>
            <NavLink title={item.title} url={item.url} />
          </Button>
        ))}

        <FacebookIcon style={{ color: "#0085FF" }} />
        <InstagramIcon style={{ color: "#0085FF" }} />
        <YouTubeIcon style={{ color: "#0085FF" }} />
      </Grid>

      <Divider
        className="divider"
        style={{ width: "100%", marginTop: "1em" }}
      />

      <Grid
        container
        justifyContent="center"
        sx={{
          padding: "1em 0 1em 0",
        }}
      >
        <Typography
          variant="caption"
          style={{
            color: "#0085FF",
            fontFamily: "Amiko SemiBold",
            opacity: 0.5,
            fontSize: isMobile ? "10px" : "12px",
          }}
        >
          Copyright © VICEMAIN
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
