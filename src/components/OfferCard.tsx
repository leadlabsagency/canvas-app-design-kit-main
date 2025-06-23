
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface OfferCardProps {
  title: string;
  payout?: string;
  type?: string;
  tags?: string[];
  id?: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  payout,
  type,
  tags = [],
  id = "1" // Default ID if none provided
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {type && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {type}
            </span>
          )}
          
          {payout && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              ${payout}
            </span>
          )}
          
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/offers/${id}`}>
          <Button variant="default" className="w-full">View Offer</Button>
        </Link>
      </div>
    </Card>
  );
};

export default OfferCard;
