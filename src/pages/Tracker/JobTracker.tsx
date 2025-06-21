import type { JSX } from "react"
import { useState } from "react"
import { Menu, Info, Archive, FileBarChart2, Download } from "lucide-react"
import { useNavigate } from "react-router-dom"

const jobs = [
  {
    position: "Front End Intern",
    company: "ATOM SOLUTIONS JOINT STOCK ...",
    minSalary: "150,00 US$",
    maxSalary: "200,00 US$",
    location: "Ho Chi Minh: 90M-92M ...",
    status: "Interviewing",
    datePosted: "06/04/2025",
    dateSaved: "03/20/2025",
    deadline: "03/20/2025",
    dateApplied: "03/20/2025",
    followUp: "Add date",
    excitement: 4,
  },
  {
    position: "Front-End Developer Intern",
    company: "GoGoX Vietnam Joint Stock Company",
    minSalary: "50,00 US$",
    maxSalary: "117,00 US$",
    location: "Ho Chi Minh: Blue Sky Offic...",
    status: "Negotiating",
    datePosted: "06/04/2025",
    dateSaved: "03/20/2025",
    deadline: "03/20/2025",
    dateApplied: "03/20/2025",
    followUp: "03/19/2025",
    excitement: 5,
  },
  {
    position: "Senior Front End Developer",
    company: "Outpost24",
    minSalary: "29.000,00 ₫",
    maxSalary: "39.000,00 ₫",
    location: "18th Floor, Peakview ...",
    datePosted: "06/04/2025",
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
    minSalary: "200,00 US$",
    maxSalary: "315,00 US$",
    location: "Anywhere, USA",
    status: "Applying",
    datePosted: "06/04/2025",
    dateSaved: "03/18/2025",
    deadline: "N/A",
    dateApplied: "03/18/2025",
    followUp: "06/08/2025",
    excitement: 2,
  },
  {
    position: "Operations Manager - Sample Job",
    company: "Acme Corp",
    minSalary: "170,00 US$",
    maxSalary: "259,00 US$",
    location: "remote",
    status: "Applied",
    datePosted: "06/04/2025",
    dateSaved: "03/18/2025",
    deadline: "03/20/2025",
    dateApplied: "03/18/2025",
    followUp: "03/21/2025",
    excitement: 4,
  },
  {
    position: "Marketing Manager - Sample Job",
    company: "Acme Corp",
    minSalary: "250,00 US$",
    maxSalary: "344,00 US$",
    location: "Anywhere, USA",
    status: "Accepted",
    datePosted: "06/04/2025",
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

const statusOptions = [
  "Bookmarked",
  "Applying",
  "Applied",
  "Interviewing",
  "Negotiating",
  "Accepted",
  "I Withdrew",
  "Not Selected",
  "No Response",
  "Archived",
];

function Star({ filled, onClick, onMouseEnter, onMouseLeave, highlight }: { filled: boolean, onClick?: () => void, onMouseEnter?: () => void, onMouseLeave?: () => void, highlight?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={filled || highlight ? "#4F9CF9" : "none"}
      stroke="#4F9CF9"
      strokeWidth="1.5"
      style={{ marginRight: 2, cursor: onClick ? 'pointer' : 'default', filter: highlight ? 'drop-shadow(0 0 4px #4F9CF9)' : undefined }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <polygon points="10,2 12.4,7.5 18,7.7 13.5,11.7 15,17.2 10,14 5,17.2 6.5,11.7 2,7.7 7.6,7.5" />
    </svg>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        backgroundColor: checked ? "#4F9CF9" : "#fff",
        border: `2px solid ${checked || isHovered ? "#4F9CF9" : "#043873"}`,
        borderRadius: 4,
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
      onClick={onChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {checked && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  )
}

const StatusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 7.41l-7-7A1 1 0 0012.88 0H4a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.12a1 1 0 00-.41-.81zM15 9a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
)
const ArchiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8v13H3V8M1 3h22v5H1z" />
    <path d="M10 12h4" />
  </svg>
)
const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18m-2 6v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3-3V1a2 2 0 012-2h4a2 2 0 012 2v2M8 6h8" />
  </svg>
)
const ActionButton = ({ icon, text, onClick }: { icon: JSX.Element; text: string; onClick?: () => void }) => (
  <button
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      border: "1px solid #d1d5db",
      borderRadius: 6,
      background: "#fff",
      color: "#043873",
      fontWeight: 500,
      cursor: "pointer",
      position: 'relative',
    }}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </button>
)

