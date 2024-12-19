import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const plans = [
  {
    name: "Standard Package",
    price: "$99",
    description: "Full access to the boilerplate with all listed features.",
    features: [
      "Next.js 15 & React 19",
      "Supabase Integration",
      "ShadCN UI Components",
      "Dark/Light Mode",
      "SEO Optimization",
      "Responsive Design"
    ]
  },
  {
    name: "Plus Package",
    price: "$149",
    description: "Everything in Standard, plus Payment Integration.",
    features: [
      "All Standard Package Features",
      "Payment Integration",
      "Priority Support",
      "Future Updates",
      "Extended Documentation",
      "1-hour Consultation"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="container py-8 md:py-12 lg:py-24 items-center">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that suits your needs and get started instantly.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-2 items-center">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-4xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600">
                <Link href="/dashboard">Get Started</Link>
              </Button>;
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
