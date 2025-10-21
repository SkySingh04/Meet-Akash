type Achievement = {
  title: string;
  organization: string;
  date: string;
};

type Certification = {
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  expiryDate?: string;
  skills?: string[];
};

type WorkExperience = {
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location?: string;
  description: string[];
  skills?: string[];
};


const projectDataSet = {
  "DreamOps": {
    id: "DreamOps",
    name: "DreamOps",
    imgSrc: "/portfolio-dreamops-1.png",
    githubLink: "https://github.com/SkySingh04/DreamOps",
    description: `DreamOps is an intelligent AI-powered incident response and infrastructure management platform that automates on-call duties using Claude AI and Model Context Protocol (MCP) integrations. The platform revolutionizes how DevOps teams handle incidents, automating complex workflows and providing intelligent recommendations for infrastructure management.`,
    techStack: "MCP, Claude AI, AGNO, TypeScript, DevOps Tools",
    domain: "DevOps, AI Agents, Infrastructure Management",
    youtubeLink: null,
    projectlink: "https://devfolio.co/projects/dreamops-9f20",
    projectdate: "15.01.2025",
    keywords: ["Devops", "AI Agents", "Full Stack Web Development"],
  },
  "Dns-Server-Rust": {
    id: "Dns-Server-Rust",
    name: "Dns-Server-Rust",
    imgSrc: "/portfolio-dnsserverrust-1.png",
    githubLink: "https://github.com/SkySingh04/DNS-Server-Rust",
    description:`Built a DNS Server from Scratch in RUST! The DNS server adheres to DNS protocol specifications for packet structure and communication over UDP with support for various record types such as A, NS, CNAME, SOA, MX, and TXT. Developed a Stub Resolver to extend DNS client functionality, adding methods for writing bytes and query names in labeled form, allowing for real-time testing and debugging.`,
    techStack: "RUST, Networking, TCP/UDP",
    domain: "Networking, Systems Programming",
    youtubeLink: null,
    projectlink: "",
    projectdate: "23.06.2024",
    keywords: ["Devops", "RUST"],
  },
  "HaalSamachar": {
    id: "HaalSamachar",
    name: "HaalSamachar",
    imgSrc: "/portfolio-haalsamachar-1.png",
    githubLink: "https://github.com/SkySingh04/Haalsamachar-app",
    description:`Application Repository for HaalSamachar consisting of Backend Microservices built with GoLang including a GraphQL API built using gqlgen and four REST APIs built using Gin and frontend built with NextJs+TypeScript with PostgreSQL powered database, containerized using Docker.
Haalsamachar IAC : Contains Terraform scripts, Kubernetes manifests, and GitOps configurations for Haalsamachar App
`,
    techStack: "react graphql docker kubernetes golang typescript rest server nextjs tailwindcss gqlgen kubernetes aws terraform ecs ecr gitops",
    domain: "Devops and Full Stack Web Development",
    projectdate: "20.03.2024",
    projectlink: "https://haal-samachar.vercel.app/",
    youtubeLink: null,
    keywords: ["Devops", "Full Stack Web Development"],
  },
  "KeployVsCode": {
    id:"KeployVsCode",
    name: "Keploy VsCode Extension",
    imgSrc: "/portfolio-keployvscode-1.webp",
    githubLink: "https://github.com/SkySingh04/KeployVScodeExtension",
    description:`Vs Code Extension For Keploy : E2E Testing right from your IDE!
    Features:
    - Keploy Record : Record Testcases with Keploy
    - Keploy Test : Replay Recorded Testcases with Keploy
    - Keploy Update : Update your Keploy to the latest version
    - Keploy Version Display: Get the latest version of Keploy directly in your Visual Studio Code.
    `,
    techStack: "Typescript,Svelte,Bash,Javascript",
    domain: "Extension Development",
    projectdate: "15.03.2024",
    projectlink: "https://marketplace.visualstudio.com/items?itemName=SkySingh04.heykeploy",
    youtubeLink: "https://github.com/orgs/keploy/discussions/1654#discussioncomment-8848006",
    keywords: ["Extension Development", "Typescript", "Svelte"],
  },
  "QuizQuest": {
    id:"QuizQuest",
    name: "QuizQuest",
    imgSrc: "/portfolio-quizquest-2.webp",
    githubLink: "https://github.com/SkySingh04/QuizQuest",
    description:
      "This project is a comprehensive quiz management system developed to facilitate effortless creation, management, and completion of quizzes. Seamlessly integrating Firebase authentication and Firestore database, it offers secure user access, differentiating between admin and student roles. Admins can upload Excel files containing quiz data, which are condensed to generate quizzes, while a user-friendly interface allows input for quiz details. The interactive UI, crafted with Next.js, React, and Tailwind CSS, aids easy navigation. Students can access available quizzes, track progress, and complete quizzes, with Firebase ensuring real-time updates. The system also integrates social media links and contact details, enhancing user interaction and transparency. QuizQuest is a comprehensive solution for quiz management, offering a seamless experience for both admins and students.",
    techStack: "NextJs,Typescript,Firebase",
    domain: "Full Stack Web Development",
    projectdate: "16.11.2023",
    projectlink: "https://quiz-quest-delta.vercel.app/",
    youtubeLink: null,
    keywords: ["Full Stack Web Development", "Nextjs" ,"Firebase",],
  },
 "Sharkbucks": {
    id:"Sharkbucks",
    name: "Sharkbucks",
    imgSrc: "/portfolio-Sharkbucks-1.png",
    githubLink: "https://github.com/SkySingh04/Sharkbucks",
    description:"Sharkbucks is a cutting-edge auction platform designed to unite investors and SMEs seamlessly. Our platform offers investors easy access to pitches and a plethora of resources, empowering them to bid on loan tenures, interest amounts, and capital, all while competing with other investors. With our finely-tuned Machine Learning model, we ensure that SMEs are matched with investors whose preferences align, optimizing the investment process. For SMEs, Sharkbucks offers unparalleled access to competitive loan offers, facilitating easy access to much-needed funds. Our platform operates on a small platform fee, charged only upon the successful approval of a loan application, ensuring sustainability while providing essential services to both investors and SMEs. Sharkbucks platform also offers a NLP Chatbot feature that serves as a valuable resource for navigating government schemes and exploring investment opportunities, serving as a useful tool for both SMEs and Investors alike.",
    techStack: "NextJs,Typescript,Firebase",
    domain: "Full Stack Web Development",
    projectdate: "26.05.2023",
    projectlink: "https://sharktank-chi.vercel.app/",
    youtubeLink: "https://drive.google.com/file/d/1tGseSuNU1rtm8VCTEkXZg5Bg1J3g_opw/view",
    keywords: ["Full Stack Web Development", "Nextjs" ,"Firebase",],
  }, 
  EduSync: {
    id:"EduSync",
    name: "EduSync",
    imgSrc: "/portfolio-classsnapv2-1.webp",
    githubLink: "https://github.com/SkySingh04/EduSync",
    description:
      "EduSync is an innovative tutoring platform developed using Next.js, Firebase, TypeScript, and EdgeStore. It offers personalized and dynamic tutoring experiences with cutting-edge features like Falcon 7B-powered natural language processing incorporated into an NLP Chatbot. The backend, built with Flask and EdgeStore, ensures scalability, optimized data storage, and secure user authentication. This repository reflects a robust tech stack, enabling a seamless blend of frontend and backend technologies to deliver an agile and tailored tutoring solution.",
    techStack: "NextJs,Typescript,Firebase,Flask,EdgeStore ,Falcon 7B",
    domain: "Full Stack Web Development",
    projectdate: "23.12.2023",
    youtubeLink: null,
    projectlink: "https://edu-sync-phi.vercel.app/",
    keywords: [
      "Full Stack Web Development",
      "Machine Learning",
      "Nextjs",
      "Firebase",
    ],
  },
  Broucher: {
    id:"Broucher",
    name: "Broucher",
    imgSrc: "/portfolio-broucher-1.webp",
    githubLink: "https://github.com/SkySingh04/broucher",
    description:
      "Broucher, your AI assistant for product info, website tasks, and project management, leverages cutting-edge tech! Built with Next.js for a smooth web UI, Firebase for scalable backend management, and Python for its intelligent chatbot engine, Broucher offers an intuitive experience to streamline your workflow. Ask questions, complete tasks, manage projects, and gain product knowledge - all through natural language commands!",
    techStack: "NextJs,Typescript,Firebase,Python",
    domain: "Full Stack Web Development , Machine Learning",
    projectdate: "22.01.2024",
    youtubeLink: null,
    projectlink: null,
    keywords: [
      "Full Stack Web Development",
      "Machine Learning",
      "Nextjs",
      "Firebase",
    ],
  },
  NoteBridge: {
    id:"NoteBridge",
    name: "NoteBridge",
    imgSrc: "/portfolio-notebridge-1.webp",
    githubLink: "https://github.com/SkySingh04/NoteBridge",
    description:
      "NoteBridge is a comprehensive note-taking application that offers a seamless and intuitive user experience. It leverages cutting-edge technologies like React, Java SpringBoot, and MYSQL to provide a secure and scalable platform for creating, storing, and sharing notes. The application also integrates advanced features like real-time chatting and IP address logging using java.net.InetAddress ensuring storage of IP addresses upon login of users . NoteBridge is a testament to the power of modern web technologies, offering a robust and user-friendly solution for note-taking and collaboration.",
    techStack: "React,Java SpringBoot,MYSQL,Java.net.InetAddress",
    domain: "Full Stack Web Development",
    projectdate: "22.01.2024",
    youtubeLink: null,
    projectlink: null,
    keywords: [
      "Full Stack Web Development",
      "Machine Learning",
      "Java:SpringBoot",
      
    ],
  },
  mav: {
    id:"mav",
    name: "Motion Amplification Video",
    imgSrc: "/portfolio-mav-1.webp",
    githubLink: "https://github.com/SkySingh04/Motion-Amplification-Video",
    description:
      "Motion Amplification Video (MAV) offers a solution to the pressing need for accessible and precise vibrational analysis tools across industries. Current methods are expensive and complex, often missing subtle vibrations. Industries like automotive, power plants, medical, and engineering require accurate vibration analysis, but existing solutions are cost-prohibitive. MAV technique processes video clips, amplifies motion details, and detects defects. Hosted on the cloud, it dramatically reduces costs to an affordable range and captures time waveforms and FFT spectrum for noise, vibration, and shock analysis. MAV empowers engineers to assess structural integrity effectively. In the automotive sector, it enhances safety and performance. In power plants, it monitors machinery vibrations, improving maintenance efficiency. In industrial facilities, it identifies structural issues for a safer work environment. In medicine, MAV offers a cost-effective, non-invasive method for heartbeat monitoring. Our cloud-powered MAV solution promises safety, efficiency, and reliability in these vital sectors.",
    techStack: "MERN Python TensorFlow AWS",
    domain:
      "Machine Learning, Computer Vision, Cloud Computing,Full Stack Web Development",
    projectdate: "22.09.2023",
    youtubeLink: "https://youtu.be/ygeVFEa4_oo",
    projectlink: null,
    keywords: ["Machine Learning", "Full Stack Web Development", "MERN"],
  },
  classsnap: {
    id:"classsnap",
    name: "classsnap",
    imgSrc: "/portfoilio-classsnap-2.webp",
    githubLink: "https://github.com/SkySingh04/ClassSnap",
    description:
      "ClassSnap is an advanced web application designed to enhance student’s learning experience by providing personalized access to academic details and automatically generating comprehensive notes through intelligent presentation summarization. Leveraging cutting-edge technologies, the platform employs Machine Learning algorithms to perform intelligent summarization of presentations from online class sessions. Through the use of Selenium Web Driver, ClassSnap automatically extracts relevant information from the meeting presentations and processes it with the Machine Learning algorithm to generate organized and concise notes, reducing manual effort for students. The application seamlessly integrates with popular online learning platforms, ensuring effortless synchronization of academic data.",
    techStack: "MERN, Selenium Web Driver, Pegasus Model , Cloudinary",
    domain: "Machine Learning, Full Stack Web Development , Web Driver",
    projectdate: "25.08.2023",
    youtubeLink: "https://youtu.be/c7Uv2kCQrRw",
    projectlink: null,
    keywords: ["Machine Learning", "Full Stack Web Development", "MERN"],
  },
  sleepsense: {
    id:"sleepsense",
    name: "SleepSense",
    imgSrc: "/portfolio-sleepsense-2.webp",
    githubLink: "https://github.com/SkySingh04/SleepSense",
    description:
      "A ML model that scans the driver for drowsiness and alerts them incase of danger while driving. Alerts are send via Telegram message and audio que. Also includes various features such as information of where you last fell asleep, analysis of trip, and recommendations based on when you should take rest and when you were most drowsy.",
    techStack: "Python, OpenCv2,Tensorflow,Keras,Flask",
    domain: "Machine Learning, Full Stack Web Development , Image Processing",
    projectdate: "25.06.2023",
    projectlink: null,
    youtubeLink: null,
    keywords: [
      "Machine Learning",
      "Full Stack Web Development",
      "Python:Flask",
    ],
  },
  aiimage: {
    id:"aiimage",
    name: "AI-IMAGE-GENERATION-APP",
    imgSrc: "/portfolio-ai-image-1.webp",
    githubLink: "https://github.com/SkySingh04/AI-IMAGE-GENERATION-APP",
    description:
      "A website that utilizes the DALL-E API to generate visually stunning images and utilizes the MERN stack to allow the user to share the generated images with others in the community.",
    techStack: "MERN, DALL-E API, OpenAI, TawilWind",
    domain: "Full Stack Web Development",
    projectdate: "20.04.2023",
    projectlink: null,
    youtubeLink: null,
    keywords: ["Full Stack Web Development", "MERN"],
  },
  blogwebsite: {
    id:"BlogWebsite",
    name: "Gen-Z-Diaries",
    imgSrc: "/portfolio-blogwebsite-1.webp",
    githubLink: "https://github.com/SkySingh04/Gen-Z-Diaries",
    description:
      "A fully responsive Blog Website that allows users to login and create blog posts and add comments to existing blog posts via User Authentication and storing the data to a database with encryption. Also Includes A Admin Dashboard that displays all the database tables and is only accessible by the admin.",
    techStack: "Python(Flask),HTML5, CSS3, BOOTSTRAP5, SQLite",
    domain: "Full Stack Web Development",
    projectdate: "12.10.2022",
    projectlink: null,
    youtubeLink: null,
    keywords: ["Full Stack Web Development", "Python:Flask"],
  },
};

