import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ShowcaseCarousel from '../components/ShowcaseCarousel';
import ShowcaseCarouselItem from '../components/ShowcaseCarouselItem';
import ProductCardsContainer from '../components/ProductCardsContainer';
import '../styles/pages/_productsPage.scss';
import { getProductCarouselSlides, getAllVarieties, getAllKeezers } from "../service/api";

const ProductsPage = () => {
    const productsStaticInfo = {
        title: 'Packs de cervezas',
        description: 'Elige el pack que más te gusta! \nTe presentamos nuestras variedades, no dejes de probarlas todas.',
    }

    const kegsStaticInfo = {
        title: 'Venta de Barriles',
        description: 'Si quieres organizar una fiesta o tienes un bar, te presentamos esta gran opción para comprar la mejor cerveza artesanal',
    }

    const keeezersStaticInfo = {
        title: 'Arriendo de Schopera',
        description1: '¿Estás pensando en organizar un evento y sorprender a tus invitados?',
        description2: 'Cotiza con nosotros el arriendo de Schopera (freezer adaptado para dispensar cerveza fría). Nosotros nos preocupamos de llevar la Schopera, dejarla instalada con los barriles dentro, listo para abrir la llave del grifo y servirte una cerveza bien helada!'
    }

    const [carouselData, setCarouselData] = useState();
    const callCarouselApi = async () => {
        const result = await getProductCarouselSlides();
        console.log(result.data);
        result.data.sort((a, b) => a.id - b.id);
        setCarouselData(result.data);
    }

    const [varietiesData, setVarietiesData] = useState();
    const callVarietiesApi = async () => {
        const result = await getAllVarieties();
        setVarietiesData(result.data);
    }

    const [keezersData, setKeezersData] = useState();
    const callKeezerApi = async () => {
        const result = await getAllKeezers();
        setKeezersData(result.data);
    }

    useEffect(() => {
        callCarouselApi();
        callVarietiesApi();
        callKeezerApi();
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
                    <ProductCardsContainer
                        className="left-align"
                        staticInfo={keeezersStaticInfo}
                        varieties={keezersData ? keezersData: ''}
                        keezer
                    />
                </div>
            <Footer />
        </div>
    )
}

export default ProductsPage;