import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ProductCard = ({product, id, barrel}) => {
    const label = barrel ? 'Barril' : 'Pack';
    const image = barrel 
        ? product.imagen_barril_card.data.attributes.url 
        : product.imagen_card.data.attributes.url;
    const path = barrel ? 'barriles' : 'variedades';
    return (
        <Card className="product-card" elevation={4}>
            <CardMedia 
                component="img"
                height="352"
                image= {`http://localhost:1337${image}`}
                alt={product.imagen_card.data.attributes.alternativeText}
            />
            <CardContent align="left">
                <Typography gutterBottom variant="h4" component="div" className="product-card-title">
                    {product ? `${label} ${product.nombre_corto}` : "Pack Beer Name"}
                </Typography>
                <Typography variant="h5" className="product-card-description">
                    {product ? product.descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </Typography>
                <Link
                    className="product-card-button"
                    to={`/${path}/${id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Button variant="text" className="product-card-button"
                        sx={{borderRadius: 15, marginTop: 1}}>
                        {product ? (product.stock > 5 ? "Ver Más": "Agotado") : "Ver Más"}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default ProductCard;