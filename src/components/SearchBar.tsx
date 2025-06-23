
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search software, categories...", 
  buttonText = "Search",
  className = ""
}) => {
  return (
    <div className={`flex w-full max-w-3xl mx-auto ${className}`}>
      <div className="flex w-full overflow-hidden border border-gray-300 rounded-md bg-white">
        <Input
          type="text"
          placeholder={placeholder}
          className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-6 px-4 rounded-none"
        />
        <Button 
          className="rounded-none bg-black hover:bg-gray-800 text-white px-6 py-2 text-base font-medium m-0 h-full"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
