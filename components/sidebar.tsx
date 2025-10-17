"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Home, Users, Settings, Upload, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  isCollapsed?: boolean
  onToggle?: () => void
}

const superAdminNavigation = [
  { name: "Super Admin Dashboard", href: "/super-admin-dashboard", icon: Home },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
]

const adminNavigation = [
  { name: "Admin Dashboard", href: "/admin-dashboard", icon: Home },
  { name: "Team", href: "/team", icon: Users },
  { name: "Data Upload", href: "/upload", icon: Upload },
  { name: "Settings", href: "/settings", icon: Settings },
]

const managerNavigation = [
  { name: "Manager Dashboard", href: "/manager-dashboard", icon: Home },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar({ isOpen, onClose, isCollapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState<string | null>(null)

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    setUserRole(role)
  }, [])

  let currentNavigation = []
  if (userRole === "super-admin") {
    currentNavigation = superAdminNavigation
  } else if (userRole === "admin") {
    currentNavigation = adminNavigation
  } else if (userRole === "manager") {
    currentNavigation = managerNavigation
  } else {
    // Default or no role, perhaps redirect to login or show limited navigation
    currentNavigation = []
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ease-in-out",
          isCollapsed ? "lg:w-16" : "lg:w-72",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary border-r border-primary/20 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
              <BarChart3 className="h-8 w-8 text-white" />
              {!isCollapsed && <span className="ml-3 text-xl font-bold text-white">Kalibur</span>}
            </div>
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className={cn("text-white/80 hover:text-white hover:bg-black/10 h-6 w-6", isCollapsed && "hidden")}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
          </div>

          {isCollapsed && onToggle && (
            <div className="flex justify-center -mt-2 mb-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="text-white/80 hover:text-white hover:bg-black/10 h-6 w-6"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {currentNavigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            isActive
                              ? "bg-black/20 text-white border border-white/30"
                              : "text-white/80 hover:text-white hover:bg-black/10",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                            isCollapsed && "justify-center",
                          )}
                          title={isCollapsed ? item.name : undefined}
                        >
                          <item.icon
                            className={cn(
                              isActive ? "text-white" : "text-white/80 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {!isCollapsed && item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary border-r border-primary/20 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-white" />
              <span className="ml-3 text-xl font-bold text-white">Kalibur</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-black/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {currentNavigation.map((item) => {
                    // Use currentNavigation
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            isActive
                              ? "bg-black/20 text-white border border-white/30"
                              : "text-white/80 hover:text-white hover:bg-black/10",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                          )}
                        >
                          <item.icon
                            className={cn(
                              isActive ? "text-white" : "text-white/80 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                          {/* {item.badge && (
                            <Badge className="ml-auto bg-black/30 text-white text-xs border-white/50">
                              {item.badge}
                            </Badge>
                          )} */}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
