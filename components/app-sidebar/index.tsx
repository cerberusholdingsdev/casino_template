"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
    SidebarProvider,
    SidebarInset
} from "@/components/ui/sidebar"


import {NavMain} from "@/components/app-sidebar/nav-main";
import {ComponentProps, useState} from "react";
import {clsx} from "clsx";
import {NavAuth} from "@/components/app-sidebar/nav-auth";
import {NavLogo} from "@/components/app-sidebar/nav-logo";
import {NavUser} from "@/components/app-sidebar/nav-user";
import {navigationData} from "@/lib/config/navigation";

export function AppSidebar({className, ...props}: ComponentProps<typeof Sidebar>) {
    const {open, isMobile} = useSidebar();
    const [navigation] = useState(navigationData)

    return (
        <Sidebar collapsible={"icon"}
                 className={clsx("border-none h-screen", className)}
                 {...props}>
            <SidebarHeader className={
                clsx(
                    "px-1.5 transition-discrete",
                    open && "px-6"
                )}>
                <SidebarTrigger/>
                <NavLogo
                    logo={"/logo.png"}
                    mobileLogo={"/logo-mobile.png"}
                    open={open}/>
            </SidebarHeader>
            <SidebarContent className={clsx("gap-3")}>
                <NavAuth
                    data={navigation.auth}
                    open={open}/>
                <NavMain
                    data={navigation.main}
                    open={open}/>
            </SidebarContent>
            <SidebarFooter className="px-0">
                <NavUser
                    isMobile={isMobile}
                    data={navigation.user}
                    user={user}
                    open={open}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}

const user = {
    name: "Casino Man",
    description: "Level 0",
    avatar: "/images/avatar.png",
}
export {
    SidebarInset,
    SidebarProvider
}