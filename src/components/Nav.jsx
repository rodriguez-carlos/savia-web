import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../static/sabia-10x10-03.png";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickHamburguer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="hamburguer-logo">
        <Button onClick={handleClickHamburguer} className="hamburguer-menu">
          <GrMenu />
        </Button>

        <Link to="/">
          <img src={logo} className="logo" alt="savia" />
        </Link>
      </div>

      <div className={`menu ${isOpen ? "menuOpen" : "menuClose"}`}>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="list-item">
              <Button className="basic-button">Inicio</Button>
            </li>
          </Link>

          <Link to="/nosotros" style={{ textDecoration: "none" }}>
            <li className="list-item">
              <Button className="basic-button">Sobre Nosotros</Button>
            </li>
          </Link>

          <div to="">
            <li className="list-item">
              <Button
                className="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Productos &nbsp;<span>y</span>&nbsp; Servicios &nbsp;
                <AiOutlineDown />
              </Button>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} className="menu-item">
                  <Link to="">
                    Ver todo
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="menu-item">
                  <Link to="">
                    Packs de cerveza
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="menu-item">
                  <Link to="">
                    Barriles
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} className="menu-item">
                  <Link to="">
                    Schopera
                  </Link>
                </MenuItem>
              </Menu>
            </li>
          </div>

          <Link to="/envios" style={{ textDecoration: "none" }}>
            <li className="list-item">
              <Button className="basic-button">Envíos</Button>
            </li>
          </Link>

          <Link to="/contacto" style={{ textDecoration: "none" }}>
            <li className="list-item">
              <Button className="basic-button">Contacto</Button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
