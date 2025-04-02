
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const StepPlatforms = ({ formData, updateFormData, isFirstVisit }) => {
  const [selected, setSelected] = useState(formData.selectedPlatforms || []);

  const handlePlatformToggle = (platform) => {
    setSelected(prev => {
      const isSelected = prev.includes(platform);
      const newSelection = isSelected
        ? prev.filter(p => p !== platform)
        : [...prev, platform];
      
      updateFormData({ selectedPlatforms: newSelection });
      return newSelection;
    });
  };

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: <Facebook className="h-8 w-8" />, accounts: ['My Business Page', 'Personal Profile'] },
    { id: 'instagram', name: 'Instagram', icon: <Instagram className="h-8 w-8" />, accounts: ['@yourbusinesshandle'] },
    { id: 'twitter', name: 'Twitter', icon: <Twitter className="h-8 w-8" />, accounts: ['@yourtwitterhandle'] },
    { id: 'youtube', name: 'YouTube', icon: <Youtube className="h-8 w-8" />, accounts: ['Your Channel'] }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Choose Platforms</h2>
        <p className="text-muted-foreground mb-6">Select platforms where you'd like to publish this content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <Card 
            key={platform.id}
            className={`cursor-pointer hover:border-primary transition-all ${selected.includes(platform.id) ? 'border-2 border-primary' : ''}`}
            onClick={() => handlePlatformToggle(platform.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${selected.includes(platform.id) ? 'bg-primary/10' : 'bg-muted'}`}>
                  {platform.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm">{platform.accounts.join(', ')}</p>
                </div>
                <div className="ml-auto">
                  {selected.includes(platform.id) ? (
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-muted"></div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <Button variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Connect New Account
        </Button>
      </div>
    </div>
  );
};
