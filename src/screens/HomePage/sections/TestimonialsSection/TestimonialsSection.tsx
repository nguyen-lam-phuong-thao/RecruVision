import { type JSX } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Analysis",
      image: "/images/png/profile-1.png",
      quote:
        '"The AI interview practice helped me land my dream job at a top tech company. The feedback was incredibly detailed and helpful."',
    },
    {
      id: 2,
      name: "Mark Thompson",
      role: "Marketing Analyst",
      image: "/images/png/img-1.png",
      quote:
        '"The AI-powered scoring system is incredibly accurate. It\'s like having an expert recruiter working 24/7."',
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "Back end developer",
      image: "/images/png/img-2.png",
      quote:
        '"The CV optimization tool helped me understand exactly what recruiters were looking for. I received multiple interview calls within weeks."',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            Join thousands of satisfied candidates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-xl shadow-[0px_8px_16px_#0000001a,0px_4px_8px_#0000001a]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 rounded-full">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-base text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-600 leading-normal">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};