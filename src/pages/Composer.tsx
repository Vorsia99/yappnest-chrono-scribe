
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, ChevronRight, 
  AlignLeft, Image, Upload, 
  SendHorizontal, Sparkles, 
  Clock, MessageCircle, Calendar
} from "lucide-react";
import { StepMedia } from "@/components/composer/StepMedia";
import { StepPlatforms } from "@/components/composer/StepPlatforms";
import { StepContent } from "@/components/composer/StepContent";
import { StepPreview } from "@/components/composer/StepPreview";
import { StepSchedule } from "@/components/composer/StepSchedule";
import { StepConfirmation } from "@/components/composer/StepConfirmation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const steps = [
  { id: 1, label: "Media", description: "Choose media or text" },
  { id: 2, label: "Platforms", description: "Select platforms and accounts" },
  { id: 3, label: "Content", description: "Add title and captions" },
  { id: 4, label: "Preview", description: "Preview and edit" },
  { id: 5, label: "Schedule", description: "Set publishing time" },
  { id: 6, label: "Confirm", description: "Review and publish" }
];

const Composer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [formData, setFormData] = useState({
    mediaType: "",
    selectedPlatforms: [],
    title: "",
    captions: {},
    hashtags: {},
    media: [],
    scheduledDate: null,
    scheduledTime: null,
    postType: "schedule" // "now", "schedule", "optimal"
  });

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
    window.scrollTo(0, 0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepMedia 
          formData={formData} 
          updateFormData={updateFormData}
          isFirstVisit={isFirstVisit}
        />;
      case 2:
        return <StepPlatforms 
          formData={formData} 
          updateFormData={updateFormData}
          isFirstVisit={isFirstVisit}
        />;
      case 3:
        return <StepContent 
          formData={formData} 
          updateFormData={updateFormData}
          isFirstVisit={isFirstVisit}
        />;
      case 4:
        return <StepPreview 
          formData={formData} 
          updateFormData={updateFormData}
          goToStep={goToStep}
        />;
      case 5:
        return <StepSchedule 
          formData={formData} 
          updateFormData={updateFormData}
          isFirstVisit={isFirstVisit}
        />;
      case 6:
        return <StepConfirmation 
          formData={formData} 
          goToStep={goToStep}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Studio</h1>
          <p className="text-muted-foreground">Create and schedule content across multiple platforms.</p>
        </div>
        <div className="flex space-x-2">
          {currentStep < 6 && (
            <>
              <Button variant="outline">
                Save Draft
              </Button>
              {currentStep === 5 && (
                <Button className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90">
                  <SendHorizontal className="mr-2 h-4 w-4" /> Schedule Post
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Step {currentStep} of {steps.length}: {steps[currentStep - 1].label}</p>
            <p className="text-sm font-medium">{Math.round((currentStep / steps.length) * 100)}%</p>
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-2" />
        </div>

        {/* Step indicators */}
        <div className="hidden md:flex justify-between mb-8">
          {steps.map((step) => (
            <TooltipProvider key={step.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant={currentStep === step.id ? "default" : "outline"} 
                    size="sm"
                    className={`rounded-full w-10 h-10 p-0 ${currentStep > step.id ? "bg-yapp-misty-blue text-white" : ""}`}
                    onClick={() => step.id < currentStep && goToStep(step.id)}
                    disabled={step.id > currentStep}
                  >
                    {step.id}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{step.label}: {step.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {/* Step content */}
        <Card className="border shadow-md">
          <div className="p-6">
            {renderStepContent()}
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          {currentStep < 6 && (
            <Button onClick={handleNext}>
              {currentStep === 5 ? "Finish" : "Next"} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Composer;
