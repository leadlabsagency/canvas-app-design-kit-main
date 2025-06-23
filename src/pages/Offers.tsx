import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import OfferCard from '@/components/OfferCard';
import SectionHeader from '@/components/SectionHeader';

const Offers = () => {
  // Sample data for offers
  const offers = [
    {
      id: "1",
      title: 'Benaughty - SOI - CPA - Desktop',
      payout: '3.20',
      type: 'CPA',
      tags: ['adult'],
    },
    {
      id: "2",
      title: 'VPN Premium Subscription',
      payout: '4.50',
      type: 'CPA',
      tags: ['software'],
    },
    {
      id: "3",
      title: 'Crypto Trading Platform',
      payout: '85.00',
      type: 'CPA',
      tags: ['crypto', 'finance'],
    },
    {
      id: "4",
      title: 'Weight Loss Supplement',
      payout: '45.00',
      type: 'CPS',
      tags: ['health'],
    },
    {
      id: "5",
      title: 'Mobile Game Install',
      payout: '1.20',
      type: 'CPI',
      tags: ['gaming', 'mobile'],
    },
    {
      id: "6",
      title: 'Credit Card Application',
      payout: '60.00',
      type: 'CPL',
      tags: ['finance'],
    },
    {
      id: "7",
      title: 'Dating Site Registration',
      payout: '2.75',
      type: 'CPL',
      tags: ['dating'],
    },
    {
      id: "8",
      title: 'Online Education Course',
      payout: '25.00',
      type: 'CPA',
      tags: ['education'],
    },
    {
      id: "9",
      title: 'Streaming Service Trial',
      payout: '8.50',
      type: 'CPA',
      tags: ['entertainment'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-light-bg py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Available Offers</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse and promote high-performing affiliate offers.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="col-span-1 sm:col-span-2">
                <input type="text" placeholder="Search offers..." className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-twello-blue" />
              </div>
              
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-twello-blue appearance-none">
                  <option>All Categories</option>
                  <option>Dating</option>
                  <option>Finance</option>
                  <option>Health</option>
                  <option>Software</option>
                </select>
              </div>
              
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-twello-blue appearance-none">
                  <option>All Types</option>
                  <option>CPA</option>
                  <option>CPL</option>
                  <option>CPS</option>
                  <option>CPI</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-twello-blue appearance-none">
                  <option>All Networks</option>
                  <option>Adsempire</option>
                  <option>AffiliateGrid</option>
                  <option>MaxBounty</option>
                  <option>ClickDealer</option>
                </select>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Offers Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Popular Offers" 
            subtitle="High converting offers from top affiliate networks" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.slice(0, 6).map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Converting Verticals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Top Converting Verticals" 
            subtitle="Explore the highest performing offer categories" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Dating', count: '412 offers', icon: '❤️' },
              { name: 'Finance', count: '375 offers', icon: '💰' },
              { name: 'Health', count: '298 offers', icon: '💊' },
              { name: 'Crypto', count: '186 offers', icon: '₿' },
              { name: 'Software', count: '245 offers', icon: '💻' },
              { name: 'Gaming', count: '132 offers', icon: '🎮' },
              { name: 'Education', count: '157 offers', icon: '🎓' },
              { name: 'E-Commerce', count: '329 offers', icon: '🛒' },
            ].map((vertical, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl mb-2">{vertical.icon}</div>
                <h3 className="font-medium text-lg">{vertical.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{vertical.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Recently Added" 
            subtitle="Be the first to promote these new offers" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.slice(6, 9).map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offers;
