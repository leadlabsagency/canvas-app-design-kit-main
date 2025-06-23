
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, Settings, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold">Twello</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home2" className="hover:text-twello-blue transition-colors">Home 2</Link>
          <Link to="/deals" className="hover:text-twello-blue transition-colors">Deals</Link>
          <Link to="/jobs" className="hover:text-twello-blue transition-colors">Jobs</Link>
          <Link to="/networks" className="hover:text-twello-blue transition-colors">Networks</Link>
          <Link to="/events" className="hover:text-twello-blue transition-colors">Events</Link>
          <Link to="/offers" className="hover:text-twello-blue transition-colors">Offers</Link>
          <Link to="/dashboard" className="hover:text-twello-blue transition-colors">Dashboard</Link>
          <Link to="/dashboard2" className="hover:text-twello-blue transition-colors">Dashboard 2</Link>
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/ai-assistant">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/ai-assistant">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
              <div className="flex flex-col h-full bg-white">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                      <h1 className="text-2xl font-bold">Twello</h1>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>
                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col p-0">
                    <Link to="/deals" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Deals</span>
                    </Link>
                    <Link to="/jobs" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Jobs</span>
                    </Link>
                    <Link to="/networks" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Networks</span>
                    </Link>
                    <Link to="/events" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Events</span>
                    </Link>
                    <Link to="/offers" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Offers</span>
                    </Link>
                    <Link to="/home2" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Home 2</span>
                    </Link>
                    <Link to="/dashboard" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Dashboard</span>
                    </Link>
                    <Link to="/dashboard2" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Dashboard 2</span>
                    </Link>
                    <Link to="/ai-assistant" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">AI Assistant</span>
                    </Link>
                    <Link to="/profile" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Profile</span>
                    </Link>
                    <Link to="/settings" className="flex gap-3 items-center p-4 hover:bg-gray-100 transition-colors">
                      <span className="text-base">Settings</span>
                    </Link>
                  </div>
                </div>
                <div className="p-4 border-t flex flex-col gap-3">
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full text-base py-6">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-base py-6">
                      Sign up free
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute left-0 right-0 top-16 bg-white shadow-md z-20 py-4 px-4 md:px-8 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
