'use client';

import Link from 'next/link';
import { Heart, Mail, Github, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { uiTexts } = useLanguage();
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-primary-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-playfair font-bold mb-4">Random Bible Verse Generator</h3>
            <p className="text-white text-opacity-80 mb-4 leading-relaxed">
              {uiTexts.footer.description}
            </p>
            <div className="flex items-center gap-2 text-gold-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for spiritual growth</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{uiTexts.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white text-opacity-80 hover:text-gold-200 transition-colors">
                  {uiTexts.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-white text-opacity-80 hover:text-gold-200 transition-colors">
                  {uiTexts.nav.topics}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white text-opacity-80 hover:text-gold-200 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-opacity-80 hover:text-gold-200 transition-colors">
                  {uiTexts.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{uiTexts.footer.resources}</h4>
            <ul className="space-y-2 text-white text-opacity-80">
              <li>Bible Study Tools</li>
              <li>Spiritual Resources</li>
              <li>Community Support</li>
              <li>Prayer Requests</li>
              <li>Devotional Guides</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-opacity-80 text-sm mb-4 md:mb-0">
              {uiTexts.footer.copyright}
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contact@randombibleverse.com" 
                className="text-white text-opacity-80 hover:text-gold-200 transition-colors"
                title="Contact us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                className="text-white text-opacity-80 hover:text-gold-200 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-white text-opacity-80 hover:text-gold-200 transition-colors"
                title="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
