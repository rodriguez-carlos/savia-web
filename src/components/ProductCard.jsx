import "../styles/productcard.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import neipaTest from "../static/neipaTest.jpeg";


const ProductCard = ({product}) => {
    return (
        <Card sx={{ maxWidth: 251, margin: "10px 5px" }}>
            <CardMedia 
                component="img"
                height="313"
                image= {neipaTest}
                alt="beer name image"
                sx={{borderRadius: "5px"}}
            />
            <CardContent align="left">
                <Typography gutterBottom variant="h4" component="div" fontWeight={600}>
                    {product ? product.name : "Beer Name"}
                </Typography>
                <Typography variant="h5">
                    {product ? product.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </Typography>
                <Button variant="outlined" 
                sx={{borderRadius: 15, marginTop: 1}}>
                    {product ? (product.stock > 5 ? "Ver Más": "Agotado") : "Ver Más"}
                </Button>
            </CardContent>
        </Card>
    )
}

export default ProductCard;