import {Card, CardContent} from "@/components/custom-ui/card";
import {Image} from "@/components/custom-ui/image";
import NextImage from "next/image";
import {HighlightText, type THighlightText} from "@/components/custom-ui/highlight-text";

export interface IPaymentData {
    title?: THighlightText
    paymentMethods?: {
        id: string;
        imageUrl: string
    }[]
    cryptoMethods?: {
        id: string;
        imageUrl: string
    }[]
}

export function Payments() {
    const data: IPaymentData = paymentsData
    return (
        <Card className="border-none p-0">
            <CardContent className="p-8">
                <div
                    className={"flex gap-8 flex-col xl:flex-row  xl:flex-nowrap items-center justify-center lg:justify-between "}>
                    {data.title && (
                        <div className="gap-1 flex-wrap flex w-full justify-center lg:w-max">
                            <HighlightText size={"3xl"}
                                           suffix={data.title.suffix}
                                           text={data.title.text}
                                           highlight={data.title.highlight}/>
                        </div>)}
                    {data.paymentMethods && (
                        <div className="flex gap-6 flex-wrap lg:flex-nowrap justify-center">
                            {data.paymentMethods.map(i => (
                                <Image
                                    as={NextImage}
                                    height={24}
                                    width={55}
                                    key={i.id}
                                    src={i.imageUrl}
                                    alt={`payment-${i.id}`}
                                    className="object-contain h-5"/>
                            ))}
                        </div>)}
                    {data.cryptoMethods && (
                        <div className={"-space-x-2 flex"}>
                            {data.cryptoMethods.map(i => (
                                <Image
                                    as={NextImage}
                                    height={24}
                                    width={24}
                                    rounded={"full"}
                                    key={i.id}
                                    src={i.imageUrl}
                                    alt={`payment-${i.id}`}
                                    className="object-contain min-w-4 min-h-4 size-6"/>
                            ))}
                        </div>)}
                </div>
            </CardContent>
        </Card>
    )
}


const paymentsData = {
    title: {
        text: "",
        highlight: "€1,000+200",
        suffix: "Free Spins",
    },
    paymentMethods: Array.from({length: 5}, (_, i) => ({
        id: (i + 1).toString(),
        imageUrl: `/images/payment-methods/img_${i}.png`
    })),
    cryptoMethods: Array.from({length: 11}, (_, i) => ({
        id: (i + 1).toString(),
        imageUrl: `/images/crypto-methods/img_${i}.png`
    })),
}