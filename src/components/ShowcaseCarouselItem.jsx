import { Paper, Typography, Button } from "@mui/material";
import image from "../static/atomo-slide-imagePlaceholder.png"

const ShowcaseCarouselItem = ({slide, textOnLeft}) => {
    return (
        <Paper elevation={3} className="showcase-carousel-item">
            <img src={image}
                height={749}
                alt=""
                className="showcase-carousel-item-img"
            />
            <Paper
                elevation={1}
                className={textOnLeft 
                    ? "showcase-carousel-item-right text-on-left"
                    : "showcase-carousel-item-right"
                }
                sx={{ borderRadius: '0' }}
            >
                <div className="showcase-carousel-item-right-content">
                    <Typography variant="h2" className="showcase-carousel-item-title">
                        Nuestros Productos
                    </Typography>
                    <Typography variant="h5" className="showcase-carousel-item-text">
                        Conoce todas nuestras cervezas 100% artesanales.
                    </Typography>
                    <Button className="showcase-carousel-item-right-content-button">
                        Ver Más
                    </Button>
                </div>
            </Paper>
        </Paper>
    )
}

export default ShowcaseCarouselItem;