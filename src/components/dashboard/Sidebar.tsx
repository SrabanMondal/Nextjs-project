'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdMenu } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      return () => {
        setIsOpen(false)
      }
    }, [])
    
  const tabs = [
    { name: 'Home', path: '/dashboard/home' },
    { name: 'Stages & Checklist', path: '/dashboard/stages' },
    { name: 'Upload Docs', path: '/dashboard/upload' },
    { name: 'Preferred Vendors', path: '/dashboard/vendors' },
    { name: 'Tech Stack', path: '/dashboard/tech' },
    { name: 'Targets', path: '/dashboard/targets' },
    { name: 'Zee Sales Targets', path: '/dashboard/zee-sales' },
    { name: 'MAI Settings', path: '/dashboard/mai-settings' },
    { name: 'Pending Questions', path: '/dashboard/pending', num: 3 },
  ];
  const handleLogOut= ()=>{
    //logout
  }
  return (
    <>
      {/* Mobile MENU Button */}
      <button
        aria-label='Menu-button'
        className={`md:hidden fixed top-1 left-1 z-40 p-2 text-white rounded-md ${isOpen?'hidden':'block'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdMenu className='w-10 h-10 text-black p-2'/>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed h-full left-0 w-64 pt-16 bg-[#11455D] text-[#FFFFFF99] shadow-lg transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:transform-none`}
      >
        <div className="p-4 flex flex-col justify-between h-full">
          <nav className="mt-4">
            <ul>
              {tabs.map((tab) => (
                <li key={tab.path} className="mb-2">
                  <Link
                    href={tab.path}
                    className={`px-4 py-2 rounded-md flex gap-4 items-center ${
                      pathname === tab.path ? 'bg-[#FFFFFF1A] text-[#2FBCFE]' : 'hover:bg-[#FFFFFF2A]'
                    } ${tab.num ? 'relative' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {tab.name}
                    {tab.num && (
                      <span className=" bg-[#F9FAFB] border-[1px] border-[#EAECF0] text-[#344054] text-sm rounded-full h-5 w-5 flex items-center justify-center">
                        {tab.num}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* LogOut button */}
          <button aria-label='Logout-button' className='mb-5 w-fit px-1' onClick={handleLogOut}>Logout</button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}