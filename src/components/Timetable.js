import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR API ID}&app_key={YOUR API KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
        setJobs(data.results);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>Company: {job.company.display_name}</p>
            <p>Location: {job.location.display_name}</p>
            <p>Salary: {job.salary_min} - {job.salary_max} {job.salary_currency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;