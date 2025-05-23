import { type JSX } from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  const circleImages = [
    {
      src: "/group-1.png",
      width: "499px",
      height: "500px",
      top: "35px",
      left: "52px",
    },
    {
      src: "/group-2.png",
      width: "422px",
      height: "424px",
      top: "68px",
      left: "98px",
    },
    {
      src: "/group-3.png",
      width: "353px",
      height: "357px",
      top: "98px",
      left: "140px",
    },
    {
      src: "/group-4.png",
      width: "293px",
      height: "297px",
      top: "126px",
      left: "175px",
    },
    {
      src: "/group-5.png",
      width: "240px",
      height: "243px",
      top: "152px",
      left: "206px",
    },
    {
      src: "/group-6.png",
      width: "192px",
      height: "195px",
      top: "177px",
      left: "233px",
    },
    {
      src: "/group-7.png",
      width: "149px",
      height: "152px",
      top: "200px",
      left: "256px",
    },
    {
      src: "/group-8.png",
      width: "111px",
      height: "113px",
      top: "221px",
      left: "276px",
    },
    {
      src: "/group-9.png",
      width: "75px",
      height: "76px",
      top: "241px",
      left: "295px",
    },
    {
      src: "/group-10.png",
      width: "39px",
      height: "40px",
      top: "260px",
      left: "313px",
    },
  ];

  return (
    <section className="relative w-full h-[300px] bg-[#043873] overflow-hidden">
      <div className="relative w-full max-w-[1200px] h-[180px] mx-auto py-16">
        <div className="relative w-full h-full">
          <div className="absolute w-[473px] h-[481px] top-[-137px] left-[-78px] rotate-[-105deg] opacity-20">
            <div className="relative w-[587px] h-[582px] bg-[url(/group.png)] bg-[100%_100%]">
              {circleImages.map((image, index) => (
                <img
                  key={index}
                  className="absolute"
                  style={{
                    width: image.width,
                    height: image.height,
                    top: image.top,
                    left: image.left,
                  }}
                  alt="Decorative circle"
                  src={image.src}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="w-full max-w-[600px] mx-auto font-['Inter',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[36px]">
              Ready to Transform Your Application?
            </h2>

            <p className="w-full max-w-[600px] mx-auto mt-6 font-['Inter',Helvetica] font-normal text-blue-100 text-lg tracking-[0] leading-[18px]">
              Join thousands of students already applying smarter with
              RecruVision
            </p>

            <div className="mt-8">
              <Button className="w-[160px] h-[50px] bg-white rounded-lg hover:bg-gray-100">
                <span className="font-['Inter',Helvetica] font-normal text-blue-600 text-lg">
                  Sign Up Now
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};