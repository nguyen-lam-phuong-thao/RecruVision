import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useJobs } from '../hooks/useJobs';
import type { Job } from '../hooks/useJobs';

interface JobsContextType {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  addJob: (job: Job) => void;
  updateJob: (index: number, updatedJob: Job) => void;
  deleteJob: (index: number) => void;
  updateJobStatus: (index: number, status: string) => void;
  getJobsByStatus: (status: string) => Job[];
  getJobStatusCounts: () => { [key: string]: number };
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

export const useJobsContext = () => {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error('useJobsContext must be used within a JobsProvider');
  }
  return context;
};

interface JobsProviderProps {
  children: ReactNode;
}

export const JobsProvider: React.FC<JobsProviderProps> = ({ children }) => {
  const jobsData = useJobs();

  return (
    <JobsContext.Provider value={jobsData}>
      {children}
    </JobsContext.Provider>
  );
}; 