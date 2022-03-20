import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import neipaTest from "../static/neipaTest.jpeg";


const ProductCard = ({product}) => {
    return (
        <Card className="product-card" elevation={5}>
            <CardMedia 
                component="img"
                height="352"
                image= {neipaTest}
                alt="beer name image"
                sx={{borderRadius: "5px"}}
            />
            <CardContent align="left">
                <Typography gutterBottom variant="h4" component="div" className="product-card-title">
                    {product ? product.name : "Pack Beer Name"}
                </Typography>
                <Typography variant="h5" className="product-card-description">
                    {product ? product.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </Typography>
                <Button variant="text" className="product-card-button"
                sx={{borderRadius: 15, marginTop: 1}}>
                    {product ? (product.stock > 5 ? "Ver Más": "Agotado") : "Ver Más"}
                </Button>
            </CardContent>
        </Card>
    )
}

export default ProductCard;