const columnOptions = [
  {key:'minSalary', label: 'Min. Salary'},
  { key: 'maxSalary', label: 'Max. Salary' },
  { key: 'location', label: 'Location' },
  { key: 'status', label: 'Status' },
  { key: 'datePosted', label: 'Date Posted' },
  { key: 'dateSaved', label: 'Date Saved' },
  { key: 'deadline', label: 'Deadline' },
  { key: 'dateApplied', label: 'Date Applied' },
  { key: 'followUp', label: 'Follow Up' },
  { key: 'excitement', label: 'Excitement' },
];

export const JobTracker = (): JSX.Element => {
  const [selectedJobs, setSelectedJobs] = useState<number[]>([])
  const [ratings, setRatings] = useState(jobs.map(j => j.excitement || 0))
  const [hovered, setHovered] = useState<{row: number, star: number} | null>(null)
  const [jobList, setJobList] = useState(jobs.map(j => ({...j, archived: false})))
  const [showStatusDropdown, setShowStatusDropdown] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showColumnsDropdown, setShowColumnsDropdown] = useState(false)
  const [visibleColumns, setVisibleColumns] = useState<string[]>(["maxSalary", "location", "status", "dateSaved", "deadline", "dateApplied", "followUp", "excitement"])
  const [showMenuDropdown, setShowMenuDropdown] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [tourStep, setTourStep] = useState(0)
  const navigate = useNavigate()
  const [activityLog, setActivityLog] = useState<string[]>([])

  // Helper để ghi log
  function logActivity(action: string) {
    setActivityLog(logs => [
      `${new Date().toLocaleString()}|${action}`,
      ...logs
    ])
  }

  const handleSelectAll = () => {
    const visibleJobs = jobList.filter(j => !j.archived)
    if (selectedJobs.length === visibleJobs.length) {
      setSelectedJobs([])
      logActivity('Deselect all jobs')
    } else {
      setSelectedJobs(visibleJobs.map((_, idx) => idx))
      logActivity('Select all jobs')
    }
  }

  const handleSelectJob = (idx: number) => {
    setSelectedJobs((prev) => {
      if (prev.includes(idx)) {
        logActivity(`Deselect job: ${visibleJobs[idx].position}`)
        return prev.filter((i) => i !== idx)
      } else {
        logActivity(`Select job: ${visibleJobs[idx].position}`)
        return [...prev, idx]
      }
    })
  }

  const handleStatusChange = (status: string) => {
    setJobList(list => list.map((job, idx) =>
      !job.archived && selectedJobs.includes(idx) ? { ...job, status } : job
    ))
    logActivity(`Change status to '${status}' for jobs: ${selectedJobs.map(i => visibleJobs[i].position).join(', ')}`)
    setShowStatusDropdown(false)
  }

  const handleArchive = () => {
    setJobList(list => list.map((job, idx) =>
      selectedJobs.includes(idx) ? { ...job, archived: true } : job
    ))
    logActivity(`Archive jobs: ${selectedJobs.map(i => visibleJobs[i].position).join(', ')}`)
    setSelectedJobs([])
  }

  const handleDelete = () => {
    logActivity(`Delete jobs: ${selectedJobs.map(i => visibleJobs[i].position).join(', ')}`)
    setJobList(list => list.filter((_, idx) => !selectedJobs.includes(idx)))
    setSelectedJobs([])
    setShowConfirmDialog(false)
  }

  const handleToggleColumn = (key: string) => {
    setVisibleColumns(cols =>
      cols.includes(key) ? cols.filter(c => c !== key) : [...cols, key]
    )
  }

  const visibleJobs = jobList.filter(j => !j.archived)

  // Tính số lượng job cho mỗi status
  const getStatusCount = (status: string) => {
    return visibleJobs.filter(job => job.status.toUpperCase() === status).length
  }

  // Quick Tour steps
  const tourSteps = [
    { title: 'Step 1: Select job(s)', desc: 'You can select one or multiple jobs to perform actions.' },
    { title: 'Step 2: Bulk actions', desc: 'After selecting, you can change status, archive, or delete jobs.' },
    { title: 'Step 3: Rate with stars', desc: 'You can click on the stars to rate your excitement for each job.' },
    { title: 'Step 4: Customize columns', desc: 'Click Columns to choose which columns to display.' },
    { title: 'Step 5: Menu functions', desc: 'Click Menu to export data, view archived jobs, or download your data.' },
  ]

  // Export CSV helpers
  function downloadCSV(filename: string, rows: string[][]) {
    const csvContent = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n")
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const handleExportReport = () => {
    const rows = [["Timestamp", "Action"]]
    activityLog.forEach(log => rows.push(log.split('|')))
    downloadCSV('activity_report.csv', rows)
  }

  const handleDownloadData = () => {
    const headers = ["Job Position", "Company"]
    columnOptions.forEach(opt => { if (visibleColumns.includes(opt.key)) headers.push(opt.label) })
    const rows = [headers]
    visibleJobs.forEach(job => {
      const row = [job.position, job.company]
      columnOptions.forEach(opt => {
        if (visibleColumns.includes(opt.key)) row.push(String(job[opt.key as keyof typeof job] ?? ""))
      })
      rows.push(row)
    })
    downloadCSV('job_data.csv', rows)
  }

  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh', padding: 24 }}>
      {/* Steps */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {steps.map((step, index) => {
          let clipPath = 'none';
          if (steps.length > 1) {
            if (index === 0) {
              // First step: arrow on the right
              clipPath = 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)';
            } else if (index === steps.length - 1) {
              // Last step: notch on the left
              clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)';
            } else {
              // Middle steps: notch on the left, arrow on the right
              clipPath = 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)';
            }
          }

          return (
            <div key={step.label} style={{
              flex: 1,
              padding: 16,
              background: '#fff',
              textAlign: 'center',
              color: '#043873',
              fontWeight: 700,
              fontSize: 16,
              position: 'relative',
              clipPath: clipPath,
              marginLeft: index > 0 ? -21 : 0,
              filter: `drop-shadow(1px 0 0 #4F9CF9) drop-shadow(-1px 0 0 #4F9CF9) drop-shadow(0 1px 0 #4F9CF9) drop-shadow(0 -1px 0 #4F9CF9)`
            }}>
              <div style={{ fontSize: 22, color: '#043873', fontWeight: 700 }}>
                {getStatusCount(step.label)}
              </div>
              <div style={{ fontSize: 13, color: '#043873', fontWeight: 600 }}>{step.label}</div>
            </div>
          )
        })}
      </div>
      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, gap: 12 }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#043873', fontWeight: 500, gap: 8 }}>
          <Checkbox checked={visibleJobs.length > 0 && selectedJobs.length === visibleJobs.length} onChange={handleSelectAll} />
          <span>{selectedJobs.length} selected</span>
        </label>
        {selectedJobs.length > 0 && (
          <div style={{ display: 'flex', gap: 8, position: 'relative' }}>
            <ActionButton icon={<StatusIcon />} text="Status" onClick={() => setShowStatusDropdown(v => !v)} />
            {showStatusDropdown && (
              <div style={{
                position: 'absolute',
                top: 36,
                left: 0,
                background: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: 6,
                boxShadow: '0 2px 8px rgba(4,56,115,0.08)',
                zIndex: 10,
                minWidth: 140,
              }}>
                {statusOptions.map(opt => (
                  <div
                    key={opt}
                    style={{ padding: '8px 16px', cursor: 'pointer', color: '#043873', fontWeight: 500, background: 'none' }}
                    onClick={() => handleStatusChange(opt)}
                    onMouseDown={e => e.preventDefault()}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
            <ActionButton icon={<ArchiveIcon />} text="Archive" onClick={handleArchive} />
            <ActionButton icon={<DeleteIcon />} text="Delete" onClick={() => setShowConfirmDialog(true)} />
          </div>
        )}
        <div style={{ flex: 1 }} />
        <select style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 12px', color: '#043873', fontWeight: 500, marginRight: 8 }}>
          <option>Group by: None</option>
          <option>Group by: Status</option>
          <option>Group by: Company</option>
          <option>Group by: Location</option>
          <option>Group by: Date Saved</option>
          <option>Group by: Date Applied</option>
          <option>Group by: Follow Up</option>
          <option>Group by: Excitement</option>
        </select>
        <button
          style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 18px', background: '#fff', color: '#043873', fontWeight: 600, marginRight: 8, position: 'relative' }}
          onClick={() => setShowColumnsDropdown(v => !v)}
        >
          Columns
          {showColumnsDropdown && (
            <div style={{
              position: 'absolute',
              top: 38,
              right: 0,
              background: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              boxShadow: '0 2px 8px rgba(4,56,115,0.08)',
              zIndex: 20,
              minWidth: 180,
              padding: 8,
            }}>
              {columnOptions.map(opt => (
                <label key={opt.key} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', cursor: 'pointer', fontSize: 15, color: '#043873' }}>
                  <input
                    type="checkbox"
                    checked={visibleColumns.includes(opt.key)}
                    onChange={() => handleToggleColumn(opt.key)}
                    style={{ accentColor: '#4F9CF9', width: 16, height: 16 }}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          )}
        </button>
        <button
          style={{ border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 18px', background: '#fff', color: '#043873', fontWeight: 600, marginRight: 8, display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}
          onClick={() => setShowMenuDropdown(v => !v)}
        >
          <Menu />Menu
          {showMenuDropdown && (
            <div style={{
              position: 'absolute',
              top: 38,
              right: 0,
              background: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              boxShadow: '0 2px 8px rgba(4,56,115,0.08)',
              zIndex: 30,
              minWidth: 180,
              padding: 8,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <button onClick={() => { setShowTour(true); setTourStep(0); setShowMenuDropdown(false) }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', color: '#043873', fontSize: 15, cursor: 'pointer', borderRadius: 5 }}><Info size={18} />Quick Tour</button>
                <button onClick={() => { navigate('/app/job-tracker/archived-jobs') }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', color: '#043873', fontSize: 15, cursor: 'pointer', borderRadius: 5 }}><Archive size={18} />Archived Jobs</button>
                <button onClick={handleExportReport} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', color: '#043873', fontSize: 15, cursor: 'pointer', borderRadius: 5 }}><FileBarChart2 size={18} />Export Report</button>
                <button onClick={handleDownloadData} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', color: '#043873', fontSize: 15, cursor: 'pointer', borderRadius: 5 }}><Download size={18} />Download Data</button>
              </div>
            </div>
          )}
        </button>
        <button style={{ background: '#043873', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>+</span> Add a New Job
        </button>
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(4, 56, 115, 0.04)', overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead>
            <tr style={{ background: '#F5F8FA', color: '#043873', fontWeight: 700 }}>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}></th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Job Position</th>
              <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Company</th>
              {visibleColumns.includes('minSalary') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Min. Salary</th>}
              {visibleColumns.includes('maxSalary') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Max. Salary</th>}
              {visibleColumns.includes('location') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Location</th>}
              {visibleColumns.includes('status') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Status</th>}
              {visibleColumns.includes('datePosted') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Date Posted</th>}
              {visibleColumns.includes('dateSaved') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Date Saved</th>}
              {visibleColumns.includes('deadline') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Deadline</th>}
              {visibleColumns.includes('dateApplied') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Date Applied</th>}
              {visibleColumns.includes('followUp') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>Follow Up</th>}
              {visibleColumns.includes('excitement') && <th style={{ padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'center' }}>Excitement</th>}
            </tr>
          </thead>
          <tbody>
            {visibleJobs.map((job, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #e5e7eb", background: idx % 2 === 0 ? "#fff" : "#f9fafb" }}>
                <td style={{ padding: 10, textAlign: "center" }}>
                  <Checkbox checked={selectedJobs.includes(idx)} onChange={() => handleSelectJob(idx)} />
                </td>
                <td style={{ padding: 10 }}>{job.position}</td>
                <td style={{ padding: 10 }}>{job.company}</td>
                {visibleColumns.includes('minSalary') && <td style={{ padding: 10 }}>{job.minSalary}</td>}
                {visibleColumns.includes('maxSalary') && <td style={{ padding: 10 }}>{job.maxSalary}</td>}
                {visibleColumns.includes('location') && <td style={{ padding: 10 }}>{job.location}</td>}
                {visibleColumns.includes('status') && <td style={{ padding: 10 }}>{job.status}</td>}
                {visibleColumns.includes('datePosted') && <td style={{ padding: 10 }}>{job.datePosted}</td>}
                {visibleColumns.includes('dateSaved') && <td style={{ padding: 10 }}>{job.dateSaved}</td>}
                {visibleColumns.includes('deadline') && <td style={{ padding: 10 }}>{job.deadline}</td>}
                {visibleColumns.includes('dateApplied') && <td style={{ padding: 10 }}>{job.dateApplied}</td>}
                {visibleColumns.includes('followUp') && <td style={{ padding: 10 }}>{job.followUp}</td>}
                {visibleColumns.includes('excitement') && <td style={{ padding: 10, textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {[1,2,3,4,5].map(i => (
                      <Star
                        key={i}
                        filled={i <= ratings[idx]}
                        highlight={!!(hovered && hovered.row === idx && i <= hovered.star)}
                        onClick={() => {
                          setRatings(r => r.map((v, j) => j === idx ? i : v))
                          logActivity(`Set excitement for job '${visibleJobs[idx].position}' to ${i} stars`)
                        }}
                        onMouseEnter={() => setHovered({row: idx, star: i})}
                        onMouseLeave={() => setHovered(null)}
                      />
                    ))}
                  </div>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Confirm Delete Dialog */}
      {showConfirmDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.18)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ background: '#fff', borderRadius: 10, padding: 32, minWidth: 320, boxShadow: '0 2px 16px rgba(4,56,115,0.12)' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#043873', marginBottom: 16 }}>Confirm Delete</div>
            <div style={{ color: '#043873', marginBottom: 24 }}>Are you sure you want to delete the selected job(s)? This action cannot be undone.</div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button onClick={() => setShowConfirmDialog(false)} style={{ padding: '6px 18px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', color: '#043873', fontWeight: 500 }}>Cancel</button>
              <button onClick={handleDelete} style={{ padding: '6px 18px', borderRadius: 6, border: 'none', background: '#e53e3e', color: '#fff', fontWeight: 700 }}>Delete</button>
            </div>
          </div>
        </div>
      )}
      {/* Quick Tour Modal */}
      {showTour && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.18)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ background: '#fff', borderRadius: 10, padding: 32, minWidth: 320, boxShadow: '0 2px 16px rgba(4,56,115,0.12)' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#043873', marginBottom: 16 }}>{tourSteps[tourStep].title}</div>
            <div style={{ color: '#043873', marginBottom: 24 }}>{tourSteps[tourStep].desc}</div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              {tourStep > 0 && <button onClick={() => setTourStep(s => s - 1)} style={{ padding: '6px 18px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', color: '#043873', fontWeight: 500 }}>Back</button>}
              {tourStep < tourSteps.length - 1 && <button onClick={() => setTourStep(s => s + 1)} style={{ padding: '6px 18px', borderRadius: 6, border: 'none', background: '#4F9CF9', color: '#fff', fontWeight: 700 }}>Next</button>}
              {tourStep === tourSteps.length - 1 && <button onClick={() => setShowTour(false)} style={{ padding: '6px 18px', borderRadius: 6, border: 'none', background: '#4F9CF9', color: '#fff', fontWeight: 700 }}>Done</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
