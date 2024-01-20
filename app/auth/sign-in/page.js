import Link from "next/link"
import { UserAuthForm } from "@/components/UserAuthForm"
import { Button } from "@/components/ui/button"
import config from "@/config"
import Image from "next/image"
import logo from "@/app/icon.svg";

export default function AuthenticationPage() {

    return (
        <>
            <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="/"
                    className="absolute right-4 top-4 md:right-8 md:top-8"
                >
                    {/* it was a login button from shadcn ui example */}
                    <Button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 -translate-x-1 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                                clipRule="evenodd"
                            />
                        </svg>{" "}
                        Back
                    </Button>
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-foreground dark:border-r lg:flex">
                    <div className="absolute z-10 inset-0 bg-[url(/graphic.webp)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="absolute inset-0 bg-background/20" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <div className="flex lg:flex-1">
                            <Link
                                className="flex items-center gap-1 shrink-0"
                                href="/"
                                title={`${config.appName} hompage`}
                            >
                                <Image
                                    src={logo}
                                    alt={`${config.appName} logo`}
                                    className="w-7"
                                    priority={true}
                                    width={32}
                                    height={32}
                                />
                                <span className="font-bold">{config.appName}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This webapp has saved me countless hours of work and helped me build my portfolio as a resume faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Michael Beer</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Sign In to your account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Email and password login is not cool.
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy-policy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}