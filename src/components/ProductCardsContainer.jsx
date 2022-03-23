import "../styles/Components/_productcardscontainer.scss";
import { Grid, Typography } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
    return (
        <div className="product-cards-container">
            <Typography variant="h1" className="product-cards-container-title">Nuestras Cervezas</Typography>
            <Typography variant="h5" className="product-cards-container-text">Savia es cerveza 100% artesanal y chilena <br /> Te presentamos nuestras variedades, ¡pero no dejes de probarlas todas!</Typography>
            <ScrollContainer className="product-cards-container-grid" >
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div>
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div>
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div>
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div>
                {/* <div className="product-cards-container-card"> 
                    <ProductCard /> 
                </div>
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div>
                <div className="product-cards-container-card">
                    <ProductCard /> 
                </div> */}
            </ScrollContainer>
        </div>
    )
}

export default ProductCardsContainer;