const achievementData: Achievement[] = [
  {
    title: "Top 6 Position at Segfault 2025 - India's Biggest Compiler Hackathon",
    organization: "Innovations In Compiler Technology Workshop",
    date: "September 2025",
  },
  {
    title: "Grand Winners at Warpspeed 2025 Hackathon",
    organization: "Lightspeed India",
    date: "July 2025",
  },
  {
    title: "Grand Winners at NITK Hackverse 5.0 Hackathon",
    organization: "NIT Karnataka",
    date: "January 2025",
  },
  {
    title: "Top 9 Worldwide, 1st Place From India, Hackglobal Hackathon 2024",
    organization: "AngelHack, Singapore",
    date: "October 2024",
  },
  {
    title: "3rd Place, Sharks of CSD",
    organization: "Department of Computer Science and Design, Dayananda Sagar College Of Engineering",
    date: "September 2024",
  },
  {
    title: "3rd Place, Hackman v7 Hackathon 2024",
    organization: "Department Of Information Science, Dayananda Sagar College Of Engineering",
    date: "June 2024",
  },
  {
    title: "1st Place , Hackbanglore 2024 National Hackathon",
    organization: "AngelHack",
    date: "May 2024",
  },
  {
    title: "1st Place , Coding Relay Race 2024",
    organization: "Department Of AI/ML, Dayananda Sagar College Of Engineering",
    date: "May 2024",
  },
  {
    title: "1st Place , Clone Wars 2024",
    organization: "Department Of Computer Science, Dayananda Sagar College Of Engineering",
    date: "April 2024",
  },
  {
    title: "Debate Finalist , Dianoia x Pravega 2024",
    organization: "Indian Institute Of Science,Bangalore",
    date: "Jan 2024",
  },
  {
    title: "1st Place , Hack-o-rama 2024 Hackathon",
    organization: "Dayananda Sagar College Of Engineering,Bangalore",
    date: "Jan 2024",
  },
  {
    title: "1st Place , Aircrash, Kalanjali 2023",
    organization: "Sir M Visvesvaraya Institute Of Technology,Bangalore",
    date: "Dec 2023",
  },
  {
    title: "2nd Place, Enigma 2023 Hackathon",
    organization: "Jyothy Institute Of Technology,Bangalore",
    date: "Dec 2023",
  },
  {
    title: "First Place, Bizzare Bazzar, E-Summit 2023",
    organization: "IEDC, Dayananda Sagar College Of Engineering",
    date: "Dec 2023",
  },
  {
    title: "Runner Up, Parliamentary Debate, Maaya 2023",
    organization: "PES University, Electronic City, Bengaluru",
    date: "Nov 2023",
  },
  {
    title: "Runner Up, Jam-Jigster, Matrix 2023",
    organization:
      "Department Of Mathematics, Dayananda Sagar College Of Engineering",
    date: "Aug 2023",
  },
  {
    title: "2nd Place, 2v2 Debate Yuva 2023",
    organization: "Sivananda Sarma Memorial RV College, Bengaluru",
    date: "Jun 2023",
  },
  {
    title: "1st Place, Extempore In-bloom 2023",
    organization: "Christ University, Bengaluru",
    date: "Apr 2023",
  },
  {
    title: "1st Place, War Of Emcees Furore 2023",
    organization: "Dayananda Sagar Institutions",
    date: "Apr 2023",
  },
  {
    title: "2nd Place, Aircrash In-bloom 2023",
    organization: "Christ University, Bengaluru",
    date: "Apr 2023",
  },
  {
    title: "1st Place, Web Development Web Wizards",
    organization: "Department Of Computer Science, Dayananda Sagar College Of Engineering",
    date: "Feb 2023",
  },
  {
    title: "Third Place, Bizzare Bazzar, CUL-AH 2023",
    organization: "Mount Carmel College, Bangalore",
    date: "Feb 2023",
  },
];

