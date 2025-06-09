import { type JSX } from 'react'
import { Briefcase, Building2, Info, Pencil, Speech } from 'lucide-react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const DashboardHome = (): JSX.Element => {
  return (
    <div className='grid grid-cols-12 gap-4 p-4'>
      <div className='col-span-9'>
        <div className='flex flex-col gap-4'>
          <div className='next-career-goal-card border border-gray-200 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-2xl font-bold'>Next Career Goal: Land a new job in the same career path</h1>
              <div className='flex items-center gap-2'>
                <Pencil className='w-4 h-4 text-[#4F9CF9]' />
                <p className='text-[#4F9CF9] cursor-pointer text-sm'>Edit Goals</p>
              </div>
            </div>
            <div className='flex items-center gap-2 justify-between'>
              <div>
                <p className='text-sm text-gray-500'>Target Title </p>
                <p className='font-bold'>Land a new job with desired offer</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Target Date </p>
                <p className='font-bold'>April 2025</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Target Salary Range </p>
                <p className='font-bold'>10.000.000 ₫ to 25.000.000 ₫</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='job-applications-card border border-gray-200 p-4 flex-1 rounded-lg'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-2'>
                  <h1 className='text-xl font-bold'>Job Applications</h1>
                  <Info className='w-4 h-4 text-[var(--color-primary)]' />
                </div>
                <Pencil className='w-4 h-4 text-[var(--color-secondary)]' />
              </div>
              <Box sx={{ position: 'relative', display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={120}
                  thickness={6}
                  sx={{ color: '#E5E7EB', position: 'absolute' }}
                />
                <CircularProgress
                  variant="determinate"
                  value={(3 / 5) * 100}
                  size={120}
                  thickness={6}
                  sx={{ color: 'var(--color-secondary)' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" component="div" color="text.secondary">
                    {3}
                  </Typography>
                  <Typography variant="caption" component="div" color="text.secondary" sx={{ mt: 0.5 }}>
                    applications sent
                  </Typography>
                </Box>
              </Box>
              <p className='text-center text-sm bg-[var(--color-primary)] text-white rounded-full px-2 py-1 w-fit mx-auto mt-2'>Goal: 5</p>
              <p className='text-center text-sm'>You achieved your weekly goal 🎉</p>
            </div>
            <div className='job-search-pipeline-card border border-gray-200 p-4 flex-1 rounded-lg'>
              <h1 className='text-xl font-bold'>Job Search Pipeline</h1>
              <p className='text-sm text-gray-500'>Displaying results: 03/18/2025 - 06/05/2025</p>
              <div style={{ width: '100%', height: 220, marginTop: 24 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { name: 'Bookmarked', value: 7, percent: 43 },
                      { name: 'Applied', value: 3, percent: 29 },
                      { name: 'Interviewing', value: 2, percent: 14 },
                      { name: 'Negotiating', value: 1, percent: 14 },
                    ]}
                    margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
                    barCategoryGap={18}
                  >
                    <XAxis type="number" hide domain={[0, 7]} />
                    <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={110} />
                    <Tooltip
                      cursor={{ fill: '#e3f0ff' }}
                      contentStyle={{ background: '#fff', border: '1px solid #4F9CF9', borderRadius: 8, color: '#043873' }}
                      formatter={(value) => [`${value}`, 'Count']}
                    />
                    <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                      <LabelList dataKey="value" position="right" fill="#043873" fontWeight={700} />
                      {['#b6d6f6', '#5b9cf9', '#1976d2', '#043873'].map((color, idx) => (
                        <Cell key={idx} fill={color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='priorities-card border border-gray-200 p-4 rounded-lg'>
            <h1 className='text-xl font-bold text-start mb-4'>Priorities</h1>
            <div className='priority-item-1 border border-gray-100 rounded-sm p-4 mb-4'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='flex items-center gap-4'>
                  <Briefcase color="#4f9cf9" className='w-6 h-6' />
                  <div className='flex flex-col'>
                    <h2 className='text-base font-bold text-gray-800'>Update Resume with Recent Projects</h2>
                    <p className='text-sm text-gray-500'>Due March 25, 2025</p>
                  </div>
                </div>
                <h3 className='text-sm text-[var(--color-secondary)] bg-sky-100 rounded-full px-2 py-1'>High Priority</h3>
              </div>
            </div>
            <div className='priority-item-2 border border-gray-100 rounded-sm p-4 mb-4'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='flex items-center gap-4'>
                  <Building2 color="#4f9cf9" className='w-6 h-6' />
                  <div className='flex flex-col'>
                    <h2 className='text-base font-bold text-gray-800'>Research Target Companies</h2>
                    <p className='text-sm text-gray-500'>Due March 28, 2025</p>
                  </div>
                </div>
                <h3 className='text-sm text-[var(--color-secondary)] bg-sky-100 rounded-full px-2 py-1'>Medium Priority</h3>
              </div>
            </div>
            <div className='priority-item-3 border border-gray-100 rounded-sm p-4 mb-4'>
              <div className='flex items-center gap-2 justify-between'>
                <div className='flex items-center gap-4'>
                  <Speech color="#4f9cf9" className='w-6 h-6' />
                  <div className='flex flex-col'>
                    <h2 className='text-base font-bold text-gray-800'>Schedule Mock Interview</h2>
                    <p className='text-sm text-gray-500'>Due April 1, 2025</p>
                  </div>
                </div>
                <h3 className='text-sm text-[var(--color-secondary)] bg-sky-100 rounded-full px-2 py-1'>Low Priority</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ width: '100%' }} />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  )
}
