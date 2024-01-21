import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from "./components/sidevar-nav";
import { ModeToggle } from "@/components/ThemeToggle";
import ButtonSignout from "@/components/ButtonSignout";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
export const metadata = getSEOTags({
  title: "Dashboard | DevFolio",
  canonicalUrlRelative: "/dashboard",
});

const sidebarNavItems = [
  {
    title: "General",
    href: "/dashboard",
  },
  {
    title: "Preview",
    href: "/profile",
  },
  {
    title: "Get Jobs",
    href: "/dashboard/jobs",
  },
]

export default async function LayoutPrivate({ children }) {
  const session = await getServerSession(authOptions);

 // if (!session) {
   // redirect(config.auth.loginUrl);
//  }

  return <>
    <div className="space-y-6 p-10 pb-16">
      <div className="flex items-center justify-between space-y-0.5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your account
          </p>
        </div>
        <div className="w-fit px-4 mt-10 flex gap-5 items-center">
          <ButtonSignout />
          <ModeToggle />
        </div>
      </div>
      < Separator separator className="my-6" />
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
        <aside className="-mx-4 md:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 md:max-w-2xl">{children}</div>
      </div>
    </div></>;
}
