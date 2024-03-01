/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import config from "@/config";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const ButtonSignin = ({ text = "Get started" }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push(config.auth.callbackUrl);
    } else {
      router.push(config.auth.loginUrl)
    }
  };

  if (status === "authenticated") {
    return (
      <Link
        href={config.auth.callbackUrl}
        className='gap-2 bg-primary h-10 rounded-md px-8 text-lg font-semibold text-primary-foreground shadow hover:bg-primary/90 capitalize inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
      >
        {session.user?.image ? (
          <img
            src={session.user?.image}
            alt={session.user?.name || "Account"}
            className="w-6 h-6 rounded-full shrink-0"
            referrerPolicy="no-referrer"
            width={24}
            height={24}
          />
        ) : (
          <span className="w-6 h-6 flex justify-center items-center rounded-full shrink-0">
            {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
          </span>
        )}
        {/* {session.user?.name || session.user?.email || "Account"} */}
        dashboard
      </Link>
    );
  }

  return (
    <>
      <Button size="xl" onClick={handleClick}>
        {text}
      </Button>
    </>
  );
};

export default ButtonSignin;
