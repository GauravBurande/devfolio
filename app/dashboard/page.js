export const dynamic = "force-dynamic";

import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "./profile-form";

export default function DashboardPage() {

  return (
    <main>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            Fill the details below to generate your portfolio.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </main>
  )
}