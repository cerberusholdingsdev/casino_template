"use client"
import {ComponentProps, ReactNode} from "react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/custom-ui/carousel";
import {Card, CardContent, CardTitle} from "@/components/custom-ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Image} from "@/components/custom-ui/image";
import NextImage from "next/image";
import {clsx} from "clsx";
import {Button} from "@/components/custom-ui/button";
import NextLink from "next/link";
import {Text} from "@/components/custom-ui/text";
import {Skeleton} from "@/components/ui/skeleton";

export interface IScrollItem {
    id: string;
    title?: string;
    image?: {
        src: string;
        alt: string;
    };
}

interface IScrollListProps extends ComponentProps<typeof Carousel> {
    data?: IScrollItem[];
    imageRatio?: number;
    label?: string;
    link?: {
        href: string;
        label: string;
    }
}

export function ScrollList(
    {
        imageRatio = 170 / 210,
        className,
        label,
        data,
        link,
        ...props
    }: IScrollListProps): ReactNode {
    if (!data) return null;
    return (
        <div className="flex flex-col gap-6">
            {
                (label || link) && (
                    <div className="flex flex-row gap-8 items-center">
                        {label && <Text as={"h3"} weight={"semibold"}
                                        size={"lg"}>
                            {label}
                        </Text>}
                        {link && <NextLink className="ml-auto" href={link.href}>
                            <Text weight={"semibold"}
                                  as={"span"}
                                  size={"lg"}>
                                {link.label}
                            </Text>
                        </NextLink>}
                    </div>
                )
            }

            <Carousel autoplay showButtons {...props}
                      className={clsx("w-full", className)}>
                <CarouselContent className="-ml-3">
                    {
                        [...data, ...data]?.map((item, index) => (
                            <CarouselItem
                                className="w-[8.5rem] max-w-[8.5rem] md:w-44 md:max-w-44 px-3 touch-pan-x scroll-smooth scrollbar-none group"
                                key={index}>
                                <NextLink href={"/"}>
                                    <Card className="h-full w-full p-0 gap-2.5 bg-transparent">
                                        {item.image && <AspectRatio
                                            className="w-full relative bg-transparent"
                                            ratio={imageRatio}>
                                            <Image fill
                                                   hoverZoom
                                                   rounded={"lg"}
                                                   wrapperClassName={"absolute inset-0"}
                                                   className={"object-cover"}
                                                   as={NextImage}
                                                   src={item.image.src}
                                                   alt={item.image.alt}/>
                                        </AspectRatio>}
                                        <CardContent className="p-0">
                                            <CardTitle
                                                className="text-card-secondary text-sm  font-normal overflow-hidden text-nowrap text-ellipsis">
                                                {item.title}
                                            </CardTitle>
                                        </CardContent>
                                    </Card>
                                </NextLink>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}
