import React from 'react';
import { useStore } from '@/store/useStore';

export const LanguageDropdown = () => {
    const store = useStore(state => state)
    const handleLanguageSelect = (language: string) => {
        store.setLanguage(language)
    };

    return (
        <div className="relative inline-block">
            <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                    handleLanguageSelect(e.target.value)
                }}
                defaultValue={"en"}
            >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="it">Italian</option>
            </select>
        </div>
    );
};
