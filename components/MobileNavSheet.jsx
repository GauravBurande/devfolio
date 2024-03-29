import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { socialIcons } from "@/libs/constants"
import Link from "next/link"

import React from 'react'

const MobileNavSheet = ({ links, socials }) => {
    return (
        <Sheet>
            <SheetTrigger>
                <div div className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:hidden" type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="15" x2="15" y1="3" y2="21" /></svg>
                    <span className="sr-only">Toggle Menu</span>
                </div >
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetDescription>
                        <p className="font-semibold text-lg text-foreground">Links</p>
                        <div div className="flex flex-col mt-10 text-lg gap-6" >
                            {
                                links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="transition-colors w-fit capitalize mx-auto hover:text-foreground text-foreground/70"
                                        title={link.label}
                                    >
                                        <SheetClose>
                                            {link.label}
                                        </SheetClose>
                                    </Link>
                                ))
                            }
                        </div >
                        <p className="font-semibold text-lg mt-10 text-foreground">Socials</p>
                        <div className="flex flex-col mt-10 items-center gap-10">
                            {
                                socials.map((social) => (
                                    <Link href={social.value} key={social.name}>
                                        {socialIcons[social.name]}
                                    </Link>
                                ))
                            }
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavSheet
