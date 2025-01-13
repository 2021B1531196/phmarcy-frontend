import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

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

export default function Reviews() {
  return (
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
  );
}