import { useQuery } from '@apollo/client';
import React from 'react'
import { QUERY_FOOTER } from '../services/query';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface FooterCollection {
    footerCollection: {
        items: Items[]
    }
}

interface Items {
    copyright: string;
    facebook: string;
    instagram: string;
    youtube: string;
}

const Footer = ({locale}) => {

    const { data, error, loading } = useQuery<FooterCollection>(QUERY_FOOTER, { variables: {locale: locale} });

    return (
        <>  
            {data?.footerCollection.items.map((item, index) => (
                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full max-w-7xl m-auto" key={index}>
                    <div className="mb-4 sm:mb-0 text-3xl sm:text-4xl">{item.copyright}</div>
                    <div>
                        <FacebookIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.facebook)}/>
                        <InstagramIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.instagram)}/>
                        <YouTubeIcon className="cursor-pointer" sx={{ fontSize: 40, marginRight: '0.5rem'}} onClick={() => window.open(item.youtube)}/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Footer