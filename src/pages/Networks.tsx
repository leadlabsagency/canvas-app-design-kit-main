
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import NetworkCard from '@/components/NetworkCard';
import SectionHeader from '@/components/SectionHeader';

const Networks = () => {
  // Sample data for networks
  const networks = [
    {
      id: "1",
      name: 'Adsempire',
      description: 'Our CPA Network has everything you need...',
    },
    {
      id: "2",
      name: 'AffiliateGrid',
      description: 'Connect with leading advertisers and optimize your affiliate marketing campaigns with our advanced tracking system.',
    },
    {
      id: "3",
      name: 'MaxBounty',
      description: 'Award-winning CPA network with high-converting offers in multiple verticals and reliable weekly payments.',
    },
    {
      id: "4",
      name: 'ClickDealer',
      description: 'Global performance marketing network with premium offers, dedicated account management, and real-time reporting.',
    },
    {
      id: "5",
      name: 'PeerFly',
      description: 'Innovative affiliate platform with thousands of exclusive offers and advanced targeting capabilities.',
    },
    {
      id: "6",
      name: 'AdCombo',
      description: 'International CPA network specializing in nutra, e-commerce, and finance verticals with multilingual support.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-light-bg py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Discover Top Networks</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with the best affiliate networks to boost your earnings.
          </p>
          
          <SearchBar placeholder="Search networks..." />
        </div>
      </section>
      
      {/* Trending Networks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending <span className="text-twello-purple">Networks</span></h2>
            <a href="#" className="text-twello-blue hover:underline flex items-center">
              View all networks
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networks.map((network) => (
              <NetworkCard key={network.id} {...network} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Network Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Browse By Category" 
            subtitle="Find the perfect network for your niche" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['CPA', 'Adult', 'E-commerce', 'Finance', 'Health & Beauty', 'Mobile', 'Gaming', 'Crypto'].map((category) => (
              <div 
                key={category}
                className="bg-white p-6 rounded-lg border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-medium text-lg">{category}</h3>
                <p className="text-sm text-gray-500 mt-1">Networks</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Network Rankings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Top Ranked Networks" 
            subtitle="Based on affiliate reviews and performance metrics" 
          />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Rank</th>
                  <th className="py-3 px-4 text-left">Network</th>
                  <th className="py-3 px-4 text-left">Rating</th>
                  <th className="py-3 px-4 text-left">Offers</th>
                  <th className="py-3 px-4 text-left">Verticals</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {networks.map((network, index) => (
                  <tr key={network.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{network.id}</td>
                    <td className="py-4 px-4">{network.name}</td>
                    <td className="py-4 px-4">⭐⭐⭐⭐⭐</td>
                    <td className="py-4 px-4">{1000 + Number(network.id) * 500}+</td>
                    <td className="py-4 px-4">{4 + Number(network.id)} verticals</td>
                    <td className="py-4 px-4">
                      <button className="text-twello-blue hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Networks;
