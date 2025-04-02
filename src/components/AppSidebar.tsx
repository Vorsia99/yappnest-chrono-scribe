
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard,
  PenSquare,
  ListChecks, 
  Calendar, 
  BarChart3, 
  Image,
  Settings,
  Users,
  MessageSquare,
  Bot,
  DollarSign,
  Heart,
  UserPlus
} from 'lucide-react';
import YappLogo from './YappLogo';

const navItems = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { title: 'Create Post', icon: PenSquare, path: '/composer' },
  { title: 'Queue', icon: ListChecks, path: '/queue' },
  { title: 'Calendar', icon: Calendar, path: '/calendar' },
  { title: 'Analytics', icon: BarChart3, path: '/analytics' },
  { title: 'Engagement', icon: MessageSquare, path: '/engagement' },
  { title: 'Media Library', icon: Image, path: '/media-library' },
  { title: 'AI Suggestions', icon: Bot, path: '/ai-suggestions' },
  { title: 'Monetization', icon: DollarSign, path: '/monetization' },
  { title: 'Followers', icon: Heart, path: '/followers' },
  { title: 'Team', icon: UserPlus, path: '/team', badge: 'Pro' },
  { title: 'Settings', icon: Settings, path: '/settings' },
];

const AppSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-gray-200 bg-[#E2E8F0]">
      <SidebarHeader className="py-4 px-5">
        <YappLogo textClassName="text-yapp-deep-navy" />
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive}
                    className={isActive ? "bg-[#A3BFFA] text-white" : "text-[#4A5568]"}
                  >
                    <Link to={item.path} className="flex items-center justify-between px-2 py-2">
                      <div className="flex items-center">
                        <item.icon className="mr-3 h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-[#A3BFFA] text-white text-[10px] px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md cursor-pointer">
          <div className="h-8 w-8 bg-[#A3BFFA] rounded-full flex items-center justify-center">
            <Users size={16} className="text-white" />
          </div>
          <div className="text-sm">
            <p className="font-medium text-[#2D3748]">Your Account</p>
            <p className="text-xs text-[#4A5568]">Pro Plan</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
