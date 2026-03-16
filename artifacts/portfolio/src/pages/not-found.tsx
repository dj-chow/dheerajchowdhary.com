import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta({
    title: "Page Not Found — Dheeraj Chowdhary",
    description: "The page you're looking for doesn't exist."
  });

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
