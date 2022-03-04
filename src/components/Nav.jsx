import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../styles/nav.scss";
import logo from "../static/sabia-10x10-03.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} className="logo" alt="savia" />
      </Link>

      <div className="menu">
        <ul>
          <Link to="/nosotros" style={{ textDecoration: 'none' }}>
            <li className="list-item">Sobre Nosotros</li>
          </Link>
          <li className="list-item">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{color: '#37474F'}}
            >
              Productos y Servicios
            </Button>
            <Menu
              className="basic-menu"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Productos</MenuItem>
              <MenuItem onClick={handleClose}>Servicios</MenuItem>
            </Menu>
          </li>
          <li className="list-item">Envíos</li>
          <li className="list-item">Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
