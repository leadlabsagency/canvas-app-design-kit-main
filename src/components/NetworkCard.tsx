
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NetworkCardProps {
  name: string;
  description: string;
  logo?: string;
  id?: string;
}

const NetworkCard: React.FC<NetworkCardProps> = ({
  name,
  description,
  logo,
  id = "1" // Default ID if none provided
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
            {logo ? (
              <img 
                src={logo} 
                alt={name} 
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="font-medium text-gray-600">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <Link to={`/networks/${id}`}>
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default NetworkCard;
