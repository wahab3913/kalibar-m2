import * as React from "react"
import { SearchIcon } from "lucide-react" // Renaming the icon to avoid conflict
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add custom props here if needed
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({ className, ...props }, ref) => {
  return (
    <div className={cn("relative", className)}>
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input type="text" className="pl-10" ref={ref} {...props} />
    </div>
  )
})
Search.displayName = "Search"

export { Search }
