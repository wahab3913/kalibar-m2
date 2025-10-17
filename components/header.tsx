"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, Menu, Settings, LogOut, User, Clock, AlertCircle, CheckCircle, Info, PanelLeftClose } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface DashboardHeaderProps {
  onMenuClick: () => void
  onSidebarToggle?: () => void
  sidebarCollapsed?: boolean
}

export function DashboardHeader({ onMenuClick, onSidebarToggle, sidebarCollapsed }: DashboardHeaderProps) {
  const router = useRouter()
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    router.push("/")
  }

  const handleProfileClick = () => {
    router.push("/profile")
  }

  const handleSettingsClick = () => {
    router.push("/settings")
  }

  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Route Delay Alert",
      message: "Driver John Smith is running 15 minutes behind schedule on Route 101",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Delivery Completed",
      message: "All deliveries for Route 205 have been completed successfully",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "System Update",
      message: "New performance metrics are now available in the dashboard",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      type: "alert",
      title: "Vehicle Maintenance",
      message: "Vehicle #1234 is due for scheduled maintenance",
      time: "2 hours ago",
      read: true,
    },
    {
      id: 5,
      type: "info",
      title: "Weekly Report Ready",
      message: "Your weekly performance report is ready for review",
      time: "1 day ago",
      read: true,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertCircle className="h-4 w-4 text-orange-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-4 sm:px-6 lg:px-8 shadow-sm transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:ml-16" : "lg:ml-72",
      )}
    >
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>

      {onSidebarToggle && (
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={onSidebarToggle}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelLeftClose className={cn("h-5 w-5 transition-transform", sidebarCollapsed && "rotate-180")} />
        </Button>
      )}

      {/* Breadcrumb or current page indicator */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center">
          <Badge variant="outline" className="bg-primary text-primary-foreground border-primary">
            Live Data
          </Badge>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-xs text-destructive-foreground flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>Stay updated with your latest alerts and updates</SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border transition-colors ${
                      notification.read ? "bg-muted/50 border-border" : "bg-card border-primary/20 shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`text-sm font-medium ${
                              notification.read ? "text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {notification.title}
                          </h4>
                          {!notification.read && <div className="h-2 w-2 rounded-full bg-primary" />}
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.message}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/professional-manager.png" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">Operations Manager</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfileClick}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export { DashboardHeader as Header }
