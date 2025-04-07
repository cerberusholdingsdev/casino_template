import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/custom-ui/card";
import {clsx} from "clsx";
import {Image} from "@/components/custom-ui/image";
import {FlexBox} from "@/components/custom-ui/flex-box";
import {Button} from "@/components/custom-ui/button";
import NextLink from "next/link";
import {MoveRight} from "lucide-react";
import {ComponentProps} from "react";
import {Text} from "@/components/custom-ui/text";
import {HighlightText} from "@/components/custom-ui/highlight-text";
import {PromoCardItem} from "@/components/promotions/index";
import NextImage from "next/image";

type PromotionCardProps = {
    isFirst?: boolean;
} & ComponentProps<typeof Card> & PromoCardItem


export function PromotionCard(
    {
        isFirst,
        className,
        image,
        link,
        overlayTitle,
        overlayDescription,
        overlayLabel,
        description,
        cardTitle,
        ...props
    }: PromotionCardProps) {

    return (
        <Card {...props} className={clsx("p-0 gap-0 h-full group", className)}>
            <CardHeader className="p-0 grow relative min-w-1/2 min-h-90 xl:min-h-72">
                {
                    image && (
                        <Image hoverZoom
                               as={NextImage}
                               fill
                               wrapperClassName="absolute inset-0"
                               rounded={"xl"}
                               className={"object-cover w-full h-full"}
                               src={image.src}
                               alt={image.alt}/>
                    )
                }

                <FlexBox space={"none"} className={"absolute z-10 justify-end h-full p-6"}>
                    <Text weight={"semibold"}
                          size={"md"}
                          color={"none"}
                          as={CardTitle}>
                        {overlayLabel}
                    </Text>
                    <Text color={"none"}
                          as={CardTitle}
                          size={"4xl"}
                          weight={"bold"}>
                        {overlayTitle}
                    </Text>
                    <Text weight={"semibold"}
                          size={"md"}
                          color={"none"}
                          as={CardTitle}>
                        {overlayDescription}
                    </Text>
                </FlexBox>
            </CardHeader>
            <CardContent className={
                clsx([
                    "flex p-8 flex-col gap-6 grow w-full max-w-lg items-center",
                    "md:items-start md:justify-center md:max-w-full m-auto",
                    isFirst && "xl:justify-start"
                ])
            }>
                {
                    cardTitle && (
                        <HighlightText
                            text={cardTitle.text}
                            suffix={cardTitle.suffix}
                            highlight={cardTitle.highlight}
                            className={"md:text-start"}/>
                    )
                }
                {
                    CardDescription && (
                        <Text color={"none"}
                              size={"lg"}
                              as={CardDescription}
                              className="text-card-foreground text-center md:text-start">
                            {description}
                        </Text>
                    )
                }

                {
                    link && (
                        <Button className="w-full max-w-2/3 md:w-fit md:max-w-fit" asChild>
                            <NextLink href={link.href}>
                                <Text as={"span"}>{link.label}</Text>
                                <MoveRight/>
                            </NextLink>
                        </Button>
                    )
                }
            </CardContent>


        </Card>)
}