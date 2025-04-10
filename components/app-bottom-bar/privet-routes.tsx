import {clsx} from "clsx";
import {Button} from "@/components/custom-ui/button";
import NextLink from "next/link";
import {TSiteConfig} from "@/lib/config/site";

interface IPublicRoutesProps{
    routes:TSiteConfig["bottomNav"]["privet"]
    toggleSidebar:()=>void;
    pathName:string
}
export function PrivetRoutes (
    {
        routes,
        pathName,
        toggleSidebar
    }:IPublicRoutesProps){
return (
    <>
        {
            routes.map((item, index) => {
                const isActive = item.href === pathName
                const isMiddleItem = index === 2
                const isLast = index === (routes.length - 1)

                return (
                    <li className={clsx(
                        [
                            "flex justify-center basis-1/5 py-2 relative after:transition-all after:duration-300",
                            isActive && "after:absolute after:top-0 after:w-[61%] after:-translate-x-0 after:h-1 after:rounded-b-md after:bg-primary"
                        ])}
                        key={index}>
                        <div className={clsx([
                            "h-full",
                            isMiddleItem && "aspect-square"
                        ])}>
                            <Button variant={isMiddleItem ? "default" : "ghost"}
                                    onClick={isLast ? toggleSidebar : undefined}
                                    asChild={!isLast}
                                    className={clsx([
                                        "h-full w-full rounded-lg",
                                        !isMiddleItem && "!bg-transparent",
                                    ])}>
                                {
                                    isLast ? (
                                        <item.icon className={"size-6"}
                                                   size={24}/>
                                    ) : (
                                        <NextLink className="flex justify-center items-center h-full w-full"
                                                  href={item.href}>
                                            <item.icon className={"size-6"}
                                                       size={24}/>
                                        </NextLink>
                                    )
                                }
                            </Button>
                        </div>
                    </li>
                )
            })
        }
    </>
)
}