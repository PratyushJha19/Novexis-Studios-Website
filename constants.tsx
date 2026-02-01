import { ProjectCategory, ServiceCategory, CaseStudy } from './types';

export const COLORS = {
  primary: '#050505',
  secondary: '#0070F3',
  accent: '#8B5CF6',
  highlight: '#E2E8F0',
};

export const SERVICES: ServiceCategory[] = [
  {
    title: "Technology and development",
    items: [
      { 
        name: "Full stack Web/App Systems", 
        description: "Designing and engineering resilient, enterprise-grade digital systems. We specialize in complex web applications and high-performance cross-platform mobile apps for iOS and Android using modern frameworks like React Native and Flutter." 
      },
      { 
        name: "Cloud and devops", 
        description: "Architecting scalable cloud infrastructure on AWS and GCP. Our DevOps pipelines implement zero-downtime deployment, robust CI/CD workflows, and real-time monitoring to ensure your systems are always operational and secure." 
      },
      { 
        name: "Game Development (2D & 3D - Unity/Unreal)", 
        description: "Creating immersive interactive experiences and simulations. We leverage Unity and Unreal Engine to build high-performance 2D and 3D games, training modules, and architectural visualizations with state-of-the-art graphics." 
      },
      { 
        name: "AI integration & automation", 
        description: "Leveraging state-of-the-art AI models to transform business operations. From custom LLM integrations to specialized automation tools, we embed intelligence into your core logic to eliminate manual overhead and drive efficiency." 
      },
      { 
        name: "Custom APIs and SaaS development", 
        description: "Engineering scalable backend architectures and multi-tenant SaaS platforms. We build high-throughput API layers that serve as the resilient backbone for modern digital products and complex system integrations." 
      }
    ]
  },
  {
    title: "Creative and Media",
    items: [
      { 
        name: "Video Editing and Production", 
        description: "Cinema-grade media production for digital platforms. We handle everything from creative direction and cinematography to advanced post-production, high-end color grading, and immersive sound design." 
      },
      { 
        name: "2D and 3D Artistry", 
        description: "High-fidelity visual creation. We provide bespoke 3D modeling, environment design, and character artistry using industry-standard tools like Blender and Maya, tailored for high-tech brand narratives." 
      },
      { 
        name: "Animation & Motion Graphics", 
        description: "Bringing static concepts to life through kinetic storytelling. We specialize in 2D/3D character animation and complex motion graphics that explain technical products with visual clarity and impact." 
      },
      { 
        name: "Dynamic Content Creation & Systems", 
        description: "Scalable content engines for brands that need to move fast. We build automated media pipelines that produce high-quality assets at volume, ensuring consistent brand presence across all digital touchpoints." 
      }
    ]
  },
  {
    title: "Design Systems",
    items: [
      { 
        name: "Branding", 
        description: "Developing comprehensive visual identities and brand manuals. We create logos, typography systems, and color palettes that resonate with tech-savvy audiences and establish market authority." 
      },
      { 
        name: "UI/UX & Product Design", 
        description: "User-centric interface architecture focused on minimalist, futuristic aesthetics. Our product design process prioritizes high performance, accessibility, and intuitive user journeys." 
      },
      { 
        name: "Graphic Design & Social Media Creatives", 
        description: "High-impact digital graphics and social asset systems. We design everything from social media grids to marketing collateral, ensuring your brand looks premium across every screen." 
      },
      { 
        name: "Pitch Deck and Presentation design", 
        description: "Elite visual storytelling for startup founders and investors. We synthesize complex data into compelling, designer-grade pitch decks that command attention and drive funding." 
      },
      { 
        name: "Bespoke illustration and visual asset systems", 
        description: "Creating custom visual languages through proprietary illustration libraries. We design unique, high-fidelity graphics and isometric asset systems that define your brand's digital presence." 
      }
    ]
  },
  {
    title: "Cloud and Automations",
    items: [
      { 
        name: "Legacy System Migration", 
        description: "Transitioning aging infrastructure into modern, cloud-native environments. We ensure data integrity and zero-downtime during the modernization of monolithic systems into scalable microservices." 
      },
      { 
        name: "Data Sovereignty & Security Systems", 
        description: "Implementing localized data compliance and high-security protocols. We build systems that meet rigorous international security standards while maintaining absolute control over your digital assets." 
      },
      { 
        name: "Cloud Architecture", 
        description: "Advanced infrastructure design focused on high availability and global scalability. We optimize server configurations to handle peak traffic loads while minimizing cost and latency." 
      },
      { 
        name: "DevOps and automations", 
        description: "Streamlining development workflows and operational efficiency. We implement advanced CI/CD pipelines and infrastructure-as-code to reduce manual overhead and increase deployment velocity." 
      }
    ]
  },
  {
    title: "Marketing & Analytics",
    items: [
      { 
        name: "Marketing System Automations", 
        description: "Building intelligent sales funnels and automated communication ecosystems. We integrate your CRM with sophisticated email and WhatsApp automation to scale customer acquisition effortlessly." 
      },
      { 
        name: "Influencer Network and Media Partnerships", 
        description: "Strategic management of high-impact influencer collaborations and media alliances. We identify, vet, and manage creator partnerships that align with your brand's technological and creative vision." 
      },
      { 
        name: "Data Analytics and Intelligence", 
        description: "Deep-layer performance tracking and user behavioral analysis. We turn raw data into actionable insights, providing real-time dashboards to monitor growth and system health." 
      },
      { 
        name: "Social Media Management", 
        description: "End-to-end management of your digital presence. From content scheduling and engagement to community growth, we ensure your social channels operate like a well-oiled machine." 
      },
      { 
        name: "SEO and growth strategy", 
        description: "Data-driven search optimization and visibility planning. We build comprehensive SEO frameworks and technical roadmaps that drive organic traffic and establish long-term market authority." 
      }
    ]
  }
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Aura Network Infrastructure',
    slug: 'aura-network',
    category: ProjectCategory.TECH,
    description: 'A global cloud backbone for next-gen fintech operations, handling high-frequency transactions with zero latency.',
    problem: 'Existing infrastructure couldn\'t handle peak loads during market volatility, leading to significant transaction delays.',
    solution: 'Built a distributed microservices architecture on AWS with global CDN integration and auto-scaling logic.',
    outcome: 'Achieved 99.99% uptime during the largest market shift in 2024 with a 65% reduction in latency.',
    technologies: ['React', 'Node.js', 'Kubernetes', 'AWS Lambda', 'Terraform'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    published: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Kinetic 3D Series',
    slug: 'kinetic-motion',
    category: ProjectCategory.CREATIVE,
    description: 'A futuristic animation series for high-speed luxury branding, blending CGI with procedural physics.',
    problem: 'Client needed a system that showcased mechanical precision through motion without traditional, static renders.',
    solution: 'Engineered a real-time 3D pipeline in Unreal Engine 5 focusing on character physics and fluid dynamics.',
    outcome: 'Resulted in a 40% increase in brand sentiment across tech-centric demographics and 2M+ organic views.',
    technologies: ['Blender', 'Unreal Engine 5', 'After Effects', 'C4D'],
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200',
    published: true,
    createdAt: new Date().toISOString()
  }
];