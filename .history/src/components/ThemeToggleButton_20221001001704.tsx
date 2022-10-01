import React, {useEffect, useState} from 'react'

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
        return 'light'
    })
    const toogleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'ligth'
        localStorage.setItem('theme', t)
        setTheme(t)
    }
    useEffect(() => {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.remove('dark')
        } else {
            root.classList.add('dark')
        }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? (
        <div className='inline-flex'></div>
    ) : (<div />)
}