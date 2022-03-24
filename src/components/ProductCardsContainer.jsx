import "../styles/Components/_productcardscontainer.scss";
import { Typography } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import ProductCard from "./ProductCard";

const ProductCardsContainer = ({staticInfo, varieties}) => {
    return (
        <div className="product-cards-container">
            <Typography variant="h1" className="product-cards-container-title">
                {staticInfo.title}
            </Typography>
            <Typography variant="h5" >
                <pre className="product-cards-container-text">{staticInfo.description}</pre>
            </Typography>
            <ScrollContainer className="product-cards-container-grid" >
            {varieties
                ? varieties.map((variety) => {
                    return (
                        <div className="product-cards-container-card" key={variety.id}>
                            <ProductCard product={variety.attributes} id={variety.id}/> 
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