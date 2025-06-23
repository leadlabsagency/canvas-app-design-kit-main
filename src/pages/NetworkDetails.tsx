
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Award, CheckCircle2, XCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SectionHeader from '@/components/SectionHeader';
import OfferCard from '@/components/OfferCard';

const NetworkDetails = () => {
  const { id } = useParams();
  const [network, setNetwork] = useState<any>(null);
  
  // Sample data - in a real app, you'd fetch this based on the id
  useEffect(() => {
    // Simulate API fetch
    const networkData = {
      id: id,
      name: 'AffiliateGrid',
      tagline: 'Connect with leading advertisers and optimize your campaigns',
      description: 'AffiliateGrid is a premier affiliate network connecting publishers with high-quality advertisers across multiple verticals. With advanced tracking technology, transparent reporting, and dedicated support, we help affiliates maximize their earnings potential.',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      website: 'https://example.com',
      founded: '2015',
      headquarters: 'San Francisco, CA',
      affiliates: '5,000+',
      advertisers: '500+',
      minimumPayment: '$50',
      paymentFrequency: 'Net-15',
      paymentMethods: ['PayPal', 'Wire Transfer', 'Check', 'Payoneer'],
      verticals: ['E-commerce', 'Finance', 'Health & Beauty', 'Software', 'Education'],
      topOffers: [
        {
          title: 'Premium VPN Service',
          payout: '45.00',
          type: 'CPA',
          tags: ['software']
        },
        {
          title: 'Investment Platform',
          payout: '120.00',
          type: 'CPL',
          tags: ['finance']
        },
        {
          title: 'Beauty Subscription Box',
          payout: '35.00',
          type: 'CPA',
          tags: ['health']
        }
      ],
      pros: [
        'High-converting offers with competitive payouts',
        'Weekly payment options available',
        'Dedicated affiliate manager for each partner',
        'Advanced tracking and reporting dashboard',
        'Regular bonuses and performance incentives'
      ],
      cons: [
        'Minimum payment threshold of $50',
        'Strict compliance requirements',
        'Some offers limited by geo-targeting'
      ],
      rating: 4.8,
      reviews: 156
    };
    setNetwork(networkData);
  }, [id]);

  if (!network) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl">Loading network details...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/networks" className="flex items-center text-gray-600 hover:text-twello-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Networks
          </Link>
        </div>
        
        {/* Network Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="absolute bottom-0 left-0 w-full p-6 pb-0">
              <div className="flex items-end">
                <div className="h-24 w-24 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  {network.logo ? (
                    <img 
                      src={network.logo} 
                      alt={network.name} 
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Globe size={48} className="text-gray-300" />
                  )}
                </div>
                
                <div className="ml-6 pb-4">
                  <h1 className="text-3xl font-bold text-white">{network.name}</h1>
                  <p className="text-white/80">{network.tagline}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center mr-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(network.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 font-medium">{network.rating}</span>
              </div>
              <div className="text-gray-500 text-sm">
                {network.reviews} reviews
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="outline">
                Write a Review
              </Button>
              <Button>
                <a href={network.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  Visit Website
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">About {network.name}</h2>
              <p className="text-gray-700 mb-6">{network.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Founded</div>
                  <div className="font-medium">{network.founded}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Headquarters</div>
                  <div className="font-medium">{network.headquarters}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Affiliates</div>
                  <div className="font-medium">{network.affiliates}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Advertisers</div>
                  <div className="font-medium">{network.advertisers}</div>
                </div>
              </div>
            </Card>
            
            {/* Payment Info */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Minimum Payment</h3>
                  <div className="text-lg font-semibold text-green-600">{network.minimumPayment}</div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Payment Frequency</h3>
                  <div>{network.paymentFrequency}</div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Payment Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {network.paymentMethods.map((method: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Verticals */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Verticals</h2>
              <div className="flex flex-wrap gap-3">
                {network.verticals.map((vertical: string, index: number) => (
                  <div key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                    {vertical}
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Pros and Cons */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium flex items-center text-green-600 mb-4">
                    <CheckCircle2 size={18} className="mr-2" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {network.pros.map((pro: string, index: number) => (
                      <li key={index} className="flex">
                        <CheckCircle2 size={16} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium flex items-center text-red-600 mb-4">
                    <XCircle size={18} className="mr-2" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {network.cons.map((con: string, index: number) => (
                      <li key={index} className="flex">
                        <XCircle size={16} className="mr-2 text-red-500 flex-shrink-0 mt-1" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Top Offers */}
            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">Popular Offers</h3>
              <div className="space-y-6">
                {network.topOffers.map((offer: any, index: number) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <h4 className="font-medium mb-1">{offer.title}</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{offer.type}</span>
                      <span className="font-semibold text-green-600">${offer.payout}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {offer.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">View Offer</Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/offers" className="text-twello-blue hover:underline text-sm">
                  View all offers from {network.name}
                </Link>
              </div>
            </Card>
            
            {/* Join Network */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="font-semibold text-xl mb-4">Join this Network</h3>
              <p className="text-gray-600 mb-6">
                Become a partner with {network.name} and get access to exclusive offers, competitive commissions, and dedicated support.
              </p>
              <Button className="w-full mb-4">Apply Now</Button>
              <p className="text-xs text-center text-gray-500">
                Free to join. Approval usually takes 24-48 hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Similar Networks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Similar Networks" 
            subtitle="Other affiliate networks you might be interested in" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                      <Globe size={24} className="text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-lg">Network Name {i}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    A brief description of this affiliate network and what makes it special.
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star 
                          key={j} 
                          size={14} 
                          className={j < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">50+ reviews</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NetworkDetails;
