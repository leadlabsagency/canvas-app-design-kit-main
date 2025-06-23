
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import DealCard from '@/components/DealCard';
import SectionHeader from '@/components/SectionHeader';
import { Filter, Tag, Star, TrendingUp, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Deals = () => {
  // Sample data for deals
  const deals = [
    {
      id: "1",
      title: 'Cloud Storage 2TB',
      category: 'Cloud Services',
      description: 'Unlimited storage for your data.',
      tags: ['Cloud Service'],
    },
    {
      id: "2",
      title: 'Email Automation Pro',
      category: 'Marketing',
      description: 'Automate campaigns effortlessly.',
      tags: ['Marketing'],
    },
    {
      id: "3",
      title: 'Pro SEO Tool',
      category: 'SEO',
      description: 'SEO tool for agencies.',
      tags: ['SEO'],
    },
    {
      id: "4",
      title: 'Smartproxy - Residential Proxies',
      category: 'Development',
      description: 'Get IPs with IP quality, range of free trials, and 24/7 tech support with your subscription.',
      tags: ['Proxy', 'Development'],
    },
    {
      id: "5",
      title: 'Analytics Dashboard Pro',
      category: 'Analytics',
      description: 'Track and visualize your marketing performance with advanced dashboards.',
      tags: ['Analytics'],
    },
    {
      id: "6",
      title: 'Social Media Management Suite',
      category: 'Social Media',
      description: 'All-in-one platform to schedule, post, and monitor your social media presence.',
      tags: ['Social Media'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-light-bg py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Smart software savings</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover verified discounts on 500+ affiliate tools. Our community has saved over
            $4M this year.
          </p>
          
          <SearchBar placeholder="Search software, categories..." />
        </div>
      </section>
      
      {/* Deals Filter Section */}
      <section className="py-8 bg-gradient-light-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Card className="p-4 md:p-6 shadow-sm border border-gray-100 rounded-xl bg-white">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2 text-gray-600" />
              <h3 className="font-semibold text-lg">Filter Results</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Categories</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-twello-blue focus:border-twello-blue">
                  <option>All Categories</option>
                  <option>Marketing</option>
                  <option>SEO</option>
                  <option>Development</option>
                  <option>Analytics</option>
                  <option>Social Media</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Price Range</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-twello-blue focus:border-twello-blue">
                  <option>Any Price</option>
                  <option>Under $50</option>
                  <option>$50 - $100</option>
                  <option>$100 - $200</option>
                  <option>Over $200</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Deal Type</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-twello-blue focus:border-twello-blue">
                  <option>All Deals</option>
                  <option>Lifetime</option>
                  <option>Subscription</option>
                  <option>Free Trial</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Rating</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-twello-blue focus:border-twello-blue">
                  <option>All Ratings</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                  <option>2+ Stars</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Sort By</label>
                <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-twello-blue focus:border-twello-blue">
                  <option>Trending</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">Popular tags:</span>
              <div className="flex flex-wrap gap-2">
                {["Marketing", "SEO", "Social Media", "Analytics", "Email"].map((tag) => (
                  <div key={tag} className="flex items-center px-3 py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded-full text-sm cursor-pointer transition-colors">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Featured Deals Section */}
      <section className="py-8 bg-gradient-light-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Featured Deals</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {deals.slice(0, 3).map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-twello-blue" />
            <h2 className="text-2xl font-bold">Trending Deals</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {deals.slice(3, 6).map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Deals;
