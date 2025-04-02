
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type SocialAccount = {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  username?: string;
};

const ConnectedAccounts = () => {
  const [accounts, setAccounts] = React.useState<SocialAccount[]>([
    {
      id: "twitter",
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      connected: true,
      username: "@johndoe",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      connected: true,
      username: "@john.doe",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      connected: true,
      username: "John Doe",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
          <path d="M15 8h.01" />
          <path d="M11 8c-1.93 0-3.68.78-4.95 2.05" />
          <path d="M20 12v-4h-4" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
        </svg>
      ),
      connected: false,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      connected: false,
    },
  ]);

  const toggleConnection = (id: string) => {
    setAccounts(
      accounts.map((account) =>
        account.id === id ? { ...account, connected: !account.connected } : account
      )
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>
            Connect your social media accounts to schedule and post content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 text-muted-foreground">
                  {account.icon}
                </div>
                <div>
                  <p className="font-medium">{account.name}</p>
                  {account.connected && account.username ? (
                    <p className="text-sm text-muted-foreground">
                      Connected as {account.username}
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {account.connected ? (
                  <>
                    <Switch
                      id={account.id}
                      checked={account.connected}
                      onCheckedChange={() => toggleConnection(account.id)}
                    />
                    <Label htmlFor={account.id} className="sr-only">
                      {account.name}
                    </Label>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => toggleConnection(account.id)}>
                    Connect
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Your connections are secured and we will never post without your permission.
          </p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage your API keys for developer integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>
              <p className="font-medium">Production API Key</p>
              <p className="text-sm text-muted-foreground">
                Last used 2 days ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Reveal
              </Button>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>
              <p className="font-medium">Development API Key</p>
              <p className="text-sm text-muted-foreground">
                Last used 5 hours ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Reveal
              </Button>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Generate New API Key</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ConnectedAccounts;
