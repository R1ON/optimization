import { useEffect } from "react"
import { throttle, debounce } from 'throttle-debounce';

export const Resize = () => {
    useEffect(() => {
        const handleResize = () => {
            console.log('resize')
        };

        // const throttleFunc = throttle(1000, handleResize);
        const debounceFunc = debounce(1000, handleResize);

        window.addEventListener('resize', debounceFunc)
    }, [])

    return (
        <div>Resize</div>
    )
}

