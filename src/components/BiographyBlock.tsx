import { useQuery } from '@apollo/client';
import React from 'react'
import { QUERY_BIOGRAPHY_BLOCK } from '../services/query';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface BiographyBlockCollection {
    biographyBlockCollection: {
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

const BiographyBlock = ({locale}) => {

    const { data, error, loading } = useQuery<BiographyBlockCollection>(QUERY_BIOGRAPHY_BLOCK, { variables: {locale: locale} });

    const renderOptions = {
        renderText: text => {
          return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
    };

    return (
        <>
            {data?.biographyBlockCollection.items.map((item, index) => (
                <div className="max-w-7xl items-center m-auto" key={index}>
                    <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                    <div className="flex flex-col md:flex md:flex-row">
                        <div className="px-8 sm:px-0 md:pr-8 flex flex-col justify-center">
                            <div className="text-lg lg:text-xl">{documentToReactComponents(item.text.json)}</div>
                        </div>
                        <img className="mt-8 w-full sm:rounded-4xl md:w-1/2 md:mt-0 object-contain self-center" src={item.image.url + '?w=640'} alt={item.image.description}/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BiographyBlock