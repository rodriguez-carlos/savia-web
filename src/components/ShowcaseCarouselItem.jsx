import "../styles/showcasecarouselitem.scss";
import { Paper, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ShowcaseCarouselItem = () => {
    return (
        <Paper elevation={3} className="showcase-carousel-item">
            <img src="https://via.placeholder.com/1441x739" alt="" className="showcase-carousel-item-img"/>
            <Paper elevation={1} className="showcase-carousel-item-right">
                <div className="showcase-carousel-item-right-content">
                    <Typography variant="h2" className="showcase-carousel-item-title">
                        Nuestra Historia
                    </Typography>
                    <Typography variant="h5" className="showcase-carousel-item-text">
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                    </Typography>
                    <Button className="showcase-carousel-item-right-content-button">
                        Ver Más <ArrowForwardIcon />
                    </Button>
                </div>
            </Paper>
        </Paper>
    )
}

export default ShowcaseCarouselItem;