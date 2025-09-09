import { TrendingUp, DollarSign, MapPin, Clock, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CareerCardProps {
  title: string;
  company?: string;
  salaryRange: string;
  location: string;
  type: string;
  matchPercentage: number;
  skills: string[];
  growth: 'High' | 'Medium' | 'Low';
  isBookmarked?: boolean;
  onBookmark: () => void;
  onExplore: () => void;
}

const CareerCard = ({
  title,
  company,
  salaryRange,
  location,
  type,
  matchPercentage,
  skills,
  growth,
  isBookmarked = false,
  onBookmark,
  onExplore
}: CareerCardProps) => {
  const getGrowthColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'text-success';
      case 'Medium':
        return 'text-primary';
      case 'Low':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-primary';
    return 'text-muted-foreground';
  };

  return (
    <Card className="group transition-all duration-300 hover:shadow-floating hover:scale-[1.02] bg-gradient-card border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {company && (
              <p className="text-sm text-muted-foreground">{company}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className={`text-sm font-semibold ${getMatchColor(matchPercentage)}`}>
              {matchPercentage}% Match
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBookmark}
              className={`p-2 ${isBookmarked ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{salaryRange}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className={`h-4 w-4 ${getGrowthColor(growth)}`} />
            <span className={`${getGrowthColor(growth)} font-medium`}>
              {growth} Growth
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Key Skills:</h4>
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onExplore}
          variant="outline"
          className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary/40"
        >
          Explore Career Path
        </Button>
      </CardContent>
    </Card>
  );
};

export default CareerCard;