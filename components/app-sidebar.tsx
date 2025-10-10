"use client"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { UserButton, useUser } from "@clerk/nextjs"
import { ChannelList } from "stream-chat-react"
import { ChannelFilters, ChannelSort } from "stream-chat"
import { NewChatDialog } from "./NewChatDialog"

// This is sample data.
// const data = {
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: [
//         {
//           title: "Installation",
//           url: "#",
//         },
//         {
//           title: "Project Structure",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Building Your Application",
//       url: "#",
//       items: [
//         {
//           title: "Routing",
//           url: "#",
//         },
//         {
//           title: "Data Fetching",
//           url: "#",
//           isActive: true,
//         },
//         {
//           title: "Rendering",
//           url: "#",
//         },
//         {
//           title: "Caching",
//           url: "#",
//         },
//         {
//           title: "Styling",
//           url: "#",
//         },
//         {
//           title: "Optimizing",
//           url: "#",
//         },
//         {
//           title: "Configuring",
//           url: "#",
//         },
//         {
//           title: "Testing",
//           url: "#",
//         },
//         {
//           title: "Authentication",
//           url: "#",
//         },
//         {
//           title: "Deploying",
//           url: "#",
//         },
//         {
//           title: "Upgrading",
//           url: "#",
//         },
//         {
//           title: "Examples",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "API Reference",
//       url: "#",
//       items: [
//         {
//           title: "Components",
//           url: "#",
//         },
//         {
//           title: "File Conventions",
//           url: "#",
//         },
//         {
//           title: "Functions",
//           url: "#",
//         },
//         {
//           title: "next.config.js Options",
//           url: "#",
//         },
//         {
//           title: "CLI",
//           url: "#",
//         },
//         {
//           title: "Edge Runtime",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Architecture",
//       url: "#",
//       items: [
//         {
//           title: "Accessibility",
//           url: "#",
//         },
//         {
//           title: "Fast Refresh",
//           url: "#",
//         },
//         {
//           title: "Next.js Compiler",
//           url: "#",
//         },
//         {
//           title: "Supported Browsers",
//           url: "#",
//         },
//         {
//           title: "Turbopack",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Community",
//       url: "#",
//       items: [
//         {
//           title: "Contribution Guide",
//           url: "#",
//         },
//       ],
//     },
//   ],
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {user} = useUser();

  const filters: ChannelFilters = { 
    members: {$in : [user?.id as string]},
    type: { $in: ["messaging", "team"]},
  };
  const options = { presence: true, state: true};
  const sort : ChannelSort = { 
    last_message_at: -1
  }
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Welcome back
                  </span>
                  <span className="text-sm font-semibold">
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
                <UserButton signInUrl="/sign-in" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            <NewChatDialog>
              <Button className="w-full" variant="outline">
                Start New Chat
              </Button>
            </NewChatDialog>
            {/*  Channel list */}

            <ChannelList
             sort={sort} 
             filters={filters}
             options={options} 
             EmptyStateIndicator={ () => (
              <div className="flex flex-col items-center justify-center h-full
              py-12 px-4">

                <div className="text-6xl mb-6 opacity-20">💬</div>
                <h2 className="text-xl font-medium text-foreground mb-2"> 
                  Ready to chat ? 
                </h2>
                <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-[200px]">
                  Your conversations will appear here 
                </p>
                </div>
              
             )}
            />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
