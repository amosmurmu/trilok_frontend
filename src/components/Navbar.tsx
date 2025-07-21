
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ChevronDown, CircleDot, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Resources", href: "#", hasDropdown: false },
  { name: "Career", href: "#", hasDropdown: false },
  { name: "Contact Us", href: "/contact", hasDropdown: false },
]

export function NavBar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex flex-row items-center text-xl font-medium transition-colors",
                        isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-500"
                      )}
                    >
                      {isActive && (
                        <CircleDot className="ml-2 h-3 w-3 text-blue-600" />
                      )}
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                      )}

                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>

      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex flex-row items-center justify-between py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-800 hover:text-blue-500 hover:bg-gray-50"
                  )}
                >
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                    {isActive && (
                      <CircleDot className="h-3 w-3 text-blue-600" />
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}