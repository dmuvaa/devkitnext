import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is NextDevKit?",
      answer: "NextDevKit is a comprehensive boilerplate for building modern SaaS applications. It combines Next.js, React, Supabase, Prisma, and ShadCN UI to provide a robust starting point for your projects."
    },
    {
      question: "How much time can I save with NextDevKit?",
      answer: "On average, developers save over 60 hours of initial setup and integration time by using NextDevKit. This includes time saved on project initialization, authentication setup, UI component integration, and more."
    },
    {
      question: "Is NextDevKit suitable for beginners?",
      answer: "While NextDevKit is designed to be user-friendly, it's best suited for developers who have some experience with React and Next.js. However, we provide comprehensive documentation to help developers of all skill levels."
    },
    {
      question: "Can I use NextDevKit for commercial projects?",
      answer: "Yes, NextDevKit can be used for both personal and commercial projects. Our licensing allows you to use the boilerplate in your own projects without additional fees."
    },
    {
      question: "Do you offer support?",
      answer: "Yes, we offer support through our documentation, community forums, and email. The Plus Package includes priority support for faster response times."
    }
  ]
  
  export default function FAQ() {
    return (
      <section id="faq" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl py-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
    