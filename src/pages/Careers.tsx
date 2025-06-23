
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Affiliate Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time"
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Customer Success Representative",
      department: "Customer Support",
      location: "Remote",
      type: "Part-time"
    }
  ];

  const benefits = [
    {
      title: "Remote-first Culture",
      description: "Work from anywhere in the world with our globally distributed team.",
      icon: "🌎"
    },
    {
      title: "Flexible Hours",
      description: "Set your own schedule and work when you're most productive.",
      icon: "⏰"
    },
    {
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages.",
      icon: "💰"
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences.",
      icon: "📚"
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage.",
      icon: "🏥"
    },
    {
      title: "Team Retreats",
      description: "Twice-yearly company retreats in exciting locations.",
      icon: "✈️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-twello-blue to-twello-purple py-20 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
                <p className="text-xl mt-6">
                  Help us build the future of affiliate marketing. We're looking for passionate people to join our growing team.
                </p>
                <Button size="lg" className="mt-8 bg-white text-twello-blue hover:bg-gray-100">
                  View Open Positions
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Twello team" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Culture */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Twello culture" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <div className="space-y-4">
                <p>
                  At Twello, we're building more than just a platform – we're creating a community. Our team is diverse, collaborative, and passionate about making affiliate marketing more accessible and transparent for everyone.
                </p>
                <p>
                  We value curiosity, innovation, and diverse perspectives. We believe the best solutions come from teams where everyone feels comfortable sharing their ideas and bringing their authentic selves to work.
                </p>
                <p>
                  As a remote-first company, we hire talented individuals regardless of location. We focus on results, not hours logged, and trust our team members to manage their time effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Open Positions */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Open Positions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Join our team and help build the future of affiliate marketing. We're always looking for talented individuals to join our mission.
          </p>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.department}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.location}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 pb-6 md:pb-0 md:pr-6">
                      <Button>View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-4">Don't see a position that fits your skills?</p>
            <Button variant="outline" size="lg">Submit a General Application</Button>
          </div>
        </div>
        
        {/* Employee Testimonials */}
        <div className="bg-twello-blue/5 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=33" 
                        alt="Employee" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <p className="mb-4 italic">
                      "Working at Twello has been the highlight of my career. The team is incredible, and we're solving real problems for affiliate marketers every day."
                    </p>
                    <h4 className="font-semibold">David Kim</h4>
                    <p className="text-sm text-gray-600">Lead Developer, 3 years at Twello</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=34" 
                        alt="Employee" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <p className="mb-4 italic">
                      "The remote-first culture at Twello has allowed me to create the perfect work-life balance while still being part of an amazing team."
                    </p>
                    <h4 className="font-semibold">Maria Garcia</h4>
                    <p className="text-sm text-gray-600">Marketing Manager, 2 years at Twello</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src="https://i.pravatar.cc/150?img=35" 
                        alt="Employee" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <p className="mb-4 italic">
                      "I love the challenges we tackle at Twello. Every day I'm learning something new and helping to shape the future of affiliate marketing."
                    </p>
                    <h4 className="font-semibold">James Wilson</h4>
                    <p className="text-sm text-gray-600">Product Designer, 1.5 years at Twello</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Application Process */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-twello-blue rounded-full z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="mt-3 md:mt-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="font-bold text-lg">Application Review</h3>
                    <p className="text-gray-600 mt-2">Our team reviews all applications and resumes within 5 business days.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-twello-blue rounded-full z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="mt-3 md:mt-0 md:w-1/2 md:pl-8">
                    <h3 className="font-bold text-lg">Initial Interview</h3>
                    <p className="text-gray-600 mt-2">A 30-minute video call with a team member to discuss your experience and the role.</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-twello-blue rounded-full z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="mt-3 md:mt-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="font-bold text-lg">Skills Assessment</h3>
                    <p className="text-gray-600 mt-2">A practical assessment related to the role to showcase your skills.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-twello-blue rounded-full z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="mt-3 md:mt-0 md:w-1/2 md:pl-8">
                    <h3 className="font-bold text-lg">Team Interview</h3>
                    <p className="text-gray-600 mt-2">Meet with potential team members to ensure mutual fit and alignment.</p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-8 h-8 bg-twello-blue rounded-full z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="mt-3 md:mt-0 md:w-1/2 md:pr-8 md:text-right">
                    <h3 className="font-bold text-lg">Final Interview & Offer</h3>
                    <p className="text-gray-600 mt-2">Final discussion with leadership and, if successful, a formal offer.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-twello-blue py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              We're always looking for talented people to join our mission of transforming the affiliate marketing industry.
            </p>
            <Button size="lg" className="bg-white text-twello-blue hover:bg-gray-100">
              Browse Open Positions
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
