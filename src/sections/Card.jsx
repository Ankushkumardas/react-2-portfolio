import React from "react";
import grain from "../assets/images/grain.jpg";
import {twMerge} from 'tailwind-merge'
function Card({className,children }) {
    return (
        <div className={twMerge("bg-gray-700 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6  ",className)}>
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grain})` }}
            ></div>
            {children}
        </div>
    );
}

export default Card;
