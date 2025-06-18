import { type JSX, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { toast, Toaster } from "react-hot-toast";

export const CallToActionSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(newEmail === "" || validateEmail(newEmail));
  };

  const handleSignUp = () => {
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      setIsValid(false);
      return;
    }

    // Here you would typically send the email to your backend
    toast.success("Thank you for subscribing! You'll receive our latest updates soon.");
    setEmail("");
  };

  const circleImages = [
    {
      src: "/images/png/element-1.png",
      width: "499px",
      height: "500px",
      top: "35px",
      left: "52px",
    },
    {
      src: "/images/png/element-2.png",
      width: "422px",
      height: "424px",
      top: "68px",
      left: "98px",
    },
    {
      src: "/images/png/element-3.png",
      width: "353px",
      height: "357px",
      top: "98px",
      left: "140px",
    },
    {
      src: "/images/png/element-4.png",
      width: "293px",
      height: "297px",
      top: "126px",
      left: "175px",
    },
    {
      src: "/images/png/element-5.png",
      width: "240px",
      height: "243px",
      top: "152px",
      left: "206px",
    },
    {
      src: "/images/png/element-6.png",
      width: "192px",
      height: "195px",
      top: "177px",
      left: "233px",
    },
    {
      src: "/images/png/element-7.png",
      width: "149px",
      height: "152px",
      top: "200px",
      left: "256px",
    },
    {
      src: "/images/png/element-8.png",
      width: "111px",
      height: "113px",
      top: "221px",
      left: "276px",
    },
    {
      src: "/images/png/element-9.png",
      width: "75px",
      height: "76px",
      top: "241px",
      left: "295px",
    },
    {
      src: "/images/png/element-10.png",
      width: "39px",
      height: "40px",
      top: "260px",
      left: "313px",
    },
  ];

  

  return (
    <section className="relative w-full h-[300px] bg-[#043873] overflow-hidden">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
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

            

            <div className="mt-8 flex gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-[300px] h-[50px] px-4 rounded-lg border-2 transition-all duration-200 
                    ${isValid 
                      ? 'border-white focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20' 
                      : 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                    } 
                    bg-white text-black placeholder:text-black/70 outline-none`}
                />
                {!isValid && (
                  <span className="absolute -bottom-6 left-0 text-sm text-red-400">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              <Button 
                onClick={handleSignUp}
                className="w-[160px] h-[50px] bg-black rounded-lg hover:bg-black/50 transition-colors duration-200"
              >
                <span className="font-['Inter',Helvetica] font-normal text-white text-lg">
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