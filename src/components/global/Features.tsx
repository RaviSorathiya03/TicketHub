import { cn } from "@/lib/utils";
import {
  IconCircle,
  IconClock,
  IconCurrencyDollar,
  IconDevices,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRepeat,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Hassle-Free Booking",
          description:
            "Effortlessly book tickets for buses, theaters, and events in just a few clicks.",
          icon: <IconCircle />,
        },
        {
          title: "User-Friendly Interface",
          description:
            "An intuitive design that ensures smooth navigation and a delightful booking experience.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Unbeatable Pricing",
          description:
            "Enjoy competitive pricing and exclusive discounts on all bookings.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "Real-Time Availability",
          description:
            "Check seat availability and book your tickets instantly with live updates.",
          icon: <IconClock />,
        },
        {
          title: "Multi-Platform Access",
          description:
            "Book tickets anytime, anywhere from your desktop, tablet, or mobile device.",
          icon: <IconDevices />,
        },
        {
          title: "24/7 Customer Support",
          description:
            "Our dedicated support team is here to assist you round the clock.",
          icon: <IconHelp />,
        },
        {
          title: "Flexible Cancellations",
          description:
            "Change of plans? Cancel or reschedule your bookings with ease.",
          icon: <IconRepeat />,
        },
        {
          title: "Your Journey, Our Promise",
          description:
            "We are committed to making your travel and event experiences memorable.",
          icon: <IconHeart />,
        },
      ];
      
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

