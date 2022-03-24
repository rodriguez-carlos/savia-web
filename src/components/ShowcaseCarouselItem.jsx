import { Paper, Typography, Button } from "@mui/material";
import image from "../static/atomo-slide-imagePlaceholder.png"

const ShowcaseCarouselItem = ({slide, textOnLeft}) => {
    if(!slide) return '';
    return (
        <Paper elevation={3} className="showcase-carousel-item">
            <img src={`http://localhost:1337${slide.attributes.imagen.data.attributes.url}`}
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
                        {slide.attributes.titulo}
                    </Typography>
                    <Typography variant="h5" className="showcase-carousel-item-text">
                        {slide.attributes.descripcion}
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