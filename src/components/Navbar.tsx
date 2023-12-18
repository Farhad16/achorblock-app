import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setLogout } from "../feature/auth/auth.slice";

const pages = [
  { name: "Home", link: "/" },
  { name: "Users", link: "/users" },
  { name: "Projects", link: "/projects" },
  { name: "Tasks", link: "/tasks" },
  { name: "Reporting", link: "/reporting" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  const handleAvatarClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "avatar-popover" : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="bg-[#7F56D9] py-3 sm:px-16 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Box sx={{ flexGrow: 1 }} className="md:hidden flex">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon style={{ fill: "white", marginRight: "4px" }} />
            <Link
              to="/"
              className="text-white text-lg font-semibold flex items-center gap-2"
            >
              <img src="/img/nav-logo.png" alt="nav-logo" />
              <span>Stack</span>
            </Link>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            className="md:hidden flex items-center"
          >
            {pages.map((page: any) => (
              <Link to={page.link} key={page.name}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
        <div className="items-center hidden md:flex">
          <Link
            to="/"
            className="text-white text-xl font-semibold flex items-center gap-2"
          >
            <img src="/img/nav-logo.png" alt="nav-logo" className="w-[40px]" />{" "}
            <span>Stack</span>
          </Link>
          <div className="ml-16 text-base font-medium flex items-center gap-1">
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.name}
                className={({ isActive }) =>
                  `rounded-md text-white px-3 py-2 ${
                    isActive ? "bg-white bg-opacity-20" : "text-white"
                  } hover:bg-white hover:bg-opacity-20`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <>
            {isAuthenticated ? (
              <p
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Logout
              </p>
            ) : (
              <Link
                to="/login"
                className="ml-4 flex gap-2 items-center cursor-pointer font-semibold text-white"
              >
                Login
              </Link>
            )}
          </>
          <Avatar
            alt="User Avatar"
            // src={user?.photoURL || ""}
            onClick={handleAvatarClick}
            className="cursor-pointer"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleAvatarClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="flex flex-col p-4 gap-2 font-medium">
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <AccountCircleIcon />
                Profile
              </p>
              <p className="text-sm flex gap-2 items-center cursor-pointer">
                <SettingsIcon /> Settings
              </p>
              {isAuthenticated ? (
                <p
                  className="text-sm flex gap-2 items-center cursor-pointer"
                  onClick={() => {
                    dispatch(setLogout());
                  }}
                >
                  <LogoutIcon />
                  Logout
                </p>
              ) : (
                <Link
                  to="/login"
                  className="text-sm flex gap-2 items-center cursor-pointer"
                >
                  <LoginIcon /> Login
                </Link>
              )}
            </div>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
