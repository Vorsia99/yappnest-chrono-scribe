
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/DatePicker";
import { TimePicker } from "@/components/TimePicker";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StepScheduleProps {
  formData: any;
  updateFormData: (data: any) => void;
  isFirstVisit: boolean;
}

export const StepSchedule = ({ formData, updateFormData, isFirstVisit }: StepScheduleProps) => {
  const [postType, setPostType] = useState(formData.postType || "schedule");

  const handlePostTypeChange = (type) => {
    setPostType(type);
    updateFormData({ postType: type });
  };

  const handleDateChange = (date) => {
    updateFormData({ scheduledDate: date });
  };

  const handleTimeChange = (time) => {
    updateFormData({ scheduledTime: time });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Schedule your post</h2>
        <p className="text-muted-foreground">Choose when to publish your content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          className={`cursor-pointer hover:shadow-md transition-all ${postType === "now" ? "border-yapp-misty-blue border-2" : ""}`}
          onClick={() => handlePostTypeChange("now")}
        >
          <CardContent className="p-4 text-center">
            <h3 className="font-medium mb-1">Post Now</h3>
            <p className="text-sm text-muted-foreground">Publish immediately</p>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer hover:shadow-md transition-all ${postType === "schedule" ? "border-yapp-misty-blue border-2" : ""}`}
          onClick={() => handlePostTypeChange("schedule")}
        >
          <CardContent className="p-4 text-center">
            <h3 className="font-medium mb-1">Schedule for Later</h3>
            <p className="text-sm text-muted-foreground">Choose a specific date & time</p>
          </CardContent>
        </Card>

        <TooltipProvider>
          <Tooltip open={isFirstVisit}>
            <TooltipTrigger asChild>
              <Card 
                className={`cursor-pointer hover:shadow-md transition-all ${postType === "optimal" ? "border-yapp-misty-blue border-2" : ""}`}
                onClick={() => handlePostTypeChange("optimal")}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium mb-1">Optimal Time</h3>
                  <p className="text-sm text-muted-foreground">We'll pick the best time</p>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>We analyze your audience to find the perfect posting time!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {postType === "schedule" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <DatePicker />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Time</label>
              <TimePicker />
            </div>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="recurring" className="mr-2" />
            <label htmlFor="recurring" className="text-sm">Make this a recurring post</label>
          </div>
        </div>
      )}

      {postType === "optimal" && (
        <div className="bg-gray-50 p-4 rounded-lg mt-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-yapp-misty-blue mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Engagement Prediction</h4>
              <p className="text-sm text-muted-foreground">This post could reach ~500 users on Instagram based on your audience data.</p>
              <p className="text-sm mt-2 text-muted-foreground">We'll schedule your post for tomorrow at 6:00 PM, which is the optimal time for your audience.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
