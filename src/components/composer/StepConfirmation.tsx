
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle, Edit, CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

export const StepConfirmation = ({ formData, goToStep }) => {
  const getPlatformIcon = (platformId) => {
    const icons = {
      facebook: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      twitter: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      youtube: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    };
    return icons[platformId] || null;
  };

  const getPlatformName = (platformId) => {
    const names = {
      facebook: 'Facebook',
      instagram: 'Instagram',
      twitter: 'Twitter',
      youtube: 'YouTube'
    };
    return names[platformId] || platformId;
  };

  const getScheduleText = () => {
    if (formData.postType === 'now') {
      return 'Post immediately';
    } else if (formData.postType === 'optimal') {
      return 'Post at optimal time (Tuesday at 10:00 AM)';
    } else if (formData.scheduledDate && formData.scheduledTime) {
      return `Scheduled for ${format(formData.scheduledDate, 'PPP')} at ${formData.scheduledTime}`;
    }
    return 'Schedule not set';
  };

  return (
    <div className="space-y-6">
      <div className="text-center pb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Ready to Publish!</h2>
        <p className="text-muted-foreground">Your content is ready to be published. Please review the details below.</p>
      </div>
      
      <Card className="border-green-200">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{formData.title || 'Untitled Post'}</h3>
                <p className="text-sm text-muted-foreground">{getScheduleText()}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => goToStep(5)} className="flex items-center gap-1">
                <Edit className="h-4 w-4" /> Edit Schedule
              </Button>
            </div>
            
            <div className="p-4 bg-muted/40 rounded-md">
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Platforms</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.selectedPlatforms && formData.selectedPlatforms.map(platform => (
                  <div key={platform} className="flex items-center bg-background px-2 py-1 rounded border">
                    <span className="text-primary mr-1">{getPlatformIcon(platform)}</span>
                    <span className="text-sm">{getPlatformName(platform)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {formData.mediaType && (
              <div className="p-4 bg-muted/40 rounded-md">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Media</span>
                </div>
                <div className="text-sm">{formData.mediaType.charAt(0).toUpperCase() + formData.mediaType.slice(1)} content</div>
              </div>
            )}
            
            <Button 
              variant="cta-dark" 
              className="w-full py-6"
              onClick={() => {
                alert('Post scheduled successfully!');
                // In a real app, this would submit the form data
              }}
            >
              <CheckCircle className="mr-2 h-5 w-5" /> 
              Confirm and {formData.postType === 'now' ? 'Publish' : 'Schedule'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-3">
        <p className="text-muted-foreground">Need to make changes?</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="sm" onClick={() => goToStep(1)}>Edit Media</Button>
          <Button variant="outline" size="sm" onClick={() => goToStep(2)}>Edit Platforms</Button>
          <Button variant="outline" size="sm" onClick={() => goToStep(3)}>Edit Content</Button>
          <Button variant="outline" size="sm" onClick={() => goToStep(4)}>Edit Preview</Button>
        </div>
      </div>
    </div>
  );
};
