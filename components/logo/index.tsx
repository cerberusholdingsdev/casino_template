import NextImage, {ImageProps} from "next/image";
import {ComponentProps, ReactNode} from "react";
import {Image} from "@/components/custom-ui/image";
import {cn} from "@/lib/utils/shadcn";

type LogoProps = ComponentProps<typeof Image>;

export function Logo({wrapperClassName,className,...props}: LogoProps) {
    return (
        <Image priority
               showSkeleton={false}
               as={NextImage}
               wrapperClassName={cn("w-full",wrapperClassName)}
               fill
               className={cn("object-center",className)}
               objectFit={"contain"}
               src={"/logo.png"}
               alt={"logo"}
               {...props}/>
    )

}


export function LogoMobile({wrapperClassName,className,...props}: LogoProps): ReactNode {
    return (
        <Image priority
               showSkeleton={false}
               wrapperClassName={cn("w-full",wrapperClassName)}
               as={NextImage}
               fill
               className={cn("object-center",className)}
               objectFit={"contain"}
               {...props}
               src={"/logo-mobile.png"}
               alt={"logo mobile"}/>
    )
}



