'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useUserStore } from '@/store';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setUser } = useUserStore();

  const handleClose = () => setIsOpen(false);

  const logOut = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  const getUserId = useCallback(async () => {
    const token = Cookies.get('token');
    if (token) {
      const resp = await fetch(`http://localhost:8000/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
      });

      if (resp.ok) {
        const data = await resp.json();
        setUser(data);
      }
    }
    return null;
  }, [setUser]);

  useEffect(() => {
    const token = Cookies.get('token');
    getUserId();
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [getUserId]);
  return (
    <div>
      <div
        className={`fixed text-sept-white w-screen h-[100px] text-lg sm:text-5xl z-[999] font-bold flex justify-between p-10 items-center transition-all duration-500 ${
          isScrolled ? 'bg-sept-black' : 'bg-transparent'
        }`}
      >
        <div
          id="text"
          className=" hover:text-sept-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <button className="z-50">MENU</button>
          ) : (
            <button>CLOSE</button>
          )}
        </div>
        <div>
          {isLoggedIn && (
            <button onClick={logOut} className="hover:text-sept-green">
              LOGOUT
            </button>
          )}
          {!isLoggedIn && (
            <Link href="/login" className="hover:text-sept-green">
              LOGIN
            </Link>
          )}
        </div>
      </div>
      <div
        className={`fixed transition-all ease-in-out duration-700 z-40 ${
          isOpen
            ? 'bg-sept-gray h-screen w-screen'
            : 'h-0 w-screen overflow-hidden'
        }`}
      >
        <div
          className={`flex flex-col w-full absolute bottom-[30%] text-3xl sm:text-6xl px-8 transition-opacity duration-700 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <Link
              href="/"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              HOME
            </Link>
          </div>
          <div>
            <Link
              href="/#why"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              WHY US
            </Link>
          </div>
          <div>
            <Link
              href="/festivals"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              FESTIVAL
            </Link>
          </div>
          <div>
            <Link
              href="/#prev"
              className="text-sept-white hover:text-sept-green"
              onClick={handleClose}
            >
              PAST EVENTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
