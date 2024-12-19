import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: "John D.",
    role: "SaaS Founder",
    content: "NextDevKit saved me weeks of work. The integration with Supabase and the UI components are top-notch."
  },
  {
    name: "Sarah K.",
    role: "Indie Developer",
    content: "Absolutely worth it! The features are exactly what I needed to get started quickly."
  },
  {
    name: "Alex M.",
    role: "Tech Lead",
    content: "The time saved with NextDevKit allowed us to focus on our core product features. Highly recommended!"
  }
]

export default function Testimonials() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Loved by Developers</h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

