import {cn} from "@/lib/utils/shadcn";
import {Text} from "../text";
import {ComponentProps} from "react";

export type THighlightText = {
    text?: string
    highlight?: string
    suffix?: string
}
type HighlightTextProps =  ComponentProps<typeof Text> & THighlightText

export function HighlightText(
    {
        text,
        highlight,
        suffix,
        className,
        size = "4xl",
        weight = "bold",
        ...rest
    }: HighlightTextProps) {
    return (
        <Text {...rest} size={size} weight={weight} className={cn("text-center lg:text-start", className)}>
            {text}
            {highlight && <span className="text-primary">
               {" "}{highlight}</span>
            }
            {" "}{suffix}
        </Text>
    )
}