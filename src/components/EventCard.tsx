
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  image?: string;
  description: string;
  tag?: string;
  id?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  image,
  description,
  tag,
  id = "1" // Default ID if none provided
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-1">
        <div className="h-40 bg-gradient-light-bg rounded-md flex items-center justify-center mb-4">
          <div className="text-twello-blue flex flex-col items-center justify-center">
            <Calendar size={48} strokeWidth={1.5} />
            <div className="mt-2 text-sm font-medium">{date}</div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3">
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-xs">19:00 - 21:00</span>
            </div>
            
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-xs">Online</span>
            </div>
            
            {tag && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          <Link to={`/events/${id}`}>
            <Button variant="outline" className="w-full">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
