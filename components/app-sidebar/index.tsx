"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    // SidebarRail,
    SidebarTrigger,
    useSidebar,
    SidebarProvider,
    SidebarInset,
} from "@/components/ui/sidebar"


import {NavMain} from "@/components/app-sidebar/nav-main";
import {ComponentProps, useState} from "react";
import {clsx} from "clsx";
import {NavAuth} from "@/components/app-sidebar/nav-auth";
import {NavLogo} from "@/components/app-sidebar/nav-logo";
import {NavUser} from "@/components/app-sidebar/nav-user";
import {siteConfig} from "@/lib/config/site";
import {CircleX} from "lucide-react";
import {Button} from "@/components/custom-ui/button";
import {NavActions} from "@/components/app-sidebar/nav-actions";

export function AppSidebar({className, ...props}: ComponentProps<typeof Sidebar>) {
    const {open, isMobile, toggleSidebar} = useSidebar();
    const [navigation] = useState(siteConfig)
    const [isAuth] = useState(true)

    return (
        <Sidebar collapsible={"icon"}
                 className={clsx("h-screen", className)}
                 {...props}>
            <SidebarHeader className={clsx(!isMobile && "pt-1 pb-8")}>
                {
                    !isMobile && (
                        <div className={clsx("transition-discrete duration-200", open ? "pl-2" : "pl-0 -translate-x-1")}>
                            <SidebarTrigger className=""/>
                        </div>
                    )
                }
                {
                    isMobile && <div className="flex justify-end py-3 px-4">
                        <Button variant={"link"}
                                onClick={toggleSidebar}
                                className={"!px-0 w-fit h-fit text-sidebar-foreground"}
                                size={"icon"}>
                            <CircleX className="size-5" size={20}/>
                        </Button>
                    </div>
                }

                {
                    !isMobile && <NavLogo
                        logo={"/logo.png"}
                        mobileLogo={"/logo-mobile.png"}
                        open={open}/>
                }
            </SidebarHeader>
            <SidebarContent className={clsx("gap-3")}>
                {
                    !isAuth ? (
                        <NavAuth
                            data={navigation.auth}
                            open={open}/>
                    ) : (
                        <NavUser
                            isMobile={isMobile}
                            data={navigation.user}
                            user={user}
                            open={open}/>
                    )
                }
                <NavMain
                    data={navigation.main}
                    open={open}/>
            </SidebarContent>
            <SidebarFooter className="px-0">
                <NavActions
                    isMobile={isMobile}
                    data={!isAuth ? navigation.actions.public : navigation.actions.private}
                    open={open}/>
            </SidebarFooter>
            {/*<SidebarRail/>*/}
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