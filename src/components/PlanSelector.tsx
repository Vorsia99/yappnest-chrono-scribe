
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface PlanOption {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
  };
  cta: string;
  popular?: boolean;
}

const PlanSelector = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: PlanOption[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for individuals just getting started',
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        '3 social profiles',
        '10 scheduled posts',
        'Basic analytics'
      ],
      cta: 'Get Started'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Great for creators and small businesses',
      price: {
        monthly: 19.99,
        yearly: 15.99
      },
      features: [
        'Unlimited social profiles',
        'Unlimited scheduled posts',
        'Advanced analytics',
        'Content calendar',
        '24/7 support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'team',
      name: 'Team',
      description: 'Ideal for agencies and larger teams',
      price: {
        monthly: 49.99,
        yearly: 39.99
      },
      features: [
        'Everything in Pro',
        '5 team members',
        'Custom reporting',
        'Priority support',
        'Advanced permissions'
      ],
      cta: 'Start Free Trial'
    }
  ];

  const formatPrice = (price: number): string => {
    if (price === 0) return 'Free';
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="w-full">
      {/* Billing toggle */}
      <div className="flex items-center justify-center mb-8 space-x-4">
        <span className={`text-lg ${billingCycle === 'monthly' ? 'text-yapp-deep-navy font-medium' : 'text-yapp-deep-navy/60'}`}>
          Monthly
        </span>
        <div className="flex items-center">
          <Switch 
            checked={billingCycle === 'yearly'}
            onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
          />
        </div>
        <span className={`text-lg ${billingCycle === 'yearly' ? 'text-yapp-deep-navy font-medium' : 'text-yapp-deep-navy/60'}`}>
          Yearly <span className="text-sm text-green-600 font-medium ml-1">Save 20%</span>
        </span>
      </div>

      {/* Plan cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={cn(
              "bg-white rounded-lg shadow-md overflow-hidden border",
              plan.popular ? "border-2 border-yapp-deep-navy relative transform scale-105 md:scale-110 shadow-lg z-10" : "border-gray-100"
            )}
          >
            {plan.popular && (
              <div className="bg-yapp-deep-navy text-white text-xs font-bold px-3 py-1 absolute top-0 right-0 rounded-bl-md">
                POPULAR
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">{plan.name}</h3>
              <div className="flex items-baseline mt-4 mb-4">
                <span className="text-4xl font-bold text-yapp-deep-navy">
                  {plan.price[billingCycle === 'yearly' ? 'yearly' : 'monthly'] === 0 ? 'Free' : 
                   `$${plan.price[billingCycle === 'yearly' ? 'yearly' : 'monthly'].toFixed(2)}`}
                </span>
                {plan.price.monthly > 0 && (
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                )}
              </div>
              <p className="text-sm text-yapp-deep-navy/70 mb-6">{plan.description}</p>
              <Button 
                variant={plan.popular ? "cta-dark" : "outline"} 
                className="w-full"
                size={plan.popular ? "lg" : "default"}
              >
                {plan.cta}
              </Button>
            </div>
            <div className="border-t border-gray-100 px-6 py-4">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-yapp-deep-navy">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelector;
