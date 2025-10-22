'use client';

import { useLanguage } from './LanguageContext';
import { 
  Sun, 
  Globe, 
  Smartphone, 
  Heart, 
  Palette, 
  Clock,
  Sparkles,
  BookOpen,
  Share2,
  Download
} from 'lucide-react';

export default function Features() {
  const { uiTexts } = useLanguage();

  const features = [
    {
      icon: Sun,
      title: 'Daily Inspiration',
      description: 'Start your day with a fresh dose of inspiration! Our Random Bible Verse Generator delivers a new Bible verse every day, encouraging you to reflect and find motivation in your daily life.',
      color: 'text-yellow-500'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Our platform caters to a global audience by providing Bible verses in multiple languages. No matter where you\'re from, you can enjoy spiritual insights in your preferred language.',
      color: 'text-blue-500'
    },
    {
      icon: Smartphone,
      title: 'User-Friendly Interface',
      description: 'Designed with simplicity in mind, our interface allows you to easily navigate and select your desired language for an optimized user experience. Access daily verses with ease and convenience!',
      color: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Save Your Favorites',
      description: 'Found a verse that resonates with you? Our feature allows you to save your favorite verses, enabling you to revisit them for inspiration whenever you need it.',
      color: 'text-red-500'
    },
    {
      icon: Palette,
      title: 'Beautiful Backgrounds',
      description: 'Customize your experience by changing the background of the verse display. Choose from 100+ stunning backgrounds that reflect your mood and enhance your spiritual journey.',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      title: 'Accessible Anytime, Anywhere',
      description: 'Whether you\'re at home, on a break, or commuting, our Random Bible Verse Generator is accessible at your fingertips. Daily encouragement and wisdom are just a click away!',
      color: 'text-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Generation',
      description: 'Experience the future of spiritual content with our AI-powered verse generation. Get personalized Bible verses tailored to your needs and preferences.',
      color: 'text-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Topic Categories',
      description: 'Explore verses by specific topics like love, hope, faith, peace, strength, wisdom, comfort, and guidance. Find exactly what you need for your spiritual journey.',
      color: 'text-orange-500'
    },
    {
      icon: Share2,
      title: 'Share & Connect',
      description: 'Share inspiring verses with friends and family through social media or messaging. Spread positivity and encouragement to those around you.',
      color: 'text-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our Random Bible Verse Generator the perfect companion for your spiritual journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 mb-6 ${feature.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Ready to Start Your Spiritual Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of users who find daily inspiration through our Random Bible Verse Generator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Generate Your First Verse
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
