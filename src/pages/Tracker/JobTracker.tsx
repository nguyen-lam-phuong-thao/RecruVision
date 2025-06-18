import type { JSX } from "react"

const jobs = [
  {
    position: "Front End Intern",
    company: "ATOM SOLUTIONS JOINT STOCK ...",
    salary: "200,00 US$",
    location: "Ho Chi Minh: 90M-92M ...",
    status: "Interviewing",
    dateSaved: "03/20/2025",
    deadline: "03/20/2025",
    dateApplied: "03/20/2025",
    followUp: "Add date",
    excitement: 4,
  },
  {
    position: "Front-End Developer Intern",
    company: "GoGoX Vietnam Joint Stock Company",
    salary: "117,00 US$",
    location: "Ho Chi Minh: Blue Sky Offic...",
    status: "Negotiating",
    dateSaved: "03/20/2025",
    deadline: "03/20/2025",
    dateApplied: "03/20/2025",
    followUp: "03/19/2025",
    excitement: 5,
  },
  {
    position: "Senior Front End Developer",
    company: "Outpost24",
    salary: "39.000,00 ₫",
    location: "18th Floor, Peakview ...",
    status: "Bookmarked",
    dateSaved: "03/20/2025",
    deadline: "N/A",
    dateApplied: "N/A",
    followUp: "Add date",
    excitement: 0,
  },
  {
    position: "Product Designer - Sample Job",
    company: "Acme Corp",
    salary: "315,00 US$",
    location: "Anywhere, USA",
    status: "Applying",
    dateSaved: "03/18/2025",
    deadline: "N/A",
    dateApplied: "03/18/2025",
    followUp: "06/08/2025",
    excitement: 2,
  },
  {
    position: "Operations Manager - Sample Job",
    company: "Acme Corp",
    salary: "259,00 US$",
    location: "remote",
    status: "Applied",
    dateSaved: "03/18/2025",
    deadline: "03/20/2025",
    dateApplied: "03/18/2025",
    followUp: "03/21/2025",
    excitement: 4,
  },
  {
    position: "Marketing Manager - Sample Job",
    company: "Acme Corp",
    salary: "344,00 US$",
    location: "Anywhere, USA",
    status: "Accepted",
    dateSaved: "03/18/2025",
    deadline: "03/20/2025",
    dateApplied: "03/18/2025",
    followUp: "03/21/2025",
    excitement: 3,
  },
];

const steps = [
  { label: "BOOKMARKED" },
  { label: "APPLYING" },
  { label: "APPLIED" },
  { label: "INTERVIEWING" },
  { label: "NEGOTIATING" },
  { label: "ACCEPTED" },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={filled ? "#4F9CF9" : "none"} stroke="#4F9CF9" strokeWidth="1.5" style={{ marginRight: 2 }}>
      <polygon points="10,2 12.4,7.5 18,7.7 13.5,11.7 15,17.2 10,14 5,17.2 6.5,11.7 2,7.7 7.6,7.5" />
    </svg>
  );
}

function Checkbox() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#043873" strokeWidth="2" style={{ verticalAlign: 'middle' }}>
      <rect x="2" y="2" width="14" height="14" rx="3" fill="white" />
    </svg>
  );
}

export const JobTracker = (): JSX.Element => {
  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh', padding: 24 }}>
      {/* Steps */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {steps.map((step) => (
          <div key={step.label} style={{
            flex: 1,
            border: `1.5px solid #4F9CF9`,
            borderRadius: 12,
            padding: 16,
            background: '#fff',
            textAlign: 'center',
            color: '#043873',
            fontWeight: 700,
            fontSize: 16,
            position: 'relative',
          }}>
            <div style={{ fontSize: 22, color: '#043873', fontWeight: 700 }}>1</div>
            <div style={{ fontSize: 13, color: '#043873', fontWeight: 600 }}>{step.label}</div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, gap: 12 }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#043873', fontWeight: 500 }}>
          <Checkbox />
          <span style={{ marginLeft: 8 }}>0 selected</span>
        </label>
        <div style={{ flex: 1 }} />
        <select style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 12px', color: '#043873', fontWeight: 500, marginRight: 8 }}>
          <option>Group by: None</option>
        </select>
        <button style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 18px', background: '#fff', color: '#043873', fontWeight: 600, marginRight: 8 }}>Columns</button>
        <button style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 18px', background: '#fff', color: '#043873', fontWeight: 600, marginRight: 8 }}>Menu</button>
        <button style={{ background: '#043873', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>+</span> Add a New Job
        </button>
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(4, 56, 115, 0.04)', overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead>
            <tr style={{ background: '#F5F8FA', color: '#043873', fontWeight: 700 }}>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}><Checkbox /></th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Job Position</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Company</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Max. Salary</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Location</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Status</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Date Saved</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Deadline</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Date Applied</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Follow up</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>Excitement</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb', background: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td style={{ padding: 10, textAlign: 'center' }}><Checkbox /></td>
                <td style={{ padding: 10 }}>{job.position}</td>
                <td style={{ padding: 10 }}>{job.company}</td>
                <td style={{ padding: 10 }}>{job.salary}</td>
                <td style={{ padding: 10 }}>{job.location}</td>
                <td style={{ padding: 10 }}>{job.status}</td>
                <td style={{ padding: 10 }}>{job.dateSaved}</td>
                <td style={{ padding: 10 }}>{job.deadline}</td>
                <td style={{ padding: 10 }}>{job.dateApplied}</td>
                <td style={{ padding: 10 }}>{job.followUp}</td>
                <td style={{ padding: 10, textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {[1,2,3,4,5].map(i => <Star key={i} filled={i <= job.excitement} />)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
