import json

clustered = json.load(open('lib/keywords-clustered.json', encoding='utf-8'))

services_meta = {
  'website-development': {
    'title': 'Website Development',
    'headline': 'Best Website Development Company in Chennai, India',
    'description': 'Queryholic is the leading website development company in Chennai, India. We design and build custom, responsive, SEO-optimized, and high-performance websites for startups, small businesses, and enterprise brands worldwide. Get a free quote today.',
    'metaDescription': 'Best website development company in Chennai, India. Top-rated website development services, affordable pricing, custom web design, SEO optimization & expert developers. Hire website experts near you.',
    'technologies': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Node.js', 'AWS', 'Vercel'],
    'relatedSlugs': ['web-development', 'landing-page-development', 'ui-ux-design', 'ecommerce-development']
  },
  'web-development': {
    'title': 'Web Development',
    'headline': 'Professional Web Development Services & Solutions',
    'description': 'End-to-end full-stack web development services for modern enterprises and high-growth startups. We engineer secure, fast, and scalable web solutions using modern front-end frameworks and robust cloud architectures.',
    'metaDescription': 'Leading web development company in Chennai, India. Custom web development services, affordable web solutions, dedicated web developers & enterprise web development agency.',
    'technologies': ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    'relatedSlugs': ['website-development', 'web-application-development', 'custom-software-development']
  },
  'software-development': {
    'title': 'Software Development',
    'headline': 'Top Software Development Company in Chennai & India',
    'description': 'Award-winning software development company delivering robust custom software solutions, enterprise platforms, and digital products tailored to your exact business requirements.',
    'metaDescription': 'Top software development company in Chennai, India. Custom software development services, software consultants, enterprise solutions & software development for startups.',
    'technologies': ['Python', 'Node.js', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'],
    'relatedSlugs': ['custom-software-development', 'web-application-development', 'erp-development']
  },
  'custom-software-development': {
    'title': 'Custom Software Development',
    'headline': 'Bespoke Custom Software Development Services',
    'description': 'Tailored custom software development designed from the ground up to streamline operations, automate workflows, and accelerate growth for startups, small businesses, and enterprises.',
    'metaDescription': 'Leading custom software development company in Chennai, India. Bespoke software solutions, enterprise software developers, affordable pricing & dedicated software consultants.',
    'technologies': ['Python', 'TypeScript', 'Next.js', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Kubernetes'],
    'relatedSlugs': ['software-development', 'erp-development', 'crm-development']
  },
  'web-application-development': {
    'title': 'Web Application Development',
    'headline': 'Custom Web Application Development Services',
    'description': 'We engineer complex, data-rich SaaS platforms, cloud web apps, portals, and interactive dashboards with exceptional UX, sub-second latency, and bank-grade security.',
    'metaDescription': 'Expert web application development company. Custom SaaS platforms, enterprise web applications, cloud web portals & responsive web app developers in Chennai, India.',
    'technologies': ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'AWS'],
    'relatedSlugs': ['web-development', 'software-development', 'react-development']
  },
  'mobile-app-development': {
    'title': 'Mobile App Development',
    'headline': 'Native & Cross-Platform Mobile App Development',
    'description': 'Top mobile app development company creating high-performance iOS and Android apps with beautiful interfaces, fluid animations, and robust backend integrations.',
    'metaDescription': 'Best mobile app development company in Chennai, India. iOS, Android, React Native & Flutter app development services for startups and enterprises. Hire app developers.',
    'technologies': ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'REST APIs', 'GraphQL'],
    'relatedSlugs': ['android-app-development', 'ios-app-development', 'web-application-development']
  },
  'android-app-development': {
    'title': 'Android App Development',
    'headline': 'Custom Android App Development Services',
    'description': 'We build powerful, scalable Android applications optimized for all screen sizes, tablets, and wearable devices with high performance and Google Play Store compliance.',
    'metaDescription': 'Leading Android app development company in Chennai, India. Custom Android apps, Kotlin, Java, Flutter, Google Play Store deployment & affordable Android app developers.',
    'technologies': ['Kotlin', 'Java', 'Flutter', 'Android Studio', 'Firebase', 'Jetpack Compose', 'REST APIs'],
    'relatedSlugs': ['mobile-app-development', 'ios-app-development', 'ui-ux-design']
  },
  'ios-app-development': {
    'title': 'iOS App Development',
    'headline': 'Premium iOS & Apple App Development Services',
    'description': 'Native iOS app development for iPhone, iPad, Apple Watch, and macOS using Swift and SwiftUI, delivering pixel-perfect design and buttery smooth 120Hz animations.',
    'metaDescription': 'Top iOS app development company in Chennai, India. Custom iPhone apps, Swift, SwiftUI, App Store submission, enterprise iOS applications & expert Apple app developers.',
    'technologies': ['Swift', 'SwiftUI', 'Xcode', 'CoreData', 'Combine', 'TestFlight', 'Apple Pay'],
    'relatedSlugs': ['mobile-app-development', 'android-app-development', 'ui-ux-design']
  },
  'react-development': {
    'title': 'React Development',
    'headline': 'Expert React.js Front-End Development Company',
    'description': 'Harness the power of React.js with Queryholic. We build high-speed single-page applications (SPAs), component libraries, and interactive web interfaces with clean architecture.',
    'metaDescription': 'Best React development company in Chennai, India. Hire React.js developers, custom React components, React web application development & enterprise React consulting.',
    'technologies': ['React.js', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    'relatedSlugs': ['nextjs-development', 'typescript-development', 'web-application-development']
  },
  'nextjs-development': {
    'title': 'Next.js Development',
    'headline': 'Enterprise Next.js & Full-Stack React Development',
    'description': 'We are Next.js specialists building ultra-fast SSR, SSG, and ISR web applications with Turbopack, App Router, Server Actions, and optimal Core Web Vitals.',
    'metaDescription': 'Top Next.js development company in Chennai, India. Server-side rendering (SSR), App Router, Turbopack, Next.js web development services & full-stack React developers.',
    'technologies': ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Server Actions', 'Vercel', 'Edge Runtime'],
    'relatedSlugs': ['react-development', 'typescript-development', 'website-development']
  },
  'nodejs-development': {
    'title': 'Node.js Development',
    'headline': 'Scalable Node.js Backend & API Development Services',
    'description': 'High-throughput Node.js microservices, RESTful APIs, real-time WebSockets, and distributed server architectures engineered for maximum concurrency and low latency.',
    'metaDescription': 'Best Node.js development company in Chennai, India. Scalable Node.js backend development, REST & GraphQL APIs, microservices architecture & hire Node.js developers.',
    'technologies': ['Node.js', 'Express', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    'relatedSlugs': ['typescript-development', 'custom-software-development', 'cloud-aws']
  },
  'typescript-development': {
    'title': 'TypeScript Development',
    'headline': 'Enterprise TypeScript Software Development Services',
    'description': 'End-to-end type-safe development across full-stack applications, eliminating runtime bugs, boosting developer velocity, and building scalable codebases.',
    'metaDescription': 'Leading TypeScript development company. Full-stack type safety, TypeScript web development, Node.js & React TypeScript consulting in Chennai, India.',
    'technologies': ['TypeScript', 'Node.js', 'Next.js', 'React', 'Zod', 'Prisma', 'NestJS', 'GraphQL'],
    'relatedSlugs': ['nextjs-development', 'react-development', 'nodejs-development']
  },
  'ui-ux-design': {
    'title': 'UI UX Design',
    'headline': 'World-Class UI/UX Design & Product Experience Studio',
    'description': 'We craft intuitive, aesthetically stunning, and conversion-optimized user interfaces with comprehensive design systems, user journeys, wireframes, and interactive prototypes.',
    'metaDescription': 'Top UI/UX design agency in Chennai, India. User experience design, website UI design, mobile app UI/UX, Figma prototypes, design systems & product design services.',
    'technologies': ['Figma', 'Adobe XD', 'Protopie', 'Framer', 'Design Systems', 'User Research', 'Wireframing'],
    'relatedSlugs': ['website-development', 'mobile-app-development', 'landing-page-development']
  },
  'ecommerce-development': {
    'title': 'Ecommerce Development',
    'headline': 'High-Conversion E-Commerce Website & App Development',
    'description': 'Custom online stores, Shopify platforms, WooCommerce, and headless e-commerce architectures with secure payment gateways, inventory sync, and conversion optimization.',
    'metaDescription': 'Best ecommerce development company in Chennai, India. Custom online stores, Shopify development, WooCommerce, multi-vendor marketplaces & secure payment integration.',
    'technologies': ['Next.js Commerce', 'Shopify', 'WooCommerce', 'Stripe', 'Razorpay', 'Tailwind CSS', 'PostgreSQL'],
    'relatedSlugs': ['website-development', 'web-application-development', 'ui-ux-design']
  },
  'ai-development': {
    'title': 'AI Development',
    'headline': 'Custom AI Development & Machine Learning Solutions',
    'description': 'Harness artificial intelligence for your business. We build custom LLM applications, generative AI workflows, computer vision models, and intelligent data pipelines.',
    'metaDescription': 'Leading AI development company in Chennai, India. Custom artificial intelligence solutions, machine learning models, Generative AI, LLMs & AI software development.',
    'technologies': ['Python', 'OpenAI', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'PyTorch', 'HuggingFace', 'FastAPI'],
    'relatedSlugs': ['ai-automation', 'ai-agent-development', 'chatbot-development']
  },
  'ai-automation': {
    'title': 'AI Automation',
    'headline': 'Enterprise AI Automation & Workflow Orchestration',
    'description': 'Automate repetitive workflows, customer operations, document extraction, and business logic using cutting-edge AI automation pipelines and agentic systems.',
    'metaDescription': 'Top AI automation company in Chennai, India. Business process automation, intelligent workflows, AI RPA, document processing & automated customer operations.',
    'technologies': ['Python', 'LangGraph', 'OpenAI API', 'n8n', 'Zapier', 'FastAPI', 'Docker', 'AWS Lambda'],
    'relatedSlugs': ['ai-development', 'ai-agent-development', 'chatbot-development']
  },
  'ai-agent-development': {
    'title': 'AI Agent Development',
    'headline': 'Autonomous AI Agents & Multi-Agent Systems Development',
    'description': 'We build autonomous AI agents capable of multi-step reasoning, tool execution, external API integration, and self-directed task completion for enterprise workflows.',
    'metaDescription': 'Best AI agent development company in Chennai, India. Autonomous AI agents, multi-agent orchestration, LangGraph, AutoGen, CrewAI & enterprise AI agent solutions.',
    'technologies': ['LangGraph', 'CrewAI', 'AutoGen', 'OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Vector DBs', 'Python'],
    'relatedSlugs': ['ai-development', 'ai-automation', 'chatbot-development']
  },
  'chatbot-development': {
    'title': 'Chatbot Development',
    'headline': 'Intelligent AI Chatbot & Virtual Assistant Development',
    'description': 'Custom conversational AI chatbots with RAG (Retrieval-Augmented Generation) on your private company knowledge base, integrated with WhatsApp, Slack, and websites.',
    'metaDescription': 'Top AI chatbot development company in Chennai, India. Custom chatbots, WhatsApp bots, RAG AI assistants, customer support automation & conversational AI developers.',
    'technologies': ['OpenAI', 'LangChain', 'Pinecone', 'WhatsApp Business API', 'WebSockets', 'React', 'Node.js'],
    'relatedSlugs': ['ai-development', 'ai-automation', 'ai-agent-development']
  },
  'erp-development': {
    'title': 'ERP Development',
    'headline': 'Custom ERP Software Development for Modern Businesses',
    'description': 'End-to-end Enterprise Resource Planning (ERP) software unifying finance, inventory, manufacturing, procurement, HR, and sales in a single real-time dashboard.',
    'metaDescription': 'Custom ERP software development company in Chennai, India. Enterprise ERP systems, manufacturing ERP, inventory management, cloud ERP solutions & affordable pricing.',
    'technologies': ['PostgreSQL', 'Next.js', 'Node.js', 'Python', 'Redis', 'Docker', 'AWS', 'Tailwind CSS'],
    'relatedSlugs': ['custom-software-development', 'crm-development', 'software-development']
  },
  'crm-development': {
    'title': 'CRM Development',
    'headline': 'Custom CRM Software Development & Lead Management',
    'description': 'Boost sales, customer retention, and team productivity with a custom CRM platform tailored precisely to your sales pipeline, follow-ups, and customer touchpoints.',
    'metaDescription': 'Best CRM development company in Chennai, India. Custom CRM software, sales pipeline automation, customer relationship management & lead tracking platforms.',
    'technologies': ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'SendGrid', 'Twilio'],
    'relatedSlugs': ['erp-development', 'custom-software-development', 'web-application-development']
  }
}

extra_services = {
  'landing-page-development': {
    'title': 'Landing Page Development',
    'headline': 'High-Converting Landing Page Design & Development',
    'description': 'We build conversion-optimized, blazing-fast landing pages with persuasive copywriting, clear CTAs, and responsive design to maximize ad spend ROI.',
    'metaDescription': 'High-converting landing page development company in Chennai, India. Fast turnaround, conversion-focused design, A/B testing & mobile optimization.',
    'keywords': ['Landing Page Development', 'High Converting Landing Page', 'Landing Page Design Chennai', 'Custom Landing Page', 'PPC Landing Pages'],
    'technologies': ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Google Analytics 4'],
    'relatedSlugs': ['website-development', 'ui-ux-design', 'ecommerce-development']
  },
  'embedded-systems': {
    'title': 'Embedded Systems',
    'headline': 'Embedded Systems & Firmware Development',
    'description': 'End-to-end embedded engineering from custom PCB design to firmware development for ARM Cortex, ESP32, STM32, PIC, and AVR microcontrollers.',
    'metaDescription': 'Embedded systems development company in Chennai, India. Firmware development, PCB design, microcontroller programming & embedded hardware engineering.',
    'keywords': ['Embedded Systems Chennai', 'Firmware Development India', 'PCB Design Company', 'STM32 Development', 'ESP32 Firmware', 'Hardware Engineering'],
    'technologies': ['C/C++', 'FreeRTOS', 'STM32', 'ESP32', 'ARM Cortex', 'KiCAD', 'Altium'],
    'relatedSlugs': ['iot-development', 'ev-smart-energy', 'software-development']
  },
  'iot-development': {
    'title': 'IoT Development',
    'headline': 'End-to-End Internet of Things (IoT) Solutions',
    'description': 'Complete IoT platforms connecting smart sensors, edge devices, and cloud dashboards with MQTT, AWS IoT Core, real-time analytics, and mobile control apps.',
    'metaDescription': 'IoT development company in Chennai, India. Smart IoT solutions, IoT cloud dashboards, MQTT protocols, edge computing & industrial IoT engineering.',
    'keywords': ['IoT Development Chennai', 'IoT Company India', 'Industrial IoT Solutions', 'Smart IoT Dashboard', 'MQTT Development', 'AWS IoT Core'],
    'technologies': ['MQTT', 'AWS IoT Core', 'ESP32', 'Node.js', 'Next.js', 'InfluxDB', 'Grafana'],
    'relatedSlugs': ['embedded-systems', 'ev-smart-energy', 'cloud-aws']
  },
  'ev-smart-energy': {
    'title': 'EV & Smart Energy',
    'headline': 'EV & Smart Energy Management Software',
    'description': 'Smart technology solutions for electric vehicles, Battery Management Systems (BMS), EV charging station management, solar monitoring, and energy analytics.',
    'metaDescription': 'EV software development company. Battery management systems (BMS), EV charging management software, solar IoT dashboards & smart energy solutions in India.',
    'keywords': ['EV Software Development', 'BMS Software Chennai', 'EV Charging Station Software', 'Solar Energy Monitoring IoT', 'Smart Energy Management'],
    'technologies': ['CAN Bus', 'OCPP', 'ESP32', 'Python', 'Next.js', 'PostgreSQL', 'AWS IoT Core'],
    'relatedSlugs': ['embedded-systems', 'iot-development', 'software-development']
  },
  'cloud-aws': {
    'title': 'Cloud & AWS Infrastructure',
    'headline': 'Cloud Architecture, DevOps & AWS Consulting',
    'description': 'Cloud-native infrastructure design, AWS migration, CI/CD pipelines, Docker containerization, Kubernetes orchestration, and serverless architectures.',
    'metaDescription': 'Cloud and AWS consulting company in Chennai, India. DevOps services, AWS cloud architecture, CI/CD pipeline automation & cloud infrastructure management.',
    'keywords': ['AWS Consulting Chennai', 'Cloud Architecture India', 'DevOps Services', 'Docker Kubernetes Consulting', 'Serverless Development AWS'],
    'technologies': ['AWS (Lambda, S3, RDS, ECS)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Vercel'],
    'relatedSlugs': ['nodejs-development', 'custom-software-development', 'web-application-development']
  },
  'startup-mvp-development': {
    'title': 'Startup MVP Development',
    'headline': 'Fast-Track MVP Development for Startups',
    'description': 'Turn your startup idea into a launched, investor-ready Minimum Viable Product (MVP) in 4-6 weeks with rapid prototyping, user feedback loops, and scalable foundations.',
    'metaDescription': 'Startup MVP development company in Chennai, India. Rapid MVP prototyping, affordable tech partner for founders, MVP in 4 weeks & venture-scale architecture.',
    'keywords': ['MVP Development for Startups', 'Startup Tech Partner Chennai', 'Fast MVP Prototyping', 'Hire MVP Developers', 'Startup Software Development'],
    'technologies': ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel', 'Stripe'],
    'relatedSlugs': ['website-development', 'mobile-app-development', 'ai-development']
  }
}

all_services = []

for slug, meta in services_meta.items():
    kw_list = clustered.get(slug, [])
    title = meta['title']
    faqs = [
        {
            'question': f'Why choose Queryholic as your {title} Company in Chennai & India?',
            'answer': f'Queryholic is recognized as a top {title} company in Chennai, India. We deliver high-ranking, modern, and reliable {title.lower()} services with dedicated developers, transparent pricing, agile execution, and enterprise-grade security for startups, small businesses, and global enterprises.'
        },
        {
            'question': f'How much does {title} Cost & Pricing in India?',
            'answer': f'{title} pricing depends on scope, complexity, and custom features. Basic projects start from ₹25,000, while complex enterprise solutions range from ₹1,00,000 to ₹10,00,000+. We provide free consultations and detailed cost estimates within 24 hours.'
        },
        {
            'question': f'How can I Hire {title} Developers and Consultants from Queryholic?',
            'answer': f'You can hire dedicated {title.lower()} developers and consultants from Queryholic on full-time, part-time, or milestone-based contracts. Contact us via our website or email queryholic@gmail.com to get started with an initial discovery call.'
        },
        {
            'question': f'Do you build {title} for Healthcare, Education, Logistics, and other industries using Next.js, React, Node.js, and Cloud?',
            'answer': f'Yes! We build industry-specific {title.lower()} solutions for Healthcare, Education, Logistics, Real Estate, E-Commerce, and Manufacturing utilizing modern tech stacks like Next.js, React, TypeScript, Node.js, AWS, Azure, and Google Cloud.'
        }
    ]

    features = [
        {'title': 'Expert Engineering', 'description': f'Built by senior engineers adhering to modern architecture, clean code, and security standards.'},
        {'title': 'High Performance & Speed', 'description': 'Optimized for sub-second load times, fluid user interactions, and 100% Core Web Vitals.'},
        {'title': 'Scalable & Cloud-Ready', 'description': 'Engineered to scale seamlessly from early-stage startups to millions of enterprise transactions.'},
        {'title': 'SEO & AI Optimized', 'description': 'Crafted with technical SEO, schema markup, and metadata for Google, Bing, and AI engine discoverability.'},
        {'title': 'End-to-End Support', 'description': 'Continuous monitoring, performance tuning, regular security updates, and dedicated technical maintenance.'},
        {'title': 'Transparent & Agile Delivery', 'description': 'Weekly sprint demos, real-time progress tracking, clear communication, and on-time milestone delivery.'}
    ]

    all_services.append({
        'slug': slug,
        'title': meta['title'],
        'headline': meta['headline'],
        'description': meta['description'],
        'metaDescription': meta['metaDescription'],
        'keywords': kw_list,
        'features': features,
        'technologies': meta['technologies'],
        'faqs': faqs,
        'relatedSlugs': meta['relatedSlugs']
    })

for slug, meta in extra_services.items():
    title = meta['title']
    all_services.append({
        'slug': slug,
        'title': meta['title'],
        'headline': meta['headline'],
        'description': meta['description'],
        'metaDescription': meta['metaDescription'],
        'keywords': meta['keywords'],
        'features': [
            {'title': 'Custom Architecture', 'description': 'Engineered specifically for your performance, security, and scalability needs.'},
            {'title': 'Modern Tech Stack', 'description': 'Using the latest stable industry frameworks and proven hardware/software standards.'},
            {'title': 'End-to-End Support', 'description': 'Full lifecycle development from design to testing, deployment, and ongoing optimization.'}
        ],
        'technologies': meta['technologies'],
        'faqs': [
            {'question': f'How to get started with {title} at Queryholic?', 'answer': 'Simply reach out through our contact form with your project requirements, and our engineering team will provide a comprehensive roadmap and quote within 24 hours.'}
        ],
        'relatedSlugs': meta['relatedSlugs']
    })

code = '''// =============================================================================
// Queryholic — Comprehensive Service Catalog Data
// =============================================================================
// Complete data for all programmatic service pages.
// Injects all 1,000 SEO keywords mapped to specific service clusters.
// =============================================================================

export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  features: { title: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: ServiceData[] = ''' + json.dumps(all_services, indent=2) + ''';
'''

with open('lib/services-data.ts', 'w', encoding='utf-8') as f:
    f.write(code)

print(f'Successfully updated lib/services-data.ts with {len(all_services)} services!')
