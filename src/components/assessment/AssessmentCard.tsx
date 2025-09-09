import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AssessmentCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  onStart: () => void;
}

const AssessmentCard = ({
  title,
  description,
  duration,
  participants,
  difficulty,
  tags,
  onStart
}: AssessmentCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Advanced':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-floating hover:scale-[1.02] bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {participants}
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            Certificate
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onStart}
          className="w-full bg-gradient-to-r from-primary to-secondary group-hover:shadow-lg transition-all"
        >
          Start Assessment
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default AssessmentCard;