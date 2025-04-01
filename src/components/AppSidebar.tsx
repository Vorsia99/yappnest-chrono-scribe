
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
  ListChecks, 
  Calendar, 
  BarChart3, 
  Settings
} from 'lucide-react';
import YappLogo from './YappLogo';

const navItems = [
  { title: 'Queue', icon: ListChecks, path: '/queue' },
  { title: 'Calendar', icon: Calendar, path: '/calendar' },
  { title: 'Analytics', icon: BarChart3, path: '/analytics' },
  { title: 'Settings', icon: Settings, path: '/settings' },
];

const AppSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-gray-200">
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
                  >
                    <Link to={item.path} className="flex items-center px-2 py-2">
                      <item.icon className="mr-3 h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
