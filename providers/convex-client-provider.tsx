"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading,Authenticated,ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import React from "react";
import Loading from "@/components/loading";

interface ConvexClientProviderProps{
    children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider =({children,}: ConvexClientProviderProps)=>{
    return(
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading>
                <Loading />
                </AuthLoading>
<Authenticated>
{children}
</Authenticated>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}