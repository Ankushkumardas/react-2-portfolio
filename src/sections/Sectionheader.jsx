import React from 'react'

function Sectionheader({
    title, next, description
}) {
    return (
        <div className='mx-6 mb-10'>
            <div className="flex justify-center ">
                <p className="text-xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                    {title}
                </p>
            </div>
            <h2 className="mt-3 text-4xl font-semibold text-center md:text-4xl">
                {next}
            </h2>
            <p className="mx-auto text-center text-white/70 md:text-lg md:max-w-md">
                {description}
            </p>
        </div>
    )
}

export default Sectionheader
