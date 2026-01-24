export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: "Writing" | "Coding" | "Productivity" | "Creative" | "Education" | "Marketing";
  tags: string[];
  likes: number;
  copies: number;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  isFavorite?: boolean;
}

export const mockPrompts: Prompt[] = [
  {
    id: "1",
    title: "The Ultimate Blog Post Structure",
    description: "A comprehensive framework for writing engaging, SEO-friendly blog posts that convert readers.",
    content: "Act as an expert content marketer. Write a blog post outline about [TOPIC] that includes: 1. A hook that grabs attention 2. A clear problem statement 3. A step-by-step solution...",
    category: "Writing",
    tags: ["SEO", "Content Marketing", "Blogging"],
    likes: 1240,
    copies: 850,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    createdAt: "2023-10-15",
    isFavorite: true,
  },
  {
    id: "2",
    title: "React Component Generator",
    description: "Generate clean, accessible React components with Tailwind CSS styling and TypeScript interfaces.",
    content: "Create a React component named [COMPONENT_NAME] using TypeScript and Tailwind CSS. Ensure it is accessible, responsive, and includes proper prop types. The component should...",
    category: "Coding",
    tags: ["React", "Tailwind", "TypeScript"],
    likes: 3500,
    copies: 2100,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    createdAt: "2023-11-02",
  },
  {
    id: "3",
    title: "Email Triage Assistant",
    description: "Quickly sort and draft responses to your daily influx of emails based on urgency and tone.",
    content: "Analyze the following email and categorize it as 'Urgent', 'Important', or 'Routine'. Then, draft a polite and professional response that addresses the key points...",
    category: "Productivity",
    tags: ["Email", "Assistant", "Work"],
    likes: 890,
    copies: 420,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    createdAt: "2023-09-20",
  },
  {
    id: "4",
    title: "Midjourney Photorealism Master",
    description: "Create stunningly realistic photographic images with this detailed prompt structure.",
    content: "/imagine prompt: A cinematic shot of [SUBJECT] in the style of [PHOTOGRAPHER], shot on 35mm film, f/1.8, natural lighting, highly detailed texture, 8k resolution --ar 16:9 --v 6.0",
    category: "Creative",
    tags: ["Midjourney", "Art", "Photography"],
    likes: 5600,
    copies: 4000,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
    createdAt: "2023-12-05",
    isFavorite: true,
  },
  {
    id: "5",
    title: "Complex Concept Explainer",
    description: "Break down difficult topics into simple, easy-to-understand analogies for students.",
    content: "Explain the concept of [TOPIC] to a 10-year-old student. Use a real-world analogy involving [ANALOGY_SUBJECT] to make it relatable. Avoid jargon...",
    category: "Education",
    tags: ["Learning", "Teaching", "Simplification"],
    likes: 1100,
    copies: 600,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=5",
    },
    createdAt: "2023-10-30",
  },
  {
    id: "6",
    title: "Instagram Caption Viral Maker",
    description: "Craft engaging, witty, and trend-aware captions for your Instagram posts.",
    content: "Write 5 variations of an Instagram caption for a photo of [PHOTO_DESCRIPTION]. The tone should be [TONE]. Include relevant hashtags and a call to action...",
    category: "Marketing",
    tags: ["Social Media", "Instagram", "Copywriting"],
    likes: 2200,
    copies: 1500,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=6",
    },
    createdAt: "2023-11-15",
  },
  {
    id: "7",
    title: "Python Data Analysis Script",
    description: "Automate your data cleaning and visualization workflow with pandas and matplotlib.",
    content: "Write a Python script using pandas to load a CSV file, clean the data by removing null values, and generate a bar chart using matplotlib showing...",
    category: "Coding",
    tags: ["Python", "Data Science", "Pandas"],
    likes: 1800,
    copies: 950,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=7",
    },
    createdAt: "2023-10-05",
  },
  {
    id: "8",
    title: "Stoic Daily Reflection",
    description: "Start your day with a guided journaling session based on Stoic philosophy.",
    content: "Act as a Stoic philosopher. Provide a morning reflection prompt based on a quote from Marcus Aurelius regarding [CURRENT_STRUGGLE]. Then ask 3 guiding questions...",
    category: "Productivity",
    tags: ["Mindfulness", "Philosophy", "Journaling"],
    likes: 750,
    copies: 300,
    author: {
      name: "Mike Mainland",
      avatar: "https://i.pravatar.cc/150?u=8",
    },
    createdAt: "2023-09-10",
  }
];

export const categories = ["All", "Writing", "Coding", "Productivity", "Creative", "Education", "Marketing"];
