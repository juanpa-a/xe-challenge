import React, { ReactNode } from 'react';
import { LanguageDropdown } from './languegeDropdown';
import Link from 'next/link';

type Props = {
    children: ReactNode;
}

export const Template = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">

            <header className="bg-indigo-800 text-white p-4 flex justify-between items-center">
                <Link href={"/"}>
                    <h2 className="text-6xl font-bold mb-4">XE News</h2>
                </Link>
                <LanguageDropdown />
            </header>

            <main className="flex-grow container mx-auto py-4 px-24">
                {children}
            </main>

            <footer className="bg-indigo-800 text-white p-4 flex justify-center items-center">
                <p>Made with 💜 by me.</p>
            </footer>
        </div>
    );
};
