import { Plans } from '@/types/plan'

export const plans: Plans[] = [
  {
    type: 'Starter',
    title: 'For companies who need design support. One request at a time',
    amount: 2500,
    features: [
      'Design Updates Every 2 days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
    cardColor: 'bg-yellow-200',
    textColor: 'text-black',
    textLightColor: 'text-black/60',
    borderColor: 'border-black/10',
  },
  {
    type: 'Pro',
    title: '2x the speed. Great for an MVP, Web App or complex problem',
    amount: 3800,
    features: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
    cardColor: 'bg-primary',
    textColor: 'text-white',
    textLightColor: 'text-white/60',
    borderColor: 'border-white/10',
  },
]
