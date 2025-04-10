import {
    Crown,
    Dices,
    Gift,
    GalleryVerticalEnd,
    UserRoundPlus,
    LogInIcon,
    LifeBuoy,
    Send,
    Wallet,
    Text,
    Search,
    Play,
    Sparkles,
    BadgeCheck,
    CreditCard,
    Bell,
    SquareUserRound,
    LogOut
} from "lucide-react";
import {Logo} from "@/components/logo";

export type TSiteConfig = typeof siteConfig

export const siteConfig = {
    main: [
        {
            label: 'Casino',
            href: '/casino',
            icon: Crown,
        },
        {
            label: 'Live Casino',
            href: '/live-casino',
            icon: Dices,
        },
        {
            label: 'Promotions',
            href: '/promotions',
            icon: Gift,
        },
        {
            label: 'Crash Games',
            href: '/crash-games',
            icon: GalleryVerticalEnd,
        },
        {
            label: 'Loyalty Program',
            href: '/loyalty-program',
            icon: SquareUserRound,
        },
    ],
    bottomNav:{
        privet: [
            {
                label: 'Casino',
                href: '/casino',
                icon: Crown,
            },
            {
                label: 'Live Casino',
                href: '/live-casino',
                icon: Search,
            },
            {
                label: 'Promotions',
                href: '/promotions',
                icon: Play,
            },
            {
                label: 'Loyalty Program',
                href: '/loyalty-program',
                icon:Wallet,
            },
            {
                label: 'Loyalty Program',
                href: "menu",
                icon: Text,
            },
        ],
        public: [
            {
                label: 'Casino',
                href: '/casino',
                icon: Crown,
            },
            {
                label: 'Live Casino',
                href: '/live-casino',
                icon: Search,
            },
            {
                label: 'Crash Games',
                href: '/crash-games',
                icon: UserRoundPlus,
            },
            {
                label: 'Loyalty Program',
                href: '/loyalty-program',
                icon: Text,
            },
        ],
    },
    auth: [
        {
            label: 'Sign Up',
            href: '/sign-up',
            icon: UserRoundPlus,
        },
        {
            label: 'Log In',
            href: '/login',
            icon: LogInIcon,
        },
    ],
    user: {
        items:[
            {
                label: 'Deposit',
                href: '/',
                icon: Wallet,
            }
        ],
        menu: [
            [
                {
                    label: 'Upgrade to Pro',
                    href: '/',
                    icon: Sparkles,
                },
            ],
            [
                {
                    label: 'Account',
                    href: '/',
                    icon: BadgeCheck,
                },
                {
                    label: 'Billing',
                    href: '/',
                    icon: CreditCard,
                },
                {
                    label: 'Notifications',
                    href: '/',
                    icon: Bell,
                },
            ],
            [
                {
                    label: ' Log out',
                    href: '/',
                    icon: LogOut,
                },
            ]
        ],
    },
    actions:{
        public:[
            {
                label: 'Help',
                href: '/',
                icon: LifeBuoy,
            },
        ],
        private:[
            {
                label: 'Help',
                href: '/',
                icon: LifeBuoy,
            },
            {
                label: 'Message',
                href: '/',
                icon: Send,
            },
        ]
    },
    navBarHeader:{
        logo:{
            href:"/",
            icon: Logo,
        },
        menuButton:{
            icon:Text
        }
    }
}