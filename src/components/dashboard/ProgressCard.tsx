import { CheckCircle, Circle, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface ProgressCardProps {
  title: string;
  description: string;
  progress: number;
  totalSteps: number;
  completedSteps: number;
  estimatedTime: string;
  category: string;
  milestones: Array<{
    title: string;
    completed: boolean;
    dueDate?: string;
  }>;
}

const ProgressCard = ({
  title,
  description,
  progress,
  totalSteps,
  completedSteps,
  estimatedTime,
  category,
  milestones
}: ProgressCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'assessment':
        return 'bg-primary/10 text-primary';
      case 'learning':
        return 'bg-success/10 text-success';
      case 'networking':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-foreground mb-1">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Progress: {completedSteps}/{totalSteps} steps
            </span>
            <span className="font-medium text-foreground">
              {progress}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Time Estimate */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Est. completion: {estimatedTime}</span>
        </div>

        {/* Milestones */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">
            Upcoming Milestones:
          </h4>
          <div className="space-y-2">
            {milestones.slice(0, 3).map((milestone, index) => (
              <div key={index} className="flex items-center gap-3">
                {milestone.completed ? (
                  <CheckCircle className="h-4 w-4 text-success" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}
                <div className="flex-1 min-w-0">
                  <span className={`text-sm ${
                    milestone.completed 
                      ? 'text-success line-through' 
                      : 'text-foreground'
                  }`}>
                    {milestone.title}
                  </span>
                  {milestone.dueDate && !milestone.completed && (
                    <div className="text-xs text-muted-foreground">
                      Due: {milestone.dueDate}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
        {progress === 100 && (
          <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg border border-success/20">
            <Target className="h-5 w-5 text-success" />
            <span className="text-sm font-medium text-success">
              Pathway Completed! 🎉
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressCard;