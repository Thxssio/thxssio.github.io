import navmsImg from "@/Assets/Projects/navms.PNG";
import taurabotsImg from "@/Assets/Projects/taurabots.PNG";
import agropulseImg from "@/Assets/Projects/agropulsehub.png";
import tunedropImg from "@/Assets/Projects/tunedrop.png";


const stories = [
  {
    slug: "navms",
    title: "NAVMS: Autonomous Flight Beyond GNSS",
    excerpt:
      "We engineered a resilient navigation pipeline for GPS-denied spaces by pairing stereo vision, multimodal sensor fusion, and neural matching.",
    date: "May 2024",
    tags: ["Computer Vision", "Robotics", "R&D"],
    img: navmsImg,
    contentPath: "/stories/navms.md",
    externalLink: {
      label: "Read stack & takeaways",
      href: "https://www.linkedin.com/pulse/navms-autonomous-navigation-thxssio-silva/",
      external: true,
      platform: "LinkedIn",
    },
  },
  {
    slug: "taurabots",
    title: "TauraBOTS: Shipping ML From Lab to Live",
    excerpt:
      "We bridged research and operations by automating ML pipelines for hybrid squads while keeping the entire crew aligned and accountable.",
    date: "Jun 2024",
    tags: ["MLOps", "Automation", "Team Ops"],
    img: taurabotsImg,
    contentPath: "/stories/taurabots.md",
    externalLink: {
      label: "Go behind the scenes",
      href: "https://www.linkedin.com/pulse/taurabots-ml-production-thxssio-silva/",
      external: true,
      platform: "LinkedIn",
    },
  },
  {
    slug: "agropulse-hub",
    title: "AgroPulse Hub: From Discovery to Launch Day",
    excerpt:
      "We mapped growers' pain points into SaaS modules—prototyping, iterating, and shipping with remote partners and academic collaborators.",
    date: "Sep 2024",
    tags: ["Product", "AgTech", "SaaS"],
    img: agropulseImg,
    contentPath: "/stories/agropulse-hub.md",
    externalLink: {
      label: "Visit the platform",
      href: "https://agropulsehub.com/",
      external: true,
    },
  },
  {
    slug: "tunedrop",
    title: "TuneDrop: Rapid MVP With Real-Time Feedback",
    excerpt:
      "I built a lightning-fast YouTube-to-audio converter to test usage hypotheses, layering instant API responses with toast-driven UX.",
    date: "Aug 2023",
    tags: ["Side Project", "React", "Product"],
    img: tunedropImg,
    contentPath: "/stories/tunedrop.md",
    externalLink: {
      label: "Launch the app",
      href: "/tunedrop",
      external: false,
    },
  },
];

export default stories;
