import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">NextDevKit</span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com/NextDevKit" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              Twitter
            </Button>
          </Link>
          <Link href="https://github.com/NextDevKit" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-border/40 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose md:text-left">
          © 2024 NextDevKit. All rights reserved.
        </p>
        <form className="flex w-full items-center space-x-2 md:w-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-[300px]"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </footer>
  )
}
