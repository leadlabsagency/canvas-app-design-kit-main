
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import EventCard from '@/components/EventCard';
import SectionHeader from '@/components/SectionHeader';

const Events = () => {
  // Sample data for events
  const events = [
    {
      id: "1",
      title: 'Clickbid Meet up San Diego 2025',
      date: 'Mar 31, 2025',
      description: 'ClickBid Las Vegas 2025 is the ultimate gathering for affiliate marketers, digital advertisers, and industry professionals...',
      tag: 'affiliate conference',
    },
    {
      id: "2",
      title: 'Affiliate Summit Europe',
      date: 'May 15, 2025',
      description: 'Join thousands of affiliate marketers in London for the biggest European affiliate marketing conference of the year.',
      tag: 'affiliate conference',
    },
    {
      id: "3",
      title: 'Digital Growth Summit',
      date: 'June 7, 2025',
      description: 'Learn cutting-edge strategies for growing your digital business and maximizing ROI on your marketing campaigns.',
      tag: 'growth',
    },
    {
      id: "4",
      title: 'SEO Mastery Workshop',
      date: 'July 12, 2025',
      description: 'Intensive 2-day workshop teaching advanced SEO techniques specifically for affiliate marketers.',
      tag: 'workshop',
    },
    {
      id: "5",
      title: 'CPA Connect Networking',
      date: 'August 23, 2025',
      description: 'Build valuable relationships with top CPA networks, advertisers, and fellow affiliates in this exclusive networking event.',
      tag: 'networking',
    },
    {
      id: "6",
      title: 'Affiliate World Berlin',
      date: 'September 18, 2025',
      description: 'The global gathering for affiliate and performance marketing professionals with top-tier speakers and networking opportunities.',
      tag: 'affiliate conference',
    },
  ];

  // Array of locations for events
  const eventLocations = ['San Diego', 'London', 'New York', 'Chicago', 'Miami', 'Berlin'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-light-bg py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Discover Exciting Events</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Find the best opportunities to connect, learn, and grow.
          </p>
          
          <SearchBar placeholder="Search events, categories..." />
        </div>
      </section>
      
      {/* Trending Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending <span className="text-twello-purple">Events</span></h2>
            <a href="#" className="text-twello-blue hover:underline flex items-center">
              View all events
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
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Upcoming Events Calendar" 
            subtitle="Plan your schedule for the year" 
          />
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-left">Category</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, i) => (
                    <tr key={event.id} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium">{event.title}</td>
                      <td className="py-4 px-4">{event.date}</td>
                      <td className="py-4 px-4">{eventLocations[i % eventLocations.length]}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {event.tag}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="px-3 py-1 bg-twello-blue text-white rounded text-sm hover:bg-twello-purple transition-colors">
                          Register
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Host an Event Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-light-bg rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Host Your Own Event</h2>
              <p className="text-lg mb-4">
                Promote your affiliate marketing event to our engaged community of marketers, advertisers, and networks.
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Reach thousands of potential attendees</li>
                <li>Featured placement in our events calendar</li>
                <li>Promotional emails to our subscriber base</li>
                <li>Dedicated event landing page</li>
              </ul>
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Submit Your Event
              </button>
            </div>
            <div className="md:w-1/3">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
