export interface BlogSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const blogSections = {
  "why-rewards-change-everything": {
    id: "why-rewards-change-everything",
    title: "Why Rewards Change Everything for Users",
    content: {
      intro: "The rewards system isn't just a nice-to-have feature — it's the core innovation that makes Local Serv fundamentally different.",
      howItWorks: {
        title: "Here's how it works:",
        points: [
          "Businesses fund rewards upfront and place them in escrow",
          "Customers see exactly how much they'll earn before booking", 
          "Rewards are released automatically upon job completion",
          "Local Serv takes a percentage of the reward, not the service cost"
        ]
      },
      conclusion: "This creates a win-win-win scenario. Customers get paid for getting service, businesses only pay for actual conversions, and Local Serv aligns its success with customer satisfaction."
    }
  },
  "why-los-angeles": {
    id: "why-los-angeles",
    title: "Why Los Angeles Is the Perfect Launch City", 
    content: {
      intro: "LA isn't just where Local Serv is launching — it's where the mobile service economy was born.",
      reasons: [
        {
          icon: "",
          title: "Market Size",
          description: "LA County has 10+ million residents with a combined spending power that dwarfs entire states."
        },
        {
          icon: "", 
          title: "Traffic Culture",
          description: "Angelenos already embrace mobile services to avoid LA traffic. The market is primed for optimization."
        },
        {
          icon: "",
          title: "Business Density", 
          description: "Thousands of service providers are actively looking for better lead generation and customer acquisition."
        },
        {
          icon: "",
          title: "Service Demand",
          description: "From auto detailing to home cleaning, LA has year-round demand for mobile services."
        }
      ]
    }
  },
  "building-trust-reliability": {
    id: "building-trust-reliability",
    title: "How Local Serv Is Designed to Build Trust & Reliability",
    content: {
      intro: "Trust is the biggest barrier in the service marketplace. Local Serv addresses this through multiple layers of verification and transparency.",
      trustFeatures: [
        {
          icon: "",
          title: "Business Verification",
          description: "Every business goes through licensing verification, insurance checks, and background screening before joining the platform.",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-800"
        },
        {
          icon: "",
          title: "Escrow Protection", 
          description: "All payments and rewards are held in escrow until job completion, ensuring both parties are protected.",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-800"
        },
        {
          icon: "",
          title: "Real-time Updates",
          description: "Customers receive live updates throughout the service process, from booking confirmation to job completion.",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200", 
          textColor: "text-purple-800"
        }
      ]
    }
  },
  "ai-smarter-with-bookings": {
    id: "ai-smarter-with-bookings",
    title: "What Makes Local Serv's AI Smarter With Every Booking?",
    content: {
      intro: "Local Serv's AI doesn't just match customers with businesses — it learns from every interaction to make better recommendations and negotiations.",
      aiFeatures: [
        "Learns pricing patterns for different service types and locations",
        "Identifies which businesses deliver the best customer satisfaction", 
        "Optimizes negotiation strategies based on successful outcomes",
        "Predicts demand patterns to help businesses plan capacity"
      ],
      conclusion: "The more bookings flow through Local Serv, the smarter it becomes at creating perfect matches between customer needs and business capabilities."
    }
  },
  "wrapping-up": {
    id: "wrapping-up",
    title: "Wrapping It Up",
    content: {
      intro: "Local Serv represents the first true evolution in how service marketplaces operate. By replacing directory-style listings with AI-powered negotiation and introducing reward-based transactions, it creates a system that works for everyone.",
      whatThisMeans: {
        title: "What This Means for LA:",
        benefits: [
          "Customers get faster, more reliable service while earning money",
          "Businesses pay only for actual conversions, not dead leads",
          "The entire service economy becomes more efficient and transparent", 
          "AI handles the tedious parts so humans can focus on quality work"
        ]
      },
      finalMessage: "If you're in Los Angeles and tired of the current service booking experience, Local Serv is being built specifically to solve the problems you face every day.",
      cta: {
        title: "Ready to Experience the Future of Services?",
        subtitle: "Join the waitlist and be among the first to earn rewards for getting the services you need.",
        buttonText: "Join the Waitlist →"
      }
    }
  }
};

export const infoBoxes = {
  quickInsight2: {
    type: "quick-insight",
    emoji: "",
    title: "Quick Insight", 
    content: "Unlike traditional platforms where businesses pay regardless of outcome, Local Serv's escrow system means businesses only pay when customers are satisfied. This aligns everyone's incentives toward quality service delivery.",
    bgColor: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-400",
    iconBg: "bg-cyan-400",
    iconText: "text-cyan-800",
    titleColor: "text-cyan-800"
  },
  didYouKnow2: {
    type: "did-you-know",
    emoji: "",
    title: "Did You Know?",
    content: "Traditional lead generation costs businesses $50-200 per lead in LA, with conversion rates under 15%. Local Serv's model means businesses only pay when a job is successfully completed, essentially guaranteeing 100% conversion.",
    bgColor: "from-purple-50 to-violet-50", 
    borderColor: "border-purple-400",
    iconBg: "bg-purple-400",
    iconText: "text-purple-800",
    titleColor: "text-purple-800"
  }
};

export const blogContent = {
  title: "The AI-Powered Solution to LA’s Broken Service Industry",
  introduction: `Booking a service in LA usually feels like a guessing game. You call around, fill out forms, wait days for replies, and still don’t know if the provider is real or if the price will suddenly change. For businesses, it’s not much better: they spend money chasing leads that never convert, with no way to track what actually worked.

LocalServ is built to fix this. It’s the first AI-powered platform in Los Angeles where customers and businesses connect through a transparent negotiation system. Here’s how it’s different:

For customers: you tell LocalServ what you need, and instead of being ghosted, verified businesses compete for your job. Once the work is done, you actually earn rewards — money funded by businesses as an incentive.

For businesses: LocalServ provides AI sales reps that negotiate automatically, manage scheduling and payments, and ensure you only pay for converted jobs, not dead leads.

At its core, LocalServ is more than a service app. It’s an AI-native workflow designed to make bookings faster, fairer, and more rewarding for everyone.`,
  sections: [
    // Add more sections here as needed
  ],
};
