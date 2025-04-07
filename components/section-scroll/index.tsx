import {ComponentProps, ReactNode} from "react";
import {IScrollItem, ScrollList} from "@/components/section-scroll/scroll-list";
export { SectionScrollSkeleton} from "@/components/section-scroll/section-scroll-skeleton";
import {cn} from "@/lib/utils/shadcn";


interface ISectionScrollProps extends ComponentProps<"section"> {
    imageRatio?: number;
    label?: string;
    link?: {
        href: string;
        label: string;
    }
}

export async function SectionScroll(
    {
        label,
        link,
        imageRatio,
        className,
        ...props
    }: ISectionScrollProps): Promise<ReactNode> {

    const data = await wait(2, scrollItems)
    if (!data || !data.length) return null;

    return (
        <section {...props} className={cn("w-full", className)}>
            <ScrollList
                label={label}
                link={link}
                imageRatio={imageRatio}
                className={className}
                data={data}/>
        </section>
    )
}

const titles = [
    "Jack Hammer 2",
    "Motorhead",
    "Kings of Chicago",
    "Druid Dreams",
    "Mythic Maiden",
    "Golden Shamrock",
    "Ghost Pirates",
    "Jack and the Beanstalk",
    "Fairy Tale Legends",
]

function wait<T>(seconds: number, data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, seconds * 1000);
    });
}

const scrollItems: IScrollItem[] = Array.from({
    length: 7
}, (_, i) => (
    {
        id: i.toString(),
        title: titles[i],
        image: {
            src: `/images/items/top-picks/image-${i}.jpg`,
            alt: titles[i]
        }

    }
))

