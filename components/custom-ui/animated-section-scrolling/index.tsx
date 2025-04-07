"use client"
import {useIntersectionObserver} from "usehooks-ts";
import {clsx} from "clsx";
import {ComponentProps, ElementType} from "react";
import {useMergedRef} from "@/hooks/use-merged-ref";

type AnimatedSectionScrollingProps<T extends ElementType = "div"> = {
    as?: T,
    threshold?: number
} & ComponentProps<T>

export function AnimatedSectionScrolling<T extends ElementType = "section">(
    {
        className,
        threshold = 0.5,
        as,
        ref,
        ...props
    }: AnimatedSectionScrollingProps<T>) {

    const {isIntersecting, ref: ObserverRef} = useIntersectionObserver({
        threshold,
    })
    const mergedRef = useMergedRef(ObserverRef, ref)
    const Component = as || "section"

    return (
        <Component
            ref={mergedRef}
            className={clsx([
            isIntersecting ? (
                "animate-fade-up animate-once animate-duration-200 animate-delay-200 animate-ease-in "
            ) : (
                "animate-fade-down animate-once animate-duration-200 animate-delay-200 animate-ease-in !opacity-0"
            ),
            className
        ])} {...props}/>
    )
}