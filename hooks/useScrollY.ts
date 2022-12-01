import React, {useEffect} from "react";

export const useScrollY = (): number => {
    const isBrowser = typeof window !== 'undefined';
    const [scrollY, setScrollY] = React.useState<number>(0);

    const handlerScroll = () => {
        const currentUseScrollY = isBrowser ? window.scrollY : 0;
        setScrollY(currentUseScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll, {passive: true});
        return () => window.removeEventListener('scroll', handlerScroll);
    }, []);
    return scrollY;
};