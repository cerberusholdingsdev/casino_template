import {Card, CardContent, CardDescription} from "@/components/custom-ui/card";
import {ReactNode} from "react";

import {Button} from "@/components/custom-ui/button";
import NextLink from "next/link";
import {MoveRight} from "lucide-react";
import {PromoSlider, TSliderItem} from "@/components/promo-with-slider/promo-slider";
import {HighlightText, type THighlightText} from "@/components/custom-ui/highlight-text";
import {Text} from "@/components/custom-ui/text";

interface IPromoSliderData {
    items?: TSliderItem[];
    title?: THighlightText;
    description?: string;
    link?: {
        href: string;
        label: string;
    }
}

export async function PromoWithSlider(): Promise<ReactNode> {

    const data: IPromoSliderData = promoSliderData

    return (
        <Card className="p-0 gap-0 flex flex-col lg:flex-row ">
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-8 py-14 lg:py-6">
                <CardContent
                    className="flex flex-col items-center max-w-md m-auto space-y-8 min-h-[74%] lg:items-start lg:m-0">
                    {
                        data.title && (
                            <HighlightText
                                {...data.title}
                                color={"none"}
                                className="text-center lg:text-start"/>
                        )
                    }
                    {
                        data.description && (
                            <Text size={"lg"}
                                  className={"text-card-foreground text-center lg:text-start"}
                                  color={"none"}
                                  as={CardDescription}>
                                {data.description}
                            </Text>
                        )}
                    {
                        data.link && (
                            <Button className="w-full max-w-3/4 lg:w-fit" asChild>
                                <NextLink href={data.link.href}>
                                    <span>
                                        {data.link.label}
                                    </span>
                                    <MoveRight/>
                                </NextLink>
                            </Button>
                        )
                    }
                </CardContent>
            </div>
            <div className="w-full lg:w-1/2">
                <PromoSlider data={data.items}/>
            </div>
        </Card>
    )
}


const sliders: TSliderItem[] = [...Array.from({length: 3}).map((i, index) => (
    {
        title: "Unlock Your Exclusive VIP Status – Up to €2,000",
        description: "High-stakes player? Step into our VIP experience with a tailor-made bonus package and luxury perks.",
        image: {
            src: "/images/promo-slider.png",
            alt: "Unlock Your"
        }
    }
))]

const promoSliderData = {
    items: sliders,
    title: {
        text: "100% Welcome Bonus up to",
        highlight: "€1,000 + 200",
        suffix: "Free Spins"
    },
    description: " Double your first deposit and kick off your journey with a massive edge. Your lucky streak starts here.",
    link: {
        href: "/",
        label: "Get Started"
    }
}