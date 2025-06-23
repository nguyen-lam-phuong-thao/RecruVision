import { useState, useEffect } from 'react';

export interface Job {
  position: string;
  company: string;
  minSalary: string;
  maxSalary: string;
  location: string;
  status: string;
  datePosted: string;
  dateSaved: string;
  deadline: string;
  dateApplied: string;
  followUp: string;
  excitement: number;
}

const initialJobs: Job[] = [
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

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : initialJobs;
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job: Job) => {
    setJobs(prev => [...prev, job]);
  };

  const updateJob = (index: number, updatedJob: Job) => {
    setJobs(prev => prev.map((job, i) => i === index ? updatedJob : job));
  };

  const deleteJob = (index: number) => {
    setJobs(prev => prev.filter((_, i) => i !== index));
  };

  const updateJobStatus = (index: number, status: string) => {
    setJobs(prev => prev.map((job, i) => i === index ? { ...job, status } : job));
  };

  const getJobsByStatus = (status: string) => {
    return jobs.filter(job => job.status === status);
  };

  const getJobStatusCounts = () => {
    const statusCounts: { [key: string]: number } = {};
    jobs.forEach(job => {
      statusCounts[job.status] = (statusCounts[job.status] || 0) + 1;
    });
    return statusCounts;
  };

  return {
    jobs,
    setJobs,
    addJob,
    updateJob,
    deleteJob,
    updateJobStatus,
    getJobsByStatus,
    getJobStatusCounts,
  };
}; 