
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NotificationsSettings = () => {
  const { toast } = useToast();
  const [notificationSettings, setNotificationSettings] = React.useState({
    emailNotifications: {
      marketing: true,
      socialActivity: true,
      securityAlerts: true,
      accountActivity: true,
      weeklyDigest: false,
    },
    pushNotifications: {
      newComments: true,
      mentions: true,
      directMessages: true,
      postPerformance: true,
      teamActivity: false,
    },
  });

  const updateEmailSetting = (key: keyof typeof notificationSettings.emailNotifications) => {
    setNotificationSettings({
      ...notificationSettings,
      emailNotifications: {
        ...notificationSettings.emailNotifications,
        [key]: !notificationSettings.emailNotifications[key],
      },
    });
  };

  const updatePushSetting = (key: keyof typeof notificationSettings.pushNotifications) => {
    setNotificationSettings({
      ...notificationSettings,
      pushNotifications: {
        ...notificationSettings.pushNotifications,
        [key]: !notificationSettings.pushNotifications[key],
      },
    });
  };

  const saveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your notification preferences have been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Choose what types of email notifications you'd like to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about new features and special offers
                </p>
              </div>
              <Switch
                id="marketing"
                checked={notificationSettings.emailNotifications.marketing}
                onCheckedChange={() => updateEmailSetting("marketing")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="social">Social activity</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone follows or mentions you
                </p>
              </div>
              <Switch
                id="social"
                checked={notificationSettings.emailNotifications.socialActivity}
                onCheckedChange={() => updateEmailSetting("socialActivity")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="security">Security alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about important security updates
                </p>
              </div>
              <Switch
                id="security"
                checked={notificationSettings.emailNotifications.securityAlerts}
                onCheckedChange={() => updateEmailSetting("securityAlerts")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="account">Account activity</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about changes to your account
                </p>
              </div>
              <Switch
                id="account"
                checked={notificationSettings.emailNotifications.accountActivity}
                onCheckedChange={() => updateEmailSetting("accountActivity")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="digest">Weekly digest</Label>
                <p className="text-sm text-muted-foreground">
                  Get a weekly summary of your account performance
                </p>
              </div>
              <Switch
                id="digest"
                checked={notificationSettings.emailNotifications.weeklyDigest}
                onCheckedChange={() => updateEmailSetting("weeklyDigest")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>
            Configure how you receive mobile and desktop notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="comments">New comments</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone comments on your posts
                </p>
              </div>
              <Switch
                id="comments"
                checked={notificationSettings.pushNotifications.newComments}
                onCheckedChange={() => updatePushSetting("newComments")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="mentions">Mentions</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone mentions you
                </p>
              </div>
              <Switch
                id="mentions"
                checked={notificationSettings.pushNotifications.mentions}
                onCheckedChange={() => updatePushSetting("mentions")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="messages">Direct messages</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when you receive a new message
                </p>
              </div>
              <Switch
                id="messages"
                checked={notificationSettings.pushNotifications.directMessages}
                onCheckedChange={() => updatePushSetting("directMessages")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="performance">Post performance</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about important post metrics
                </p>
              </div>
              <Switch
                id="performance"
                checked={notificationSettings.pushNotifications.postPerformance}
                onCheckedChange={() => updatePushSetting("postPerformance")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="team">Team activity</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about your team members' actions
                </p>
              </div>
              <Switch
                id="team"
                checked={notificationSettings.pushNotifications.teamActivity}
                onCheckedChange={() => updatePushSetting("teamActivity")}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button onClick={saveSettings}>Save Notification Settings</Button>
      </div>
    </div>
  );
};

export default NotificationsSettings;
