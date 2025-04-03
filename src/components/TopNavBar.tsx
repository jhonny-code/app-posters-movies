import  { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, LightMode, Movie, ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom"; 

const TopNavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          backgroundColor: "#222",
          "& .MuiBottomNavigationAction-root": { color: "#777" }, 
          "& .Mui-selected": { color: "#4AC3FF" },
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          component={Link} 
          to="/" 
        />
        <BottomNavigationAction
          icon={<Movie />}
          component={Link}
          to="/movies" 
        />
        <BottomNavigationAction
          icon={<LightMode />}
          component={Link}
          to="/theme" 
        />
        <BottomNavigationAction
          label="EXIT"
          icon={<ExitToApp />}
          component={Link}
          to="/exit" 
        />
      </BottomNavigation>
    </Paper>
  );
};

export default TopNavBar;
