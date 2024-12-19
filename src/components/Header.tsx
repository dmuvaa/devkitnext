import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '../components/mode-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold">NextDevKit</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Features</Link>
            <Link href="#demo">Demo</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild>
            <Link href="#pricing">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
