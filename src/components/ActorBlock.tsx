import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_ACTOR_BLOCK } from '../services/query'

interface ActorBlockCollection {
    actorBlockCollection: {
        items: Items[];
    }
}

interface Items {
    title: string;
    aboutMeTitle: string;
    aboutMeList: string[];
    languageTitle: string;
    languageList: string[];
    moviesTitle: string;
    moviesList: string[];
    theaterMusicalTitle: string;
    theaterMusicalList: string[];
    educationTitle: string;
    educationList: string[];
    otherTitle: string;
    otherList: string[];
    image: {
        url: string;
        description: string;
    }
}

const ActorBlock = ({locale}) => {

    const { data, error, loading } = useQuery<ActorBlockCollection>(QUERY_ACTOR_BLOCK, { variables: {locale: locale} });

    return (
        <>
            {data?.actorBlockCollection.items.map((item, index) => (
                <div key={index}>
                    <div className="text-6xl mb-8 sm:mb-16 text-center">{item.title}</div>
                    <div className="flex flex-col gap-4 px-8 sm:px-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-8 max-w-7xl items-center m-auto">
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.aboutMeTitle}</div>
                            {item.aboutMeList.map((about, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center actor-list-text" key={index}>{about}<span></span></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.languageTitle}</div>
                            {item.languageList.map((language, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center actor-list-text" key={index}>{language}<span></span></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.moviesTitle}</div>
                            {item.moviesList.map((movie, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center actor-list-text" key={index}>{movie}<span></span></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.moviesTitle}</div>
                            {item.theaterMusicalList.map((theaterMusical, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center actor-list-text" key={index}>{theaterMusical}<span></span></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.educationTitle}</div>
                            {item.educationList.map((education, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center actor-list-text" key={index}>{education}<span></span></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 bg-teal-100 rounded-4xl">
                            <div className="text-3xl md:text-2xl lg:text-3xl">{item.otherTitle}</div>
                            {item.otherList.map((other, index) => (
                                <div className="relative m-2 text-base xsm:text-lg md:text-base lg:text-lg text-center" key={index}>{other}</div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ActorBlock