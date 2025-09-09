import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import AssessmentCard from '@/components/assessment/AssessmentCard';
import CareerCard from '@/components/careers/CareerCard';
import OpportunityCard from '@/components/opportunities/OpportunityCard';
import ProgressCard from '@/components/dashboard/ProgressCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Index = () => {
  // Sample data for demonstrations
  const sampleAssessments = [
    {
      title: 'Career Personality Assessment',
      description: 'Discover your career personality type and matching professions based on psychological traits.',
      duration: '15 minutes',
      participants: '2.5M+',
      difficulty: 'Beginner' as const,
      tags: ['Personality', 'Career Match', 'Psychology'],
      onStart: () => console.log('Starting personality assessment')
    },
    {
      title: 'Skills & Interests Analyzer',
      description: 'Comprehensive evaluation of your technical and soft skills matched with market demands.',
      duration: '25 minutes',
      participants: '1.8M+',
      difficulty: 'Intermediate' as const,
      tags: ['Skills', 'Market Analysis', 'AI-Powered'],
      onStart: () => console.log('Starting skills assessment')
    }
  ];

  const sampleCareers = [
    {
      title: 'Data Science Specialist',
      company: 'TechCorp Inc.',
      salaryRange: '$80k - $120k',
      location: 'Remote',
      type: 'Full-time',
      matchPercentage: 92,
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Visualization'],
      growth: 'High' as const,
      onBookmark: () => console.log('Bookmarked data science role'),
      onExplore: () => console.log('Exploring data science path')
    },
    {
      title: 'UX/UI Designer',
      company: 'Design Studio',
      salaryRange: '$65k - $95k',
      location: 'New York, NY',
      type: 'Full-time',
      matchPercentage: 87,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      growth: 'Medium' as const,
      onBookmark: () => console.log('Bookmarked UX role'),
      onExplore: () => console.log('Exploring UX path')
    }
  ];

  const sampleOpportunities = [
    {
      type: 'internship' as const,
      title: 'Software Engineering Intern',
      organization: 'Google',
      location: 'Mountain View, CA',
      deadline: 'March 15, 2024',
      amount: '$8,000/month',
      description: 'Join our team to work on cutting-edge technologies and gain real-world experience.',
      requirements: ['Computer Science', 'Programming', 'Problem Solving'],
      onBookmark: () => console.log('Bookmarked internship'),
      onApply: () => console.log('Applying to internship')
    },
    {
      type: 'scholarship' as const,
      title: 'Merit-Based Tech Scholarship',
      organization: 'Tech Foundation',
      location: 'Nationwide',
      deadline: 'April 30, 2024',
      amount: '$10,000',
      description: 'Supporting outstanding students pursuing careers in technology and innovation.',
      requirements: ['GPA 3.5+', 'STEM Major', 'Leadership'],
      onBookmark: () => console.log('Bookmarked scholarship'),
      onApply: () => console.log('Applying to scholarship')
    }
  ];

  const sampleProgress = [
    {
      title: 'Frontend Developer Pathway',
      description: 'Complete roadmap to become a professional frontend developer',
      progress: 65,
      totalSteps: 12,
      completedSteps: 8,
      estimatedTime: '3 months',
      category: 'Learning',
      milestones: [
        { title: 'Complete React Fundamentals', completed: true },
        { title: 'Build Portfolio Project', completed: false, dueDate: 'Jan 15' },
        { title: 'Practice Technical Interviews', completed: false, dueDate: 'Jan 30' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />

      {/* Assessment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Start Your Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take our comprehensive assessments to discover your ideal career path
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Play className="mr-2 h-5 w-5" />
              Take Free Assessment
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleAssessments.map((assessment, index) => (
              <AssessmentCard key={index} {...assessment} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Recommendations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Recommended Careers
              </h2>
              <p className="text-xl text-muted-foreground">
                Personalized career matches based on your profile
              </p>
            </div>
            <Button variant="outline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleCareers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Hub */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Latest Opportunities
              </h2>
              <p className="text-xl text-muted-foreground">
                Jobs, internships, and scholarships tailored for you
              </p>
            </div>
            <Button variant="outline">
              Explore All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleOpportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Track Your Progress
            </h2>
            <p className="text-xl text-muted-foreground">
              Monitor your learning journey and celebrate achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sampleProgress.map((progress, index) => (
              <ProgressCard key={index} {...progress} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
