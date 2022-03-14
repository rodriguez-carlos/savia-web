import "../styles/productcardscontainer.scss";
import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
    return (
        <div className="product-cards-container">
            <Typography variant="h1" className="product-cards-container-title">Nuestras Cervezas</Typography>
            <Typography variant="h5" className="product-cards-container-text">Savia es cerveza 100% artesanal y chilena <br /> Te presentamos nuestras variedades, ¡pero no dejes de probarlas todas!</Typography>
            <Grid className="product-cards-container-grid" container spacing={0.5}>
                <Grid item xs={12} md={3}>
                    <ProductCard /> 
                </Grid>
                <Grid item xs={12} md={3}>
                    <ProductCard /> 
                </Grid>
                <Grid item xs={12} md={3}>
                    <ProductCard /> 
                </Grid>
                <Grid item xs={12} md={3}>
                    <ProductCard /> 
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductCardsContainer;