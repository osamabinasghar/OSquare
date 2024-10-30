import React from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <>
        <div className="w-full">
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
                <div className="flex items-center gap-x-6">
                    <img src="/Logo.svg" alt="OSquare" className="h-6" />
                    {/* <span className="h-6 w-px bg-gray-200" /> */}
                    {/* <span className="text-lg text-[#212659] text-bold">O Square</span> */}
                    
                    <div className="hidden lg:flex lg:gap-x-6 ml-8">
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                        Products
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Plans and pricing</a>
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                        Resources
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                        Support
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    </div>
                </div>

                <div className="flex items-center gap-x-8">
                    <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                    All OSquare
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                    <UserCircleIcon className="h-6 w-6" />
                    </button>
                    {/* <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                    Afghanistan
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button> */}
                </div>
                </nav>
            </header>
            {/* <div className="bg-[#0078d4] text-white py-2 px-4 text-center">
                <p className="text-sm">
                Explore how Copilot transforms the way you work.{' '}
                <a href="#" className="underline hover:no-underline">Read the blog</a>
                </p>
            </div> */}
        </div>
    </>
  )
}

export default Header