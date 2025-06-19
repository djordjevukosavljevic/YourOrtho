'use client';
import { format } from "path";
import { useEffect } from "react";
import '../styles/page.module.css'

export default function HomePage() {

    useEffect(() => {
        {
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        }
    }, [])

    return (
        <main>
            <h1 className="h3 text-center">Welcome</h1>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </main>
    );
}