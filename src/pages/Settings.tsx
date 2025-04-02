
import React from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountSettings from "@/components/settings/AccountSettings";
import BillingSettings from "@/components/settings/BillingSettings";
import ConnectedAccounts from "@/components/settings/ConnectedAccounts";
import NotificationsSettings from "@/components/settings/NotificationsSettings";
import TeamSettings from "@/components/settings/TeamSettings";
import { Card } from "@/components/ui/card";

const Settings = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const currentTab = pathname.split("/settings/")[1] || "account";

  const handleTabChange = (value: string) => {
    navigate(`/settings/${value}`);
  };

  return (
    <div className="container max-w-screen-xl py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-1">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <Card className="p-1">
        <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="connected-accounts">Connected Accounts</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
        </Tabs>
      </Card>

      <Routes>
        <Route path="/" element={<Navigate to="/settings/account" replace />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/billing" element={<BillingSettings />} />
        <Route path="/connected-accounts" element={<ConnectedAccounts />} />
        <Route path="/notifications" element={<NotificationsSettings />} />
        <Route path="/team" element={<TeamSettings />} />
      </Routes>
    </div>
  );
};

export default Settings;
