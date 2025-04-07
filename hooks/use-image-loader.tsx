import {useEffect, useRef, useState} from "react";

function useImageRefLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const ref = useRef<HTMLImageElement | null>(null);
    const onLoad = () => setIsLoading(false);
    const onError = () => setIsLoading(false);

    useEffect(() => {
        const img = ref.current;
        if (!img) return;

        if (img.complete) {
            setIsLoading(false);
        } else {

            img.addEventListener("load", onLoad);
            img.addEventListener("error", onError);

            return () => {
                img.removeEventListener("load", onLoad);
                img.removeEventListener("error", onError);
            };
        }
    }, []);

    return { isLoading, ref };
}
export {useImageRefLoader}