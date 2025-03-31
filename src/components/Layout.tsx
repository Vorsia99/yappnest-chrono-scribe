
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { UserNav } from '@/components/UserNav';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-background to-secondary/30">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <div className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b bg-background px-4 sm:px-6 lg:px-8 shadow-sm">
            <SidebarTrigger />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
          <main className="px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
