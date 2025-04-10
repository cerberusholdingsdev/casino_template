import NextImage, {ImageProps} from "next/image";
import {cn} from "@/lib/utils/shadcn";

export interface IImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    src?: ImageProps["src"];
    alt?: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
}

export function Logo(
    {
        className,
        src,
        height,
        width,
        alt,
        ...props
    }: IImageProps) {
    return (
        <NextImage priority
                   width={height || 80}
                   height={height || 30}
                   className={cn("object-center object-contain w-20 h-[1.875rem]", className)}
                   objectFit={"contain"}
                   src={src || "/logo.png"}
                   alt={alt || "logo"}
                   {...props}/>
    )

}


export function LogoMobile(
    {
        className,
        src,
        height,
        width,
        alt,
        ...props
    }:IImageProps) {
    return (
        <NextImage priority
                   width={height || 30}
                   height={height || 30}
                   className={cn("object-center object-contain size-[1.875rem]", className)}
                   objectFit={"contain"}
                   src={src || "/logo-mobile.png"}
                   alt={alt || "logo"}
                   {...props}/>
    )
}



