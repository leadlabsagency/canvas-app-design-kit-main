
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Calendar, Briefcase, Edit, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Digital marketing specialist with over 5 years of experience in affiliate marketing and SEO optimization. Passionate about driving conversions and building successful partnerships.',
    location: 'San Francisco, CA',
    joined: 'January 2023',
    title: 'Digital Marketing Manager',
    company: 'TechGrowth Inc.'
  });

  const [editForm, setEditForm] = useState({...userProfile});

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditForm({...userProfile});
    setIsEditing(false);
  };

  const handleSave = () => {
    setUserProfile({...editForm});
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=Alex" alt="Alex Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <h1 className="text-3xl font-bold text-gray-800">{userProfile.name}</h1>
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={handleEdit}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  )}
                </div>
                <p className="text-gray-600 mt-1 flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  {userProfile.email}
                </p>
                <p className="text-gray-600 mt-1 flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  {userProfile.location}
                </p>
                <p className="text-gray-600 mt-1 flex items-center justify-center md:justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {userProfile.joined}
                </p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                  <Badge variant="secondary">{userProfile.title}</Badge>
                  <Badge variant="outline">{userProfile.company}</Badge>
                  <Badge variant="outline">Affiliate Marketing</Badge>
                  <Badge variant="outline">SEO</Badge>
                </div>
              </div>
            </div>
          </div>

          {isEditing ? (
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={editForm.name} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={editForm.email} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Location</label>
                    <Input 
                      id="location" 
                      name="location" 
                      value={editForm.location} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Job Title</label>
                    <Input 
                      id="title" 
                      name="title" 
                      value={editForm.title} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={editForm.company} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                  <Textarea 
                    id="bio" 
                    name="bio" 
                    rows={4} 
                    value={editForm.bio} 
                    onChange={handleChange} 
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleCancel}>
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Check className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="saved">Saved Items</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{userProfile.bio}</p>
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-3">Work</h3>
                      <div className="flex items-center text-gray-700 mb-2">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>{userProfile.title} at {userProfile.company}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent interactions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-start gap-4 pb-4 border-b">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                            {i === 0 ? "📝" : i === 1 ? "💬" : "❤️"}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              {i === 0 ? "Applied to a job" : i === 1 ? "Commented on a deal" : "Saved an offer"}
                            </p>
                            <p className="text-sm text-gray-500">
                              {i === 0 ? "Senior Affiliate Manager at TechBoost Inc." : 
                               i === 1 ? "50% off SocialPulse Pro Annual Plan" : 
                               "Free trial of SEO Analytics Package"}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {i === 0 ? "2 days ago" : i === 1 ? "Last week" : "2 weeks ago"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="saved">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Items</CardTitle>
                    <CardDescription>Deals, jobs, and offers you've saved</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-500 text-center py-8">You haven't saved any items yet</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
