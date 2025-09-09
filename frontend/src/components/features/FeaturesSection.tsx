import { Brain, Target, BookOpen, Users, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Advanced psychometric tests analyze your personality, interests, and strengths to identify perfect career matches.',
      color: 'primary'
    },
    {
      icon: Target,
      title: 'Personalized Roadmaps',
      description: 'Get step-by-step career pathways with skills, courses, and milestones tailored to your goals.',
      color: 'secondary'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access curated courses from top platforms like Coursera, edX, and industry experts.',
      color: 'success'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals for guidance, networking, and career advice.',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Opportunities',
      description: 'Discover jobs, internships, and scholarships that match your profile and career goals.',
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Skill Gap Analysis',
      description: 'Identify missing skills for your dream career and get recommendations to bridge the gaps.',
      color: 'success'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'success':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools and personalized guidance to accelerate your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-floating hover:scale-105 bg-card/80 backdrop-blur-sm border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${getColorClasses(feature.color)} transition-transform group-hover:scale-110`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;