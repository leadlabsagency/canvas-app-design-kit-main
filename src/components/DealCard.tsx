
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag, Package, Star } from "lucide-react";

interface DealCardProps {
  title: string;
  category?: string;
  description: string;
  image?: string;
  tags?: string[];
  id?: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  category,
  description,
  image,
  tags = [],
  id = "1" // Default ID if none provided
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-1">
        <div className="h-40 bg-gray-50 rounded-md flex items-center justify-center mb-4">
          <div className="flex flex-col items-center justify-center text-gray-400">
            <Package size={48} strokeWidth={1.5} />
            <div className="mt-2 text-sm font-medium text-gray-500">{category}</div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="text-yellow-400" fill="#FBBF24" />
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-500">5.0 (24 reviews)</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <Link to={`/deals/${id}`} className="block w-full">
            <Button className="w-full">View Deal</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;
