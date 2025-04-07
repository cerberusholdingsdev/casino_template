import {
    Crown,
    Dices,
    Gift,
    GalleryVerticalEnd,
    BookmarkCheck,
    UserRoundPlus,
    LogInIcon,
    LifeBuoy,
    Send
} from "lucide-react";

export type TNavigationData = typeof navigationData

export const navigationData = {
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
            icon: BookmarkCheck,
        },
    ],
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
    user: [
        {
            label: 'Support',
            href: '/',
            icon: LifeBuoy,
        },
        {
            label: 'Message',
            href: '/',
            icon: Send,
        },
    ]
}