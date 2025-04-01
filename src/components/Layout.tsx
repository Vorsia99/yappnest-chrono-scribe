
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { UserNav } from '@/components/UserNav';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-yapp-pale-blue">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <div className="sticky top-0 z-30 flex h-16 items-center justify-between px-6 lg:px-8 bg-yapp-pale-blue border-b">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <Button 
                variant="cta-dark" 
                className="flex items-center gap-2"
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
