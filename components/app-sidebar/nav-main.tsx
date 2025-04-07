"use client"

import {TNavigationData} from "@/lib/config/navigation";
import {SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import NextLink from "next/link";
import {ComponentProps} from "react";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {cn} from "@/lib/utils/shadcn";

type NavMainProps = {
    open?: boolean;
    data:TNavigationData["main"]
} & ComponentProps<typeof SidebarMenu>

export function NavMain({open,data, className, ...props}: NavMainProps) {
    const pathName = usePathname()

    return (
        <SidebarGroup className={clsx("transition-discrete duration-200 pl-2.5",open && "px-6")}>
            <SidebarMenu
                {...props}
                className={cn("gap-4", className)}>
                {data?.map((link, index) => (
                    <SidebarMenuItem className={"flex active:scale-[0.99] transition-transform duration-75"}
                                     key={index.toString()}>
                        <SidebarMenuButton tooltip={link.label} isActive={pathName === link.href} asChild>
                            <NextLink href={link.href}>
                                <link.icon/>
                                <span className="block overflow-hidden text-nowrap line-clamp-1">
                                  {link.label}
                            </span>
                            </NextLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>

    )
}