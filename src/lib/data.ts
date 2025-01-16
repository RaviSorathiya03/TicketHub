export const testimonials = [
    {
      quote: "This platform has been a game-changer for me! The user interface is intuitive and the support team is fantastic.",
      name: "Alice Johnson",
      designation: "Product Manager",
      src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "I’ve never been more satisfied with a service. Everything works seamlessly, and the team is incredibly responsive.",
      name: "Michael Brown",
      designation: "Software Engineer",
      src: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "The features are exactly what I was looking for. Highly recommend this to anyone in need of reliable solutions!",
      name: "Sophia Davis",
      designation: "Graphic Designer",
      src: "https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "Excellent service with attention to detail. I’m thoroughly impressed with the professionalism displayed here.",
      name: "Ethan Martinez",
      designation: "Data Scientist",
      src: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "From start to finish, the process was seamless. The team truly cares about their customers’ success.",
      name: "Olivia Wilson",
      designation: "Marketing Specialist",
      src: "https://images.pexels.com/photos/1239295/pexels-photo-1239295.jpeg",
    },
    {
      quote: "I’ve recommended this service to all my colleagues. It’s efficient, reliable, and very user-friendly.",
      name: "Noah Anderson",
      designation: "Project Manager",
      src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "The attention to detail and customer-centric approach here is unmatched. I’m very pleased with my experience.",
      name: "Emma Taylor",
      designation: "UI/UX Designer",
      src: "https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "Their innovative solutions have simplified my workflow and saved me countless hours of work.",
      name: "Lucas Thomas",
      designation: "Business Analyst",
      src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "A truly outstanding experience. I couldn’t be happier with the results and the support I’ve received.",
      name: "Ava White",
      designation: "Content Writer",
      src: "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote: "The best decision I’ve made for my career! The team behind this platform is exceptionally talented.",
      name: "William Harris",
      designation: "Financial Analyst",
      src: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  export interface Service {
    id: string;
    type: 'bus' | 'theater';
    name: string;
    description: string;
    price: number;
    date: string;
    image: string;
  }
  
  export const services: Service[] = [
    {
      id: "1",
      type: "bus",
      name: "Greyhound",
      description: "Long-distance bus travel across North America.",
      price: 45,
      date: "2025-02-20",
      image: "https://www.pexels.com/photo/people-sitting-on-a-bus-2565025/",
    },
    {
      id: "2",
      type: "bus",
      name: "FlixBus",
      description: "Affordable intercity bus travel across Europe and the U.S.",
      price: 30,
      date: "2025-03-15",
      image: "https://www.pexels.com/photo/yellow-and-black-coach-bus-3039350/",
    },
    {
      id: "3",
      type: "bus",
      name: "Megabus",
      description: "Budget intercity bus service across the U.S. and Canada.",
      price: 25,
      date: "2025-04-10",
      image: "https://www.pexels.com/photo/white-and-blue-bus-on-the-road-1533719/",
    },
    {
      id: "4",
      type: "bus",
      name: "National Express",
      description: "Major bus service provider in the UK.",
      price: 50,
      date: "2025-05-01",
      image: "https://www.pexels.com/photo/vehicle-transportation-street-road-3722525/",
    },
    {
      id: "5",
      type: "bus",
      name: "Coach USA",
      description: "Provides a range of routes in the U.S. and Canada.",
      price: 40,
      date: "2025-06-25",
      image: "https://www.pexels.com/photo/transportation-on-highway-2280572/",
    },
    {
      id: "6",
      type: "bus",
      name: "Eurolines",
      description: "International bus services across Europe.",
      price: 35,
      date: "2025-07-12",
      image: "https://www.pexels.com/photo/gray-coach-bus-in-morning-2280566/",
    },
    {
      id: "7",
      type: "bus",
      name: "OmniBus",
      description: "Local and regional bus services in major cities.",
      price: 15,
      date: "2025-08-18",
      image: "https://www.pexels.com/photo/silver-and-blue-coach-bus-2113562/",
    },
    {
      id: "8",
      type: "bus",
      name: "SitiBus",
      description: "Bus service provider in several cities in Italy.",
      price: 20,
      date: "2025-09-05",
      image: "https://www.pexels.com/photo/white-and-blue-bus-on-street-1236782/",
    },
    {
      id: "9",
      type: "theater",
      name: "Ticketmaster",
      description: "A leading platform for purchasing tickets to theater events.",
      price: 75,
      date: "2025-02-20",
      image: "https://www.pexels.com/photo/a-person-holding-a-ticket-1843814/",
    },
    {
      id: "10",
      type: "theater",
      name: "Broadway.com",
      description: "Offers tickets for Broadway theater shows.",
      price: 120,
      date: "2025-03-18",
      image: "https://www.pexels.com/photo/inside-photo-of-theater-1809647/",
    },
    {
      id: "11",
      type: "theater",
      name: "Eventbrite",
      description: "Platform for purchasing tickets for theater events and live performances.",
      price: 50,
      date: "2025-04-10",
      image: "https://www.pexels.com/photo/photo-of-crowd-of-people-watching-performance-1616040/",
    },
    {
      id: "12",
      type: "theater",
      name: "StubHub",
      description: "Resale marketplace for theater tickets.",
      price: 60,
      date: "2025-05-15",
      image: "https://www.pexels.com/photo/theater-stage-2009073/",
    },
    {
      id: "13",
      type: "theater",
      name: "TodayTix",
      description: "Provides last-minute tickets for Broadway and West End shows.",
      price: 40,
      date: "2025-06-22",
      image: "https://www.pexels.com/photo/photo-of-stage-lights-1472984/",
    },
    {
      id: "14",
      type: "theater",
      name: "Goldstar",
      description: "Discount tickets for theater, concerts, and live events.",
      price: 35,
      date: "2025-07-10",
      image: "https://www.pexels.com/photo/auditorium-with-stage-and-seating-3795843/",
    },
    {
      id: "15",
      type: "theater",
      name: "TheaterMania",
      description: "Platform for purchasing theater tickets and reading reviews.",
      price: 85,
      date: "2025-08-25",
      image: "https://www.pexels.com/photo/theater-stage-during-performance-1630642/",
    },
    {
      id: "16",
      type: "theater",
      name: "SeatGeek",
      description: "Ticketing platform for finding theater event tickets.",
      price: 55,
      date: "2025-09-10",
      image: "https://www.pexels.com/photo/empty-theater-2356151/",
    }
  ];
  
  