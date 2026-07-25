import { useEffect } from 'react'

export function useClickOutside(ref, callback) {
    useEffect(() => {
        const handler = (e) => {
            if (!ref.current?.contains(e.target)) {
                callback()
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [ref, callback])
}