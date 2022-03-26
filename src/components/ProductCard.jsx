import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const ProductCard = ({product, id, barrel, keezer}) => {
    let mixto = '';
    const label = barrel ? 'Barril' : keezer ? '' : 'Pack';
    if(!product) return '';
    const image = barrel 
        ? product.imagen_barril_card.data.attributes.url 
        : product.imagen_card.data.attributes.url;
    mixto = product.categoria === "packMixto" ? '/mixto' : '';
    const path = barrel ? `barriles${mixto}` : keezer ? 'schoperas' : `variedades${mixto}`;
    return (
        <Card className={`product-card ${keezer ? 'keezer-card' : ''}`} elevation={4}>
            <CardMedia 
                component="img"
                height="337"
                width={keezer ? '500px' : ''}
                image= {image}
                alt={product.imagen_card.data.attributes.alternativeText}
            />
            <CardContent align="left">
                <Typography gutterBottom variant="h4" component="div" className="product-card-title">
                    {product && keezer ? product.nombre_servicio : product ? `${label} ${product.nombre_corto}` : ""}
                </Typography>
                <Typography variant="h5" className="product-card-description">
                    {product && keezer ? product.descripcion_1 : product ? product.descripcion : ""}
                </Typography>
                <Link
                    className="product-card-button"
                    to={`/${path}/${id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Button variant="text" className="product-card-button"
                        sx={{borderRadius: 15, marginTop: 1}}>
                        {product && keezer ? "Ver más" : product ? (product.stock > 5 ? "Ver Más": "Agotado") : "Ver Más"}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default ProductCard;