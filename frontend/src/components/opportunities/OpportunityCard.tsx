import { Calendar, MapPin, DollarSign, ExternalLink, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface OpportunityCardProps {
  type: 'job' | 'internship' | 'scholarship';
  title: string;
  organization: string;
  location: string;
  deadline?: string;
  amount?: string;
  description: string;
  requirements: string[];
  isBookmarked?: boolean;
  onBookmark: () => void;
  onApply: () => void;
}

const OpportunityCard = ({
  type,
  title,
  organization,
  location,
  deadline,
  amount,
  description,
  requirements,
  isBookmarked = false,
  onBookmark,
  onApply
}: OpportunityCardProps) => {
  const getTypeColor = (opportunityType: string) => {
    switch (opportunityType) {
      case 'job':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'internship':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'scholarship':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (opportunityType: string) => {
    switch (opportunityType) {
      case 'job':
        return '💼';
      case 'internship':
        return '🎓';
      case 'scholarship':
        return '💰';
      default:
        return '📋';
    }
  };

  return (
    <Card className="group transition-all duration-300 hover:shadow-floating hover:scale-[1.02] bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{getTypeIcon(type)}</div>
            <div className="flex-1">
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                {organization}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getTypeColor(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {deadline && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due: {deadline}</span>
            </div>
          )}
          {amount && (
            <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
              <DollarSign className="h-4 w-4" />
              <span>{amount}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Requirements */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Requirements:</h4>
          <div className="flex flex-wrap gap-1">
            {requirements.slice(0, 3).map((req, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {req}
              </Badge>
            ))}
            {requirements.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{requirements.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onApply}
          className="w-full bg-gradient-to-r from-primary to-secondary group-hover:shadow-lg transition-all"
        >
          Apply Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;