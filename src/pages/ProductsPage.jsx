import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import ShowcaseCarouselItem from '../components/ShowcaseCarouselItem';
import '../styles/pages/_productsPage.scss';
import { getProductCarouselSlides } from "../service/api";

const ProductsPage = () => {
    console.log('hello is this on');
    const [carouselData, setCarouselData] = useState();
    const callCarouselApi = async () => {
        const result = await getProductCarouselSlides();
        console.log('result', result)
        setCarouselData(result.data);
    }

    useEffect(() => {
        callCarouselApi();
    }, [])

    return (
        <div>
            <Nav />
                <ShowcaseCarousel>
                    {carouselData && carouselData.map(slide => (
                        <ShowcaseCarouselItem slide={slide} key={slide.id} />
                    ))}
                </ShowcaseCarousel>
            <Footer />
        </div>
    )
}

export default ProductsPage;