import { useQuery } from '@apollo/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import React from 'react'
import { QUERY_RIDER_BLOCK } from '../services/query'

interface RiderBlockCollection {
    riderBlockCollection: {
        items: Items[]
    }
}

interface Items {
    title: string;
    text: {
        json: any;
    }
    image: {
        url: string;
        description: string;
    }
}

const RiderBlock = ({locale}) => {

    const { data, error, loading} = useQuery<RiderBlockCollection>(QUERY_RIDER_BLOCK, { variables: {locale: locale} });

    return (
        <>
            {data?.riderBlockCollection.items.map((item, index) => (
                <div className="max-w-7xl items-center m-auto" key={index}>
                    <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                    <div className="flex flex-col md:flex md:flex-row">
                        <img className="mb-8 w-full sm:rounded-4xl md:w-1/2 md:mt-0 object-contain self-center" src={item.image.url + '?w=640'} alt={item.image.description}/>
                        <div className="px-8 sm:px-0 md:pl-8 flex flex-col justify-center">
                            <div className="text-lg lg:text-xl">{documentToReactComponents(item.text.json)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RiderBlock