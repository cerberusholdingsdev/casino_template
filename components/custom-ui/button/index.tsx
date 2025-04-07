import {Button as UIButton} from "@/components/ui/button";
import {ComponentProps} from "react";
import {cn} from "@/lib/utils/shadcn";

export function Button (
    {className,variant,...props}:ComponentProps<typeof UIButton>){
    return (<UIButton variant={variant} className={cn([
        "active:scale-[0.98] transition-transform duration-75",
        variant==="outline"&&"bg-transparent",
        className,
    ])} {...props}/>)
}