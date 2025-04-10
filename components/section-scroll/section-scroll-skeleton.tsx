import {ComponentProps, ReactNode} from "react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/custom-ui/carousel";
import {Text} from "@/components/custom-ui/text";
import {Skeleton} from "@/components/ui/skeleton";
import {clsx} from "clsx";
import {Card, CardContent} from "@/components/custom-ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";


interface ISectionScrollSkeletonProps {
    length?: number;
    imageRatio?: number;
    label?: boolean;
    link?: boolean;
    className?: string;
}

export function SectionScrollSkeleton(
    {
        length=10,
        imageRatio = 170 / 210,
        className,
        label,
        link,
        ...props
    }: ISectionScrollSkeletonProps): ReactNode {

    return (
        <div className="flex flex-col gap-6">
            {
                ( label || link) && (
                    <div className="flex flex-row gap-8 items-center">
                        {label && <Skeleton className="w-30 h-6" />}
                        {link && <Skeleton className="ml-auto w-30 h-6" />}
                    </div>
                )
            }
            <Carousel opts={{active:false}}
                      {...props}
                      className={clsx("w-full", className)}>
                <CarouselContent className="-ml-3">
                    {
                        Array.from({length})?.map((_, index) => (
                            <CarouselItem
                                className="w-[8.5rem] max-w-[8.5rem] md:w-44 md:max-w-44 px-3 touch-pan-x scroll-smooth scrollbar-none"
                                key={index}>
                                <Card className="h-full w-full p-0 gap-2.5 bg-transparent">
                                     <AspectRatio
                                        className="w-full relative bg-transparent"
                                        ratio={imageRatio}>
                                        <Skeleton className="absolute inset-0"/>
                                    </AspectRatio>
                                    <CardContent className="p-0">
                                        <Skeleton className="h-5 w-30"/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

