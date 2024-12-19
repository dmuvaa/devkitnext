import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const features = [
  "Next.js 15 & React 19",
  "Supabase Integration",
  "Prisma ORM",
  "ShadCN UI Components",
  "Dark/Light Mode",
  "Hashnode CMS Integration",
  "SEO Optimization",
  "Responsive Design",
  "TypeScript Support",
  "AI Integration - OpenAI API"
]

export default function Features() {
  return (
    <section id="features" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to build modern web applications
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <ArrowRight className="mr-2 h-4 w-4 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <p className="text-muted-foreground">
          And many more features to accelerate your development!
        </p>
      </div>
    </section>
  )
}

