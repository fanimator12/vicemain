import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface NavLinkProps {
  url: string;
  title: string;
}

const NavLink = ({ url, title }: NavLinkProps) => {
  return (
    <>
      <ListItem key={title} disablePadding sx={{ width: "auto" }}>
        <ListItemButton>
          <a href={url} style={{ color: "#fff", textDecoration: "none" }}>
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: "#023E8A",
                    fontFamily: "Amiko SemiBold",
                    textTransform: "capitalize",
                    fontSize: "15px",
                  }}
                >
                  {title}
                </Typography>
              }
            />
          </a>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavLink;
