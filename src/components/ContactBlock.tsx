import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_CONTACT_BLOCK } from '../services/query'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactBlockCollection {
    contactBlockCollection : {
        items: Items[]
    } 
}

interface Items {
    title: string;
    contactTitle: string;
    phoneNumber: string;
    email: string;
    image: {
        url: string;
        description: string;
    }
}

const ContactBlock = ({locale}) => {

    const { data, error, loading } = useQuery<ContactBlockCollection>(QUERY_CONTACT_BLOCK, { variables: {locale: locale} });

    return (
        <>
            {data?.contactBlockCollection.items.map((item, index) => (
                <div key={index} className="max-w-7xl items-center m-auto">
                    <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                    <div className="flex flex-col md:flex md:flex-row">
                        <img className="mb-8 w-full sm:rounded-4xl md:w-1/2 md:mt-0 object-contain self-center" src={item.image.url + '?w=640'} alt={item.image.description}/>
                        <div className="px-8 sm:px-0 md:pl-8 flex flex-col items-center md:items-start md:justify-center">
                            <div>
                            <div className="text-4xl mb-6">{item.contactTitle}</div>
                            <div className="flex items-center mb-2">
                                <PhoneIcon sx={{ fontSize: 40}}/>
                                <div className="ml-2 text-2xl">{item.phoneNumber}</div>
                            </div>
                            <div className="flex items-center">
                                <EmailIcon sx={{ fontSize: 40}}/>
                                <div className="ml-2 text-2xl">{item.email}</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactBlock