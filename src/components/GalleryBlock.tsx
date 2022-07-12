import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { QUERY_GALLERY_BLOCK } from '../services/query'
import CloseIcon from '@mui/icons-material/Close';

interface GalleryBlockCollection {
    galleryBlockCollection: {
        items: Items[];
    }
}

interface ImageItems {
    url: string;
    description: string;
}

interface Items {
    title: string;
    imagesCollection: {
        items: ImageItems[];
    }
}

const GalleryBlock = ({setSlideShowOpen, locale}) => {

    const { data, loading } = useQuery<GalleryBlockCollection>(QUERY_GALLERY_BLOCK, { variables: {locale: locale} });

    const [openSlideshow, setOpenSlideShow] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [maxImages, setMaxImages] = useState<ImageItems[][] | any>([]);
    const [slideShowActive, setSlideShowActive] = useState<boolean>(false);
    const [activeDot, setActiveDot] = useState<number>(0);
    const [prevAnimation, setPrevAnimation] = useState<string>('');
    const [nextAnimation, setNextAnimation] = useState<string>('');

    const slideShowOpen = slideShowActive ? 'slideshow-open' : '';
    const imageAnimationPrev = prevAnimation === 'startPrevAnimation' ? 'animate-prev-img' : '';
    const imageAnimationNext = nextAnimation === 'startNextAnimation' ? 'animate-next-img' : '';

    useEffect(() => {
        setMaxImages(data?.galleryBlockCollection.items.map(item => item.imagesCollection.items))

    }, [data?.galleryBlockCollection.items])

    const handleImageSlide = (index) => {
        setCurrentIndex(index);
        setActiveDot(index);
        setOpenSlideShow(true);
        setSlideShowOpen(true);
        setSlideShowActive(true);
        document.body.style.overflow = 'hidden';
    }

    const prevImage = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(maxImages[0].length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
        handleAnimationPrevImage();
    }

    const nextImage = () => {
        if (currentIndex >= maxImages[0].length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        handleAnimationNextImage();
    }

    const handleCurrentImage = (index) => {
        setCurrentIndex(index);
        setActiveDot(index);
        if (index > currentIndex) {
            handleAnimationNextImage();
        } else {
            handleAnimationPrevImage();
        }
    }

    const handleCloseSlideshow = () => {
        setOpenSlideShow(false);
        setSlideShowOpen(false);
        setSlideShowActive(false);
        document.body.style.overflow = 'unset';
    }

    const handleAnimationNextImage = () => {
        setNextAnimation('startNextAnimation');
        setPrevAnimation('');
        setTimeout(() => {
            setNextAnimation('');
        }, 250);
    }

    const handleAnimationPrevImage = () => {
        setPrevAnimation('startPrevAnimation');
        setNextAnimation('');
        setTimeout(() => {
            setPrevAnimation('');
        }, 250);
    }

    return (
        <>
            {data?.galleryBlockCollection.items.map((item, index) => (
                <div key={index}>
                    <div className={`${slideShowOpen}`} key={index}>
                        <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                        <div className="max-w-7xl items-center m-auto px-8 sm:px-0">
                            <div className="flex flex-col gap-8 justify-center items-center xsm:grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xsm:gap-4 relative gallery-container">
                                {item.imagesCollection.items.map((image, index) => (
                                    <img className="cursor-pointer" key={index} src={image.url + '?w=425'} alt={image.description} onClick={() => handleImageSlide(index)}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    {openSlideshow &&
                        <>
                            <div className="slideshow-container">
                                <div className="mySlides fade">
                                    <div className="numbertext">{currentIndex + 1} / {maxImages[0].length}</div>
                                    <div className="close-slideshow">
                                        <CloseIcon sx={{ fontSize: 40, color: 'white', '&:hover': { color: 'lightgray' }}} onClick={() => handleCloseSlideshow()}/>
                                    </div>
                                    <div className="dot-container">
                                        {item.imagesCollection.items.map((item, index) => (
                                            <span key={index} className={currentIndex === index ? "dot active" : "dot"} onClick={() => handleCurrentImage(index)}></span>
                                        ))}
                                    </div>
                                    <img className={`${imageAnimationNext} ${imageAnimationPrev}`} src={item.imagesCollection.items[currentIndex].url + '?w=425'} alt={item.title}/>
                                    <div className="text-container">
                                        <div className="text">{item.imagesCollection.items[currentIndex].description}</div>
                                    </div>
                                </div>
                                <div className="prev" onClick={() => prevImage()}>❮</div>
                                <div className="next" onClick={() => nextImage()}>❯</div>
                            </div>
                        </>
                    }
                </div>
            ))}
        </>
    )
}

export default GalleryBlock