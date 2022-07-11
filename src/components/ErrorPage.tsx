import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="max-w-7xl items-center m-auto px-8">
                <div className="flex justify-center mb-8">
                    <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80}}/>
                </div>
                <div className="text-xl xsm:text-3xl md:text-4xl">
                    <div>Sidan är inte tillgänglig för tillfället.</div>
                    <div>Vänligen kontaka mig på 072-200 27 93</div>
                    <div className="mt-8">This site is currently unavailable. </div>
                    <div>Please contact me on (+46) 72 200 27 93</div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage