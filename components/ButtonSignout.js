"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const ButtonSignout = () => {

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" })
    }
    return (
        <Button onClick={handleSignOut}>
            signout
        </Button>
    )
}

export default ButtonSignout
