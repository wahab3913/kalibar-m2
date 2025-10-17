"use client"

import { useRouter } from "next/navigation"
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
import { User, Settings, LogOut, Menu } from "lucide-react"

interface ManagerHeaderProps {
  setSidebarOpen: (open: boolean) => void
}

export function ManagerHeader({ setSidebarOpen }: ManagerHeaderProps) {
  const router = useRouter()

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

  return (
    <>
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border px-4 shadow-sm sm:gap-x-6 lg:hidden bg-white">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-foreground lg:hidden hover:bg-muted"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
        <div className="flex-1 text-sm font-semibold leading-6 text-foreground">Manager Dashboard</div>
      </div>

      {/* Desktop Header */}
      <div className="flex h-16 shrink-0 items-center justify-end px-6 bg-white border-b border-border shadow-sm">
        <div className="flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-muted">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/professional-manager.png" alt="Profile" />
                  <AvatarFallback className="bg-primary text-primary-foreground">MG</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Manager User</p>
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
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}

