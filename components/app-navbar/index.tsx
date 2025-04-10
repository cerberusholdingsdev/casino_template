"use client"
import {ComponentProps, ReactNode, useState} from "react";
import {cn} from "@/lib/utils/shadcn";
import {Button} from "@/components/custom-ui/button";
import Link from "next/link";
import {siteConfig} from "@/lib/config/site";
import {useSidebar} from "@/components/ui/sidebar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface IAppNavbarProps extends ComponentProps<"header"> {
}

export function AppNavbar(
    {
        className
    }: IAppNavbarProps): ReactNode {
    const {toggleSidebar} = useSidebar()
    const [isAuth] = useState<boolean>(true)
    const [navigation] = useState(siteConfig.navBarHeader)
    return (
        <header className={cn([
            "block md:hidden fixed top-0 left-0 w-screen max-h-14 h-14 bg-card px-4 z-50 shadow shadow-background shadow-xs",
            className
        ])}>
            <nav className="h-full w-full flex flex-row flex-nowrap items-center  gap-3">
                <div  className="w-20 h-[1.875rem]">
                    <Link className="" href={navigation.logo.href}>
                        {<navigation.logo.icon/>}
                    </Link>
                </div>
                <div className="flex grow justify-end">
                    {isAuth && <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.avatar} alt={user.name}/>
                        <AvatarFallback
                            className="rounded-lg bg-sidebar-accent text-sidebar-foreground text-lg font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>}
                </div>
                <div>
                    <Button onClick={toggleSidebar}
                            variant={"ghost"} size={"icon"}>
                        <navigation.menuButton.icon className="size-5"/>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

const user = {
    name: "Casino Man",
    description: "Level 0",
    avatar: "/images/avatar.png",
}