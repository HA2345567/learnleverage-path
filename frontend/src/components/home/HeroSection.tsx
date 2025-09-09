import { ArrowRight, Target, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const stats = [
    { icon: Target, value: '95%', label: 'Career Match Accuracy' },
    { icon: BookOpen, value: '10K+', label: 'Learning Paths' },
    { icon: Users, value: '50K+', label: 'Students Guided' },
    { icon: TrendingUp, value: '85%', label: 'Employment Rate' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-success/5 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 text-sm font-medium text-primary">
              🎯 AI-Powered Career Guidance
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground lg:text-6xl">
            Your{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent">
              Personalized
            </span>{' '}
            Career Journey Starts Here
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
            Discover your ideal career path with AI-driven recommendations, 
            personalized learning roadmaps, and real-time opportunities tailored just for you.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Take Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg font-semibold">
              Explore Careers
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center transition-all hover:shadow-lg hover:scale-105 bg-card/50 backdrop-blur-sm border-0 shadow-card"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;