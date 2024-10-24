"use client";
import React, { useState } from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'; // Search icon
import { HiMenu, HiX } from 'react-icons/hi'; // Menu icons
import { FiShoppingCart } from 'react-icons/fi'; // Cart icon
import { RiLoginCircleLine, RiUserAddLine } from 'react-icons/ri'; // Login and Sign Up icons
import Link from 'next/link';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Logo and Brand Name Section */}
      <Link href='/'>
        <div className="flex items-center space-x-4">
          <Image 
            src={Logo}
            height={60}
            width={60}
            alt="logo"
            className="cursor-pointer"
          />
          {/* Brand name only visible on medium and larger screens */}
          <h1 className="hidden md:block text-xl font-semibold text-gray-800 font-serif">QuickBite</h1>
        </div>
      </Link>

      {/* Search Bar Section - Always visible */}
      <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-full shadow-sm w-full max-w-sm sm:max-w-md">
        <input 
          type="text" 
          placeholder="Search here..." 
          className="w-full bg-transparent px-3 outline-none text-gray-700 placeholder-gray-500"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <HiX className="w-6 h-6 text-gray-700" /> : <HiMenu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Icon Section - Cart and User Options */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/cart" aria-label="Cart">
          <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-500" />
        </Link>
        {isSignedIn ? (
          <UserButton 
            appearance={{
              elements: {
                userButton: 'px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200',
              },
            }}
          />
        ) : (
          <>
            <SignInButton mode='modal'>
              <div className="flex items-center cursor-pointer" aria-label="Sign In">
                <RiLoginCircleLine className="w-6 h-6 text-gray-700 hover:text-gray-500" />
              </div>
            </SignInButton>

            <SignUpButton mode='modal'>
              <div className="flex items-center cursor-pointer" aria-label="Sign Up">
                <RiUserAddLine className="w-6 h-6 text-orange-600 hover:text-orange-400" />
              </div>
            </SignUpButton>
          </>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg py-4 px-6 flex flex-col items-center space-y-4 md:hidden">
          <Link href="/cart" aria-label="Cart">
            <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-500" />
          </Link>

          {isSignedIn ? (
            <UserButton 
              appearance={{
                elements: {
                  userButton: 'w-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200',
                },
              }}
            />
          ) : (
            <>
              <SignInButton mode='modal'>
                <div className="flex items-center cursor-pointer" aria-label="Sign In">
                  <RiLoginCircleLine className="w-6 h-6 text-gray-700 hover:text-gray-500" />
                </div>
              </SignInButton>

              <SignUpButton mode='modal'>
                <div className="flex items-center cursor-pointer" aria-label="Sign Up">
                  <RiUserAddLine className="w-6 h-6 text-orange-600 hover:text-orange-400" />
                </div>
              </SignUpButton>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
