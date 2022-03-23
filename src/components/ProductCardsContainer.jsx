import "../styles/Components/_productcardscontainer.scss";
import { Grid, Typography } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import ProductCard from "./ProductCard";

const ProductCardsContainer = ({varieties}) => {
    console.log(varieties);
    return (
        <div className="product-cards-container">
            <Typography variant="h1" className="product-cards-container-title">
                Nuestras Cervezas
            </Typography>
            <Typography variant="h5" className="product-cards-container-text">
                Savia es cerveza 100% artesanal y chilena <br />
                Te presentamos nuestras variedades, no dejes de probarlas todas!
            </Typography>
            <ScrollContainer className="product-cards-container-grid" >
            {varieties
                ? varieties.data.map((variety) => {
                    return (
                        <div className="product-cards-container-card" key={variety.id}>
                            <ProductCard product={variety.attributes}/> 
                        </div>
                    )
                })
                : ''
            }
            </ScrollContainer>
        </div>
    )
}

export default ProductCardsContainer;