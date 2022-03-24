import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ProductCard = ({product, id}) => {
    return (
        <Card className="product-card" elevation={4}>
            <CardMedia 
                component="img"
                height="352"
                image= {`http://localhost:1337${product.imagen_card.data.attributes.url}`}
                alt={product.imagen_card.data.attributes.alternativeText}
            />
            <CardContent align="left">
                <Typography gutterBottom variant="h4" component="div" className="product-card-title">
                    {product ? `Pack ${product.nombre_corto}` : "Pack Beer Name"}
                </Typography>
                <Typography variant="h5" className="product-card-description">
                    {product ? product.descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </Typography>
                <Link
                    className="product-card-button"
                    to={`/variedades/${id}`}
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