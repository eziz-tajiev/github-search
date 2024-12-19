'use client'

import React from "react";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";


export default function LayoutContainer({children}: {children: React.ReactNode}) {
    const { resolvedTheme, setTheme } = useTheme();


    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    )
}