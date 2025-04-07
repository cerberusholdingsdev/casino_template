import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {clsx} from "clsx";
import NextLink from "next/link";
import {ComponentProps} from "react";
import {cn} from "@/lib/utils/shadcn";
import {TNavigationData} from "@/lib/config/navigation";

type NavAuthProps = {
    open?: boolean;
    data: TNavigationData["auth"]
} & ComponentProps<typeof SidebarMenu>

export function NavAuth(
    {
        open,
        data,
        className,
        ...props
    }: NavAuthProps) {

    return (
        <SidebarGroup className={clsx("pl-2.5 transition-discrete duration-200", open && "px-6")}>
            <SidebarMenu className={cn(["gap-2", className])} {...props}>
                {
                    data?.map((item, index) => (
                        <SidebarMenuItem  key={index}>
                            <SidebarMenuButton
                                tooltip={"Sign Up"}
                                className={cn([
                                    "h-9 flex justify-center active:scale-[0.99]",
                                    index === 0 ? "bg-primary hover:bg-primary/80 active:bg-primary/70" : "border"
                                ])}
                                asChild>
                                <NextLink href={item.href}>
                                    <item.icon/>
                                    <span className={clsx(!open && "hidden transition-all duration-300")}>
                                        {item.label}
                                    </span>
                                </NextLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))
                }
            </SidebarMenu>
        </SidebarGroup>
    )
}
