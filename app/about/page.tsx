'use client';
import React from 'react';
import { useEffect, useState } from "react";
import clsx from "clsx";


export default function About() {
    const [isMobile, setIsMobile] = useState(false)

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
        <div className={clsx({"max-w-[90%]": isMobile,}, {"max-w-[70%]": !isMobile,})}>
            <h1 className='font-bold text-4xl mb-5'>Welcome to the official homepage of Andreas Krennbauer</h1>
            <p className='text-large mb-4'>Your gateway to the captivating world of visual art.</p>
            <p className='text-large mb-4'>We are thrilled to present an exquisite exhibition featuring the remarkable talent of Vienna-based artist Christoph Klinger. In this collection, we invite you to embark on a mesmerizing journey through the heart of Vienna, as seen through the lens of &quot;While You Were Sleeping&quot;.</p>
            <p className='text-large mb-4'>Christoph Klinger, a visionary photographer renowned for his unique perspective, has captured Vienna in a way that is nothing short of magical. This exhibition showcases 12 stunning photographs of the city&apos;s most iconic buildings illuminated under the enchanting cloak of night. Klinger&apos;s masterful artistry is on full display, as he unveils a side of Vienna that few have the privilege to witness.</p>
            <p className='text-large mb-4'>The collection is aptly named &quot;While You Were Sleeping&quot;, which hints at the mysterious allure of the nocturnal cityscape. These images, taken from the vantage point of various rooftops, offer a perspective that is both otherworldly and intimately familiar. Vienna&apos;s architectural landmarks, bathed in the soft glow of streetlights and the moon, come to life in a way that is both dramatic and poetic.</p>
            <p className='text-large mb-4'>Each photograph in this series is a testament to Klinger&apos;s dedication and expertise, as he masterfully balances light and shadow, composition and mood, to reveal the true spirit of these buildings and their surroundings. From the majestic silhouette of St. Stephen&apos;s Cathedral to the modern elegance of the Wiener Riesenrad, Klinger&apos;s work captures the city&apos;s history, grandeur, and its vibrant energy.</p>
            <p className='text-large mb-4'>This online exhibition is a celebration of Christoph Klinger&apos;s unique vision and his ability to convey the soul of Vienna through his lens. We invite you to explore this captivating collection, immerse yourself in the beauty of Vienna by night, and appreciate the artistry of &quot;While You Were Sleeping&quot;.</p>
            <p className='text-large mb-10'>Thank you for visiting our website and being a part of this journey into the heart of Vienna. We hope you find inspiration and delight in the remarkable work of Christoph Klinger. Should you have any inquiries or wish to acquire one of these exceptional pieces, please do not hesitate to contact us. Enjoy your exploration of this extraordinary world of visual art.</p>
        </div>
    )
}