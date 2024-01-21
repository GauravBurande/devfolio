"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const ButtonSignout = () => {

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" })
    }
    return (
        <Button onClick={handleSignOut}>
            Signout
        </Button>
    )
}

export default ButtonSignout
