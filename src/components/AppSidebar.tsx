
import React from 'react';
import { Link } from 'react-router-dom';
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
  Home, 
  Calendar, 
  PenSquare, 
  ListChecks, 
  BarChart3, 
  Users, 
  ImageIcon, 
  Settings, 
  LogOut 
} from 'lucide-react';

const navItems = [
  { title: 'Dashboard', icon: Home, path: '/dashboard' },
  { title: 'Calendar', icon: Calendar, path: '/calendar' },
  { title: 'Composer', icon: PenSquare, path: '/composer' },
  { title: 'Queue', icon: ListChecks, path: '/queue' },
  { title: 'Analytics', icon: BarChart3, path: '/analytics' },
  { title: 'Team', icon: Users, path: '/team' },
  { title: 'Media Library', icon: ImageIcon, path: '/media' },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <svg viewBox="0 0 36 24" fill="none" className="h-6 w-9 mr-2 text-primary">
              <path d="M1 13L8 6L15 13L22 6L29 13L36 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-xl font-bold text-foreground">YappHQ</h1>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/settings" className="flex items-center">
                <Settings className="mr-3 h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-destructive hover:text-destructive/90">
              <LogOut className="mr-3 h-5 w-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
