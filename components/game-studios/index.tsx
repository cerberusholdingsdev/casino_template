import {Image} from "@/components/custom-ui/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/custom-ui/carousel"

interface IGameStudioItem {
    id: string | number;
    src: string;
    alt: string;
}

interface GameStudioProps {
}

export function GameStudios({}: GameStudioProps) {
    const data:IGameStudioItem[] = dataGameStudios
    return (
            <Carousel autoScroll className="max-w-full">
                <CarouselContent>
                    {
                        [...data, ...data].map((i, index) => (
                            <CarouselItem key={index} className="max-w-fit px-8">
                                <Image className={"max-h-7 h-7 object-contain"} src={i.src} alt={i.alt}/>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>

    )
}

const dataGameStudios = Array.from({length: 7}).map((_, i) => (
    {
        id: (i + 1).toString(),
        src: `/images/game-studios/img_${i}.png`,
        alt: `img ${i}`
    }
))