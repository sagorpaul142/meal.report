"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import "remixicon/fonts/remixicon.css"
import './globals.css'
import {useEffect, useState} from "react";
import {Inter} from 'next/font/google'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    const [mobileView, setMobileView] = useState(false)
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
    }, [])
    return (
        <html lang="en">
        <body className={mobileView ? `${inter.className} mobile-nav-active` : inter.className}>
        <>
            <Header mobileView={mobileView} setMobileView={setMobileView}/>
            {children}
            <Footer/>
        </>
        </body>
        </html>
    )
}
