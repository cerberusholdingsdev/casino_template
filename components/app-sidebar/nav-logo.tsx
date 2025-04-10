import NextLink from "next/link";
import {cn} from "@/lib/utils/shadcn";
import {Logo,LogoMobile} from "@/components/logo";

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
        logo = "/logo.png",
        mobileLogo = "/logo-mobile.png",
        altMobile = "mobile logo",
        alt = "logo",
    }: LogoIconProps) {


    return (
        <NextLink className={cn([
            "flex flex-nowrap max-h-[4.5rem] w-[6.875rem] m-auto  !h-[4.5rem] items-center w-full justify-center",
        ])} href={"/"}>
            <LogoMobile
                height={32}
                width={32}
                priority
                className={cn([
                    "transition-discrete duration-100  object-center !size-8",
                    open && "!w-0",
                ])}
                src={mobileLogo}
                alt={altMobile}/>
            <Logo
                width={110}
                height={40}
                priority
                className={cn([
                    "transition-discrete duration-100  object-center !w-[6.875rem] !h-10",
                    !open && "!w-0",
                ])}
                src={logo}
                alt={alt}/>

        </NextLink>


    )
}