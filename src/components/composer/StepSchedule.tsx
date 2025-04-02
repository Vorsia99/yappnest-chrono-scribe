
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clock, SendHorizontal, Calendar as CalendarIcon, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { TimePicker } from "@/components/TimePicker";

export const StepSchedule = ({ formData, updateFormData, isFirstVisit }) => {
  const [date, setDate] = useState(formData.scheduledDate || null);
  const [time, setTime] = useState(formData.scheduledTime || null);
  const [postType, setPostType] = useState(formData.postType || "schedule");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    updateFormData({ scheduledDate: newDate });
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    updateFormData({ scheduledTime: newTime });
  };

  const handlePostTypeChange = (newType) => {
    setPostType(newType);
    updateFormData({ postType: newType });
  };

  const getOptimalTime = () => {
    // In a real app, this would come from analytics
    return "Tuesday at 10:00 AM";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Schedule Your Post</h2>
        <p className="text-muted-foreground mb-6">Choose when to publish your content</p>
      </div>

      <Tabs value={postType} onValueChange={handlePostTypeChange} className="w-full">
        <TabsList className="mb-4 grid grid-cols-3">
          <TabsTrigger value="now" className="flex items-center gap-2">
            <SendHorizontal className="h-4 w-4" />
            <span>Post Now</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="optimal" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Optimal Time</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="now" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-6">
                <SendHorizontal className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Post Immediately</h3>
                <p className="text-muted-foreground mb-4">Your content will be published as soon as you complete this wizard.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2 block">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    className="border rounded-md"
                    initialFocus
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Select Time</Label>
                  <TimePicker
                    value={time}
                    onChange={handleTimeChange}
                  />

                  {date && time && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-md">
                      <h3 className="font-medium mb-1">Selected Date and Time</h3>
                      <p>{format(date, "PPPP")}</p>
                      <p>{time}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimal" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-6">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Schedule for Optimal Engagement</h3>
                <p className="text-muted-foreground mb-4">Based on your audience analytics, the best time to post is:</p>
                
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-md">
                  <Clock className="inline-block h-5 w-5 mr-2 text-primary" />
                  <span className="font-medium">{getOptimalTime()}</span>
                </div>
                
                <p className="mt-4 text-sm text-muted-foreground">
                  This recommendation is based on when your audience is most active and engaged.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
