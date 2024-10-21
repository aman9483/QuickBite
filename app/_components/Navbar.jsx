"use client"
import React, { useState } from 'react'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs' // Import UserButton and useUser from Clerk

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser(); // Check if user is signed in

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
        <Search className="text-gray-500" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Button Section - Hidden on mobile, show UserButton if signed in */}
      <div className="hidden md:flex items-center space-x-2">
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
              <Button 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 ease-in-out"
              >
                Sign In
              </Button>
              </SignInButton>

           <SignUpButton mode='modal'>
              <Button
                variant="outline"
                className="px-4 py-2 text-sm font-medium text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-200 ease-in-out"
              >
                Sign Up
              </Button>
              </SignUpButton>
          </>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg py-4 px-6 flex flex-col items-center space-y-4 md:hidden">
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
                <Button 
                  variant="outline" 
                  className="w-full px-4 py-2 text-sm font-medium border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 ease-in-out"
                >
                  Sign In
                </Button>
                </SignInButton>

                <SignUpButton mode='modal'>
                <Button
                  variant="outline"
                  className="w-full px-4 py-2 text-sm font-medium text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-200 ease-in-out"
                >
                  Sign Up
                </Button>
                </SignUpButton>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
