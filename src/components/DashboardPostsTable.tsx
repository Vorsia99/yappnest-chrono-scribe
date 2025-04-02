
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Edit2, Trash2, AlertTriangle } from 'lucide-react';
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
    
    const icons = {
      positive: "↑",
      negative: "↓",
      neutral: "→"
    };
    
    return (
      <Badge className={variants[prediction]}>
        <span className="mr-1">{icons[prediction]}</span>
        {prediction.charAt(0).toUpperCase() + prediction.slice(1)}
      </Badge>
    );
  };

  if (posts.length === 0) {
    return (
      <div className="w-full overflow-hidden rounded-md border p-8 flex flex-col items-center justify-center text-center">
        <AlertTriangle className="h-10 w-10 text-amber-500 mb-2" />
        <h3 className="text-lg font-medium mb-1">No posts found</h3>
        <p className="text-muted-foreground mb-4">You don't have any posts scheduled or drafted yet.</p>
        <Button>Create Your First Post</Button>
      </div>
    );
  }

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
            <TableRow key={post.id} className="group hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium max-w-[200px] truncate">{post.content}</TableCell>
              <TableCell>
                <Badge variant="outline">
                  {post.type === "image" ? "Image + Text" : "Text"}
                </Badge>
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <Calendar size={14} className="text-muted-foreground" />
                {post.date}
              </TableCell>
              <TableCell className="flex items-center gap-1">
                <Clock size={14} className="text-muted-foreground" />
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onEdit(post)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onDelete(post.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
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
