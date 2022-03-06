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
            <Link to="/nosotros" style={{ textDecoration: "none" }}>
              <li className="list-item">
                <Button id="basic-button">Sobre Nosotros</Button>
              </li>
            </Link>
            <li className="list-item">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Productos &nbsp;<p>y</p>&nbsp; Servicios
              </Button>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} id="menu-item">
                  <span>Ver todo</span>
                </MenuItem>
                <MenuItem onClick={handleClose} id="menu-item">
                  Packs de cerveza
                </MenuItem>
                <MenuItem onClick={handleClose} id="menu-item">
                  Barriles
                </MenuItem>
                <MenuItem onClick={handleClose} id="menu-item">
                  Keezer
                </MenuItem>
              </Menu>
            </li>
            <li className="list-item">
              <Button id="basic-button">Envíos</Button>
            </li>
            <li className="list-item">
              <Button id="basic-button">Contacto</Button>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Nav;
