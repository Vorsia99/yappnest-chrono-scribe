
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { UserNav } from '@/components/UserNav';
import { Button } from '@/components/ui/button';
import { PlusIcon, BellIcon, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Layout = () => {
  const navigate = useNavigate();
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#E2E8F0]">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <div className="sticky top-0 z-30 flex h-16 items-center justify-between px-6 lg:px-8 bg-white border-b">
            <div className="flex items-center">
              <SidebarTrigger />
              <div className="ml-4 relative w-[300px]">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8 border-[#A3BFFA] focus-visible:ring-[#A3BFFA]"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <BellIcon size={20} />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#E53E3E]">3</Badge>
                </Button>
              </div>
              <Button 
                variant="cta-dark" 
                className="flex items-center gap-2 bg-[#A3BFFA] hover:bg-[#7F9CF5] text-white"
                onClick={() => navigate('/composer')}
              >
                <PlusIcon size={16} />
                <span>Create Post</span>
              </Button>
              <UserNav />
            </div>
          </div>
          <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
