import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="mb-[20px] text-[15px] text-center text-gray-100">
            &copy; Daryl Chan. All rights reserved.
            <br />
            <div className="text-[10px] mb-[20ox] text-center text-gray-400 flex items-center justify-center">
                Icons used here are from&nbsp;
                <a href="https://www.icons8.com/" title="icons8" className="flex items-center">
                    <Image
                    src="/icons8.png"
                    width={15}
                    height={15}
                    alt="icons8"
                    />
                    Icons8
                </a>
            </div>
        </div>
    )
}

export default Footer