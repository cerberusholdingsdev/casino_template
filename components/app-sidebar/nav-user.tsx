import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import {clsx} from "clsx";
import NextLink from "next/link";
import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LifeBuoy,
    LogOut,
    Send,
    Sparkles,
} from "lucide-react";
import {ComponentProps} from "react";
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
import {TNavigationData} from "@/lib/config/navigation";


type NavUserProps = {
    open?: boolean;
    isMobile?: boolean;
    data:TNavigationData["user"];
    user: {
        name: string
        description: string | number
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
        <SidebarGroup className={clsx("transition-discrete duration-200 pl-2.5",open && "px-6")}>
            <SidebarMenu className={cn(["gap-2", className])} {...props}>
                {
                    data?.map((i,n)=>(
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
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton
                                size="lg"
                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user.name}</span>
                                    <span className="truncate text-xs">{user.description}</span>
                                </div>
                                <ChevronsUpDown className="ml-auto size-4" />
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
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{user.name}</span>
                                        <span className="truncate text-xs">{user.description}</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-sidebar-accent"/>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Sparkles />
                                    Upgrade to Pro
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className="bg-sidebar-accent"/>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <BadgeCheck />
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard />
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Bell />
                                    Notifications
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className="bg-sidebar-accent"/>
                            <DropdownMenuItem>
                                <LogOut />
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}
