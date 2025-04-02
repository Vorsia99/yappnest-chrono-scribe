
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Image, FileText, Upload, FileVideo, PlusCircle } from "lucide-react";

export const StepMedia = ({ formData, updateFormData, isFirstVisit }) => {
  const [mediaType, setMediaType] = useState(formData.mediaType || "");
  
  const handleTypeSelect = (type) => {
    setMediaType(type);
    updateFormData({ mediaType: type });
  };

  const mediaTypes = [
    { id: 'image', label: 'Image', icon: <Image className="h-6 w-6 mb-2" /> },
    { id: 'video', label: 'Video', icon: <FileVideo className="h-6 w-6 mb-2" /> },
    { id: 'text', label: 'Text Only', icon: <FileText className="h-6 w-6 mb-2" /> },
    { id: 'mixed', label: 'Mixed Content', icon: <PlusCircle className="h-6 w-6 mb-2" /> }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Choose Media Type</h2>
        <p className="text-muted-foreground mb-6">Select the type of content you want to create</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mediaTypes.map((type) => (
            <Card 
              key={type.id}
              className={`cursor-pointer hover:border-primary transition-all ${mediaType === type.id ? 'border-2 border-primary' : ''}`}
              onClick={() => handleTypeSelect(type.id)}
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                {type.icon}
                <h3 className="font-medium">{type.label}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {mediaType && (
        <div className="animate-fade-in">
          <h2 className="text-xl font-semibold mb-2">Upload Media</h2>
          <p className="text-muted-foreground mb-6">Upload or select media from your library</p>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="upload">Upload New</TabsTrigger>
              <TabsTrigger value="library">Media Library</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="mt-0">
              <div className="border-2 border-dashed rounded-lg p-12 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">Drag and drop files here</h3>
                  <p className="text-muted-foreground mb-4">or browse from your computer</p>
                  <Button>Select Files</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="library" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-md overflow-hidden">
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <Image className="h-8 w-8" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-muted rounded-md overflow-hidden">
                    <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
                      Template {i}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};
