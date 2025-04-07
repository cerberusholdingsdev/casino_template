import NextLink from "next/link";
import {clsx} from "clsx";
import {Image} from "@/components/custom-ui/image";
import NextImage from "next/image";
import {cn} from "@/lib/utils/shadcn";

type LogoIconProps = {
    open?: boolean;
    logo?: string;
    mobileLogo?: string;
    alt?: string;
    altMobile?: string;
}

export function NavLogo(
    {
        open,
        logo="/logo.png",
        mobileLogo="/logo-mobile.png",
        altMobile="mobile logo",
        alt="logo",
    }:LogoIconProps) {

    const className = clsx([
        "flex flex-nowrap max-h-16 w-full !h-[4.5rem]",
    ])
    return (
        <NextLink className={className} href={"/"}>
            <Image showSkeleton={false}
                   priority
                   as={NextImage}
                   wrapperClassName={cn("transition-discrete duration-300 w-0", !open && "w-11")}
                   fill
                   className={cn("object-center",className)}
                   objectFit={"contain"}
                   src={mobileLogo}
                   alt={altMobile}/>
            <Image showSkeleton={false}
                   priority
                   as={NextImage}
                   wrapperClassName={cn("transition-discrete duration-300 w-0",open && "w-full")}
                   fill
                   className={cn("object-center",className)}
                   objectFit={"contain"}
                   src={logo}
                   alt={alt}/>
        </NextLink>


    )
}