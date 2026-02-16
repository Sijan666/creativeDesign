import React from 'react'
import Images from "../Images"
import banner from '../../assets/banner.png'
import Iso from '../../assets/Iso.png'

const Banner = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-[#FDFDFD] overflow-hidden pt-20 pb-10">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] -z-10 translate-x-1/4"></div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* --- Left Content (Grid Column 1) --- */}
                <div className="space-y-8 z-10 order-2 lg:order-1">
                    
                    <div className="inline-flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-[#EE1D23]"></span>
                        <span className="text-[#EE1D23] font-bold uppercase tracking-[0.2em] text-xs">
                            Unleash Your Potential
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-[#1E293B] leading-[1.1]">
                        Become an <span className="text-[#EE1D23] italic">IT Pro</span> <br />
                        & Rule the <span className="relative inline-block">
                            Digital World
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 338 12" fill="none">
                                <path d="M1 9.5C51.5 4.66667 152.5 -2.5 337 9.5" stroke="#EE1D23" strokeWidth="3" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
                        With a vision to turn manpower into assets, Creative IT Institute 
                        is ready to enhance your learning experience with expert mentors.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <button className="bg-[#EE1D23] hover:bg-[#c1171d] text-white px-8 py-4 rounded-md font-bold text-sm transition-all shadow-lg shadow-red-100 active:scale-95 uppercase tracking-wider">
                            Browse Course
                        </button>
                        <button className="group flex items-center gap-4 text-[#1E293B] font-bold text-sm hover:text-[#EE1D23] transition-all uppercase tracking-wider">
                            <span className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-[#EE1D23] group-hover:bg-red-50 transition-all">
                                <svg className="w-4 h-4 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                            Join Free Seminar
                        </button>
                    </div>
                    {/* Simple Trust Badge */}
                    <div className="flex items-center gap-4 pt-4">
                        <div className="text-3xl"><Images imgSrc={Iso}/></div>
                        <div className="border-l-2 border-slate-100 pl-4">
                            <p className="text-[#1E293B] font-extrabold text-sm uppercase leading-tight">South Asia's Best IT Institute</p>
                            <p className="text-slate-400 text-[11px] font-bold uppercase mt-1">One of the ISO Certified IT Training Institutes in Bangladesh</p>
                        </div>
                    </div>
                </div>
                {/* --- Right Visual (Grid Column 2) --- */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[600px] transition-transform duration-500 hover:scale-[1.02]">
                        <Images 
                            imgSrc={banner} 
                            className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.1)]" />
                        {/* Decorative Shape behind image */}
                        <div className="absolute -inset-4 border-2 border-slate-50 rounded-[40px] -z-10 rotate-3"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner