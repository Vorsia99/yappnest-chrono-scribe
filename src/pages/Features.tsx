
import React from 'react';
import { Link } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import { PenLine, Calendar, SendIcon, LineChart, Sparkles, Users } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <YappLogo />
          <div className="flex items-center gap-8">
            <Link to="/features" className="text-yapp-deep-navy font-medium hover:opacity-80">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-deep-navy hover:opacity-80">
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl text-yapp-deep-navy mb-6">Features</h1>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
            <div className="feature-card">
              <div className="space-y-4">
                <PenLine className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Create</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Compose new drafts with ease
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <Calendar className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Schedule</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Queue up posts for future publishing
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <SendIcon className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Publish</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Deliver your content to every platform
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <LineChart className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Analyse</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Track key metrics and performance
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <Sparkles className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Engage</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Interact meaningfully with your audience
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <Users className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-2xl text-yapp-deep-navy">Collab</h3>
                <p className="text-lg text-yapp-deep-navy/80">
                  Team up with others to share the workload
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yapp-deep-navy py-16 text-center mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-white mb-4">Ready to get started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Try yappHQ free for 30 days. No credit card required.
          </p>
          <Button variant="cta" size="lg" className="rounded-full px-8">
            Start your free trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-t border-yapp-deep-navy/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-yapp-deep-navy/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} yappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
