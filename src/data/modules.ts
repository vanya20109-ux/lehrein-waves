export interface Module {
  number: number;
  name: string;
  shortDesc: string;
  fullDesc: string;
  objectives: string[];
  duration: string;
  audience: string;
  origin?: string;
  facilitatorPrep?: string[];
  materialsNeeded?: string[];
  sessionStructure?: string[];
  whatChildrenProduce?: string;
  expectedOutcomes?: string[];
}

export const modules: Module[] = [
  {
    number: 1,
    name: "Music and Emotional Regulation",
    shortDesc: "Use playlists and soundscapes to name, regulate, and reflect on emotions.",
    fullDesc:
      "Students explore how rhythm, melody, and volume influence emotional states. Through curated playlists, sound mapping, and reflection prompts, they learn to tune their nervous system and support peers through shared musical rituals.",
    objectives: [
      "Name the emotions triggered by different musical textures",
      "Practice grounding through breath + rhythm",
      "Build peer listening and empathy via shared playlists",
      "Journal about how music anchors identity and memory",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Inspired by music therapy practices and the lived experience of students using playlists to self-regulate",
    facilitatorPrep: [
      "Curate 3 audio clips (calming, energizing, reflective) and test playback quality",
      "Prepare reflection prompts and journal sheets",
      "Set up space where students can move, listen, and pause safely",
    ],
    materialsNeeded: [
      "Speakers or headphones",
      "Journal pages or digital document",
      "Soft lighting or neutral background",
      "Markers to map sound to feelings",
    ],
    sessionStructure: [
      "Check-in & grounding (10 mins) — breath + gentle percussion",
      "Sound mapping (15 mins) — students share how each clip landed in their body",
      "Playlist creation (20 mins) — craft a 2-track sequence for a specific emotion",
      "Share & closing circle (15 mins) — discuss takeaways and coping ideas",
    ],
    whatChildrenProduce:
      "A collaborative playlist, a journaling snapshot, and a sonic map that links emotion words to musical cues.",
    expectedOutcomes: [
      "Improved emotional vocabulary through musical metaphors",
      "Calming strategies grounded in rhythm",
      "Heightened group empathy via shared listening",
      "Confidence in using creative prompts to support peers",
    ],
  },
  {
    number: 2,
    name: "Personality Tests and Cognitive Styles",
    shortDesc: "Decode cognitive preferences through accessible assessments and reflection.",
    fullDesc:
      "Students take mini assessments (strengths, learning styles, cognitive biases) and debrief what those results say about how they make decisions. The goal is curiosity, not labels: we trace how tests influence identity, teamwork, and mental load.",
    objectives: [
      "Interpret simple personality frameworks without rigid labels",
      "Understand how cognitive style shapes classroom participation",
      "Practice asking reflective questions after taking assessments",
      "Use strengths-based language when discussing peers",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Draws from social psychology research on cognitive styles combined with student-friendly reflection rituals",
    facilitatorPrep: [
      "Prepare digital or paper assessments (15-question style inventories)",
      "Outline discussion prompts that focus on curiosity, not perfection",
      "Arrange breakout groups to ensure every voice is heard",
    ],
    materialsNeeded: [
      "Printable worksheets or shareable Google Form",
      "Responses displayed anonymously (projector or board)",
      "Sticky notes for action steps",
    ],
    sessionStructure: [
      "Warm-up (10 mins) — quick pair intros about recent decisions",
      "Assessment (15 mins) — complete short cognitive style quiz",
      "Debrief (20 mins) — share takeaways in small groups, focus on surprises",
      "Action planning (15 mins) — pair up to support each other using strengths",
    ],
    whatChildrenProduce:
      "A one-page reflection template linking quiz takeaways to daily habits, plus peer accountability notes.",
    expectedOutcomes: [
      "Greater ease describing personal learning preferences",
      "Increased empathy for peers who process information differently",
      "Concrete action plan on how to collaborate across styles",
    ],
  },
  {
    number: 3,
    name: "Behavioral Economics and Consumer Psychology",
    shortDesc: "Spot cognitive hacks brands and governments use to nudge behavior.",
    fullDesc:
      "Students pair case studies with mini experiments to observe how defaults, framing, and scarcity shape choices. The module closes with a rapid prototyping sprint where they redesign a school announcement or campus initiative with behaviorally informed tweaks.",
    objectives: [
      "Explain defaults, framing, scarcity, and social proof",
      "Design a simple intervention that nudges healthier habits",
      "Build ethical awareness about manipulation",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Brings together behavioral economics research (Thaler, Sunstein) and student activism",
    facilitatorPrep: [
      "Collect 2–3 real-world nudges (school, apps, ads) to analyze",
      "Prepare cards describing behavioral levers",
      "Plan a prototyping station for interventions",
    ],
    materialsNeeded: [
      "Index cards for nudges",
      "Poster paper and markers",
      "Sticky dots for voting",
    ],
    sessionStructure: [
      "Intro to nudges (15 mins) — analyze real examples",
      "Intervention design (25 mins) — teams prototype a nudge for the school",
      "Gallery walk (10 mins) — critique and celebrate",
      "Reflection (10 mins) — discuss ethics and personal agency",
    ],
    whatChildrenProduce:
      "A mini nudge prototype (poster or script) plus an ethics checklist for future modules.",
    expectedOutcomes: [
      "Sharper media literacy about persuasive design",
      "Creative problem-solving using behavioral levers",
      "Ethical compass for future psychology work",
    ],
  },
  {
    number: 4,
    name: "Cognitive Biases in Social Media",
    shortDesc: "Map how algorithms and attention loops rely on bias and volatility.",
    fullDesc:
      "Students trace the biases (confirmation, availability, negativity) that platforms exploit. Combined with digital well-being tools, they design pocket rituals and policy briefs advocating for healthier online spaces.",
    objectives: [
      "Define 3 cognitive biases active on social platforms",
      "Audit personal feeds and spot bias-driven posts",
      "Design a daily routine that mitigates doomscrolling",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Built from media psychology research and students’ lived experiences online",
    facilitatorPrep: [
      "Prepare bias cards with definitions and examples",
      "Set up small group prompts for feed audits",
      "Collect resources for digital well-being practices",
    ],
    materialsNeeded: [
      "Index cards",
      "Pens",
      "Whiteboard for group notes",
    ],
    sessionStructure: [
      "Bias primer (15 mins) — lightning talks on confirmation, availability, negativity",
      "Feed audit (20 mins) — teams map a recent scroll session",
      "Action plan (15 mins) — craft rituals to interrupt bias loops",
      "Share-out (10 mins) — commitment statements",
    ],
    whatChildrenProduce:
      "A public awareness poster or short script plus personalized digital hygiene checklist.",
    expectedOutcomes: [
      "Better self-regulation online",
      "Empowered storytelling about bias",
      "Toolkit for supporting peers’ well-being",
    ],
  },
  {
    number: 5,
    name: "The Psychology of Conformity in Film",
    shortDesc: "Use movies to decode social pressure, narrative power, and dissent.",
    fullDesc:
      "Students break down scenes from films that dramatize conformity, rebellion, or groupthink. They learn how lighting, framing, and dialogue cue compliance, and then storyboard short counter-narratives that reimagine those scenes.",
    objectives: [
      "Analyze film techniques that signal conformity",
      "Explain Milgram/Asch studies in accessible terms",
      "Rewrite a narrative with empowered choices",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Inspired by psychology classic studies and cinematic storytelling traditions",
    facilitatorPrep: [
      "Queue 2–3 film clips (public domain or licensed)",
      "Prepare analysis templates",
      "Organize breakout groups for storyboarding",
    ],
    materialsNeeded: [
      "Screen/projector",
      "Storyboarding paper",
      "Markers",
    ],
    sessionStructure: [
      "Clip viewing (15 mins) — watch short film excerpts",
      "Analysis (15 mins) — annotate conformity cues",
      "Rewrite (20 mins) — storyboard a revised ending",
      "Debrief (10 mins) — discuss courage, agency",
    ],
    whatChildrenProduce:
      "A storyboard or script that imagines a character choosing differently from the crowd.",
    expectedOutcomes: [
      "Critical film literacy",
      "Applied understanding of classic experiments",
      "Creative counterstories that center autonomy",
    ],
  },
  {
    number: 6,
    name: "Art Therapy and Creative Expression",
    shortDesc: "Blend Project Kintsugi-inspired gratitude rituals with expressive art therapy.",
    fullDesc:
      "Students deep-dive into art therapy practices shaped by Kintsugi, collage, and reflective journaling. They create collective canvases where vulnerabilities become vibrant, and healthy boundaries are visualized through color and texture.",
    objectives: [
      "Use creative materials to externalize stress",
      "Practice gratitude, boundaries, and peer witnessing",
      "Learn how to hold space for emotional discomfort",
    ],
    duration: "60 mins",
    audience: "Grades 9–12",
    origin: "Rooted in Project Kintsugi and expressive arts therapy frameworks",
    facilitatorPrep: [
      "Set up collaborative art stations",
      "Prepare reflection prompts about resilience",
      "Gather music playlists that match the mood",
    ],
    materialsNeeded: [
      "Watercolor paper",
      "Acrylic paints",
      "Gold washi tape",
      "Collage books",
      "Markers",
      "Brushes",
    ],
    sessionStructure: [
      "Emotional check-in (10 mins)",
      "Art making (30 mins)",
      "Gallery walk & share (10 mins)",
      "Reflection journaling (10 mins)",
    ],
    whatChildrenProduce:
      "A collaborative art installation, reflection journal, and a shared gratitude statement.",
    expectedOutcomes: [
      "Greater resilience through creative expression",
      "Strengthened peer support skills",
      "Confidence in documenting and sharing inner worlds",
    ],
  },
];
