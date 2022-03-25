import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import ShowcaseCarouselItem from '../components/ShowcaseCarouselItem';
import ProductCardsContainer from '../components/ProductCardsContainer';
import '../styles/pages/_productsPage.scss';
import { getProductCarouselSlides, getAllVarieties } from "../service/api";

const ProductsPage = () => {
    const productsStaticInfo = {
        title: 'Packs de cervezas',
        description: 'Elige el pack que más te gusta! \nTe presentamos nuestras variedades, no dejes de probarlas todas.',
    }

    const kegsStaticInfo = {
        title: 'Venta de Barriles',
        description: 'Si quieres organizar una fiesta o tienes un bar, te presentamos esta gran opción para comprar la mejor cerveza artesanal',
    }

    const [carouselData, setCarouselData] = useState();
    const callCarouselApi = async () => {
        const result = await getProductCarouselSlides();
        setCarouselData(result.data);
    }

    const [varietiesData, setVarietiesData] = useState();
    const callVarietiesApi = async () => {
        const result = await getAllVarieties();
        console.log(result.data);
        setVarietiesData(result.data);
    }

    useEffect(() => {
        callCarouselApi();
        callVarietiesApi();
    }, [])

    return (
        <div>
            <Nav />
                <ShowcaseCarousel>
                    {carouselData && carouselData.map(slide => (
                        <ShowcaseCarouselItem slide={slide} key={slide.id} />
                    ))}
                </ShowcaseCarousel>

                <div style={{ position: 'relative' }}>
                    <div id="packs" className="scroll-target" />
                    <ProductCardsContainer
                        className="left-align"
                        staticInfo={productsStaticInfo}
                        varieties={varietiesData}
                    />
                </div>

                <div style={{ position: 'relative' }}>
                    <div id="barriles" className="scroll-target" />
                    <ProductCardsContainer
                        className="left-align"
                        staticInfo={kegsStaticInfo}
                        varieties={varietiesData ? varietiesData.filter(variety => variety.attributes.categoria === "tipoCerveza") : ''}
                        barrel
                    />
                </div>

                <div style={{ position: 'relative' }}>
                    <div id="schopera" className="scroll-target" />
                </div>
            <Footer />
        </div>
    )
}

export default ProductsPage;