import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import Navigation from './Navigation';
import BiographyBlock from './BiographyBlock';
import ActorBlock from './ActorBlock';
import RiderBlock from './RiderBlock';
import Footer from './Footer';
import VideoBlock from './VideoBlock';
import GalleryBlock from './GalleryBlock';
import ContactBlock from './ContactBlock';
import { QUERY_STANDARD_PAGE } from '../services/query';
import ErrorPage from './ErrorPage';

interface StandardPageCollection {
    standardPageCollection: {
        items: Items[]
    }
}

interface Items {
    title: string;
    occupation: string[];
    image: {
        url: string;
        description: string;
    }
}

const StandardPage = () => {
    const [locale, setLocale] = useState<string>('sv');
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [slideShowOpen, setSlideShowOpen] = useState<boolean>(false);
    const { data, error, loading } = useQuery<StandardPageCollection>(QUERY_STANDARD_PAGE, { variables: {locale: locale} });
    const [imgSrc, setImgSrc] = useState<string>('https://via.placeholder.com/1000');
    const [image, setImage] = useState<any>('');
    const [showFooter, setShowFooter] = useState<boolean>(false);

    const slideShowActive = slideShowOpen ? 'slideshow-open' : '';
    const customClass = imgSrc && image === imgSrc ? "img-loaded" : "img-loading";

    useEffect(() => {
        setImage(data?.standardPageCollection.items.map(item => item.image.url + '?w=1000'))
    }, [data?.standardPageCollection.items])

    useEffect(() => {
        const img: any = new Image();
        img.src = image;
        img.onload = () => {
            setImgSrc(image);
        }
    }, [image])

    setTimeout(() => setShowFooter(true), 100);

    return (
        <>
            {error ? (
                <ErrorPage />
            ) : (
                <> 
                    <div className="relative z-10">
                        <Navigation setNavbarOpen={setNavbarOpen} setLocale={setLocale} locale={locale} slideShowActive={slideShowActive}/>
                        <section id={locale === 'sv' ? "Hem" : "Home"} className={`min-h-50 md:min-h-screen relative bg-no-repeat bg-cover overflow-hidden ${slideShowActive}`}>
                            {data?.standardPageCollection?.items.map((item, index) => (
                                <div key={index}>
                                    <img className={`absolute top-0 left-0 bottom-0 w-full m-0 overflow-hidden ${customClass}`} src={imgSrc} alt={item.image.description} />
                                    <div className="absolute bottom-8 left-0 w-full flex flex-col items-center">
                                        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-12xl leading-small text-white">{item?.title}</h1>
                                        <div className="flex items-center mt-2 occupation">
                                            {item?.occupation?.map((occupation, index) => (
                                                <div className="text-xl text-white md:text-2xl mx-3 occupation-dot" key={index}>{occupation}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section id={locale === 'sv' ? "Biografi" : "About me"} className={`py-8 sm:py-16 sm:px-8 bg-gray-200 ${slideShowActive}`}>
                            <BiographyBlock locale={locale}/>
                        </section>
                        <section id={locale === 'sv' ? "Skådespeleri" : "Professional CV"} className={`py-8 sm:py-16 sm:px-8 bg-gray-100 ${slideShowActive}`}>
                            <ActorBlock locale={locale}/>
                        </section>
                        <section id={locale === 'sv' ? "Ryttare" : "Equestrian"} className={`py-8 sm:py-16 sm:px-8 bg-gray-200 ${slideShowActive}`}>
                            <RiderBlock locale={locale}/>
                        </section>
                        <section id={locale === 'sv' ? "Filmer" : "Movies"} className={`py-8 sm:py-16 xsm:px-8 bg-gray-100 ${slideShowActive}`}>
                            <VideoBlock locale={locale}/>
                        </section>
                        <section id={locale === 'sv' ? "Galleri" : "Gallery"} className="relative xsm:px-8 py-8 sm:py-16 bg-gray-200">
                            <GalleryBlock setSlideShowOpen={setSlideShowOpen} locale={locale}/>
                        </section>
                        <section id={locale === 'sv' ? "Kontakt" : "Contact"} className="py-8 sm:py-16 sm:px-8 bg-gray-100">
                            <ContactBlock locale={locale}/>
                        </section>
                    </div>
                    {showFooter ? (
                        <div className={`px-8 footer-animate ${slideShowActive}`}>
                            <Footer locale={locale}/>
                        </div>
                    ) : (
                        null
                    )}
                </>
            )}
        </>
    )
}

export default StandardPage