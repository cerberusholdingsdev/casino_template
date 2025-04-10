"use client"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {clsx} from "clsx";
import NextLink from "next/link";
import {
    ChevronsUpDown,
} from "lucide-react";
import {ComponentProps, Fragment} from "react";
import {cn} from "@/lib/utils/shadcn";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {TSiteConfig} from "@/lib/config/site";
import Link from "next/link";


type NavActionsProps = {
    open?: boolean;
    isMobile?: boolean;
    data: TSiteConfig["actions"]["public"] | TSiteConfig["actions"]["private"];
} & ComponentProps<typeof SidebarMenu>

export function NavActions(
    {
        data,
        open,
        isMobile,
        className,
        ...props
    }: NavActionsProps) {

    return (
        <SidebarGroup className={clsx("transition-discrete duration-200 pl-2.5", open && "px-6")}>
            <SidebarMenu className={cn(["gap-2", className])} {...props}>
                {
                    data?.map((i, n) => (
                        <SidebarMenuItem key={n}>
                            <SidebarMenuButton
                                tooltip={i.label}
                                className={"h-9 active:scale-[0.99]"}
                                asChild>
                                <NextLink href={"/"}>
                                    <i.icon/>
                                    <span>{i.label}</span>
                                </NextLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))
                }
            </SidebarMenu>
        </SidebarGroup>
    )
}
