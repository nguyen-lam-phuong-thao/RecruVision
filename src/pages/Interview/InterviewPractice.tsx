import type { JSX } from "react"

const recentScenarios = [
  {
    title: "Tell Me About Yourself",
    subtitle: "Attempted 2 weeks ago",
  },
  {
    title: "Tell Me About Yourself",
    subtitle: "Attempted 2 weeks ago",
  },
  {
    title: "Discussing Salary Expectations",
    subtitle: "Attempted 2 months ago",
  },
];

const upcomingInterview = {
  company: "ATOM SOLUTIONS JOINT STOCK COMPANY",
  position: "Front End Intern",
};

const scenarioLibrary = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></svg>
    ),
    title: "Tell Me About Yourself",
    desc: "Master the art of introduction by practicing a compelling and authentic response",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><path d="M12 19V5M5 12h14" /></svg>
    ),
    title: "Why Do You Want to Work Here?",
    desc: "Craft a tailored narrative that describes your aspiration to work with a company",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: "Career Gaps with Confidence",
    desc: "Learn how to address gaps in work history with honesty and confidence.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
    ),
    title: "Discussing Salary Expectations",
    desc: "Craft a confident, well-supported response and practice discussing compensation.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><path d="M12 20v-6m0 0V4m0 10h4m-4 0H8" /></svg>
    ),
    title: "What Are Your Weaknesses?",
    desc: "Discover the right way to answer this tough question with an honest and strategic response.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 9h8M8 15h8" /></svg>
    ),
    title: "Job-Specific Interview",
    desc: "Practice answering questions relevant to your field while building confidence in articulating their qualifications.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4l-3-3" /></svg>
    ),
    title: "What Accomplishment Are You Most Proud Of?",
    desc: "Focus on highlighting impact, problem-solving, and personal growth related to the role",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 9h8M8 15h8" /></svg>
    ),
    title: "How Do You Handle Conflict?",
    desc: "Practice structuring a response that highlights communication, problem-solving, and emotional intelligence.",
  },
];

export const InterviewPractice = (): JSX.Element => {
  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh', padding: 0 }}>
      {/* Header */}
      <div style={{ padding: '24px 0 0 24px', fontWeight: 700, fontSize: 22, color: '#043873' }}>
        Interview Practice Hub
      </div>
      {/* Welcome Alert */}
      <div style={{ margin: '24px 24px 0 24px', background: '#E6F2FA', borderRadius: 12, padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#043873', marginBottom: 6 }}>
            Welcome to the Interview Practice Hub! <span role="img" aria-label="wave">👋</span>
          </div>
          <div style={{ color: '#043873', fontSize: 16, maxWidth: 700 }}>
            Get started with your all-in-one space to prepare for the next step in your career. Practice scenarios, build confidence, and explore new scenarios to grow your professional career.
          </div>
        </div>
        <button style={{ background: 'none', border: 'none', fontSize: 22, color: '#043873', cursor: 'pointer' }}>&times;</button>
      </div>
      {/* Main Content */}
      <div style={{ display: 'flex', gap: 32, margin: '32px 24px 0 24px' }}>
        {/* Left: Recent Scenarios & Library */}
        <div style={{ flex: 2, minWidth: 0 }}>
          {/* Keep At It */}
          <div style={{ fontWeight: 700, fontSize: 20, color: '#043873', marginBottom: 8 }}>
            Keep At It! <span style={{ fontWeight: 400, fontSize: 15, color: '#6b7280' }}>(Recent Scenarios)</span>
            <span style={{ float: 'right', fontWeight: 500, fontSize: 15, color: '#043873', cursor: 'pointer' }}>See All</span>
          </div>
          <div>
            {recentScenarios.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', padding: 20, marginBottom: 14, boxShadow: '0 1px 2px rgba(4, 56, 115, 0.03)' }}>
                <div style={{ marginRight: 18 }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="#043873"><circle cx="16" cy="16" r="16" fill="#E6F2FA" /><polygon points="13,11 22,16 13,21" fill="#043873" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 18, color: '#043873' }}>{s.title}</div>
                  <div style={{ color: '#6b7280', fontSize: 15 }}>{s.subtitle}</div>
                </div>
                <button style={{ color: '#043873', fontWeight: 600, fontSize: 16, background: 'none', border: 'none', cursor: 'pointer' }}>Practice Again</button>
              </div>
            ))}
          </div>
          <hr style={{ margin: '32px 0 24px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
          {/* Scenario Library */}
          <div style={{ fontWeight: 700, fontSize: 20, color: '#043873', marginBottom: 18 }}>Scenario Library</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
            {scenarioLibrary.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 22, minHeight: 140, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 1px 2px rgba(4, 56, 115, 0.03)' }}>
                <div>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#043873', marginBottom: 2 }}>{s.title}</div>
                <div style={{ color: '#6b7280', fontSize: 15 }}>{s.desc}</div>
              </div>
            ))}
            {/* Submit Ideas Card */}
            <div style={{ background: '#F5F8FA', border: '1.5px dashed #4F9CF9', borderRadius: 12, padding: 22, minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#043873', marginBottom: 2, textAlign: 'center' }}>Have an idea for a scenario?</div>
              <div style={{ color: '#6b7280', fontSize: 15, textAlign: 'center' }}>Let us know skills or situations that you would like to practice</div>
              <button style={{ marginTop: 8, background: '#4F9CF9', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Submit Ideas</button>
            </div>
          </div>
        </div>
        {/* Right: Upcoming Interviews */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: '#043873', marginBottom: 18 }}>Upcoming Interviews</div>
          <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 28, minHeight: 120, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 1px 2px rgba(4, 56, 115, 0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <svg width="24" height="24" fill="none" stroke="#4F9CF9" strokeWidth="2"><rect x="4" y="6" width="16" height="12" rx="3" /><path d="M8 10h8M8 14h8" /></svg>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#043873' }}>{upcomingInterview.company}</div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 15, color: '#043873', marginBottom: 8 }}>- {upcomingInterview.position}</div>
            <button style={{ color: '#4F9CF9', fontWeight: 600, fontSize: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Practice Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
