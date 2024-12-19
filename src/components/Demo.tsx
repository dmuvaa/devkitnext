import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default function Demo() {
  return (
    <section id="demo" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">See It In Action</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Experience the power of NextDevKit with our interactive demo
        </p>
        <Button size="lg" asChild className="mt-4">
          <a href="https://demo.nextdevkit.com" target="_blank" rel="noopener noreferrer">
            Launch Demo <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}

