import  { useState, useEffect } from 'react';
import { ArrowRight, Award, Clock, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThumbsUp } from 'lucide-react';



const reviews = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    date: '2024-02-15',
    comment: 'Excellent service! The staff was very professional and the results were delivered quickly.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Mary Johnson',
    rating: 5,
    date: '2024-02-10',
    comment: 'Very clean facility and friendly staff. The online booking system made it very convenient.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'David Wilson',
    rating: 4,
    date: '2024-02-05',
    comment: 'Great experience overall. The wait time was minimal and the staff was very helpful.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const heroes = [
    {
      image: "/neurosketch.jpg",
      title: "Advanced Brain Wellness Scanning",
      subtitle: "State-of-the-art neurological diagnostics for comprehensive brain health assessment"
    },
    {
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Your Health Is Our Priority",
      subtitle: "Advanced diagnostic testing with accurate and timely results you can trust"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <img src="./images/banner.jpg" alt="" className="w-full h-[400px] object-cover" /> 
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">NEUROSKETCH</h1>
                  <p className="text-xl md:text-2xl mb-8">BRAIN WELLNESS SCAN</p>
                  <Link
                    to="/tests"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                  >
                    Book Your Scan Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      {/* Hero Section with Transition */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentHero === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            <img
              src={hero.image}
              alt="Hero"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4 transition-transform duration-500 transform translate-y-0">
                    {hero.title}
                  </h1>
                  <p className="text-xl mb-8">{hero.subtitle}</p>
                  <Link
                    to="/tests"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                  >
                    Book a Test
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
          <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Neurosketch</h1>
            <p className="mt-4 text-xl">Leading the way in diagnostic excellence since 1970</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To provide accurate, timely, and affordable diagnostic services that help healthcare providers 
                make informed decisions about patient care. We strive to maintain the highest standards of 
                quality and service in the pathology industry.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the most trusted name in pathology services, recognized for our commitment to accuracy, 
                innovation, and patient care. We aim to continuously evolve with advancing medical technology 
                while maintaining our core values of integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Lab</h3>
              <p className="text-gray-600">
                Fully accredited laboratory with strict quality controls
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced pathologists and technicians
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
              <p className="text-gray-600">
                Fast turnaround times for all tests
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                ISO certified processes and procedures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Sarah Johnson"
              />
              <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">Chief Pathologist</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Michael Chen"
              />
              <h3 className="text-xl font-semibold">Dr. Michael Chen</h3>
              <p className="text-gray-600">Laboratory Director</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Dr. Emily Rodriguez"
              />
              <h3 className="text-xl font-semibold">Dr. Emily Rodriguez</h3>
              <p className="text-gray-600">Quality Assurance Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h1>
          <p className="text-xl text-gray-600">
            See what our patients say about their experience with us
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <ThumbsUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-blue-600 text-2xl font-bold mb-2">1000+</div>
              <p className="text-2xl font-bold">Reviews</p>
              <p className="text-gray-600">And Counting</p>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
               </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </div>

      {/* Rest of the existing sections remain unchanged */}
      {/* Features */}
      {/* ... */}
      {/* About Section */}
      {/* ... */}
      {/* Reviews Section */}
      {/* ... */}
      {/* CTA Section */}
      {/* ... */}
    </div>
  );
}