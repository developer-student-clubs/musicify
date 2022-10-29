import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import logo from '../assets/logo2.jpg';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.to}
        onClick={() => handleClick && handleClick()}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        end={link.to === '/'}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState();
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img className="w-96 h-20" src={logo} alt="logo" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white m-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white m-2"
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img className="w-full h-14 object-contain" src={logo} alt="logo" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
