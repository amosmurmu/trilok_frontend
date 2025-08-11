import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, CircleDot, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about", hasDropdown: true },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Projects", href: "/projects", hasDropdown: true },
  { name: "Resources", href: "#", hasDropdown: false },
  { name: "Career", href: "#", hasDropdown: false },
  { name: "Contact Us", href: "/contact", hasDropdown: false },
];

export function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle window resize and determine breakpoint
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when screen gets larger than our breakpoint
      if (window.innerWidth >= 1200) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  // Use custom breakpoint at 1200px instead of md: (768px)
  const shouldShowMobileMenu = windowWidth < 1200;

  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo Section */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 cursor-pointer flex-shrink-0"
        >
          <img
            src="/trilok_logo.png"
            alt="Trilok Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation - Custom breakpoint at 1200px */}
        <NavigationMenu className={shouldShowMobileMenu ? "hidden" : "block"}>
          <NavigationMenuList className="flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex flex-row items-center text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium transition-colors whitespace-nowrap py-2 px-1",
                        isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-500"
                      )}
                    >
                      {isActive && (
                        <CircleDot className="mr-1 h-2 w-2 lg:h-3 lg:w-3 text-gray-800" />
                      )}
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={cn(
            "p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0",
            shouldShowMobileMenu ? "block" : "hidden"
          )}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && shouldShowMobileMenu && (
        <div className="bg-white border-t shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex flex-row items-center justify-between py-3 px-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-200",
                    isActive
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
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
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}