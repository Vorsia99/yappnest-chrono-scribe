
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon, Minus } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
}

export function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card className="shadow-soft hover-scale">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="flex items-center text-xs text-muted-foreground">
          {trend === "up" && (
            <ArrowUpIcon className="mr-1 h-3 w-3 text-green-500" />
          )}
          {trend === "down" && (
            <ArrowDownIcon className="mr-1 h-3 w-3 text-red-500" />
          )}
          {trend === "neutral" && (
            <Minus className="mr-1 h-3 w-3 text-gray-500" />
          )}
          <span className={cn(
            trend === "up" && "text-green-500",
            trend === "down" && "text-red-500"
          )}>
            {description}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
