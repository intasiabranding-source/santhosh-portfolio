import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Karthikeyan S.",
    profession: "Coimbatore",
    rating: 5,
    description:
      "Santhosh understood our business requirements quickly and delivered a modern website that exceeded our expectations. The UI is clean, fast, and highly professional. Highly recommended.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-2",
    name: "Priya Lakshmi R.",
    profession: "Chennai",
    rating: 5,
    description:
      "We approached Santhosh for our brand website, and the experience was seamless. Communication was excellent, and every small detail was taken care of.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-3",
    name: "Arun Prakash M.",
    profession: "Madurai",
    rating: 5,
    description:
      "The AI automation solution saved us a lot of manual work. Professional execution and timely delivery. Looking forward to working together again.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-4",
    name: "Vignesh Kumar P.",
    profession: "Salem",
    rating: 5,
    description:
      "Excellent full-stack development skills. The website is responsive, SEO-friendly, and performs really well on all devices.",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-5",
    name: "Nivetha R.",
    profession: "Tiruppur",
    rating: 5,
    description:
      "The design quality is outstanding. Our customers appreciated the new website, and we noticed better engagement after launch.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-6",
    name: "Harish Kumar T.",
    profession: "Erode",
    rating: 5,
    description:
      "From branding to development, everything was handled professionally. Santhosh delivered exactly what was promised.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-7",
    name: "Keerthana S.",
    profession: "Trichy",
    rating: 5,
    description:
      "The admin panel is very easy to use, and the overall user experience is excellent. Great support even after project completion.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-8",
    name: "Dinesh Kumar V.",
    profession: "Tirunelveli",
    rating: 5,
    description:
      "Fast delivery, excellent communication, and premium-quality work. Definitely one of the best developers we've worked with.",
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-9",
    name: "Abinaya M.",
    profession: "Vellore",
    rating: 5,
    description:
      "Our website now looks premium and loads incredibly fast. The animations and design perfectly represent our brand.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
  },
  {
    id: "testimonial-10",
    name: "Sathish Kumar R.",
    profession: "Thanjavur",
    rating: 5,
    description:
      "Working with Santhosh was a great experience. He provided valuable suggestions that improved both the design and functionality.",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
  },
]

function getSectionClass(theme: string | undefined) {
  return theme === "dark"
    ? "bg-[#0C0C0C] text-[#D7E2EA] px-8 pt-32 pb-16 relative z-20"
    : "bg-accent px-8 py-12 relative z-20"
}

function getReviewStarsClass() {
  return "text-amber-500"
}

function getTextClass() {
  return "text-zinc-900 font-medium"
}

function getCardVariant(): "light" {
  return "light"
}

export function TestimonialsVariant() {
  const theme = "dark"; // Defaulting to dark since landing page has a dark theme

  return (
    <section id="testimonials" className={getSectionClass(theme)}>
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h3 className="hero-heading uppercase text-center text-4xl font-semibold">Testimonials</h3>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm opacity-60">
          Here is what clients and designers say about our SaaS ecosystems and collaborations.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh] ">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant={getCardVariant()}
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ReviewStars
                    className={getReviewStarsClass()}
                    rating={testimonial.rating}
                  />
                  <div className={`mx-auto w-4/5 text-lg ${getTextClass()}`}>
                    <blockquote cite="#">{testimonial.description}</blockquote>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-6">
                  <div className="text-center">
                    <span className="block text-lg font-bold tracking-tight md:text-xl text-zinc-950">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-zinc-500 font-semibold">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}
