import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["HOME", "EXCHANGE RATES (LIVE)", "ABOUT", "ERROR PAGE"];

function Navbar({ toggleTheme }: { toggleTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentNavSelection, setCurrentNavSelection] = React.useState(0);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavSelection = (index: number) => {
    setCurrentNavSelection(index);

    switch (index) {
      case 0:
        navigate(`/`);
        break;
      case 1:
        navigate(`/exchange-live-rates`);
        break;
      case 3:
        navigate(`/error-page`);
        break;
      default:
        navigate(`/${navItems[index].toLocaleLowerCase()}`);
        break;
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText
                onClick={() => handleNavSelection(i)}
                primary={item}
                sx={{
                  bgcolor:
                    currentNavSelection === i ? "#1876D1" : "transparent",
                  color: currentNavSelection === i ? "#fff" : "#000",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar
            sx={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                ":focus": { outline: 0, border: 0 },
                ":hover": { bgcolor: "#4088D8" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "start",
              }}
            >
              Loan calculator
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, i) => (
                <Button
                  key={item}
                  onClick={() => handleNavSelection(i)}
                  variant="text"
                  sx={{
                    color: "#fff",
                    fontSize: "15px",
                    marginRight: "25px",
                    outline: "0px",
                    border: "0px",
                    bgcolor:
                      currentNavSelection === i ? "#4088D8" : "transparent",
                    ":hover": { bgcolor: "#4088D8" },
                    ":focus": { outline: "0px", border: "0px" },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Switch onClick={toggleTheme} />
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Outlet />
      </Box>
    </>
  );
}

export default Navbar;
