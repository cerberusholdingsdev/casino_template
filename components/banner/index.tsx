import {Image} from "@/components/custom-ui/image";
import {FlexBox} from "@/components/custom-ui/flex-box";
import {Text} from "@/components/custom-ui/text";
import {Button} from "@/components/custom-ui/button";
import {clsx} from "clsx";
import NextImage from "next/image";
import {Logo} from "@/components/logo";
import {MoveRight} from "lucide-react";
import NextLink from "next/link";
import {HighlightText, type THighlightText} from "@/components/custom-ui/highlight-text";

export interface IBannerData {
    title?: THighlightText
    description?: string
    link?: {
        label: string
        href: string
    }
    images: {
        background?: {
            src: string
            alt: string
        }
        center?: {
            src: string
            alt: string
        }
        right?: {
            src: string
            alt: string
        }
    }
}

type BannerProps = {}

export async function Banner({}: BannerProps) {
    const data: IBannerData = bannerData
    return (
        <div className="relative w-full rounded-md group">
            <FlexBox align={"center"} className="relative h-full w-full lg:items-start z-10">
                <FlexBox wrap={"nowrap"}
                         space={"lg"}
                         align={"center"}
                         className="max-w-md xl:max-w-lg  px-14 py-6  lg:pt-16 lg:items-start lg:pb-24">
                    <Logo className={"block md:hidden"}/>
                    {
                        data.title && (
                            <HighlightText text={data.title.text}
                                           highlight={data.title.highlight}
                                           suffix={data.title.suffix}/>
                        )
                    }
                    {
                        data.description && (
                            <Text size={"md"} className={clsx(["text-center lg:text-start"])}>
                                {data.description}
                            </Text>
                        )
                    }
                    {
                        data.link && <Button asChild>
                            <NextLink href={data.link.href}>
                                <span>{data.link.label}</span>
                                <MoveRight/>
                            </NextLink>
                        </Button>
                    }
                </FlexBox>
                {
                    data.images.center && (
                        <div
                            className="hidden lg:block absolute h-1/2 xl:h-1/2 right-[7%] xl:right-[30%] mt-16 aspect-[45/30]">
                            <NextImage
                                {...data.images.center}
                                fill
                                className={"absolute object-center object-contain"}/>
                        </div>
                    )}
                {
                    data.images.right && (
                        <div className="hidden xl:block absolute h-[110%] right-0  aspect-[480/515]">
                            <NextImage
                                {...data.images.right}
                                fill
                                className={"absolute object-contain"}/>
                        </div>
                    )}
            </FlexBox>
            {
                data.images.background && (
                    <Image as={NextImage}
                           hoverZoom={true}
                           fill
                           className={"block  h-full w-full absolute object-contain object-cover object-bottom"}
                           wrapperClassName={"absolute inset-0"}
                           {...data.images.background}/>
                )}
        </div>
    )
}

export const bannerData = {
    title: {
        text: "100% Welcome Bonus up to",
        highlight: "€1,000 + 200",
        suffix: "Free Spins",
    },
    description: "Double your first deposit and kick off your journey with a massive edge. Your lucky streak starts here.",
    link: {
        label: "Get Started Now",
        href: "/",
    },
    images: {
        background: {
            src: "/images/banner_bg.webp",
            alt: "banner",
        },
        center: {
            src: "/images/banner_center.png",
            alt: "banner center",
        },
        right: {
            src: "/images/banner_right.png",
            alt: "banner right",
        }
    },
}
