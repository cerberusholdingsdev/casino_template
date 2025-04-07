"use client"
import {ReactNode} from "react";

interface AppProvidersProps {
    children?: ReactNode;
}

export function AppProviders ({children}:AppProvidersProps):ReactNode{

    return (
        <>
            {children}
        </>
    )
}
