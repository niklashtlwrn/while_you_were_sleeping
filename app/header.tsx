'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
    const pathname = usePathname()
    const [isHome, setIsHome] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    //useEffect that detects if window is scrolled > 5px on the Y axis
    useEffect(() => {
        if (isHome) {
            const detectScrollY = () => {
                if (window.scrollY > 5) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }

            window.addEventListener("scroll", detectScrollY)

            return () => {
                window.removeEventListener("scroll", detectScrollY)
            }
        }
    }, [isHome])

    useEffect(() => {
        pathname === "/" ? setIsHome(true) : setIsHome(true)
    }, [pathname])

    useEffect(() => {
        const checkIsMobile = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Call the function to check for mobile initially and attach it to the resize event
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div
            className={clsx("sticky top-0 inset-x-0 z-50 group", {
                "!fixed": isHome,
            })}
        >
            <header
                className={clsx(
                    "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
                    {
                        "!bg-white !border-gray-200": !isHome || isScrolled,
                    }
                )}
            >
                <nav
                    className={clsx(
                        "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
                        {
                            "text-white group-hover:text-gray-900": isHome && !isScrolled,
                        }
                    )}
                >
                    <div className="flex-1 basis-0 h-full flex items-center">

                    </div>

                    <div className="flex items-center justify-center">
                        <Link href="/" className={clsx("font-mono", { "text-xl": isMobile, }, { "text-2xl": !isMobile, })}>
                            While you were sleeping
                        </Link>
                    </div>

                    <div className="flex-1 basis-0 h-full flex items-center justify-end">
                        {!isMobile && (<Link href="/about" className="text-xl font-mono">Über mich</Link>)}
                        {isMobile && (
                            <Link href="/about" className="text-xl font-mono px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header