import {Banner} from "@/components/banner";
import {Payments} from "@/components/payments";
import {CryptoWidgetScrolling} from "@/components/crypto-widget-scrolling";
import {Promotions} from "@/components/promotions";
import {GameStudios} from "@/components/game-studios";
import {SectionScroll,SectionScrollSkeleton} from "@/components/section-scroll";
import {PromoWithSlider} from "@/components/promo-with-slider";
import {Suspense} from "react";


export default function Home() {
    return (
        <div className="flex flex-col w-full space-y-8">
            <Banner/>
            <Payments/>
            <CryptoWidgetScrolling/>
            <Promotions/>
            <GameStudios/>
            <Suspense fallback={<SectionScrollSkeleton link label/>}>
                <SectionScroll link={{label:"View All",href:"/"}} label={"Our Top Picks"}/>
            </Suspense>
            <PromoWithSlider/>
        </div>
    );
}


