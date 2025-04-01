
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CalendarRange, FileAnalytics, Plus } from "lucide-react";
import confetti from "canvas-confetti";

interface StepConfirmationProps {
  formData: any;
  goToStep: (step: number) => void;
}

export const StepConfirmation = ({ formData, goToStep }: StepConfirmationProps) => {
  useEffect(() => {
    // Launch confetti when the component mounts
    const launchConfetti = () => {
      const colors = ["#4AFCA6", "#FF9CAC"];
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      });
      
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
      }, 250);
      
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
      }, 400);
    };
    
    try {
      launchConfetti();
    } catch (e) {
      console.error("Error launching confetti:", e);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center animate-scale-in">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-yapp-electric-green flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Success! Your post is scheduled</h2>
        <p className="text-muted-foreground">Your content will be published at the scheduled time</p>
      </div>

      <Card className="border-yapp-electric-green/30 bg-yapp-electric-green/5">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Post Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Title</span>
              <span className="text-sm font-medium">{formData.title || "No title provided"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Platforms</span>
              <span className="text-sm font-medium">Instagram{formData.selectedPlatforms?.length > 1 ? ` +${formData.selectedPlatforms.length - 1} more` : ""}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Scheduled for</span>
              <span className="text-sm font-medium">
                {formData.postType === "now" 
                  ? "Immediate publication" 
                  : formData.postType === "optimal" 
                    ? "Tomorrow at 6:00 PM (optimal)" 
                    : "April 20, 2024 at 10:00 AM"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Media type</span>
              <span className="text-sm font-medium">{formData.mediaType === "media" ? "Image/Video" : "Text only"}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="h-6 w-6 rounded-full bg-yapp-soft-pink flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15.5 7.5L24 8.5L17.5 14L19.5 22L12 18L4.5 22L6.5 14L0 8.5L8.5 7.5L12 0Z" fill="white"/>
            </svg>
          </div>
          <span>Achievement unlocked: First Post Scheduled!</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CalendarRange className="h-4 w-4 text-yapp-deep-navy" />
          <span>You've scheduled posts 3 days in a row!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90"
          onClick={() => goToStep(1)}
        >
          <Plus className="mr-2 h-4 w-4" /> Schedule Another Post
        </Button>
        <Button variant="outline">
          <CalendarRange className="mr-2 h-4 w-4" /> View Queue
        </Button>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
          <FileAnalytics className="h-4 w-4" />
          <span>Track your post's performance in Analytics!</span>
        </div>
        <div className="text-center mt-4 text-xs text-muted-foreground">
          <p>You're one of 10,000+ marketers using yappHQ!</p>
        </div>
      </div>
    </div>
  );
};
