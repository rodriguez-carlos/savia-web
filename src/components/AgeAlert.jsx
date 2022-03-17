import "../styles/Components/_agealert.scss";
import logo from "../static/sabia-10x10-03.png";
import { Typography, Button } from "@mui/material";


const AgeAlert = () => {
    return (
        <div className="age-alert">
            <img src={logo} alt="" className="logo" />
            <Typography variant="h1" className="age-alert-title">Bienvenidx!</Typography>
            <Typography variant ="h2" className="age-alert-subtitle">Para continuar debes ser mayor de 18 años</Typography>
            <div className="age-alert-buttons">
                <Button variant="contained" className="age-alert-enter-button">SOY MAYOR DE 18 AÑOS</Button>
                <Button variant="text" className="age-alert-exit-button">SALIR</Button>
            </div>
        </div>
    )
}

export default AgeAlert;