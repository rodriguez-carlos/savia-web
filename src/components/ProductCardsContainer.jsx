import "../styles/productcardscontainer.scss";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
    return (
        <Grid className="product-cards-container" container spacing={0.5} justifyContent="center">
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
    )
}

export default ProductCardsContainer;