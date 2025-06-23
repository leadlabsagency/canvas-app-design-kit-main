
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import JobCard from '@/components/JobCard';
import SectionHeader from '@/components/SectionHeader';
import { Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Jobs = () => {
  // Sample data for jobs
  const jobs = [
    {
      id: "1",
      title: 'Media Buyer (Adult/Dating) UKRAINE SPEAKER J223',
      company: 'Media Buyer',
      description: 'Plaxy Media is hiring a Middle-Level Media Buyer to manage campaigns in the adult and dating verticals. You\'ll work with traffic networks, optimize campaigns...',
      companyTag: 'Full-Time',
    },
    {
      id: "2",
      title: 'Senior Affiliate Manager',
      company: 'BrandCo',
      description: 'Looking for an experienced Affiliate Manager to oversee our affiliate program, recruit new affiliates, and optimize campaign performance.',
      companyTag: 'Remote',
    },
    {
      id: "3",
      title: 'Content Marketing Specialist',
      company: 'GrowthGen',
      description: 'Create compelling content for our affiliate marketing blog, social media, and email campaigns to drive traffic and conversions.',
      companyTag: 'Contract',
    },
    {
      id: "4",
      title: 'SEO Specialist with Affiliate Experience',
      company: 'RankBoost',
      description: 'Help our clients improve their search rankings with a focus on affiliate marketing sites and content optimization.',
      companyTag: 'Part-Time',
    },
    {
      id: "5",
      title: 'Facebook Ads Manager',
      company: 'SocialFuel',
      description: 'Manage and optimize Facebook ad campaigns for our affiliate marketing clients across various niches.',
      companyTag: 'Freelance',
    },
    {
      id: "6",
      title: 'Affiliate Program Developer',
      company: 'TechAffs',
      description: 'Develop and maintain custom affiliate tracking solutions and integrate with existing platforms and payment systems.',
      companyTag: 'Full-Time',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-light-bg py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Find Your Dream Job</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover exciting job opportunities from top affiliate networks, affiliate tools, and
            arbitration/media buying groups.
          </p>
          
          <SearchBar placeholder="Search jobs, categories..." />
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-gradient-light-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0">
              <Card className="p-6 shadow-sm border border-gray-100 rounded-xl bg-white">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 mr-2 text-gray-600" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Category</h3>
                <select className="w-full p-2 border rounded mb-6">
                  <option>All Categories</option>
                  <option>Affiliate Marketing</option>
                  <option>Media Buying</option>
                  <option>SEO</option>
                  <option>Content Creation</option>
                </select>
                
                <h3 className="font-semibold text-lg mb-4">Experience Level</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="entry-level" className="mr-2" />
                    <label htmlFor="entry-level">Entry Level</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="intermediate" className="mr-2" />
                    <label htmlFor="intermediate">Intermediate</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="expert" className="mr-2" />
                    <label htmlFor="expert">Expert</label>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Salary Range ($)</h3>
                <div className="flex gap-2 mb-6">
                  <input type="text" placeholder="Min" className="w-1/2 p-2 border rounded" />
                  <input type="text" placeholder="Max" className="w-1/2 p-2 border rounded" />
                </div>
                
                <h3 className="font-semibold text-lg mb-4">Country</h3>
                <input type="text" placeholder="e.g. United States" className="w-full p-2 border rounded mb-6" />
                
                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                  Apply Filters
                </button>
              </Card>
            </div>
            
            {/* Jobs Listing */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 className="text-2xl font-bold">Featured Jobs</h2>
                <select className="p-2 border rounded">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Relevance</option>
                  <option>Sort by: Salary</option>
                </select>
              </div>
              
              <div className="space-y-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Jobs;
