import React, {useState} from 'react'

const themes = ['light', 'dark']

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(() => {
        if(import.meta.env.SSR) {
            return undefined
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem(
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme: dark').matches)
            return 'dark'
}