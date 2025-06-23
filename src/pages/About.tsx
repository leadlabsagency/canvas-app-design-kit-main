
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, MessageCircle, BookOpen } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Co-founder',
      image: 'https://i.pravatar.cc/300?img=11',
      bio: 'Alex has over 15 years of experience in digital marketing and affiliate partnerships.'
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Sarah leads our technical strategy and has built multiple successful SaaS platforms.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Partnerships',
      image: 'https://i.pravatar.cc/300?img=13',
      bio: 'Michael manages our network of affiliates and has deep connections in the industry.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Director',
      image: 'https://i.pravatar.cc/300?img=14',
      bio: 'Emma oversees all marketing initiatives and has a background in conversion optimization.'
    }
  ];

  const values = [
    {
      icon: <Building className="h-8 w-8 text-twello-blue" />,
      title: 'Transparency',
      description: 'We believe in complete transparency in all our dealings with affiliates, merchants, and users.'
    },
    {
      icon: <Users className="h-8 w-8 text-twello-blue" />,
      title: 'Community',
      description: 'Building a supportive community of affiliates that helps each other succeed.'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-twello-blue" />,
      title: 'Innovation',
      description: 'Constantly innovating to provide the best tools and resources for affiliate marketers.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-twello-blue" />,
      title: 'Education',
      description: 'Empowering affiliates with knowledge and skills to thrive in the digital economy.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-twello-blue to-twello-purple py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Our mission is to empower affiliate marketers</h1>
              <p className="text-xl text-white/90 mt-6">
                Twello was founded with a clear purpose: to create a platform that helps affiliate marketers connect, grow, and succeed in today's digital economy.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-0"></div>
        </div>
        
        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Twello began in 2020 when our founders, Alex and Sarah, experienced firsthand the challenges of affiliate marketing. They struggled to find reliable information about affiliate programs, connect with the right networks, and discover genuine opportunities.
                </p>
                <p>
                  What started as a simple spreadsheet of verified affiliate programs quickly grew into a comprehensive platform serving thousands of affiliate marketers worldwide. Today, Twello is the go-to resource for affiliates looking for verified deals, jobs, networks, and events.
                </p>
                <p>
                  Our team has grown to over 30 dedicated professionals across 10 countries, all united by our mission to make affiliate marketing more accessible, transparent, and profitable for everyone.
                </p>
              </div>
              <Button className="mt-6">Join Our Community</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Twello team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-blue-50 rounded-full">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Meet Our Team */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-twello-blue font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-twello-blue py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold">15K+</p>
                <p className="text-xl mt-2">Affiliate Deals</p>
              </div>
              <div className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold">5K+</p>
                <p className="text-xl mt-2">Active Users</p>
              </div>
              <div className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold">500+</p>
                <p className="text-xl mt-2">Affiliate Networks</p>
              </div>
              <div className="text-center text-white">
                <p className="text-4xl md:text-5xl font-bold">50+</p>
                <p className="text-xl mt-2">Countries</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Join Us CTA */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Twello Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're just starting out or you're an experienced affiliate marketer, there's a place for you in our community. Join Twello today and take your affiliate business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Sign Up Free</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
