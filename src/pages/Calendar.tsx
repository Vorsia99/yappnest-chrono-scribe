
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ChevronLeft, ChevronRight, Pencil, PenSquare } from "lucide-react";
import { useState } from "react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const nextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };
  
  const prevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentMonth(prev);
  };

  // Get month name and year
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const year = currentMonth.getFullYear();

  // Generate dummy schedule data with expanded details
  const dummySchedule = [
    { id: 1, day: 5, title: "Instagram product feature", platform: "instagram", type: "post", time: "10:00 AM" },
    { id: 2, day: 12, title: "YouTube tutorial video", platform: "youtube", type: "video", time: "3:30 PM" },
    { id: 3, day: 15, title: "Twitter industry news", platform: "twitter", type: "post", time: "9:00 AM" },
    { id: 4, day: 18, title: "Instagram behind the scenes", platform: "instagram", type: "story", time: "1:00 PM" },
    { id: 5, day: 22, title: "YouTube Q&A session", platform: "youtube", type: "video", time: "5:00 PM" },
    { id: 6, day: 25, title: "Twitter poll", platform: "twitter", type: "post", time: "11:30 AM" },
    { id: 7, day: 8, title: "Instagram carousel post", platform: "instagram", type: "post", time: "2:15 PM" },
    { id: 8, day: 8, title: "Instagram story highlight", platform: "instagram", type: "story", time: "4:45 PM" },
    { id: 9, day: 20, title: "Facebook live event", platform: "facebook", type: "video", time: "7:00 PM" },
    { id: 10, day: 28, title: "LinkedIn article promotion", platform: "linkedin", type: "post", time: "12:30 PM" },
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    // Add cells for each day of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get platform color mapping
  const getPlatformColor = (platform) => {
    const colors = {
      instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
      youtube: "bg-red-500",
      twitter: "bg-blue-400",
      facebook: "bg-blue-600",
      linkedin: "bg-blue-700",
      tiktok: "bg-black",
    };
    return colors[platform] || "bg-gray-500";
  };

  // Get content type icon and color
  const getContentTypeStyle = (type) => {
    const styles = {
      post: "bg-green-100 text-green-800",
      story: "bg-pink-100 text-pink-800",
      video: "bg-amber-100 text-amber-800",
    };
    return styles[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-muted-foreground">Plan and schedule your content across multiple platforms.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" /> Today
          </Button>
          <Button className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90">
            <PenSquare className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{monthName} {year}</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {weekdays.map((day) => (
              <div key={day} className="h-8 flex items-center justify-center font-medium text-sm">
                {day}
              </div>
            ))}
            
            {calendarDays.map((day, index) => {
              const daySchedule = dummySchedule.filter(item => item.day === day.day);
              const hasInstagramPost = daySchedule.some(event => event.platform === "instagram" && event.type === "post");
              const hasInstagramStory = daySchedule.some(event => event.platform === "instagram" && event.type === "story");
              const hasTwitterPost = daySchedule.some(event => event.platform === "twitter");
              const hasYouTube = daySchedule.some(event => event.platform === "youtube");
              const hasFacebook = daySchedule.some(event => event.platform === "facebook");
              const hasLinkedIn = daySchedule.some(event => event.platform === "linkedin");
              
              return (
                <div
                  key={index}
                  className={`min-h-28 p-1 border rounded-md ${
                    day.isCurrentMonth ? 'bg-card' : 'bg-muted/30'
                  } ${day.day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear() ? 'ring-2 ring-yapp-misty-blue' : ''}`}
                >
                  {day.day && (
                    <>
                      <div className="flex justify-between items-start p-1">
                        <span className="text-sm font-medium">{day.day}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5">
                          <Pencil className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      {daySchedule.length > 0 && (
                        <div className="mt-1 space-y-1">
                          <div className="flex flex-wrap gap-1">
                            {hasInstagramPost && (
                              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" title="Instagram Post"></div>
                            )}
                            {hasInstagramStory && (
                              <div className="h-4 w-4 rounded-full border-2 border-pink-500" title="Instagram Story"></div>
                            )}
                            {hasTwitterPost && (
                              <div className="h-4 w-4 rounded-full bg-blue-400" title="Twitter"></div>
                            )}
                            {hasYouTube && (
                              <div className="h-4 w-4 rounded-full bg-red-500" title="YouTube"></div>
                            )}
                            {hasFacebook && (
                              <div className="h-4 w-4 rounded-full bg-blue-600" title="Facebook"></div>
                            )}
                            {hasLinkedIn && (
                              <div className="h-4 w-4 rounded-full bg-blue-700" title="LinkedIn"></div>
                            )}
                          </div>
                          
                          {daySchedule.length > 0 && (
                            <div className="text-xs text-gray-500 truncate">
                              {daySchedule.length} {daySchedule.length === 1 ? 'post' : 'posts'}
                            </div>
                          )}
                          
                          {daySchedule.slice(0, 1).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 rounded truncate ${getContentTypeStyle(event.type)}`}
                            >
                              {event.time} - {event.title}
                            </div>
                          ))}
                          
                          {daySchedule.length > 1 && (
                            <div className="text-xs text-muted-foreground text-center">
                              +{daySchedule.length - 1} more
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
