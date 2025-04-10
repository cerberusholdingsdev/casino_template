"use client"
import {ComponentProps, ReactNode, useMemo, useState} from "react";
import {cn} from "@/lib/utils/shadcn";
import {siteConfig} from "@/lib/config/site";
import {usePathname} from "next/navigation";
import {useSidebar} from "@/components/ui/sidebar";
import {PublicRoutes} from "@/components/app-bottom-bar/public-routes";
import {PrivetRoutes} from "@/components/app-bottom-bar/privet-routes";

interface AppBottomBarProps extends ComponentProps<"div"> {
}

export function AppBottomBar(
    {
        className,
        ...props
    }: AppBottomBarProps
): ReactNode {
    const {toggleSidebar} = useSidebar()
    const [isAuth] = useState(true)

    const routes = useMemo(() => {
        return !isAuth ? siteConfig.bottomNav.public : siteConfig.bottomNav.privet
    }, [isAuth])

    const pathName = usePathname()

    return (
        <nav className={cn([
            "block md:hidden fixed bottom-0 left-0 w-screen rounded-none bg-card h-20 z-50 shadow shadow-background shadow-lg",
            className
        ])} {...props}>
            <ul className="flex flex-row flex-nowrap justify-between h-full">
                {
                    !isAuth ? (
                        <PublicRoutes routes={routes}
                                      pathName={pathName}
                                      toggleSidebar={toggleSidebar}/>
                    ) : <PrivetRoutes routes={routes}
                                      pathName={pathName}
                                      toggleSidebar={toggleSidebar}/>
                }

            </ul>
        </nav>
    )
}