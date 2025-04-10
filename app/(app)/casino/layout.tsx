import {ReactNode} from "react";
import {Banner} from "@/components/banner";
import {FlexBox} from "@/components/custom-ui/flex-box";

interface ICasinoLayoutProps {
    children?: ReactNode
}
export default function CasinoLayout (
    {children}:ICasinoLayoutProps) {
    return (
        <FlexBox space={"4xl"} className="w-full">
            <Banner/>
            {children}
        </FlexBox>
    )
}