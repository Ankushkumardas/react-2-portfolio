import React from 'react';
import { twMerge } from 'tailwind-merge';

function Toolboxitems({ toolboxitems, className ,itemwrapper}) {
    return (
        
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
            <div className={twMerge('flex flex-none py-1 gap-4',itemwrapper)}>
                {toolboxitems.map((data) => (
                    <div key={data.title} className='inline-flex items-center gap-4 px-3 py-1 outline outline-2 rounded-xl outline-white/30'>
                        <img src={data.icon} className='text-white size-10 ' />
                        <span>{data.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Toolboxitems;

