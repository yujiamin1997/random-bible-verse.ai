'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const { uiTexts } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3, 4, 5]); // All items open by default

  const faqData: FAQItem[] = [
    {
      question: "What is the Random Bible Verse Generator?",
      answer: "The Random Bible Verse Generator is a tool that provides daily inspirational Bible verses. Users can receive a new verse each day, helping to uplift and encourage them in their daily lives. It's a great resource for anyone looking to deepen their understanding of the Bible."
    },
    {
      question: "How can I use the Random Bible Verse Generator?",
      answer: "Using the Random Bible Verse Generator is easy! Simply visit the website, and it will automatically provide you with a new Bible verse. You can visit the site daily to receive fresh inspiration, or you can bookmark it for easy access whenever you want!"
    },
    {
      question: "Can the verses be displayed in different languages?",
      answer: "Yes! The Random Bible Verse Generator offers Bible verses in multiple languages. This makes it accessible for people of different language backgrounds, allowing everyone to enjoy daily inspiration from the Bible."
    },
    {
      question: "Is there a cost to use the Random Bible Verse Generator?",
      answer: "No, the Random Bible Verse Generator is completely free to use. You can access daily Bible verses without paying any fees, making it an excellent tool for anyone looking for daily spiritual nourishment."
    },
    {
      question: "Can I share the Bible verses with my friends?",
      answer: "Absolutely! The Bible verses generated from the site can be shared with friends and family easily. You can send them via text, email, or even post them on social media to spread positivity and inspire others."
    },
    {
      question: "What if I don't understand a verse?",
      answer: "If you come across a verse that you do not understand, don't worry! You can look up its meaning online or ask someone knowledgeable in biblical texts. There are many resources available to help you interpret and understand the Bible better."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-primary-600 max-w-2xl mx-auto">
          Find answers to common questions about our Random Bible Verse Generator
        </p>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="text-lg font-semibold text-primary-800 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-primary-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </main>
  );
}