const certificationData: Certification[] = [
  {
    title: "KCNA: Kubernetes and Cloud Native Associate",
    organization: "The Linux Foundation",
    date: "October 2025",
    expiryDate: "October 2027",
    credentialUrl: "https://www.linkedin.com/in/skysingh04/details/certifications/",
    skills: ["Kubernetes"],
  },
  {
    title: "ACM Winter School 2024 on Data Structures and Algorithms for Strings",
    organization: "ACM",
    date: "December 2024",
    skills: ["Data Structures", "Algorithms", "String Manipulation", "Computational Biology", "Search Engines"],
  },
  {
    title: "CloudSEK External Threat Monitoring Solutions",
    organization: "CloudSEK",
    date: "September 2024",
    credentialUrl: "https://www.linkedin.com/in/skysingh04/details/certifications/",
    skills: ["Cybersecurity", "Threat & Vulnerability Management"],
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    organization: "Udemy",
    date: "April 2023",
    credentialId: "UC-2f7e34d5-d73f-44bd-886c-4ae2fb354b88",
    credentialUrl: "https://www.linkedin.com/in/skysingh04/details/certifications/",
    skills: ["Web Development"],
  },
  {
    title: "100 Days Of Code By Angela Yu",
    organization: "Udemy",
    date: "October 2022",
    credentialId: "UC-2abd81b2-c85a-43aa-8d37-ebac4749a612",
    credentialUrl: "https://www.linkedin.com/in/skysingh04/details/certifications/",
  },
  {
    title: "Automate The Boring Stuff With Python",
    organization: "Udemy",
    date: "October 2022",
    credentialId: "UC-48d68e04-cbf5-4485-8dd6-e6fe8b35aa91",
    credentialUrl: "https://www.linkedin.com/in/skysingh04/details/certifications/",
  },
];

