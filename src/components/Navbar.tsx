
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ChevronDown, CircleDot } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Resources", href: "/resources", hasDropdown: false },
  { name: "Career", href: "/career", hasDropdown: false },
  { name: "Contact Us", href: "/contact", hasDropdown: false },
]

export function NavBar() {
  const location = useLocation()

  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/trilok_logo.png"
            alt="Trilok Logo"
            className="h-10 w-auto"
          />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex flex-row items-center text-sm font-medium transition-colors",
                        isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-500"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                      )}
                      {isActive && (
                        <CircleDot className="ml-2 h-3 w-3 text-blue-600" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}