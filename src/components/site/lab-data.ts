/* Shared content for the research areas and projects sections.
   Each project lists the research areas it belongs to; ResearchAreas links to
   projects by `id`, and PublicationList filters by area. */

export type AreaKey = "agentic" | "public-good" | "vision" | "quantum";

export type Area = {
  key: AreaKey;
  title: string;
  /** Short label used on filter buttons. */
  short: string;
  blurb: string;
  /** Photo at the top of the research-area card.
   *  `fit: "contain"` for charts/cut-outs on white; "cover" for photos. */
  image: { src: string; width: number; height: number; alt: string; fit: "cover" | "contain" };
};

export const areas: Area[] = [
  {
    key: "agentic",
    title: "Agentic AI and AI models",
    short: "Agentic AI",
    blurb: "Multimodal agents for student advising, and the math foundations of AI models.",
    image: { src: "/assets/projects/csnavigator.png", width: 1476, height: 858, alt: "csNavigator advising agent", fit: "cover" },
  },
  {
    key: "public-good",
    title: "Applied ML for the environment and public good",
    short: "Public good",
    blurb: "Models that interrogate housing, health, and environmental data.",
    image: { src: "/assets/projects/image3.png", width: 237, height: 178, alt: "Chart of Baltimore air-quality exposure by income and race", fit: "contain" },
  },
  {
    key: "vision",
    title: "Robotics and computer vision",
    short: "Robotics & vision",
    blurb: "Autonomous systems and ML systems that work for everyone, audited for bias.",
    image: { src: "/assets/projects/robi-counselor-robot.png", width: 1600, height: 900, alt: "Robi, the lab's humanoid counseling robot", fit: "contain" },
  },
  {
    key: "quantum",
    title: "Quantum AI and post-quantum security",
    short: "Quantum",
    blurb: "Networks and protocols built for the next generation of compute.",
    image: { src: "/assets/projects/image7.png", width: 359, height: 244, alt: "Quantum networking hardware racks in the lab", fit: "cover" },
  },
];

export type Project = {
  id: string;
  /** Short name used in research-area links. */
  short: string;
  title: string;
  year: string;
  credit: string;
  summary: string;
  areas: AreaKey[];
  badge?: string;
  github?: string;
  live?: string;
  video?: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const projects: Project[] = [
  {
    id: "csnavigator",
    short: "csNavigator",
    title: "csNavigator: agentic AI for student advising",
    year: "2026",
    credit: "Department of Computer Science, Paul Wang (PI)",
    summary:
      "A 24/7 multimodal advising agent built on Google Gemini 3. Text, image, audio, and video flow through a single reasoning loop, grounded in departmental resources that general-purpose chatbots can't see. Presented at Princeton and AAAS.",
    areas: ["agentic"],
    badge: "Live",
    github: "https://github.com/lama9811/cs.inavigator.ai",
    live: "https://cs.inavigator.ai",
    image: {
      src: "/assets/projects/csnavigator.png",
      width: 1476,
      height: 858,
      alt: "csNavigator sign-in screen with academic guidance, curriculum explorer, and AI chat features",
    },
  },
  {
    id: "bias",
    short: "AI bias detection",
    title: "AI bias detection and mitigation",
    year: "2025",
    credit: "Student-led research",
    summary:
      "A $14K humanoid robot recognized students with lighter skin and missed everyone else. We traced the failure to a training set missing entire demographic groups and rebuilt it: end-to-end mitigation, not just identification.",
    areas: ["vision"],
    github: "https://github.com/theaayushstha1/Nao-OpenAI-2.0",
    image: {
      src: "/assets/projects/image2.jpeg",
      width: 172,
      height: 184,
      alt: "NAO humanoid robot on a lab table",
    },
  },
  {
    id: "robi",
    short: "Robi Counselor",
    title: "Robi Counselor: AI for student wellbeing",
    year: "2025",
    credit: "Department of Computer Science",
    summary:
      "An autonomous, confidential companion that helps students manage stress, anxiety, and panic through conversation, visual interaction, and guided physical activity. Built on cognitive-behavioral therapy models for in-the-moment support.",
    areas: ["agentic", "vision"],
    github: "https://github.com/theaayushstha1/nao-sagecbt",
    video: "https://youtu.be/wZOuK8Sw6gA",
    image: {
      src: "/assets/projects/robi-counselor-robot.png",
      width: 1600,
      height: 900,
      alt: "Robi, a white humanoid counseling robot",
    },
  },
  {
    id: "air-quality",
    short: "Baltimore air quality",
    title: "Baltimore air quality: a machine-learning analysis of environmental injustice",
    year: "2025",
    credit: "Bezos Earth Fund, $1M grant",
    summary:
      "One of the largest environmental data platforms in the country, surfacing a direct connection between air quality, income, and race in Baltimore. Presented at Harvard Kennedy School and Yale's AI Symposium with the aim of shaping public policy.",
    areas: ["public-good"],
    badge: "Bezos Earth Fund",
    image: {
      src: "/assets/projects/image3.png",
      width: 237,
      height: 178,
      alt: "Chart of air-quality exposure by income and race in Baltimore",
    },
  },
  {
    id: "cybersecurity",
    short: "Cybersecurity threat analysis",
    title: "Machine learning for cybersecurity threat analysis",
    year: "2025",
    credit: "Corporate-funded research",
    summary:
      "Supervised models trained on 822,226 healthcare IT records sourced from AWS, surfacing threats with practical accuracy. Shipped as an application alongside peer-reviewed publications and conference presentations.",
    areas: ["public-good"],
    image: {
      src: "/assets/projects/image4.png",
      width: 218,
      height: 135,
      alt: "Scatter plots of classified security events",
    },
  },
  {
    id: "higgin",
    short: "Higgin",
    title: "Higgin: voice machine learning against social injustice",
    year: "2024",
    credit: "Mobile research",
    summary:
      "After a couple of color received a six-figure undervaluation on a California home appraisal, we shipped Higgin: a mobile app that transforms a voice into any preferred profile. Dual use for accessibility, translation, and field communication.",
    areas: ["public-good"],
    image: {
      src: "/assets/projects/image5.png",
      width: 182,
      height: 183,
      alt: "Higgin app artwork with greetings in several languages",
    },
  },
  {
    id: "quantum-ai",
    short: "Quantum AI",
    title: "Quantum AI: quantum machine learning for real-world compute bottlenecks",
    year: "Ongoing",
    credit: "Morgan State Quantum Group, with Yale",
    summary:
      "Applying quantum theory to machine learning, with an early focus on environmental exposure modeling and community-health computation. Backed by NSF (2329053, 2502912) and USAF (FA9550-25-1-0030); two more proposals pending.",
    areas: ["quantum"],
    badge: "NSF and USAF",
    image: {
      src: "/assets/projects/image6.png",
      width: 165,
      height: 189,
      alt: "Bloch sphere with sampled quantum states",
    },
  },
  {
    id: "qgp",
    short: "QGP protocol",
    title: "QGP: the Quantum Good Authentication Protocol",
    year: "Ongoing",
    credit: "Paul Wang (PI)",
    summary:
      "A network protocol that adds a photonic quantum channel beneath the OSI stack (layer 0) and Dilithium post-quantum signatures at the top (layer 7). Hardware-tested in our lab as a foundation for a secure quantum internet.",
    areas: ["quantum"],
    badge: "Patent pending",
    image: {
      src: "/assets/projects/image7.png",
      width: 359,
      height: 244,
      alt: "Quantum networking hardware racks in the lab",
    },
  },
];
