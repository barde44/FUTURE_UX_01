import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  showButton?: boolean;
}

export function ServiceCard({ title, description, icon: Icon, imageUrl, showButton = false }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {imageUrl && (
        <div className="h-48 overflow-hidden bg-accent">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {title}
          </h3>
        </div>
        <p className="text-gray-600 mb-6 flex-1">
          {description}
        </p>
        {showButton && (
          <Link to="/contact">
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full"
            >
              Make an appointment
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
