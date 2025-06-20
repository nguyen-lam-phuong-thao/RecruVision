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
      <h2>Case Study: GlobalTech's AI Journey</h2>
      <p>GlobalTech, a multinational corporation, implemented an AI-driven recruitment platform in 2024. Within six months, they reported:</p>
      <ul>
        <li>30% reduction in time-to-hire</li>
        <li>20% increase in candidate satisfaction scores</li>
        <li>Significant improvement in diversity hiring metrics</li>
      </ul>
      <p>However, they also faced challenges in training their HR team and ensuring transparency in AI decision-making. Their experience highlights the importance of change management and ongoing evaluation.</p>
      <h2>Looking Ahead</h2>
      <p>The future of AI in recruitment is bright, with continuous advancements in natural language processing, machine learning, and predictive analytics. Companies that embrace these technologies early will have a significant advantage in attracting and retaining top talent.</p>
      <h2>Expert Opinions</h2>
      <blockquote>"AI is not here to replace recruiters, but to empower them to make better, faster, and fairer decisions." – Dr. Emily Watson, AI Researcher</blockquote>
      <p>In summary, AI-powered recruitment is set to become the new standard, but success depends on thoughtful implementation, ongoing training, and a commitment to ethical practices.</p>
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
      <h2>1. Remote-First Hiring</h2>
      <p>The pandemic has permanently changed how we work, and recruitment strategies must adapt accordingly. Remote-first hiring is no longer optional but essential for accessing global talent pools.</p>
      <ul>
        <li>Companies are investing in virtual onboarding and collaboration tools.</li>
        <li>Flexible work arrangements are now a key selling point for candidates.</li>
      </ul>
      <h2>2. Skills-Based Hiring</h2>
      <p>Traditional degree requirements are being replaced by skills-based assessments. Companies are focusing on what candidates can do rather than where they studied.</p>
      <ul>
        <li>Online assessments and coding challenges are becoming standard.</li>
        <li>Micro-credentials and certifications are gaining value.</li>
      </ul>
      <h2>3. Employer Branding</h2>
      <p>In today's digital age, your company's online presence significantly impacts candidate decisions. Strong employer branding is crucial for attracting top talent.</p>
      <ul>
        <li>Active social media engagement</li>
        <li>Employee advocacy programs</li>
        <li>Transparent communication about company values</li>
      </ul>
      <h2>4. Diversity, Equity & Inclusion (DEI)</h2>
      <p>DEI initiatives are at the forefront of recruitment strategies. Companies are setting measurable goals and holding leaders accountable for progress.</p>
      <h2>5. Data-Driven Recruitment</h2>
      <p>Analytics are being used to optimize every stage of the hiring process, from sourcing to onboarding. Key metrics include:</p>
      <ul>
        <li>Time-to-hire</li>
        <li>Quality of hire</li>
        <li>Candidate experience scores</li>
      </ul>
      <h2>Expert Insight</h2>
      <blockquote>"The most successful organizations in 2025 will be those that adapt quickly to change and put people at the center of their recruitment strategies." – Lisa Tran, HR Consultant</blockquote>
      <p>By staying ahead of these trends, your organization can build a resilient and future-ready workforce.</p>
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
      <h2>Build an Attractive Company Culture</h2>
      <p>Top candidates look for companies with strong values, work-life balance, and growth opportunities. Showcase your company culture through various channels:</p>
      <ul>
        <li>Share employee stories on social media</li>
        <li>Highlight company values on your website</li>
        <li>Encourage employee testimonials and reviews</li>
      </ul>
      <h2>Offer Competitive Compensation & Benefits</h2>
      <p>While salary isn't everything, it's still a crucial factor. Ensure your compensation packages are competitive and include benefits that matter to candidates:</p>
      <ul>
        <li>Health and wellness programs</li>
        <li>Flexible work arrangements</li>
        <li>Professional development opportunities</li>
      </ul>
      <h2>Provide Growth Opportunities</h2>
      <p>Top talent wants to grow and develop. Show how your company supports career advancement and continuous learning:</p>
      <ul>
        <li>Mentorship programs</li>
        <li>Clear career paths</li>
        <li>Access to training and certifications</li>
      </ul>
      <h2>Case Example: InnovateX</h2>
      <p>InnovateX, a fast-growing tech startup, implemented a referral program and invested in employee development. As a result, they saw a 40% increase in high-quality applicants and a 25% reduction in turnover.</p>
      <h2>Conclusion</h2>
      <p>Attracting top talent is an ongoing process that requires a holistic approach. By focusing on culture, compensation, and growth, your company can become an employer of choice.</p>
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
      <p>Technology is fundamentally transforming how organizations approach recruitment, from initial candidate sourcing to final hiring decisions. The digital revolution has introduced a suite of tools and platforms that streamline processes, improve candidate experience, and enable data-driven decision-making.</p>
      <h2>Digital Sourcing Platforms</h2>
      <p>Modern recruitment relies heavily on digital platforms like LinkedIn, Indeed, and specialized job boards to reach potential candidates. These platforms offer:</p>
      <ul>
        <li>Advanced search and filtering capabilities</li>
        <li>Automated job matching algorithms</li>
        <li>Integration with applicant tracking systems (ATS)</li>
      </ul>
      <h2>Video Interviewing</h2>
      <p>Video technology has made remote interviewing standard practice, saving time and resources while expanding candidate pools. Key benefits include:</p>
      <ul>
        <li>Scheduling flexibility for both candidates and recruiters</li>
        <li>Automated interview recording and analysis</li>
        <li>Reduced travel costs and environmental impact</li>
      </ul>
      <h2>Data-Driven Decisions</h2>
      <p>Recruitment analytics provide insights into hiring effectiveness, helping organizations optimize their processes. Metrics such as time-to-fill, cost-per-hire, and source effectiveness are now standard in recruitment dashboards.</p>
      <h2>Case Study: TechHire's Digital Transformation</h2>
      <p>TechHire, a mid-sized IT firm, adopted a fully digital recruitment process in 2023. Results after one year:</p>
      <ul>
        <li>40% faster candidate screening</li>
        <li>Improved candidate satisfaction scores</li>
        <li>Better alignment between job requirements and candidate skills</li>
      </ul>
      <h2>Challenges and Considerations</h2>
      <p>Despite the benefits, digital recruitment also presents challenges:</p>
      <ul>
        <li>Ensuring data privacy and security</li>
        <li>Maintaining a personal touch in candidate interactions</li>
        <li>Training recruiters to use new technologies effectively</li>
      </ul>
      <h2>Expert Quote</h2>
      <blockquote>"Technology is not a replacement for human judgment, but a powerful tool to enhance it." – Mark Lee, HR Tech Analyst</blockquote>
      <h2>Conclusion</h2>
      <p>Embracing technology in recruitment is no longer optional. Organizations that leverage digital tools effectively will gain a significant edge in the talent market.</p>
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
      <p>The HR technology landscape is vast and constantly evolving. Here are some essential tools that every modern HR professional should consider for a more efficient and engaging recruitment process.</p>
      <h2>Applicant Tracking Systems (ATS)</h2>
      <p>ATS platforms streamline the recruitment process by managing job postings, applications, and candidate communications in one place. Leading ATS features include:</p>
      <ul>
        <li>Automated resume parsing</li>
        <li>Customizable workflow stages</li>
        <li>Integration with job boards and social media</li>
      </ul>
      <h2>HR Analytics Platforms</h2>
      <p>These tools provide insights into workforce trends, helping HR professionals make data-driven decisions. Key analytics include:</p>
      <ul>
        <li>Turnover and retention rates</li>
        <li>Employee engagement scores</li>
        <li>Predictive analytics for workforce planning</li>
      </ul>
      <h2>Employee Engagement Tools</h2>
      <p>Modern HR isn't just about hiring; it's about keeping employees engaged and satisfied throughout their tenure. Popular tools offer:</p>
      <ul>
        <li>Pulse surveys and feedback mechanisms</li>
        <li>Recognition and rewards platforms</li>
        <li>Internal communication apps</li>
      </ul>
      <h2>Case Study: EngagePro Implementation</h2>
      <p>EngagePro, a global HR software provider, helped a client reduce turnover by 18% within a year by implementing a suite of engagement and analytics tools.</p>
      <h2>Expert Insight</h2>
      <blockquote>"The right tech stack can transform HR from a support function into a strategic driver of business success." – Priya Nair, HR Technology Consultant</blockquote>
      <h2>Conclusion</h2>
      <p>Investing in the right HR tech tools is crucial for building a resilient, high-performing workforce in today's digital age.</p>
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
      <p>Digital transformation is not just about adopting new technologies; it's about fundamentally changing how HR operates and delivers value to the organization. This shift impacts every aspect of the employee lifecycle, from recruitment to retirement.</p>
      <h2>Automation of Routine Tasks</h2>
      <p>Digital tools can automate repetitive HR tasks, freeing up professionals to focus on strategic initiatives. Examples include:</p>
      <ul>
        <li>Automated interview scheduling</li>
        <li>Onboarding workflows</li>
        <li>Payroll and benefits administration</li>
      </ul>
      <h2>Enhanced Employee Experience</h2>
      <p>Digital platforms provide employees with self-service options, improving satisfaction and reducing HR workload. Features often include:</p>
      <ul>
        <li>Online portals for leave requests and benefits management</li>
        <li>Mobile apps for real-time communication</li>
        <li>Personalized learning and development resources</li>
      </ul>
      <h2>Strategic Decision Making</h2>
      <p>With better data and analytics, HR can contribute more strategically to organizational success. This includes:</p>
      <ul>
        <li>Workforce planning and forecasting</li>
        <li>Identifying skill gaps and training needs</li>
        <li>Measuring the impact of HR initiatives</li>
      </ul>
      <h2>Case Study: FutureHR's Digital Journey</h2>
      <p>FutureHR, a large enterprise, digitized its entire HR function in 2022. Results included:</p>
      <ul>
        <li>50% reduction in administrative workload</li>
        <li>Higher employee engagement scores</li>
        <li>Faster response times to employee queries</li>
      </ul>
      <h2>Expert Quote</h2>
      <blockquote>"Digital transformation in HR is about empowering people, not just implementing technology." – Sofia Martinez, Digital HR Strategist</blockquote>
      <h2>Conclusion</h2>
      <p>Organizations that embrace digital transformation in HR will be better positioned to attract, retain, and develop top talent in a rapidly changing world.</p>
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
      <p>Artificial Intelligence is revolutionizing recruitment by automating processes, improving decision-making, and enhancing candidate experience. The adoption of AI in HR is no longer a futuristic concept—it's a present-day reality for organizations seeking a competitive edge.</p>
      <h2>AI-Powered Candidate Screening</h2>
      <p>AI algorithms can analyze resumes, assess skills, and predict candidate success with remarkable accuracy. Benefits include:</p>
      <ul>
        <li>Faster shortlisting of qualified candidates</li>
        <li>Reduction in manual screening errors</li>
        <li>Objective evaluation based on data</li>
      </ul>
      <h2>Chatbots and Virtual Assistants</h2>
      <p>AI-powered chatbots provide instant responses to candidate queries, improving engagement and reducing response times. Use cases:</p>
      <ul>
        <li>Answering FAQs about job roles and company policies</li>
        <li>Scheduling interviews automatically</li>
        <li>Collecting candidate feedback post-interview</li>
      </ul>
      <h2>Predictive Analytics</h2>
      <p>AI can predict which candidates are most likely to succeed in specific roles based on historical data. This enables:</p>
      <ul>
        <li>Better hiring decisions</li>
        <li>Reduced turnover rates</li>
        <li>Improved team performance</li>
      </ul>
      <h2>Case Study: TalentAI Implementation</h2>
      <p>TalentAI, a recruitment startup, implemented an end-to-end AI solution in 2023. Outcomes included:</p>
      <ul>
        <li>60% reduction in time-to-hire</li>
        <li>Improved candidate experience ratings</li>
        <li>More diverse talent pools</li>
      </ul>
      <h2>Challenges and Ethics</h2>
      <p>Despite the benefits, AI in recruitment raises important ethical questions:</p>
      <ul>
        <li>Potential for algorithmic bias</li>
        <li>Transparency in decision-making</li>
        <li>Data privacy concerns</li>
      </ul>
      <h2>Expert Insight</h2>
      <blockquote>"AI is a tool—its impact depends on how thoughtfully we use it." – Dr. Alan Nguyen, AI Ethicist</blockquote>
      <h2>Conclusion</h2>
      <p>AI is set to become an indispensable part of recruitment, but organizations must balance efficiency with fairness and transparency.</p>
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
      <p>Machine Learning (ML) offers recruiters powerful tools to improve hiring efficiency and effectiveness. By leveraging ML, organizations can make smarter, data-driven decisions throughout the recruitment process.</p>
      <h2>Resume Parsing and Analysis</h2>
      <p>ML algorithms can extract relevant information from resumes and match candidates to job requirements. Key features:</p>
      <ul>
        <li>Automated extraction of skills, experience, and education</li>
        <li>Ranking candidates based on job fit</li>
        <li>Reducing manual screening workload</li>
      </ul>
      <h2>Skill Gap Analysis</h2>
      <p>ML can identify skill gaps in the market and help organizations plan their hiring strategies accordingly. Benefits include:</p>
      <ul>
        <li>Proactive workforce planning</li>
        <li>Targeted training and development programs</li>
        <li>Better alignment of hiring with business goals</li>
      </ul>
      <h2>Candidate Matching</h2>
      <p>Advanced ML models can match candidates to roles based on skills, experience, and cultural fit. This leads to:</p>
      <ul>
        <li>Higher quality of hire</li>
        <li>Reduced turnover</li>
        <li>Improved team dynamics</li>
      </ul>
      <h2>Case Study: MatchPro's ML Journey</h2>
      <p>MatchPro, a global recruitment agency, adopted ML-powered candidate matching in 2024. Results:</p>
      <ul>
        <li>35% increase in placement success rate</li>
        <li>Faster time-to-fill for critical roles</li>
        <li>Enhanced client satisfaction</li>
      </ul>
      <h2>Challenges and Considerations</h2>
      <ul>
        <li>Ensuring data quality for training ML models</li>
        <li>Addressing potential bias in algorithms</li>
        <li>Maintaining transparency in recommendations</li>
      </ul>
      <h2>Expert Quote</h2>
      <blockquote>"Machine learning is only as good as the data you feed it." – Dr. Linh Tran, Data Scientist</blockquote>
      <h2>Conclusion</h2>
      <p>ML is transforming recruitment, but success depends on careful implementation and ongoing monitoring.</p>
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
      <p>As AI becomes more prevalent in HR, it's crucial to consider the ethical implications and ensure fair, transparent practices. The intersection of technology and ethics is now a central concern for HR leaders.</p>
      <h2>Bias and Fairness</h2>
      <p>AI systems can perpetuate existing biases if not carefully designed and monitored. Organizations must ensure their AI tools promote fairness and diversity. Strategies include:</p>
      <ul>
        <li>Regular audits of AI algorithms</li>
        <li>Inclusive data sets for training</li>
        <li>Transparent decision-making processes</li>
      </ul>
      <h2>Transparency and Explainability</h2>
      <p>Candidates and employees have the right to understand how AI decisions are made. Organizations must provide clear explanations of AI processes. Best practices:</p>
      <ul>
        <li>Documenting AI decision criteria</li>
        <li>Offering feedback channels for candidates</li>
        <li>Publishing AI ethics guidelines</li>
      </ul>
      <h2>Privacy and Data Protection</h2>
      <p>AI systems collect and process vast amounts of personal data. Organizations must ensure compliance with privacy regulations and protect candidate information. Key steps:</p>
      <ul>
        <li>Implementing robust data security measures</li>
        <li>Obtaining informed consent from users</li>
        <li>Regularly reviewing data retention policies</li>
      </ul>
      <h2>Case Study: FairHire's Ethical AI</h2>
      <p>FairHire, a recruitment platform, developed an AI ethics board to oversee all algorithmic decisions. Outcomes:</p>
      <ul>
        <li>Increased trust from clients and candidates</li>
        <li>Improved diversity in hiring outcomes</li>
        <li>Positive media coverage and industry recognition</li>
      </ul>
      <h2>Expert Insight</h2>
      <blockquote>"Ethical AI is not just a technical challenge—it's a leadership imperative." – Dr. Maria Gomez, HR Ethics Advisor</blockquote>
      <h2>Conclusion</h2>
      <p>Ethical AI in HR is essential for building trust and achieving sustainable success in the digital age.</p>
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
      <p>Several significant acquisitions have reshaped the HR tech landscape, creating more comprehensive solutions for organizations. Notable deals in 2024-2025 include:</p>
      <ul>
        <li>BigHR acquiring TalentSoft for $1.2B</li>
        <li>WorkForce merging with PeopleFirst</li>
        <li>New partnerships between HR tech startups and established vendors</li>
      </ul>
      <h2>New Product Launches</h2>
      <p>Leading HR tech companies are launching innovative products that address emerging workforce challenges. Examples:</p>
      <ul>
        <li>AI-driven onboarding platforms</li>
        <li>Employee wellness and mental health apps</li>
        <li>Advanced analytics dashboards for HR leaders</li>
      </ul>
      <h2>Investment Trends</h2>
      <p>Venture capital investment in HR tech continues to grow, indicating strong market confidence in the sector. Key stats:</p>
      <ul>
        <li>$5B invested globally in 2024</li>
        <li>Focus on AI, automation, and employee experience</li>
        <li>Rise of HR tech accelerators and incubators</li>
      </ul>
      <h2>Case Study: NextGenHR's Growth</h2>
      <p>NextGenHR, a startup, secured $50M in Series B funding and expanded to 20 countries within two years, thanks to its innovative AI-powered HR solutions.</p>
      <h2>Expert Quote</h2>
      <blockquote>"The pace of innovation in HR tech is unprecedented, and organizations must stay agile to keep up." – James Park, HR Tech Investor</blockquote>
      <h2>Conclusion</h2>
      <p>Staying updated on industry news is essential for HR leaders aiming to drive digital transformation and stay ahead of the competition.</p>
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
      <p>This month brings significant developments in the recruitment industry, from new regulations to emerging trends. Staying informed is key for HR professionals and business leaders alike.</p>
      <h2>Regulatory Changes</h2>
      <p>New regulations affecting recruitment practices have been announced, requiring organizations to update their processes. Highlights:</p>
      <ul>
        <li>Stricter data privacy requirements</li>
        <li>Mandatory diversity reporting</li>
        <li>Updated guidelines for remote hiring</li>
      </ul>
      <h2>Market Trends</h2>
      <p>Recent data shows shifts in candidate preferences and employer strategies that are reshaping the recruitment landscape. Notable trends:</p>
      <ul>
        <li>Increased demand for flexible work</li>
        <li>Growth in contract and gig roles</li>
        <li>Emphasis on employee well-being</li>
      </ul>
      <h2>Technology Adoption</h2>
      <p>Organizations are increasingly adopting new technologies to improve their recruitment processes and candidate experience. Examples:</p>
      <ul>
        <li>AI-powered sourcing tools</li>
        <li>Virtual assessment centers</li>
        <li>Automated reference checking</li>
      </ul>
      <h2>Case Study: FlexHire's Adaptation</h2>
      <p>FlexHire, a staffing agency, embraced remote hiring and digital onboarding, resulting in a 30% increase in client satisfaction and faster placements.</p>
      <h2>Expert Insight</h2>
      <blockquote>"Adaptability is the most valuable skill in today's recruitment industry." – Rachel Kim, Workforce Strategist</blockquote>
      <h2>Conclusion</h2>
      <p>Keeping up with industry news enables organizations to anticipate changes and seize new opportunities in recruitment.</p>
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
      <p>2025 promises to be an exciting year for HR professionals with numerous conferences and events planned worldwide. These gatherings offer invaluable opportunities for learning, networking, and staying ahead of industry trends.</p>
      <h2>Major International Conferences</h2>
      <p>Several major HR conferences are scheduled throughout the year, offering opportunities for networking and learning. Highlights include:</p>
      <ul>
        <li>Global HR Summit (London)</li>
        <li>SHRM Annual Conference (USA)</li>
        <li>Asia HR Tech Expo (Singapore)</li>
      </ul>
      <h2>Virtual and Hybrid Events</h2>
      <p>The trend toward virtual and hybrid events continues, making conferences more accessible to global audiences. Benefits:</p>
      <ul>
        <li>Lower travel costs</li>
        <li>Greater flexibility for attendees</li>
        <li>Access to on-demand content</li>
      </ul>
      <h2>Key Topics and Themes</h2>
      <p>This year's conferences will focus on emerging trends like AI in HR, employee experience, and the future of work. Key topics:</p>
      <ul>
        <li>AI and automation in HR</li>
        <li>Employee well-being and mental health</li>
        <li>Diversity, equity, and inclusion</li>
      </ul>
      <h2>Case Study: HR Innovators Forum</h2>
      <p>The HR Innovators Forum 2024 attracted over 5,000 attendees and featured interactive workshops, expert panels, and networking sessions. Feedback was overwhelmingly positive, with 92% of participants planning to return.</p>
      <h2>Expert Quote</h2>
      <blockquote>"Conferences are where the future of HR is shaped—by sharing ideas, building relationships, and inspiring change." – Daniel Lee, Conference Chair</blockquote>
      <h2>Conclusion</h2>
      <p>Attending HR conferences is a powerful way for professionals to stay informed, inspired, and connected in a rapidly evolving industry.</p>
    `
  },
] 