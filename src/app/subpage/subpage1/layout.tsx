import type { Metadata } from "next";
import Link from "next/link";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(to bottom, #e0c3fc, #9fc5fc42)' }}>
            <div style={{ flex: '1 1 auto', overflowY: 'auto' }}>{children}</div>
            <div style={{ 
                backgroundColor: 'white', 
                padding: '10px', 
                textAlign: 'center' 
            }}>
                <Link href="/">back to home</Link>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: "subpage1",
    description: "Generated by create next app",
};