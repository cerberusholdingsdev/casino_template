"use client"
import {ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, ReactNode, Ref} from "react";
import {tv, type VariantProps} from "tailwind-variants";
import {useImageRefLoader} from "@/hooks/use-image-loader";
import {Skeleton} from "@/components/ui/skeleton";
import {useMergedRef} from "@/hooks/use-merged-ref";
import {cn} from "@/lib/utils/shadcn";

const roundedSizes = {
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "full": "rounded-full",
    none: "rounded-none "
}

const img = tv({
    base: " transition-opacity duration-200 ",
    variants: {
        rounded: roundedSizes
    },
    defaultVariants: {
        rounded: "md"
    },
    compoundVariants: []
});

type ImgVariants = VariantProps<typeof img>

type PolymorphicRef<T extends ElementType> = Ref<ComponentPropsWithRef<T>["ref"]>

export type CustomImgProps<T extends ElementType = "img"> = ImgVariants & {
    wrapperClassName?: string;
    showSkeleton?: boolean;
    as?: T;
    hoverZoom?: boolean;
    ref?:PolymorphicRef<T>
} & ComponentPropsWithoutRef<T>;

function Image<T extends ElementType = "img">(props: CustomImgProps<T>): ReactNode {
    const {
        as,
        hoverZoom,
        ref:ImageRef,
        showSkeleton = true,
        className,
        wrapperClassName,
        color,
        rounded = "md",
        ...rest
    } = props
    let {isLoading,ref} = useImageRefLoader()

    const mergedRef = useMergedRef(ImageRef,ref)
    const Component = as || "img";

    return (
        <figure className={cn([
            "relative overflow-hidden group",
            roundedSizes[rounded || "none"],
            wrapperClassName]
        )}>
            {isLoading && showSkeleton && (
                <Skeleton className={cn(
                              roundedSizes[rounded || "none"],
                              "inset-0 absolute"
                          )}/>
            )}
            <Component ref={mergedRef}
                       className={cn(
                           img({rounded}),
                           className,
                           isLoading && showSkeleton? "opacity-0" : "opacity-100",
                           hoverZoom && "group-hover:scale-110 transition-transform duration-300 ease-in-out"
                       )}
                       {...rest}
            />
        </figure>
    )
}

Image.displayName = "Image"


export {Image}