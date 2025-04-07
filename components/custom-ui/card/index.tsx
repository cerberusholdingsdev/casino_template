import {
    Card as UICard,
    CardContent as UICardContent,
    CardDescription as UICardDescription,
    CardFooter as UICardFooter,
    CardHeader as UICardHeader,
    CardTitle as UICardTitle,
} from "@/components/ui/card"
import {ComponentProps} from "react";
import {cn} from "@/lib/utils/shadcn";



function Card ({className,...props}:ComponentProps<typeof UICard>){
    return (<UICard {...props} className={cn(["border-none",className])}/>)
}
export {
    Card,
    UICardContent as CardContent,
    UICardDescription as CardDescription,
    UICardFooter as CardFooter,
    UICardHeader as CardHeader,
    UICardTitle as CardTitle,
}