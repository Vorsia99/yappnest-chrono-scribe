
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, LineChart, Edit, Users } from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const QuickActionCard = ({ icon, title, path }: QuickActionProps) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="hover-scale bg-white cursor-pointer shadow-soft transition-all duration-200"
      onClick={() => navigate(path)}
    >
      <CardContent className="p-4 flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center text-yapp-deep-navy">
          {icon}
        </div>
        <h3 className="font-medium text-sm text-yapp-deep-navy">{title}</h3>
      </CardContent>
    </Card>
  );
};

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <QuickActionCard 
        icon={<Edit size={20} />} 
        title="Create New Post" 
        path="/composer" 
      />
      <QuickActionCard 
        icon={<CalendarIcon size={20} />} 
        title="View Queue" 
        path="/queue" 
      />
      <QuickActionCard 
        icon={<LineChart size={20} />} 
        title="View Analytics" 
        path="/analytics" 
      />
      <QuickActionCard 
        icon={<Users size={20} />} 
        title="Manage Accounts" 
        path="/settings" 
      />
    </div>
  );
};
