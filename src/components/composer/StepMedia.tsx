
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface StepMediaProps {
  formData: any;
  updateFormData: (data: any) => void;
  isFirstVisit: boolean;
}

export const StepMedia = ({ formData, updateFormData, isFirstVisit }: StepMediaProps) => {
  const selectMediaType = (type: string) => {
    updateFormData({ mediaType: type });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choose media or text</h2>
        <p className="text-muted-foreground">Select the type of content you want to create</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TooltipProvider>
          <Tooltip open={isFirstVisit}>
            <TooltipTrigger asChild>
              <Card 
                className={cn(
                  "hover:scale-105 transition-all duration-300 cursor-pointer border-2",
                  formData.mediaType === "media" ? "border-yapp-misty-blue" : "border-transparent"
                )}
                onClick={() => selectMediaType("media")}
              >
                <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                  <div className="h-16 w-16 rounded-full bg-yapp-pale-blue flex items-center justify-center mb-4">
                    <ImageIcon className="h-8 w-8 text-yapp-deep-navy" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Upload Media</h3>
                  <p className="text-sm text-muted-foreground">Upload images, videos, or GIFs</p>
                </CardContent>
              </Card>
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-xs">
              <p>Tip: Upload high-quality media to boost engagement!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Card 
          className={cn(
            "hover:scale-105 transition-all duration-300 cursor-pointer border-2",
            formData.mediaType === "text" ? "border-yapp-misty-blue" : "border-transparent"
          )}
          onClick={() => selectMediaType("text")}
        >
          <CardContent className="flex flex-col items-center justify-center p-10 text-center">
            <div className="h-16 w-16 rounded-full bg-yapp-pale-blue flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-yapp-deep-navy" />
            </div>
            <h3 className="text-xl font-medium mb-2">Text Only</h3>
            <p className="text-sm text-muted-foreground">Create a text-only post</p>
          </CardContent>
        </Card>
      </div>

      {formData.mediaType === "media" && (
        <div className="mt-8 space-y-4">
          <div className="border-2 border-dashed rounded-lg p-12 text-center">
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag & drop your media files here, or <span className="text-yapp-misty-blue cursor-pointer">browse</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, MP4, MOV</p>
          </div>

          <Button variant="outline" className="w-full">
            Browse Stock Media
          </Button>
        </div>
      )}
    </div>
  );
};
