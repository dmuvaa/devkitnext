import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24">
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Next.js Supabase Boilerplate
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Build Your SaaS Faster. Smarter. Easier.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href="/dashboard">🚀 Get Started Now</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#features">Learn More</a>
        </Button>
      </div>
      <div className="mt-8 w-full max-w-[980px]">
        <img
          src="/next-boilerplate.png?height=400&width=800"
          alt="NextDevKit Dashboard Preview"
          className="w-full rounded-lg border border-border/40 shadow-lg"
        />
      </div>
    </section>
  )
}
