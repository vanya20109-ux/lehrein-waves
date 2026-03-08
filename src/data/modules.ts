export interface Module {
  number: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  duration: string;
  audience: string;
}

export const modules: Module[] = [
  {
    number: 1,
    name: "Art Therapy",
    shortDesc: "Explore the intersection of creative expression and psychological healing through guided art-based interventions.",
    fullDesc: "This module uses art-based interventions to help participants process emotions, reduce stress, and build self-awareness. Through painting, collage, sculpting, and free drawing, participants explore their inner world in a safe, non-judgmental environment. Art therapy bypasses verbal barriers and allows deeper emotional expression.",
    objectives: ["Process complex emotions through creative outlets", "Reduce stress and anxiety via art-making", "Build self-awareness and emotional vocabulary", "Develop healthy coping mechanisms"],
    duration: "6 weeks",
    audience: "All age groups",
  },
  {
    number: 2,
    name: "Art Therapy",
    shortDesc: "Creative expression meets psychological well-being through structured artistic exploration.",
    fullDesc: "Building on foundational art therapy principles, this advanced module dives deeper into therapeutic techniques using mixed media. Participants learn to interpret their artwork as reflections of internal states and develop ongoing creative practices for emotional regulation.",
    objectives: ["Master advanced art therapy techniques", "Interpret artwork for emotional insight", "Build a personal creative wellness practice", "Support peers through collaborative art"],
    duration: "8 weeks",
    audience: "Young adults & adults",
  },
  {
    number: 3,
    name: "Art Therapy",
    shortDesc: "Harness the power of visual art to unlock emotional resilience and personal growth.",
    fullDesc: "This module focuses on group art therapy dynamics, exploring how collaborative creation builds empathy, trust, and community bonds. Participants engage in mural-making, group installations, and shared storytelling through art.",
    objectives: ["Strengthen group cohesion through collaborative art", "Build empathy and active listening skills", "Explore identity through visual storytelling", "Create community-based art projects"],
    duration: "5 weeks",
    audience: "Communities & schools",
  },
  {
    number: 4,
    name: "Art Therapy",
    shortDesc: "Transform workplace stress into creative energy with corporate art therapy programs.",
    fullDesc: "Designed specifically for corporate environments, this module addresses workplace burnout, team dynamics, and leadership stress through structured art therapy sessions. Participants develop creative problem-solving skills while processing work-related emotional challenges.",
    objectives: ["Address workplace burnout creatively", "Improve team communication and dynamics", "Develop creative problem-solving skills", "Build emotional resilience for leadership"],
    duration: "4 weeks",
    audience: "Corporate teams",
  },
  {
    number: 5,
    name: "Art Therapy",
    shortDesc: "Age-appropriate art therapy modules designed for children and young learners.",
    fullDesc: "This child-focused module uses developmentally appropriate art activities to help young learners express feelings, manage big emotions, and build social skills. Activities include finger painting, puppet-making, and story illustration.",
    objectives: ["Help children express difficult emotions safely", "Build social skills through collaborative art", "Develop fine motor skills alongside emotional growth", "Create a safe space for emotional exploration"],
    duration: "10 weeks",
    audience: "Children (ages 6-12)",
  },
  {
    number: 6,
    name: "Art Therapy",
    shortDesc: "Digital art therapy for the modern age — blending technology with therapeutic practice.",
    fullDesc: "Exploring digital mediums as therapeutic tools, this module teaches participants to use digital drawing, photography, and video as forms of emotional expression and processing. Ideal for tech-savvy audiences who connect more naturally with digital creation.",
    objectives: ["Use digital tools for emotional expression", "Create digital art journals for self-reflection", "Explore photography as a mindfulness practice", "Build a digital creative wellness routine"],
    duration: "6 weeks",
    audience: "Teens & young adults",
  },
  {
    number: 7,
    name: "Art Therapy",
    shortDesc: "Mindfulness meets art — combining meditation practices with creative expression.",
    fullDesc: "This module integrates mindfulness meditation with art-making, teaching participants to use creative practice as a form of moving meditation. Sessions include zentangle, mandala creation, and mindful watercolor painting.",
    objectives: ["Combine mindfulness with creative practice", "Reduce anxiety through meditative art", "Develop a daily mindful art practice", "Understand the neuroscience of creative flow"],
    duration: "7 weeks",
    audience: "All age groups",
  },
  {
    number: 8,
    name: "Art Therapy",
    shortDesc: "Trauma-informed art therapy for sensitive and supportive healing journeys.",
    fullDesc: "A specialized module designed for trauma survivors, using evidence-based art therapy approaches to support healing. All activities are designed with safety and containment in mind, allowing participants to process traumatic experiences at their own pace.",
    objectives: ["Provide safe creative outlets for trauma processing", "Build emotional regulation skills", "Develop a personal safety plan through art", "Strengthen resilience and post-traumatic growth"],
    duration: "12 weeks",
    audience: "Adults (with screening)",
  },
  {
    number: 9,
    name: "Art Therapy",
    shortDesc: "Nature-inspired art therapy connecting ecological awareness with inner wellness.",
    fullDesc: "This eco-art therapy module takes participants outdoors, using natural materials and nature-based settings for therapeutic art-making. Activities include land art, nature journaling, and botanical illustration as tools for grounding and ecological connection.",
    objectives: ["Connect with nature through creative practice", "Use natural materials for artistic expression", "Build ecological awareness and empathy", "Develop grounding techniques through outdoor art"],
    duration: "6 weeks",
    audience: "All age groups",
  },
  {
    number: 10,
    name: "Art Therapy",
    shortDesc: "Train-the-trainer module for facilitators wanting to lead art therapy sessions.",
    fullDesc: "This advanced module is designed for educators, counselors, and community leaders who want to facilitate art therapy sessions in their own settings. Participants learn facilitation techniques, ethical considerations, and how to create safe creative spaces for diverse groups.",
    objectives: ["Master art therapy facilitation techniques", "Understand ethical boundaries in art therapy", "Design customized art therapy curricula", "Build confidence as a creative wellness facilitator"],
    duration: "16 weeks",
    audience: "Educators & facilitators",
  },
];
