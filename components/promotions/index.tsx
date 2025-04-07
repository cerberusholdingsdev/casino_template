import {PromotionCard} from "@/components/promotions/promo-card";
import {clsx} from "clsx";
import type {THighlightText} from "@/components/custom-ui/highlight-text";


export interface PromoCardImage {
    src: string
    alt: string
}
export interface PromoCardLink {
    label: string
    href: string
}

export interface PromoCardItem {
    link?: PromoCardLink
    image?: PromoCardImage
    cardTitle?: THighlightText
    overlayTitle?: string
    overlayLabel?: string
    overlayDescription?: string
    description?: string
}

export function Promotions() {
    const data:PromoCardItem[] = promoData
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-8 auto-rows-auto md:auto-rows-fr h-auto">
            {
                data.map((item, index) => {
                    const isFirst = index === 0
                    return (
                        <div key={index} className={clsx([
                            isFirst ? "row-span-1 xl:row-span-2" : "h-full"
                        ])}>
                            <PromotionCard
                                isFirst={isFirst}
                                className={
                                    clsx([
                                       isFirst? (
                                           "flex-col md:flex-row xl:flex-col"
                                           ) :(
                                               "flex-col md:flex-row"
                                       )
                                    ])
                                }
                                overlayTitle={item.overlayTitle}
                                overlayLabel={item.overlayLabel}
                                overlayDescription={item.overlayDescription}
                                cardTitle={{...item.cardTitle}}
                                description={item.description}
                                link={item.link}
                                image={item.image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

const promoData = [
    {
        link: {
            label: "Get Started",
            href: "/"
        },
        image: {
            alt: "imageAlt",
            src: "/images/promotions/queen_of_fire.png",
        },
        cardTitle: {
            text: "100% Welcome Bonus up to",
            highlight: "€1,000 + 200",
            suffix: "Free Spins"
        },
        overlayTitle: "Queen of fire",
        overlayLabel: "New Game",
        overlayDescription: "Relax Gaming",
        description: "Double your first deposit and kick off your journey with a massive edge. Your lucky streak starts here."
    },
    {
        link: {
            label: "Jump In Now",
            href: "/"
        },
        image: {
            alt: "imageAlt",
            src: "/images/promotions/jackpots.png",
        },
        cardTitle: {
            text: "€3,674,899.43 Pine of Plinko",
        },
        description: "Jump straight into the action and grab your chance to win big."
    },
    {
        link: {
            label: "Go To Games Lobby",
            href: "/"
        },
        image: {
            alt: "imageAlt",
            src: "/images/promotions/casino.png",
        },
        cardTitle: {
            text: "New Slots of the week...!",
        },
        description: "Check out the last Relax Gaming slot Top Dwags!"
    },

]