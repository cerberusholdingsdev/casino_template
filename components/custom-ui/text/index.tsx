import {ElementType, HTMLAttributes, ReactNode} from "react";
import clsx from "clsx";
import {tv, type VariantProps} from "tailwind-variants";
import {cn} from "@/lib/utils/shadcn";

export const text = tv({
    base: "",
    variants: {
        weight: {
            none: "",
            thin: "font-thin",
            extralight: "font-extralight",
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extrabold: "font-extrabold",
            black: "font-black",
        },
        color: {
            none: "",
            default: "text-foreground",
            primary: 'text-primary',
            secondary: 'text-secondary',
            accent: 'text-accent',
            neutral: 'text-neutral',
            info: 'text-info',
            success: 'text-success',
            warning: 'text-warning',
            error: 'text-error',
        },
        size: {
            none: "",
            xs: "text-xs",
            sm: 'text-sm/3.5',
            md: 'text-base/4',
            lg: 'text-lg/5',
            xl: 'text-xl',
            "2xl": 'text-2xl/6',
            "3xl": 'text-3xl/8',
            "4xl": 'text-4xl/9',
            "5xl": 'text-5xl',
            "6xl": 'text-6xl',
            "7xl": 'text-7xl',
            "8xl": 'text-8xl',
            "9xl": 'text-9xl',
        },
        isItalic:{
            true: "italic"
        }
    },
    defaultVariants: {
        size: 'md',
        color: 'default',
        weight:"normal"
    },

});

type TextVariants = VariantProps<typeof text>

interface TextProps<T extends ElementType> extends TextVariants {
    as?: T;
    children?: ReactNode;
    className?:string
}

function Text <T extends ElementType = "p">(
    {
        size,
        weight,
        color,
        isItalic,
        children,
        as,
        className,
    }: TextProps<T>): ReactNode {

    const Component = as || "p";
    return (
        <Component className={cn(
            [
                text({size, color, weight, isItalic}),
                className,
            ]
        )}
        >
            {children}
        </Component>
    );
};

Text.displayName = "Text";
export {Text};