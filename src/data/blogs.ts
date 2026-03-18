export interface BlogPostSummary {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
}

export const blogPosts: BlogPostSummary[] = [
  {
    id: "shadow-puppetry-healing",
    title: "How Shadow Puppetry Became a Tool for Healing",
    excerpt:
      "We introduced shadow puppetry in a classroom without knowing if it would land. Within minutes, students used silhouettes to hold complex emotions, and the room transformed.",
    author: "Vanya",
    date: "2024-12-15",
    readTime: "5 min read",
    tag: "Modules",
    highlights: [
      "Shadow play makes metaphor tangible, so students can speak about feelings at a safe distance.",
      "Combination of storytelling + guided reflection deepens emotional literacy.",
      "Facilitators use percussion cues to regulate energy before the debrief.",
    ],
    sections: [
      {
        heading: "Why shadow puppetry?",
        body:
          "Inspired by Kerala’s Tholpavakoothu and Japanese bunraku, the session taught students that emotion doesn’t have to be spoken directly to be witnessed. The light and shadow created a protective layer for vulnerability.",
      },
      {
        heading: "Structure breakdown",
        body:
          "After a grounding circle, groups created characters and narrated short stories. The facilitator prompted reflections on what the puppet “held” and how it mirrored their own internal states.",
      },
      {
        heading: "What’s next?",
        body:
          "We’re crafting an audio archive of the stories, pairing them with journal prompts, and planning a community shadow show that celebrates resilience.",
      },
    ],
  },
  {
    id: "why-psychology-matters",
    title: "Why Psychology Should Be Part of Every Curriculum",
    excerpt:
      "Psychology isn’t just memorizing Freud. It helps us ask why we vote for a leader, why we design inclusive spaces, and how art can hold trauma. These are the questions our chapters explore.",
    author: "Vanya",
    date: "2024-11-28",
    readTime: "7 min read",
    tag: "Opinion",
    highlights: [
      "Students shared how psychology helped them decode propaganda, ads, and peer pressure.",
      "The blog was seeded with interviews from chapter heads across three cities.",
      "We framed psychology as a lens for civic design, not just exam prep.",
    ],
    sections: [
      {
        heading: "Beyond exams",
        body:
          "In India, psychology often appears only in board exams or pre-med coaching. We teach it through music, film, and civic design so students ask: why does this society reward this behavior?",
      },
      {
        heading: "Chapters as labs",
        body:
          "Our chapter labs mirror research: they publish findings about how cognitive biases shape their school culture and share experiments that make psychology actionable.",
      },
      {
        heading: "Growing the discipline",
        body:
          "We invite educators and community partners to co-design modules so psychology feels relevant to every subject — not just a standalone elective.",
      },
    ],
  },
  {
    id: "building-lehrein-chapter",
    title: "What I Learned Building Lehrein's First Chapter",
    excerpt:
      "Starting from the Heritage campus, we learned that every chapter needs rituals, ethical guardrails, and a curriculum library. Here’s how we built those pieces while staying student-led.",
    author: "Vanya",
    date: "2024-11-10",
    readTime: "6 min read",
    tag: "Story",
    highlights: [
      "Pilot cohort focused on Tier 2 city connections and renewed the national vision.",
      "Monthly reflections helped refine facilitation tips for different school cultures.",
      "The story emphasizes the interdisciplinary pulse of psychology in music, film, and design.",
    ],
    sections: [
      {
        heading: "From club to national",
        body:
          "We started as a school club presenting shadow puppetry and ended up designing a chapter handbook and curriculum platform. The secret was listening to chapter leads and iterating quickly.",
      },
      {
        heading: "Curriculum rituals",
        body:
          "Every module now includes a facilitation checklist, reflection prompts, and a debrief structure so student leads can run sessions confidently and ethically.",
      },
      {
        heading: "Looking ahead",
        body:
          "We plan to document 250+ students, showcase their projects in an annual summit, and keep inviting guest lectures from psychologists and designers.",
      },
    ],
  },
];
