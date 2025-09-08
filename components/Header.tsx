'use client'
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
function Header() {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");
  return (
    <header>
        <Link href="/dashboard" className="flex items-center gap-2">
         Hive
        </Link>

        <div>
            <Authenticated>
                <UserButton />
            </Authenticated>

            <Unauthenticated>
                <SignInButton 
                 mode="modal"
                 forceRedirectUrl="/dashboard"
                 signUpForceRedirectUrl="/dashboard">
                    <Button variant="outline">Sign In </Button>
                </SignInButton>
            </Unauthenticated>
        </div>
    </header>
  )
}

export default Header;
