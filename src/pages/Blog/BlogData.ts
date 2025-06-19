export const enum Badge {
  Recruitment = 'Recruitment',
  Technology = 'Technology',
  AI = 'AI & ML',
  IndustryNews = 'Industry News',
}

export type BlogType = {
  id: number
  img: string
  badge: Badge
  date: string
  title: string
  description: string
  profileImg: string
  name: string
  jobTitle: string
  content?: string // Thêm nội dung chi tiết cho blog detail
}

export const BlogData: BlogType[] = [
  // Recruitment
  {
    id: 1,
    img: 'https://assets.entrepreneur.com/content/3x2/2000/1699385494-ai-recruitment-hiring-1123-g1371325596.jpg',
    badge: Badge.Recruitment,
    date: 'Jan 15, 2025',
    title: 'The Future of AI-Powered Recruitment',
    description: 'Discover how artificial intelligence is revolutionizing the recruitment industry...',
    profileImg: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Sarah Johnson',
    jobTitle: 'Head of Technology',
    content: `
      <p>The recruitment industry is undergoing a massive transformation with the integration of artificial intelligence. AI-powered recruitment tools are not just a trend; they're becoming essential for companies looking to stay competitive in the talent market.</p>
      
      <h2>Key Benefits of AI in Recruitment</h2>
      <p>AI brings several advantages to the recruitment process:</p>
      <ul>
        <li><strong>Automated Screening:</strong> AI can quickly analyze thousands of resumes and identify the most qualified candidates based on specific criteria.</li>
        <li><strong>Bias Reduction:</strong> AI algorithms can help eliminate unconscious bias in the hiring process by focusing on skills and qualifications rather than demographic factors.</li>
        <li><strong>Predictive Analytics:</strong> AI can predict candidate success and cultural fit based on historical data and performance metrics.</li>
        <li><strong>24/7 Availability:</strong> AI-powered chatbots can engage with candidates at any time, providing immediate responses and maintaining candidate interest.</li>
      </ul>
      
      <h2>Implementation Challenges</h2>
      <p>While AI offers tremendous benefits, organizations face several challenges when implementing AI-powered recruitment:</p>
      <ul>
        <li>Ensuring data privacy and compliance with regulations</li>
        <li>Training HR teams to work effectively with AI tools</li>
        <li>Balancing automation with human touch</li>
        <li>Managing candidate expectations and communication</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI in recruitment is bright, with continuous advancements in natural language processing, machine learning, and predictive analytics. Companies that embrace these technologies early will have a significant advantage in attracting and retaining top talent.</p>
    `
  },
  {
    id: 2,
    img: 'https://media.licdn.com/dms/image/v2/D5612AQG5B3gK1VlfrA/article-cover_image-shrink_720_1280/B56ZYTiszGGcAc-/0/1744084595076?e=2147483647&v=beta&t=wzLfKRJOO-osN4Oe-8jemtdFzUENT4Zw-7n31VSYjVE',
    badge: Badge.Recruitment,
    date: 'Feb 10, 2025',
    title: 'Recruitment Trends in 2025',
    description: 'Stay ahead with the latest recruitment trends for the coming year...',
    profileImg: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'John Smith',
    jobTitle: 'Recruitment Lead',
    content: `
      <p>As we move into 2025, the recruitment landscape continues to evolve rapidly. Understanding these trends is crucial for organizations looking to attract and retain top talent in an increasingly competitive market.</p>
      
      <h2>Remote-First Hiring</h2>
      <p>The pandemic has permanently changed how we work, and recruitment strategies must adapt accordingly. Remote-first hiring is no longer optional but essential for accessing global talent pools.</p>
      
      <h2>Skills-Based Hiring</h2>
      <p>Traditional degree requirements are being replaced by skills-based assessments. Companies are focusing on what candidates can do rather than where they studied.</p>
      
      <h2>Employer Branding</h2>
      <p>In today's digital age, your company's online presence significantly impacts candidate decisions. Strong employer branding is crucial for attracting top talent.</p>
    `
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdU-URKVVDS2csM0I13THdhW3h6PxdHSJNw&s',
    badge: Badge.Recruitment,
    date: 'Mar 5, 2025',
    title: 'How to Attract Top Talent',
    description: 'Tips and tricks to attract the best candidates to your company...',
    profileImg: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Emily Clark',
    jobTitle: 'HR Manager',
    content: `
      <p>Attracting top talent requires more than just posting job openings. It requires a comprehensive strategy that addresses candidate needs and expectations.</p>
      
      <h2>Create an Attractive Company Culture</h2>
      <p>Top candidates look for companies with strong values, work-life balance, and growth opportunities. Showcase your company culture through various channels.</p>
      
      <h2>Offer Competitive Compensation</h2>
      <p>While salary isn't everything, it's still a crucial factor. Ensure your compensation packages are competitive and include benefits that matter to candidates.</p>
      
      <h2>Provide Growth Opportunities</h2>
      <p>Top talent wants to grow and develop. Show how your company supports career advancement and continuous learning.</p>
    `
  },
  // Technology
  {
    id: 4,
    img: 'https://media.licdn.com/dms/image/v2/D5612AQEYHZdH_84ZXg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721025640162?e=2147483647&v=beta&t=39xFzd36SIXTSSKD3t4y6cZgJmQHHioN4c2RTUcm9rs',
    badge: Badge.Technology,
    date: 'Jan 20, 2025',
    title: 'How Technology is Changing Recruitment',
    description: 'Explore the latest technological innovations in the recruitment process...',
    profileImg: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Michael Chen',
    jobTitle: 'Tech Recruiter',
    content: `
      <p>Technology is fundamentally transforming how organizations approach recruitment, from initial candidate sourcing to final hiring decisions.</p>
      
      <h2>Digital Sourcing Platforms</h2>
      <p>Modern recruitment relies heavily on digital platforms like LinkedIn, Indeed, and specialized job boards to reach potential candidates.</p>
      
      <h2>Video Interviewing</h2>
      <p>Video technology has made remote interviewing standard practice, saving time and resources while expanding candidate pools.</p>
      
      <h2>Data-Driven Decisions</h2>
      <p>Recruitment analytics provide insights into hiring effectiveness, helping organizations optimize their processes.</p>
    `
  },
  {
    id: 5,
    img: 'https://media.licdn.com/dms/image/v2/D5612AQEwb6gZEspd3A/article-cover_image-shrink_720_1280/B56ZXL1APMGcAY-/0/1742881425384?e=2147483647&v=beta&t=eSgw-GKoBDBpfz3Uw64XIQi3ji_0t5qrpg2pGh1cqXM',
    badge: Badge.Technology,
    date: 'Feb 18, 2025',
    title: 'Tech Tools for Modern HR',
    description: 'A review of the best tech tools for HR professionals...',
    profileImg: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Linda Lee',
    jobTitle: 'HR Tech Specialist',
    content: `
      <p>The HR technology landscape is vast and constantly evolving. Here are some essential tools that every modern HR professional should consider.</p>
      
      <h2>Applicant Tracking Systems (ATS)</h2>
      <p>ATS platforms streamline the recruitment process by managing job postings, applications, and candidate communications in one place.</p>
      
      <h2>HR Analytics Platforms</h2>
      <p>These tools provide insights into workforce trends, helping HR professionals make data-driven decisions.</p>
      
      <h2>Employee Engagement Tools</h2>
      <p>Modern HR isn't just about hiring; it's about keeping employees engaged and satisfied throughout their tenure.</p>
    `
  },
  {
    id: 6,
    img: 'https://www.collidu.com/media/catalog/product/img/d/b/db9b05e7b08416a0777fea888cb9830e0b31403894820230741529d5e545e5c8/hr-digital-transformation-slide1.png',
    badge: Badge.Technology,
    date: 'Mar 2, 2025',
    title: 'Digital Transformation in HR',
    description: 'How digital transformation is reshaping HR departments...',
    profileImg: 'https://randomuser.me/api/portraits/men/6.jpg',
    name: 'David Kim',
    jobTitle: 'Digital HR Lead',
    content: `
      <p>Digital transformation is not just about adopting new technologies; it's about fundamentally changing how HR operates and delivers value to the organization.</p>
      
      <h2>Automation of Routine Tasks</h2>
      <p>Digital tools can automate repetitive HR tasks, freeing up professionals to focus on strategic initiatives.</p>
      
      <h2>Enhanced Employee Experience</h2>
      <p>Digital platforms provide employees with self-service options, improving satisfaction and reducing HR workload.</p>
      
      <h2>Strategic Decision Making</h2>
      <p>With better data and analytics, HR can contribute more strategically to organizational success.</p>
    `
  },
  // AI & ML
  {
    id: 7,
    img: 'https://www.ismartrecruit.com/upload/blog/main_image/AI_Recruitment-img.webp',
    badge: Badge.AI,
    date: 'Jan 25, 2025',
    title: 'AI in Modern Recruitment',
    description: 'Understanding the role of AI in modern recruitment practices...',
    profileImg: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Emily Davis',
    jobTitle: 'AI Specialist',
    content: `
      <p>Artificial Intelligence is revolutionizing recruitment by automating processes, improving decision-making, and enhancing candidate experience.</p>
      
      <h2>AI-Powered Candidate Screening</h2>
      <p>AI algorithms can analyze resumes, assess skills, and predict candidate success with remarkable accuracy.</p>
      
      <h2>Chatbots and Virtual Assistants</h2>
      <p>AI-powered chatbots provide instant responses to candidate queries, improving engagement and reducing response times.</p>
      
      <h2>Predictive Analytics</h2>
      <p>AI can predict which candidates are most likely to succeed in specific roles based on historical data.</p>
    `
  },
  {
    id: 8,
    img: 'https://www.recruiter.com/recruiting/wp-content/uploads/2023/05/23HIRE-Leveraging-AI-Featured-Image-1-1536x896.webp',
    badge: Badge.AI,
    date: 'Feb 28, 2025',
    title: 'Machine Learning for Recruiters',
    description: 'How recruiters can leverage machine learning for better hiring...',
    profileImg: 'https://randomuser.me/api/portraits/men/8.jpg',
    name: 'Alex Brown',
    jobTitle: 'ML Engineer',
    content: `
      <p>Machine Learning offers recruiters powerful tools to improve hiring efficiency and effectiveness.</p>
      
      <h2>Resume Parsing and Analysis</h2>
      <p>ML algorithms can extract relevant information from resumes and match candidates to job requirements.</p>
      
      <h2>Skill Gap Analysis</h2>
      <p>ML can identify skill gaps in the market and help organizations plan their hiring strategies accordingly.</p>
      
      <h2>Candidate Matching</h2>
      <p>Advanced ML models can match candidates to roles based on skills, experience, and cultural fit.</p>
    `
  },
  {
    id: 9,
    img: 'https://www.tmi.org/Images/key-ethical-considerations-for-ai-in-hr.jpg',
    badge: Badge.AI,
    date: 'Mar 10, 2025',
    title: 'The Ethics of AI in HR',
    description: 'Discussing the ethical implications of using AI in HR...',
    profileImg: 'https://randomuser.me/api/portraits/women/9.jpg',
    name: 'Sophia Turner',
    jobTitle: 'Ethics Researcher',
    content: `
      <p>As AI becomes more prevalent in HR, it's crucial to consider the ethical implications and ensure fair, transparent practices.</p>
      
      <h2>Bias and Fairness</h2>
      <p>AI systems can perpetuate existing biases if not carefully designed and monitored. Organizations must ensure their AI tools promote fairness and diversity.</p>
      
      <h2>Transparency and Explainability</h2>
      <p>Candidates and employees have the right to understand how AI decisions are made. Organizations must provide clear explanations of AI processes.</p>
      
      <h2>Privacy and Data Protection</h2>
      <p>AI systems collect and process vast amounts of personal data. Organizations must ensure compliance with privacy regulations and protect candidate information.</p>
    `
  },
  // Industry News
  {
    id: 10,
    img: 'https://thetalentgames.com/wp-content/uploads/2023/01/hr-tech-trends-2025-1.jpg',
    badge: Badge.IndustryNews,
    date: 'Jan 30, 2025',
    title: 'Industry News: HR Tech Updates',
    description: 'Latest updates in the HR technology industry...',
    profileImg: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Chris Evans',
    jobTitle: 'Industry Analyst',
    content: `
      <p>The HR technology industry is experiencing rapid growth and innovation. Here are the latest developments shaping the future of HR.</p>
      
      <h2>Major Acquisitions and Mergers</h2>
      <p>Several significant acquisitions have reshaped the HR tech landscape, creating more comprehensive solutions for organizations.</p>
      
      <h2>New Product Launches</h2>
      <p>Leading HR tech companies are launching innovative products that address emerging workforce challenges.</p>
      
      <h2>Investment Trends</h2>
      <p>Venture capital investment in HR tech continues to grow, indicating strong market confidence in the sector.</p>
    `
  },
  {
    id: 11,
    img: 'https://imspeople.com/storage/2025/05/Data-Doesnt-Lie-AI-Will-Handle-39-of-Recruitment-Process-by-2028-1.jpg',
    badge: Badge.IndustryNews,
    date: 'Feb 15, 2025',
    title: 'Recruitment Industry News',
    description: "What's new in the recruitment industry this month...",
    profileImg: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Jessica White',
    jobTitle: 'News Reporter',
    content: `
      <p>This month brings significant developments in the recruitment industry, from new regulations to emerging trends.</p>
      
      <h2>Regulatory Changes</h2>
      <p>New regulations affecting recruitment practices have been announced, requiring organizations to update their processes.</p>
      
      <h2>Market Trends</h2>
      <p>Recent data shows shifts in candidate preferences and employer strategies that are reshaping the recruitment landscape.</p>
      
      <h2>Technology Adoption</h2>
      <p>Organizations are increasingly adopting new technologies to improve their recruitment processes and candidate experience.</p>
    `
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    badge: Badge.IndustryNews,
    date: 'Mar 12, 2025',
    title: 'HR Conferences 2025',
    description: 'A roundup of the most important HR conferences in 2025...',
    profileImg: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Brian Green',
    jobTitle: 'Conference Organizer',
    content: `
      <p>2025 promises to be an exciting year for HR professionals with numerous conferences and events planned worldwide.</p>
      
      <h2>Major International Conferences</h2>
      <p>Several major HR conferences are scheduled throughout the year, offering opportunities for networking and learning.</p>
      
      <h2>Virtual and Hybrid Events</h2>
      <p>The trend toward virtual and hybrid events continues, making conferences more accessible to global audiences.</p>
      
      <h2>Key Topics and Themes</h2>
      <p>This year's conferences will focus on emerging trends like AI in HR, employee experience, and the future of work.</p>
    `
  },
] 