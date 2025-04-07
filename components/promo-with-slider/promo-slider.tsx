"use client"
import {CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardDescription, CardTitle} from "@/components/custom-ui/card";
import {Image} from "@/components/custom-ui/image";
import {Carousel, CarouselPagination} from "@/components/custom-ui/carousel";
import {useEffect, useState} from "react";
import NextImage from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";

export type TSliderItem = {
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    }
}
export type PromoSliderProps = {
    data?: TSliderItem[]
}

export function PromoSlider(
    {data}: PromoSliderProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    if (!data) return null;
    return (
        <Carousel setApi={setApi}
                  opts={{dragFree: false}}
                  className="w-full max-w-full overflow-hidden rounded-lg">
            <CarouselContent>
                {data.map((item, index) => {
                    return (
                        <CarouselItem key={index}>
                            <Card className="p-0 gap-0">
                                {
                                    item.image && (
                                        <Image hoverZoom
                                               fill
                                               wrapperClassName={"h-full w-full h-[22rem]"}
                                               objectFit={"cover"}
                                               alt={item.image.alt}
                                               as={NextImage}
                                               rounded={"lg"}
                                               src={item.image.src}/>)
                                }
                                <CardContent className="max-w-md lg:max-w-full m-auto space-y-8  lg:space-y-2 bg p-8">
                                    <CardTitle className="text-3xl/7 font-bold text-center lg:text-start">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription
                                        className="text-sm/4 text-center lg:text-start text-card-foreground">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CardContent className="w-full px-8 pb-32 lg:pb-8 flex justify-center lg:justify-between">
                <CarouselPagination length={count} current={current}/>
                <div className="space-x-2 hidden lg:block">
                    <CarouselPrevious variant={"outline"}
                                      className="static size-6 border-2 translate-x-0 translate-y-0"/>
                    <CarouselNext variant={"outline"}
                                  className="static size-6 border-2 translate-x-0 translate-y-0"/>
                </div>
            </CardContent>
        </Carousel>
    )
}