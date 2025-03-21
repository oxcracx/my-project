import React from 'react'
import BannerIcon from './BannerIcon'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto framer-animation' >
            <div className="text-white min-h-[90vh] flex flex-col justify-center items-start py-16 md:py-36 pb-32">
                {/* Introductory Text */}
                <p className="text-[#C8C8CF] font-semibold mb-2 text-xl pt-28">
                    Hello! I&apos;m Mazen Khan.
                </p>

                {/* Main Title */}
                <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#86868D]">
                    A security enthusiast, developer, and <br/>
                    <span className="text-white">digital sentinel.</span>
                </h1>

                {/* Visit Link Button */}
                <div className="mt-12 mb-28">
                    <Link
                        href="#"
                        className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Visit Link
                    </Link>
                </div>

                {/* Logo animation */}
                <BannerIcon />
            </div>
        </div>
    )
}

export default Banner
