import {ComponentProps, ElementType, FC, HTMLAttributes, HTMLProps, ReactNode} from "react";
import {tv, type VariantProps} from "tailwind-variants";
import {clsx} from "clsx";


const flexBox = tv({
    base: "flex",
    variants: {
        direction: {
            row: "flex-row",
            col: "flex-col",
            "row-reverse": "flex-row-reverse",
            "col-reverse": "flex-col-reverse",
        },
        space: {
            none: "gap-0",
            xxs: "gap-0.5",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-10",
            "3xl": "gap-12",
            "4xl": "gap-14",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        wrap: {
            wrap: "flex-wrap",
            nowrap: "flex-nowrap",
            "wrap-reverse": "flex-wrap-reverse",
        },
        fullWidth: {
            true: "w-full",
        },
    },
    defaultVariants: {
        direction: "col",
        space: "sm",
        wrap: "wrap",
    },
});

// Типы
type FlexBoxVariants = VariantProps<typeof flexBox>;

interface FlexBoxProps extends FlexBoxVariants, ComponentProps<"div"> {
    as?: ElementType;
    children?: ReactNode;
}

const FlexBox: FC<FlexBoxProps> = (
    {
        direction,
        space,
        align,
        justify,
        wrap,
        fullWidth = true,
        className,
        children,
        as: Component = "div",
        ...props
    }) => {

    return (
        <Component
            className={clsx(
                flexBox({direction, space, align, justify, wrap, fullWidth}),
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

FlexBox.displayName = "FlexBox";
export {FlexBox};