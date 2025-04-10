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
    ChevronRight,
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
import {Text} from "@/components/custom-ui/text";


type NavUserProps = {
    open?: boolean;
    isMobile?: boolean;
    data: TSiteConfig["user"];
    user: {
        name: string
        description: string
        avatar: string
    }
} & ComponentProps<typeof SidebarMenu>

export function NavUser(
    {
        data,
        open,
        isMobile,
        user,
        className,
        ...props
    }: NavUserProps) {

    return (
        <SidebarGroup className={clsx("transition-discrete duration-200 pl-2.5", open && "px-6")}>
            <SidebarMenu className={cn(["gap-2", className])} {...props}>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-sidebar-foreground text-sidebar"
                            >
                                <UserInfo name={user.name} description={user.description} avatar={user.avatar} />
                                <ChevronRight className="ml-auto size-4"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] border-sidebar-accent min-w-56 rounded-lg"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <UserInfo name={user.name} description={user.description} avatar={user.avatar} />
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-sidebar-accent"/>
                            {
                                data?.menu.map((i, n) => (
                                    <Fragment key={n}>
                                        <DropdownMenuGroup>
                                            {
                                                i.map((j, m) => (
                                                    <DropdownMenuGroup key={m}>
                                                        <DropdownMenuItem asChild>
                                                            <Link href={j.href}>
                                                                <j.icon/>
                                                                <span>
                                                                      {j.label}
                                                                </span>
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuGroup>
                                                ))
                                            }
                                        </DropdownMenuGroup>
                                        {
                                            (n<data.menu.length - 1) && <DropdownMenuSeparator className="bg-sidebar-accent"/>
                                        }
                                    </Fragment>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
                {
                    data?.items.map((item, index) => (
                        <SidebarMenuItem  key={index}>
                            <SidebarMenuButton
                                tooltip={"Sign Up"}
                                className={cn([
                                    "h-9 flex justify-center active:scale-[0.99]",
                                     "bg-primary hover:bg-primary/80 active:bg-primary/70"
                                ])}
                                asChild>
                                <NextLink href={item.href}>
                                    <item.icon/>
                                    <span className={cn(!open && "hidden transition-all duration-300")}>
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

interface IUserInfoProps {
    avatar:string;
    name: string;
    description: string;
}

function UserInfo (
    {
        avatar,
        name,
        description,
    }:IUserInfoProps){
    const fallbackText  = name[0]
    return (
        <>
            <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatar} alt={name}/>
                <AvatarFallback className="rounded-lg bg-sidebar-accent text-sidebar-foreground text-lg font-bold">
                    {fallbackText}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <Text
                    size={"sm"}
                    weight={"semibold"}
                    as="span"
                    color={"none"}
                    className="truncate">
                    {name}
                </Text>
                <Text
                    size={"xs"}
                    as="span"
                    color={"none"}
                    className="truncate">
                    {description}
                </Text>
            </div>
        </>
    )
}
