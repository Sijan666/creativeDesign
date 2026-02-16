import React from 'react';
import Images from '../Images';
import Logo from '../../assets/Logo.png';
import Container from '../Container';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-slate-100 py-4">
      <Container className="lg:px-8">
        {/* Main Header Wrapper: Flexer poriborte Grid use kora hoyeche */}
        <div className="grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center">
          {/* --- Logo Section --- */}
          <div className="justify-self-start">
            <Images 
              imgSrc={Logo} 
              className="h-10 md:h-12 w-auto object-contain" 
              alt="Creative IT Institute"
            />
          </div>
          {/* --- Navigation Links --- */}
          <nav className="hidden lg:grid grid-flow-col gap-10 justify-center">
            <a href="#home" className="text-sm font-bold text-slate-700 hover:text-[#EE1D23] uppercase tracking-wide transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-bold text-slate-700 hover:text-[#EE1D23] uppercase tracking-wide transition-colors">
              About Us
            </a>
            <a href="#success" className="text-sm font-bold text-slate-700 hover:text-[#EE1D23] uppercase tracking-wide transition-colors">
              Success Story
            </a>
            <a href="#diploma" className="text-sm font-bold text-slate-700 hover:text-[#EE1D23] uppercase tracking-wide transition-colors">
              Diploma
            </a>
            <a href="#contact" className="text-sm font-bold text-slate-700 hover:text-[#EE1D23] uppercase tracking-wide transition-colors">
              Contact
            </a>
          </nav>
          {/* --- Action Buttons --- */}
          <div className="grid items-center justify-self-end">
            <button className="grid grid-flow-col items-center gap-2 bg-[#EE1D23] hover:bg-red-700 text-white px-7 py-3 rounded-md font-bold text-xs shadow-lg shadow-red-100 transition-all uppercase tracking-widest cursor-pointer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Browse Course
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;