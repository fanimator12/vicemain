import { Grid, Typography, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer
      style={{
        maxWidth: "1200px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "#0085FF",
              fontFamily: "Amiko Regular",
              fontSize: "15px",
            }}
          >
            VICEMAIN
          </Typography>
        </Grid>

        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "#0085FF",
              fontFamily: "Amiko Regular",
              fontSize: "15px",
            }}
          >
            Home{" "}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "#0085FF",
              fontFamily: "Amiko Regular",
              fontSize: "15px",
            }}
          >
            {" "}
            About Us
          </Typography>{" "}
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "#0085FF",
              fontFamily: "Amiko Regular",
              fontSize: "15px",
            }}
          >
            Services
          </Typography>{" "}
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "#0085FF",
              fontFamily: "Amiko Regular",
              fontSize: "15px",
            }}
          >
            Contact Us
          </Typography>
        </Grid>

        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FacebookIcon style={{ marginRight: "10px", color: "#0085FF" }} />
          <InstagramIcon style={{ marginRight: "10px", color: "#0085FF" }} />
          <YouTubeIcon style={{ color: "#0085FF" }} />
        </Grid>
      </Grid>

      <Divider className="divider" />

      <Typography
        variant="caption"
        style={{
          color: "#0085FF",
          fontFamily: "Amiko Regular",
          fontSize: "12px",
        }}
      >
        Copyright © VICEMAIN
      </Typography>
    </footer>
  );
};

export default Footer;
