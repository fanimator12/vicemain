import { Box, Drawer } from "@mui/material";
import { getMenuItems } from "../dummydata/menu";
import NavLink from "./NavLink";

interface NavDrawerProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const NavDrawer = ({ handleDrawerToggle, mobileOpen }: NavDrawerProps) => {
  const menuItems = getMenuItems();

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "250px",
          backgroundColor: "#E6EFFD",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        {menuItems.map((navItem: { title: string; url: string }) => (
          <NavLink
            key={navItem.title}
            title={navItem.title}
            url={navItem.url}
          />
        ))}
      </Box>
    </Drawer>
  );
};
export default NavDrawer;
