import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ShowcaseCarousel = ({children}) => {
    return (
        <Carousel
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            navButtonsAlwaysVisible={true}
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
            navButtonsProps={{
                style: {
                    backgroundColor: "rgba(238, 233, 212, 1)",
                    color: "#928E8E"
                }
            }}
        >
            {children}
        </Carousel>
    )
}

export default ShowcaseCarousel;
