
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, CheckCircle, ArrowRight } from "lucide-react";

const BillingSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>
                Manage your subscription and billing details
              </CardDescription>
            </div>
            <Badge>Pro Plan</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Pro Plan</p>
              <p className="text-sm text-muted-foreground">$15.00 / month</p>
            </div>
            <Badge variant="outline" className="border-green-500 text-green-500">
              Active
            </Badge>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Included in your plan:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Unlimited posts</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Priority support</span>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              Your next billing date is July 12, 2023
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button variant="outline">Cancel Subscription</Button>
          <Button>Upgrade Plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Manage your payment methods and billing address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-4 border rounded-md">
            <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">Expires 04/2025</p>
            </div>
            <Badge>Default</Badge>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <span>Add new payment method</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Billing Address</h3>
            <address className="text-sm text-muted-foreground not-italic">
              John Doe<br />
              1234 Main St<br />
              San Francisco, CA 94103<br />
              United States
            </address>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">Update Billing Address</Button>
          <Button variant="outline">View Billing History</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BillingSettings;
