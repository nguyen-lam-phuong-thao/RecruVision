import { type JSX, useState } from 'react'
import { Button } from '../../components/ui/button'

const paths: Record<TrackKey, string[]> = {
  frontend: [
    'Junior Front End Developer',
    'Front End Developer',
    'Senior Front End Developer',
    'Lead Front End Developer',
    'Director of Front End Development',
  ],
  backend: [
    'Junior Backend Developer',
    'Backend Developer',
    'Senior Backend Developer',
    'Lead Backend Developer',
    'Director of Backend Development',
  ],
  fullstack: [
    'Junior Fullstack Developer',
    'Fullstack Developer',
    'Senior Fullstack Developer',
    'Lead Fullstack Developer',
    'Director of Fullstack Development',
  ],
};

const hardSkills: Record<TrackKey, string[]> = {
  frontend: [
    'JavaScript/TypeScript',
    'React.js',
    'CSS/SCSS',
    'Testing (Jest, Cypress)',
    'Performance Optimization',
    'System Design',
    'Architecture',
  ],
  backend: [
    'Node.js/Python/Java',
    'Database Design (SQL/NoSQL)',
    'API Development (REST/GraphQL)',
    'Testing (Jest, Mocha)',
    'Performance Optimization',
    'System Design',
    'Cloud Infrastructure',
  ],
  fullstack: [
    'JavaScript/TypeScript',
    'React.js/Angular/Vue',
    'Node.js/Python/Java',
    'Database Design',
    'API Development',
    'DevOps Basics',
    'System Design',
  ],
};

const softSkills: Record<TrackKey, string[]> = {
  frontend: [
    'Leadership',
    'Communication',
    'Mentoring',
    'Strategic Thinking',
    'Collaboration',
    'Problem Solving',
  ],
  backend: [
    'Leadership',
    'Analytical Thinking',
    'Communication',
    'Mentoring',
    'Collaboration',
    'Problem Solving',
  ],
  fullstack: [
    'Leadership',
    'Adaptability',
    'Communication',
    'Mentoring',
    'Collaboration',
    'Problem Solving',
  ],
};

const trackOptions = [
  { key: 'frontend', label: 'Front End Developer' },
  { key: 'backend', label: 'Backend Developer' },
  { key: 'fullstack', label: 'Fullstack Developer' },
];

type TrackKey = 'frontend' | 'backend' | 'fullstack';
export const CareerPath = (): JSX.Element => {
  const [track, setTrack] = useState<TrackKey>('frontend');
  const [path, setPath] = useState(paths.frontend);
  const [hard, setHard] = useState(hardSkills.frontend);
  const [soft, setSoft] = useState(softSkills.frontend);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPath(paths[track]);
    setHard(hardSkills[track]);
    setSoft(softSkills[track]);
  };

  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh', padding: 0 }}>
      <div style={{ padding: '32px 0 0 32px', fontWeight: 700, fontSize: 24, color: '#043873' }}>
        Career Path Explorer
      </div>
      <form onSubmit={handleSubmit} style={{ margin: '32px 32px 0 32px', display: 'flex', gap: 16, alignItems: 'center' }}>
        <select
          value={track}
          onChange={e => setTrack(e.target.value as TrackKey)}
          style={{
            flex: 1,
            padding: '14px 18px',
            borderRadius: 8,
            border: '1.5px solid #4F9CF9',
            fontSize: 18,
            color: '#043873',
            background: '#fff',
            fontWeight: 500,
            outline: 'none',
            appearance: 'none',
          }}
        >
          {trackOptions.map(opt => (
            <option key={opt.key} value={opt.key}>{opt.label}</option>
          ))}
        </select>
        <Button type="submit" style={{ background: '#4F9CF9', color: '#fff', fontWeight: 700, fontSize: 17, borderRadius: 8, padding: '12px 28px' }}>
          Suggest Path
        </Button>
      </form>
      {/* Career Ladder */}
      <div style={{ margin: '48px 32px 0 32px', display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto' }}>
        {path.map((title, idx) => (
          <div key={title} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              background: idx === path.length - 1 ? '#4F9CF9' : '#fff',
              color: idx === path.length - 1 ? '#fff' : '#043873',
              border: '2px solid #4F9CF9',
              borderRadius: 12,
              padding: '22px 32px',
              fontWeight: 700,
              fontSize: 18,
              minWidth: 220,
              textAlign: 'center',
              boxShadow: idx === path.length - 1 ? '0 2px 12px rgba(79,156,249,0.10)' : '0 1px 4px rgba(4,56,115,0.04)',
              transition: 'background 0.2s',
            }}>
              {title}
            </div>
            {idx < path.length - 1 && (
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" style={{ margin: '0 8px' }}>
                <path d="M8 12h32m0 0l-6-6m6 6l-6 6" stroke="#4F9CF9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Skills Section */}
      <div style={{ margin: '48px 32px 0 32px', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: '#043873', marginBottom: 16 }}>Hard Skills Needed</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {hard.map(skill => (
              <div key={skill} style={{ background: '#E6F2FA', color: '#043873', borderRadius: 8, padding: '10px 18px', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: '#043873', marginBottom: 16 }}>Soft Skills Needed</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {soft.map(skill => (
              <div key={skill} style={{ background: '#E6F2FA', color: '#043873', borderRadius: 8, padding: '10px 18px', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
