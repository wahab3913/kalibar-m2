"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, FileText, TrendingUp } from "lucide-react"

interface DashboardTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  {
    id: "overview",
    name: "Overview",
    icon: BarChart3,
    description: "Key metrics and insights",
  },
  {
    id: "summaries",
    name: "Summaries",
    icon: FileText,
    description: "Automated reports and insights",
  },
  {
    id: "performance",
    name: "Performance",
    icon: TrendingUp,
    description: "Driver and route analytics",
  },
]

export function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium whitespace-nowrap",
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
              )}
            >
              <tab.icon
                className={cn(
                  "mr-2 h-5 w-5",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                )}
              />
              <span className="flex items-center gap-2">
                {tab.name}
                {tab.badge && <Badge className="bg-accent text-accent-foreground text-xs">{tab.badge}</Badge>}
              </span>
            </Button>
          )
        })}
      </nav>
    </div>
  )
}
