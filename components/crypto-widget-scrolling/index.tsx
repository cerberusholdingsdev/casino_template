import {FlexBox} from "@/components/custom-ui/flex-box";
import {Image} from "@/components/custom-ui/image";
import {Text} from "@/components/custom-ui/text";
import {Fragment} from "react";
import {formatNumber} from "@/lib/utils/format-number";
import {Carousel, CarouselContent, CarouselItem} from "@/components/custom-ui/carousel";
import NextImage from "next/image";

export interface CryptoMethod {
    id: string;
    imageAlt: string;
    imageUrl: string;
    title: string;
    value: string;
    code: string;
    changePercent: number;
}

export function CryptoWidgetScrolling() {
    const data:CryptoMethod[] = cryptoData

    return (
        <Carousel autoScroll className="p-4 w-full rounded-xl bg-card">
            <CarouselContent>
                {[...data, ...data].map((item, index) => (
                    <Fragment key={index}>
                        <CarouselItem className="max-w-fit w-fit p-0">
                            <FlexBox align={"center"}
                                     className="w-full h-full"
                                     wrap={"nowrap"}
                                     direction={"row"}>
                                <Image as={NextImage}
                                       fill
                                       alt={item.imageAlt}
                                       wrapperClassName={"min-w-6 min-h-6 w-6 h-6"}
                                       rounded={"full"}
                                       src={item.imageUrl}/>
                                <FlexBox className="ms-2" space={"xs"}>
                                    <Text size={"sm"}>
                                        {item.title}
                                    </Text>
                                    <Text size={"sm"} className="text-card-secondary">
                                        {item.code}
                                    </Text>
                                </FlexBox>
                                <FlexBox className="ms-6" space={"xs"}>
                                    <Text>
                                        {item.value}
                                    </Text>
                                    <Text size={"sm"}
                                          className={(item.changePercent >= 0) ? "text-success" : "text-destructive"}>
                                        {item.changePercent > 0 ? `+${item.changePercent}` : `-${Math.abs(item.changePercent)}`}%
                                    </Text>
                                </FlexBox>
                            </FlexBox>
                        </CarouselItem>
                        <CarouselItem className="!basis-auto w-fit px-6">
                            <div className={"!w-[1px] bg-card-border h-full rounded-xl"}/>
                        </CarouselItem>
                    </Fragment>
                ))}
            </CarouselContent>
        </Carousel>
    )
}


const cryptoNames = [
    "Bitcoin", "Ethereum", "Litecoin", "Ripple", "Solana",
    "Cardano", "Polkadot", "Dogecoin", "BNB", "Avalanche", "Tron"
]
const cryptoCode = [
    "BTC", "ETH", "DOGE", "SOL", "BNB",
    "BTC", "DOGE", "ETH", "BNB", "ETH", "SOL"
]

function getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cryptoData = Array.from({length: 11}, (_, i) => {
    const value = getRandomValue(10, 10_000);
    const change = getRandomValue(-500, 500);
    const changePercent = ((change / value) * 100).toFixed(2);

    return {
        id: (i + 1).toString(),
        imageAlt: `img_${i}`,
        imageUrl: `/images/crypto-methods/img_${i}.png`,
        title: cryptoNames[i],
        value: "€" + formatNumber(value),
        code: cryptoCode[i],
        changePercent: Number(changePercent)
    }
});