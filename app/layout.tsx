'use client'
import './globals.css'
import Header from './header'
import {NextUIProvider} from '@nextui-org/react'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body>
                <NextUIProvider>
                <Header />
                    <main className='flex min-h-screen flex-col items-center justify-between pt-40 px-10'>
                        {children}
                    </main>
                </NextUIProvider>
            </body>
        </html>
    )
}
