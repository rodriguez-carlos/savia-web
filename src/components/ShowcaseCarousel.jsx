import Carousel from 'react-material-ui-carousel';
import ShowcaseCarouselItem from './ShowcaseCarouselItem';

const ShowcaseCarousel = () => {
    return (
        <Carousel
        indicatorContainerProps={{
            style: {
                position: 'absolute',
                marginTop:'-3.4rem',
                zIndex: '99',
                height: "18px"
            }
        }}
        indicatorIconButtonProps={{
            style: {
                color: 'rgba(255, 255, 255, 0)',
                border: "2px solid #263238",
                marginLeft: '1.4rem',
                boxSizing: "border-box",
                fontSize: "200x"
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                color: '#263238',
                backgroundColor: '#263238'
            }
        }}
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'cornflowerblue',
                borderRadius: 0
            }
        }}
    >
            <ShowcaseCarouselItem />
            <ShowcaseCarouselItem />
            <ShowcaseCarouselItem />
        </Carousel>
    )
}

export default ShowcaseCarousel;
