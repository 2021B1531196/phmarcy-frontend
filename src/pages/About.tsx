import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

export default function About() {
  return (
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
  );
}