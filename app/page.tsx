import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import FeatureCard from "@/components/FeatureCard";
import { MessageCircle, Video, Shield, Users } from "lucide-react";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:px-6">
        <div className="max-w-4xl space-y-8 relative">
          {/* Gradient arrière plan */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500
          via-indigo-50 to-white dark:from-blue-950/20 dark:via-indigo-20 
          dark:to-purple-950/20 rounded-3xl blur-3xl scale-150 opacity-60">
          </div>

          <div className="max-w-4xl space-y-8 relative">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500
            to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Chat smarter
            </h1> 
            <br />

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500
            dark:to-pink-400">
           
            </span>
        

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
              <SignedOut>  
                <SignInButton mode="modal">  
                  <Button size="lg" className="text-lg px-8 py-6 h-auto">
                    Start chatting for free 
                  </Button>
                </SignInButton>

              </SignedOut>
            </div>

          </div>
          
        </div>
        
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything you need to stay connected
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerfull features designed for seamless communication, whether
                you&apos;re chatting with friends, family, or colleagues.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <FeatureCard
                icon={Shield}
                title="Privacy & Security"
                description="End to end encryption keep your conversations private, safe and secure."
                />
                <FeatureCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Lightning fast messages wigth real-time delivery. chat with friends and colleagues seamlessly"
                />
                <FeatureCard
                icon={Video}
                title="HD Video Calls"
                description="Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings."
                />
                <FeatureCard
                icon={Users}
                title="Group Chats"
                description="Create groups with friends, family, or colleagues. Manage conversations easily."
                />
            </div>
            
      </main>
    </div>
  );
}
