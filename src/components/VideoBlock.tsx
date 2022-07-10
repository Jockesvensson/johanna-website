import { useQuery } from '@apollo/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import React from 'react'
import { QUERY_VIDEO_BLOCK } from '../services/query';

interface VideoBlockCollection {
    videoBlockCollection: {
        items: Items[]
    }
}

interface Items {
    title: string;
    videoLinks: {
        json: any;
    }
}

const VideoBlock = ({locale}) => {

    const { data, error, loading } = useQuery<VideoBlockCollection>(QUERY_VIDEO_BLOCK, { variables: {locale: locale} }); 

    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => {
                if (node.data.uri.includes("youtube.com/embed")) {
                    return (
                        <iframe
                            title="Johanna Jodaa videos"
                            src={node.data.uri}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    );
                } 
            },
        },
    };
 
    return (
        <>
            {data?.videoBlockCollection.items.map((item, index) => (
                <div key={index}>
                    <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                    <div className="max-w-7xl items-center m-auto px-8 sm:px-0">
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 relative w-full sm:overflow-hidden aspect-video">
                            {documentToReactComponents(item.videoLinks.json, options)}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoBlock