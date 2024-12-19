import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Ready to Build Your SaaS?</h2>
        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Launch faster, save time, and focus on your customers.
        </p>
        <Button size="lg" variant="secondary">
          🚀 Get Started Now
        </Button>
      </div>
    </section>
  )
}

