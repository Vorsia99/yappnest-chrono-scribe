
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Edit2, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Post {
  id: number;
  type: "image" | "text";
  content: string;
  image?: string;
  date: string;
  time: string;
  status: "draft" | "scheduled";
  prediction?: "positive" | "negative" | "neutral";
}

interface DashboardPostsTableProps {
  posts: Post[];
  onDelete: (id: number) => void;
  onEdit: (post: Post) => void;
}

export function DashboardPostsTable({ posts, onDelete, onEdit }: DashboardPostsTableProps) {
  // Render prediction badge
  const renderPredictionBadge = (prediction?: "positive" | "negative" | "neutral") => {
    if (!prediction) return null;
    
    const variants = {
      positive: "bg-green-100 text-green-800",
      negative: "bg-red-100 text-red-800",
      neutral: "bg-blue-100 text-blue-800"
    };
    
    return (
      <Badge className={variants[prediction]}>
        {prediction.charAt(0).toUpperCase() + prediction.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="w-full overflow-auto rounded-md border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead>Content</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Prediction</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium max-w-[200px] truncate">{post.content}</TableCell>
              <TableCell>{post.type === "image" ? "Image + Text" : "Text"}</TableCell>
              <TableCell className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <Clock size={14} />
                {post.time}
              </TableCell>
              <TableCell>
                <Badge variant={post.status === "scheduled" ? "default" : "outline"}>
                  {post.status === "scheduled" ? "Scheduled" : "Draft"}
                </Badge>
              </TableCell>
              <TableCell>{renderPredictionBadge(post.prediction)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => onEdit(post)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onDelete(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
