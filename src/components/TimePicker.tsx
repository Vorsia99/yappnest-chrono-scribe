
import * as React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function TimePicker() {
  const [time, setTime] = React.useState<string>("");
  
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = ["00", "15", "30", "45"];
  const periods = ["AM", "PM"];

  const [selectedHour, setSelectedHour] = React.useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = React.useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = React.useState<string | null>(null);

  const handleHourSelect = (hour: number) => {
    setSelectedHour(hour);
    updateTime(hour, selectedMinute, selectedPeriod);
  };

  const handleMinuteSelect = (minute: string) => {
    setSelectedMinute(minute);
    updateTime(selectedHour, minute, selectedPeriod);
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
    updateTime(selectedHour, selectedMinute, period);
  };

  const updateTime = (hour: number | null, minute: string | null, period: string | null) => {
    if (hour !== null && minute !== null && period !== null) {
      setTime(`${hour}:${minute} ${period}`);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !time && "text-muted-foreground"
          )}
        >
          <Clock className="mr-2 h-4 w-4" />
          {time ? time : <span>Select time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="flex space-x-4">
          <div className="space-y-2">
            <p className="text-xs font-medium mb-2">Hour</p>
            <div className="grid grid-cols-4 gap-2">
              {hours.map((hour) => (
                <Button
                  key={hour}
                  variant={selectedHour === hour ? "default" : "outline"}
                  className="h-8 w-10"
                  onClick={() => handleHourSelect(hour)}
                >
                  {hour}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium mb-2">Minute</p>
            <div className="grid grid-cols-2 gap-2">
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  variant={selectedMinute === minute ? "default" : "outline"}
                  className="h-8 w-10"
                  onClick={() => handleMinuteSelect(minute)}
                >
                  {minute}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium mb-2">AM/PM</p>
            <div className="grid grid-cols-1 gap-2">
              {periods.map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  className="h-8 w-12"
                  onClick={() => handlePeriodSelect(period)}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
