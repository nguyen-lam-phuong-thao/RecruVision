import { type JSX, useState } from 'react'
import { Briefcase, Building2, Info, Pencil, Speech, X } from 'lucide-react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import * as Dialog from '@radix-ui/react-dialog';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';

interface CareerGoal {
    title: string
    targetTitle: string
    targetDate: string
    salaryMin: number
    salaryMax: number
    currency: string
}

const CAREER_GOAL_OPTIONS = [
    'Land a new job in the same career path',
    'A fresh start',
    'Career advancement',
    'Industry switch',
    'Entrepreneurship',
    'Remote work transition'
]

const CURRENCY_OPTIONS = [
    { label: 'Vietnamese Dong (₫)', value: 'VND' },
    { label: 'US Dollar ($)', value: 'USD' },
    { label: 'Euro (€)', value: 'EUR' },
    { label: 'British Pound (£)', value: 'GBP' },
    { label: 'Japanese Yen (¥)', value: 'JPY' },
    { label: 'Singapore Dollar (S$)', value: 'SGD' }
]

export const DashboardHome = (): JSX.Element => {
  const [goal, setGoal] = useState(5);
  const [applications] = useState(3);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isWeeklyGoalDialogOpen, setIsWeeklyGoalDialogOpen] = useState(false);
  const [inputGoal, setInputGoal] = useState(goal.toString());
  const [careerGoal, setCareerGoal] = useState<CareerGoal>({
    title: 'Land a new job in the same career path',
    targetTitle: 'Land a new job with desired offer',
    targetDate: 'April 2025',
    salaryMin: 10000000,
    salaryMax: 25000000,
    currency: 'VND'
  });
  const [tempCareerGoal, setTempCareerGoal] = useState<CareerGoal>(careerGoal);

  const handleOpenEditGoalsDialog = () => {
    setTempCareerGoal(careerGoal);
    setIsEditDialogOpen(true);
  };

  const handleOpenWeeklyGoalDialog = () => {
    setIsWeeklyGoalDialogOpen(true);
  };

  const handleCloseEditGoalsDialog = () => {
    setIsEditDialogOpen(false);
  };

  const handleCloseWeeklyGoalDialog = () => {
    setIsWeeklyGoalDialogOpen(false);
  };

  const handleSaveCareerGoals = () => {
    setCareerGoal(tempCareerGoal);
    toast.success('Career goals updated successfully');
    handleCloseEditGoalsDialog();
  };

  const handleSaveWeeklyGoal = () => {
    const num = parseInt(inputGoal, 10);
    if (!isNaN(num) && num > 0) {
      setGoal(num);
      handleCloseWeeklyGoalDialog();
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(amount);
  };

  return (
    <>
      <div className='grid grid-cols-12 gap-4 p-4'>
        <div className='col-span-9'>
          <div className='flex flex-col gap-4'>
            <div className='next-career-goal-card border border-gray-200 p-4 rounded-lg'>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Next Career Goal: {careerGoal.title}</h1>
                <div className='flex items-center gap-2'>
                  <Dialog.Root open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                    <Dialog.Trigger asChild>
                      <div className='flex items-center gap-2 cursor-pointer' onClick={handleOpenEditGoalsDialog}>
                        <Pencil className='w-4 h-4 text-[#4F9CF9]' />
                        <p className='text-[#4F9CF9] text-sm'>Edit Goals</p>
                      </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <Dialog.Title className="text-xl font-semibold text-gray-900">
                            Edit Career Goals
                          </Dialog.Title>
                          <Dialog.Close className="text-gray-500 hover:text-gray-700" onClick={handleCloseEditGoalsDialog}>
                            <X className="w-5 h-5" />
                          </Dialog.Close>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Career Goal
                            </label>
                            <select
                              value={tempCareerGoal.title}
                              onChange={(e) => setTempCareerGoal(prev => ({ ...prev, title: e.target.value }))}
                              className="w-full p-2 border border-gray-300 rounded-md"
                            >
                              {CAREER_GOAL_OPTIONS.map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Target Title
                            </label>
                            <input
                              type="text"
                              value={tempCareerGoal.targetTitle}
                              onChange={(e) => setTempCareerGoal(prev => ({ ...prev, targetTitle: e.target.value }))}
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Enter target title"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Target Date
                            </label>
                            <DatePicker
                              value={dayjs(tempCareerGoal.targetDate, 'DD MMMM YYYY')}
                              onChange={(date: Dayjs | null) => {
                                if (date) {
                                  setTempCareerGoal(prev => ({
                                    ...prev,
                                    targetDate: date.format('DD MMMM YYYY')
                                  }))
                                }
                              }}
                              picker="date"
                              className="w-full"
                              format="DD MMMM YYYY"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Minimum Salary
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  value={tempCareerGoal.salaryMin}
                                  onChange={(e) => setTempCareerGoal(prev => ({ ...prev, salaryMin: Number(e.target.value) }))}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                  min="0"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                                  <button
                                    onClick={() => setTempCareerGoal(prev => ({ ...prev, salaryMin: prev.salaryMin + 1000000 }))}
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    ▲
                                  </button>
                                  <button
                                    onClick={() => setTempCareerGoal(prev => ({ ...prev, salaryMin: Math.max(0, prev.salaryMin - 1000000) }))}
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    ▼
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Maximum Salary
                              </label>
                              <div className="relative">
                                <input
                                  type="number"
                                  value={tempCareerGoal.salaryMax}
                                  onChange={(e) => setTempCareerGoal(prev => ({ ...prev, salaryMax: Number(e.target.value) }))}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                  min="0"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                                  <button
                                    onClick={() => setTempCareerGoal(prev => ({ ...prev, salaryMax: prev.salaryMax + 1000000 }))}
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    ▲
                                  </button>
                                  <button
                                    onClick={() => setTempCareerGoal(prev => ({ ...prev, salaryMax: Math.max(0, prev.salaryMax - 1000000) }))}
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    ▼
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Currency
                            </label>
                            <select
                              value={tempCareerGoal.currency}
                              onChange={(e) => setTempCareerGoal(prev => ({ ...prev, currency: e.target.value }))}
                              className="w-full p-2 border border-gray-300 rounded-md"
                            >
                              {CURRENCY_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                          <button
                            onClick={handleCloseEditGoalsDialog}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveCareerGoals}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                          >
                            Save Changes
                          </button>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                </div>
              </div>
              <div className='flex items-center gap-2 justify-between'>
                <div>
                  <p className='text-sm text-gray-500'>Target Title</p>
                  <p className='font-bold'>{careerGoal.targetTitle}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Target Date</p>
                  <p className='font-bold'>{careerGoal.targetDate}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Target Salary Range</p>
                  <p className='font-bold'>
                    {formatCurrency(careerGoal.salaryMin, careerGoal.currency)} to {formatCurrency(careerGoal.salaryMax, careerGoal.currency)}
                  </p>
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
                  <Dialog.Root open={isWeeklyGoalDialogOpen} onOpenChange={setIsWeeklyGoalDialogOpen}>
                    <Dialog.Trigger asChild>
                      <button onClick={handleOpenWeeklyGoalDialog} className='focus:outline-none'>
                        <Pencil className='w-4 h-4 text-[var(--color-secondary)]' />
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30" />
                      <Dialog.Content className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-2xl p-8 flex flex-col gap-4 focus:outline-none">
                        <Dialog.Title className='text-xl font-bold text-[#043873] mb-2'>Set Weekly Application Goal</Dialog.Title>
                        <Dialog.Description className='text-gray-700 mb-2'>Set a goal on the number of applications you would like to send weekly (Monday-Sunday).</Dialog.Description>
                        <input
                          type='number'
                          min={1}
                          value={inputGoal}
                          onChange={e => setInputGoal(e.target.value)}
                          className='border border-[#4F9CF9] rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#4F9CF9]'
                        />
                        <div className='flex gap-4 justify-end mt-2'>
                          <Dialog.Close asChild>
                            <button onClick={handleCloseWeeklyGoalDialog} className='px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold'>Cancel</button>
                          </Dialog.Close>
                          <button onClick={handleSaveWeeklyGoal} className='px-4 py-2 rounded-md bg-[#4F9CF9] text-white font-semibold'>OK</button>
                        </div>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
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
                    value={(applications / goal) * 100}
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
                      {applications}
                    </Typography>
                    <Typography variant="caption" component="div" color="text.secondary" sx={{ mt: 0.5 }}>
                      applications sent
                    </Typography>
                  </Box>
                </Box>
                <p className='text-center text-sm bg-[var(--color-primary)] text-white rounded-full px-2 py-1 w-fit mx-auto mt-2'>Goal: {goal}</p>
                <p className='text-center text-sm'>Set a goal on the number of applications you would like to send weekly (Monday-Sunday).</p>
                {applications >= goal && <p className='text-center text-sm text-green-600 mt-1'>You achieved your weekly goal 🎉</p>}
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
    </>
  );
}
