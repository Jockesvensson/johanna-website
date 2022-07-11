import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react'
import { QUERY_NAVIGATION } from '../services/query';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface NavigationCollection {
    navigationCollection: {
        items: Items[]
    }
}

interface Items {
    navigationItems: string[];
    facebook: string;
    instagram: string;
    youtube: string;
}

const Navigation = ({setNavbarOpen, setLocale, locale, slideShowActive}) => {

    const { data, error, loading } = useQuery<NavigationCollection>(QUERY_NAVIGATION, { variables: {locale: locale} });
    const [animate, setAnimate] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(true);
    const [menuName, setMenuName] = useState<string>('Meny');

    

    const openNavbar = () => {
        setAnimate(true);
        setMenu(false)
        setNavbarOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const closeNavbar = () => {
        setAnimate(false);
        setMenu(true);
        setNavbarOpen(false);
        document.body.style.overflow = 'unset';
    }

    const handleLanguage = () => {
        closeNavbar();
    }

    const handleNavigation = (navigationItem: string) => {
        closeNavbar();
        document.getElementById(navigationItem)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const setClass = animate ? 'navigation-container open' : 'navigation-container';
    const setMenyClass = menu ? 'menu' : 'menu close'

    return (
        <nav className={`fixed flex items-center w-full top-0 z-30 xsm:px-8 ${slideShowActive}`}>
            <div className="w-full max-w-7xl my-0 mx-auto">
                <div className="flex justify-end">
                    <div className={`cursor-pointer p-6 sm:p-8 text-4xl bg-green-200 text-black ${setMenyClass} hover:text-gray-400 duration-200`} onClick={() => openNavbar()}>{menuName}</div>
                    {data?.navigationCollection.items.map((item, index) => (
                    <div className={`${setClass}`} key={index}>
                        <div className="flex justify-end">
                            <FontAwesomeIcon className="p-6 sm:p-8 bg-white text-black text-4xl cursor-pointer hover:bg-gray-300 duration-300" icon={faXmark} onClick={() => closeNavbar()}/>
                        </div>
                        <div className="flex flex-col items-center mt-6 sm:mt-16">
                            {item.navigationItems.map((navigationItem, index) => (
                                <div className="my-1 sm:my-4 text-3xl sm:text-4xl cursor-pointer hover:text-white duration-300 hover:text-5xl" key={index} onClick={() => handleNavigation(navigationItem)}>{navigationItem}</div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 sm:mt-8">
                            <FacebookIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.facebook)}/>
                            <InstagramIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.instagram)}/>
                            <YouTubeIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.youtube)}/>
                        </div>
                        <div className="flex justify-center mt-4 sm:mt-8">
                            <img className="w-10 h-10 mr-4 cursor-pointer" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg" alt="Sweden" onClick={() => {setLocale('sv'); setMenuName('Meny'); handleLanguage()}}/>
                            <img className="w-10 h-10 cursor-pointer" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="Sweden" onClick={() => {setLocale('en'); setMenuName('Menu'); handleLanguage()}}/>
                        </div>
                    </div> 
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navigation