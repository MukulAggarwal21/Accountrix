import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility function to ensure companyId is available in localStorage
export const ensureCompanyId = async () => {
  const currentCompanyId = localStorage.getItem('companyId');
  const currentRecruiterId = localStorage.getItem('recruiterId');
  
  // If companyId is missing but recruiterId exists, fetch company data
  if (!currentCompanyId && currentRecruiterId) {
    try {
      const response = await fetch(`http://localhost:5000/company/byRecruiter/${currentRecruiterId}`);
      if (response.ok) {
        const data = await response.json();
        if (data && data._id) {
          localStorage.setItem('companyId', data._id);
          console.log('CompanyId fetched and set:', data._id);
          return data._id;
        }
      }
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  }
  
  return currentCompanyId;
};

// Utility function to get companyId with automatic fetching if missing
export const getCompanyId = async () => {
  return await ensureCompanyId();
};

// --- Interview API Utilities ---

export const scheduleInterview = async ({ candidate, job, recruiter, date, time }) => {
  const response = await fetch('http://localhost:5000/interviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ candidate, job, recruiter, date, time })
  });
  if (!response.ok) throw new Error('Failed to schedule interview');
  return await response.json();
};

export const getInterviewsByRecruiter = async (recruiterId) => {
  const response = await fetch(`http://localhost:5000/interviews/byRecruiter/${recruiterId}`);
  if (!response.ok) throw new Error('Failed to fetch interviews');
  return await response.json();
};

