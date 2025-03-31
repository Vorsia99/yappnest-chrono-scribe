
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, PenSquare, Plus } from "lucide-react";
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

  // Generate dummy schedule data
  const dummySchedule = [
    { id: 1, day: 5, title: "Instagram product feature", platform: "instagram", time: "10:00 AM" },
    { id: 2, day: 12, title: "YouTube tutorial video", platform: "youtube", time: "3:30 PM" },
    { id: 3, day: 15, title: "Twitter industry news", platform: "twitter", time: "9:00 AM" },
    { id: 4, day: 18, title: "Instagram behind the scenes", platform: "instagram", time: "1:00 PM" },
    { id: 5, day: 22, title: "YouTube Q&A session", platform: "youtube", time: "5:00 PM" },
    { id: 6, day: 25, title: "Twitter poll", platform: "twitter", time: "11:30 AM" },
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
              
              return (
                <div
                  key={index}
                  className={`min-h-24 p-1 border rounded-md ${
                    day.isCurrentMonth ? 'bg-card' : 'bg-muted/30'
                  } ${day.day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear() ? 'ring-2 ring-yapp-misty-blue' : ''}`}
                >
                  {day.day && (
                    <>
                      <div className="flex justify-between items-start p-1">
                        <span className="text-sm font-medium">{day.day}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-1 mt-1">
                        {daySchedule.map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate ${
                              event.platform === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                              event.platform === 'twitter' ? 'bg-blue-400 text-white' :
                              'bg-red-500 text-white'
                            }`}
                          >
                            {event.time} - {event.title}
                          </div>
                        ))}
                      </div>
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
