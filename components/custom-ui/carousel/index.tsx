"use client"
import Autoplay, {type AutoplayOptionsType} from "embla-carousel-autoplay";
import {WheelGesturesPlugin, type WheelGesturesPluginOptions} from "embla-carousel-wheel-gestures";
import {clsx} from "clsx";
import {useHover} from "react-aria";
import AutoScroll, {AutoScrollOptionsType} from "embla-carousel-auto-scroll";

import {
    Carousel as UICarousel,
    CarouselNext,
    CarouselPrevious,
    CarouselItem,
    CarouselContent,
    CarouselApi
} from "@/components/ui/carousel";

import {ComponentProps, useEffect, useMemo, useState} from "react";
import {useIntersectionObserver} from "usehooks-ts";
import {cn} from "@/lib/utils/shadcn";

interface CarouselComponentProps extends ComponentProps<typeof UICarousel> {
    showButtons?: boolean;
    gesturesOptions?: WheelGesturesPluginOptions;
    autoplayOptions?: AutoplayOptionsType;
    autoscrollOptions?: AutoScrollOptionsType;
    autoplay?: boolean;
    autoScroll?: boolean;
}

function Carousel(
    {
        autoplay,
        autoScroll,
        autoscrollOptions,
        children,
        showButtons,
        autoplayOptions,
        opts,
        gesturesOptions,
        setApi,
        ...props
    }: CarouselComponentProps) {
    const {hoverProps, isHovered} = useHover({})


    const [apiLocal, setApiLocal] = useState<CarouselApi>()
    const {ref, isIntersecting} = useIntersectionObserver({threshold: 0.5})

    useEffect(() => {
        if (apiLocal){
            const addPlugins = apiLocal.plugins()
            if (isIntersecting){
                addPlugins?.autoplay?.play?.()
                addPlugins?.autoScroll?.play?.()
            }else {
                addPlugins?.autoplay?.stop?.()
                addPlugins?.autoScroll?.stop?.()
            }

        }
    }, [isIntersecting,apiLocal]);

    useEffect(() => {
        if (apiLocal && setApi){
            setApi(apiLocal)
        }
    }, [apiLocal]);

    const necessityPlugins = useMemo(() => {
        const autoPlayPlugin = autoplay ? [Autoplay({
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            ...autoplayOptions
        })] : []
        const autoScrollPlugin = autoScroll ? [AutoScroll({
            speed: 1,
            stopOnFocusIn: false,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            ...autoscrollOptions
        })] : []

        return [
            ...autoPlayPlugin,
            ...autoScrollPlugin,
            WheelGesturesPlugin({
                ...gesturesOptions
            }),
        ]
    }, [autoScroll, autoplay, isIntersecting])

    return (
        <UICarousel    {...hoverProps}
            setApi={setApiLocal}
                       ref={ref}
                       opts={{
                           loop: true,
                           dragFree: true,
                           align: "start",
                           active: true,
                           ...opts
                       }}
                       plugins={necessityPlugins}
                       {...props}>
            {children}
            {
                showButtons && (
                    <>
                        <CarouselPrevious className={clsx(!isHovered && "opacity-0", "left-0 transition-all duration-200")}/>
                        <CarouselNext className={clsx(!isHovered && "opacity-0", "right-0 transition-all duration-200")}/>
                    </>
                )
            }

        </UICarousel>
    )
}

type CarouselPaginationProps = {
    length: number;
    current: number;
} & ComponentProps<"div">
function CarouselPagination (
    {
        length,
        current,
        className,
        ...props
    }:CarouselPaginationProps){

    return (
        <div {...props} className={cn("flex gap-2 max-w-fit",className)}>
            {Array.from({length}).map((_, index) => (
                <div key={index} className={clsx([
                    "size-2 rounded-full bg-card-secondary transition-all duration-300",
                    (index + 1) === current && "bg-primary"
                ])}/>
            ))}
        </div>
    )
}

export {
    CarouselPrevious,
    CarouselPagination,
    CarouselNext,
    Carousel,
    CarouselItem,
    CarouselContent,
    type CarouselApi
}