const workExperienceData: WorkExperience[] = [
  {
    title: "DevOps Engineer",
    company: "Final Round AI",
    employmentType: "Full-time",
    duration: "Apr 2025 - Present · 7 mos",
    description: [
      "Led complete infrastructure transformation to Infrastructure as Code (IaC) using Terraform across AWS, Azure, GCP, and Alibaba Cloud with comprehensive DevOps patterns and hybrid cloud architecture",
      "Achieved 90% VM host stability improvement through implementation of Beszel monitoring, comprehensive alerting systems, and security hardening across bare metal and cloud infrastructure",
      "Established DevOps principles and roadmap, creating production-mirror staging environments and implementing GitOps via ArgoCD and Atlantis for PR-based infrastructure workflows",
      "Pioneered initiative to establish company-wide standards for AI tooling (Claude, LiteLLM, MCP servers) and developed AI OnCall Engineer system reducing MTTR by 40%",
      "Deployed comprehensive CI/CD pipeline reducing release time from 4 hours to <1 hour, with parallel stages, build caching, and automated rollback capabilities",
      "Implemented service mesh architecture, Vault-based secrets management, and Authentik SSO integration across all internal tools",
      "Reduced infrastructure costs by 20% through migration to bare metal servers",
      "Built end-to-end observability stack with Grafana, Prometheus, Loki, and Tempo, achieving <1 hour monthly downtime for critical services",
      "Established infra weekly reviews, on-call procedures, and incident response protocols with SLA targets <1 hour"
    ],
    skills: ["Kubernetes", "Terraform", "ArgoCD", "Docker", "PostgreSQL", "Redis", "Grafana", "Prometheus", "Python", "Go", "CI/CD", "GitOps", "Multi-Cloud Architecture", "Ansible", "Service Mesh", "Vault"]
  },
  {
    title: "LFX Mentee @LitmusChaos",
    company: "The Linux Foundation",
    employmentType: "Part-time",
    duration: "Mar 2025 - May 2025 · 3 mos",
    location: "Bengaluru, Karnataka, India · Remote",
    description: [
      "Modernized the chaos engineering ecosystem by transitioning from Litmus 1.0 to 3.0 architecture",
      "Developed a comprehensive Go SDK from scratch enabling seamless programmatic interaction with LitmusChaos for developers and SREs",
      "Built production-ready SDK interfaces for authentication, experiment management, and real-time monitoring",
      "Refactored the entire CI/CD integration to eliminate direct Kubernetes API calls in favor of a cleaner SDK-based approach",
      "Optimized GitHub Actions and GitLab CI templates to reduce setup complexity",
      "Contributed approximately 14k lines of code across 4 repositories to democratize chaos engineering practices"
    ],
    skills: ["DevOps", "Terraform", "Chaos Engineering", "CI/CD", "Kubernetes"]
  },
  {
    title: "DevOps Engineer",
    company: "Embeddings Co",
    employmentType: "Freelance",
    duration: "Mar 2025 - Apr 2025 · 2 mos",
    location: "Remote",
    description: [
      "Built end-to-end cloud infrastructure from scratch using Terraform (IaC), designed for modularity, scalability, and production-readiness on AWS",
      "Automated CI/CD pipelines for microservices using GitHub Actions, accelerating deployment cycles and ensuring reliable rollouts",
      "Deployed and managed Kubernetes clusters on EKS, setting up autoscaling, node groups, and service discovery for seamless scaling and resilience",
      "Orchestrated containerized workloads across EKS and ECS; integrated Batch, Lambda, and EC2 for compute diversity and efficiency",
      "Implemented key AWS services (S3, RDS, SQS, SNS, CloudWatch) with security, logging, and fault-tolerance baked in",
      "Set up DNS routing, TLS termination, and secure networking, including VPCs, subnets, and IAM role configurations"
    ],
    skills: ["AWS", "Terraform", "CI", "DevOps"]
  },
  {
    title: "DevOps Engineer",
    company: "Aspora",
    employmentType: "Internship",
    duration: "Jan 2025 - Mar 2025 · 3 mos",
    location: "Bengaluru, Karnataka, India · On-site",
    description: [
      "Setup Apache Airflow along with ETL Pipelines and DAGs to reduce $10000 AWS Glue bill by 96%",
      "Set up Promtail with Loki and Grafana to monitor all microservices, reducing the AWS CloudWatch bill by 85%",
      "Optimized log management by migrating ALB logs from S3 buckets to Loki using a custom Promtail integration on AWS Lambda"
    ],
    skills: ["CI/CD", "Git", "Grafana", "Software Development", "Bash", "Cloud Applications", "Containerization", "Container Orchestration", "Linux System Administration", "Shell Scripting", "Linux", "DevOps", "AWS", "Kubernetes", "PostgreSQL", "Automation"]
  },
  {
    title: "Back End Developer",
    company: "CloudSEK",
    employmentType: "Internship",
    duration: "Aug 2024 - Oct 2024 · 3 mos",
    location: "On-site",
    description: [
      "Led the backend development of multiple microservices in CloudSEK Community Server using GoLang (Chi), PostgreSQL, with AWS SQS and Apache Kafka",
      "Migrated the existing codebase to a monorepo structure, improving code reusability and streamlining cross-service collaboration",
      "Deployed microservices with Kubernetes and Docker, integrated AWS S3 for storage, and automated CI/CD pipelines using ArgoCD",
      "Implemented monitoring with Grafana, Loki, and Prometheus, enhancing system reliability"
    ],
    skills: ["CI/CD", "Git", "Golang", "Monitoring", "Cybersecurity", "Grafana", "Software Development", "Bash", "Kubernetes", "GitLab", "Containerization", "Back-End Web Development", "Jira", "PostgreSQL", "Docker", "Shell Scripting", "Linux", "Prometheus", "Microservices"]
  },
  {
    title: "Hackathon Team Lead",
    company: "AngelHack",
    employmentType: "Part-time",
    duration: "May 2024 - Oct 2024 · 6 mos",
    location: "Singapore",
    description: [
      "Lead the development of Sharkbucks, a fintech bidding platform for SMEs and investors, winning the Financial Inclusion category and securing a place in Hackglobal",
      "Delivered two additional bounty projects in July and August 2024 to boost our Hackglobal leaderboard position, ultimately placing 8th worldwide and qualifying for the Hackglobal Finals in Singapore",
      "Led the pitch and development of LUMi, an AI Concierge solution for customer satisfaction, at SWITCH, held at Marina Bay Sands",
      "Gained experience in high-stakes project presentation, team leadership, and leveraging feedback for product refinement"
    ],
    skills: ["Public Speaking", "TypeScript", "Team Leadership", "Git", "Golang", "Software Development", "Project Management"]
  },
  {
    title: "GSoC Mentee @Keploy",
    company: "Google Summer of Code",
    employmentType: "Part-time",
    duration: "May 2024 - Aug 2024 · 4 mos",
    location: "Remote",
    description: [
      "Developed extensions for Visual Studio Code, IntelliJ IDEA, and Neovim to enhance usability, accessibility, and seamless integration of Keploy within modern development environments",
      "Streamlined the process of testing applications throughout the Software Development Life Cycle (SDLC)",
      "Established secure pipelines for Continuous Integration, Testing, and Deployment of these extensions"
    ],
    skills: ["CI/CD", "TypeScript", "Svelte", "Git", "Golang", "Software Development", "Open-Source Development", "eBPF", "Scala", "Open-Source Software", "Linux", "GraphQL"]
  },
  {
    title: "Technical Trainer",
    company: "SwipeGen",
    employmentType: "Part-time",
    duration: "Feb 2024 - Jul 2024 · 6 mos",
    location: "Bengaluru, Karnataka, India · On-site",
    description: [
      "Developed and delivered engaging training sessions on HackerRank and Leetcode platforms",
      "Equipped learners with strategies and techniques to efficiently solve algorithmic challenges using Python and Java"
    ],
    skills: ["Git", "Software Development", "Python", "Data Structures", "Teaching", "Analytical Skills", "Problem Solving", "Algorithms"]
  },
  {
    title: "Online Teaching (Full Stack Development)",
    company: "CodingZen",
    employmentType: "Internship",
    duration: "Dec 2023 - Feb 2024 · 3 mos",
    location: "Remote",
    description: [
      "Spearheaded comprehensive virtual instruction in Full Stack Development, providing insightful guidance on front-end and back-end technologies to a diverse cohort of students",
      "Developed and delivered a dynamic curriculum, integrating real-world projects and interactive sessions to facilitate hands-on learning experiences"
    ],
    skills: ["Git", "Software Development", "Teaching", "Full-Stack Development", "Analytical Skills"]
  },
  {
    title: "Full-stack Developer",
    company: "Bolesale",
    employmentType: "Internship",
    duration: "Dec 2023 - Feb 2024 · 3 mos",
    location: "Remote",
    description: [
      "Contributed to building robust applications using React and Firebase emphasizing RESTful architecture efficient CRUD operations for seamless user experiences",
      "Implemented Advanced State Management throughout various web applications using Redux and Zustand",
      "Implemented secure payment gateways to facilitate smooth transactions via PhonePe Payment Gateway",
      "Integrated various APIs to enhance functionality and streamline processes",
      "Collaborated within a multidisciplinary team to ensure adherence to ACID principles, ensuring data integrity and scalability while implementing Version Control with Git for effective collaboration"
    ],
    skills: ["Firebase", "Zustand", "Google Cloud", "Redux", "Cloud Firestore", "Git", "REST APIs", "API Testing", "API Development", "Node.js", "Software Development", "Payment Gateways", "SQL", "Web Technologies", "Full-Stack Development", "Analytical Skills", "React"]
  }
];

export { projectDataSet, achievementData, certificationData, workExperienceData };
