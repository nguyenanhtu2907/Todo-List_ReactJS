import { useEffect, useState } from 'react';

export const useHeightAndWidth = () => {
    const windowSizeInner = { height: window.innerHeight, width: window.innerWidth };
    const [windowSize, setWindowSize] = useState(windowSizeInner);

    useEffect(() => {
        const changWindowSize = () => {
            setWindowSize({ height: window.innerHeight, width: window.innerWidth });
        };

        window.addEventListener('resize', changWindowSize);

        return () => window.removeEventListener('resize', changWindowSize);
    }, []);

    return windowSize;
};
