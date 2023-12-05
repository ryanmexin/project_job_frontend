import React, { useState, useEffect } from "react";
import "./Main.css";
import JobCard from "../JobCard/JobCard";
import Preloader from "../Preloader/Preloader";


const Main = ({ jobsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [loading, setLoading] = useState(true);


  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  useEffect(() => {
   // Set filteredJobs to the initial jobsData when the component mounts
   setFilteredJobs(jobsData);
   setLoading(false);
 }, [jobsData]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    const query = searchQuery.toLowerCase();
    setLoading(true); // Set loading to true when starting a new search

    setTimeout(() => {
      const newFilteredJobs = jobsData.filter((job) => {
        const jobNameMatch = job.jobName.toLowerCase().includes(query);
        const companyNameMatch = job.companyName.toLowerCase().includes(query);
        const publicationDate = new Date(job.jobPublicationDate);

        // Format publicationDate to match the "May" part of the date string
        const formattedDate = publicationDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
  
  
        const dateMatch = formattedDate.toLowerCase().includes(query);
  
  
        return jobNameMatch || companyNameMatch || dateMatch;
      });
  

      setFilteredJobs(newFilteredJobs);
      setLoading(false); // Set loading to false when the search is complete
    }, 1000); // Adjust the timeout as needed (simulate loading delay)
  };


  const handleResetClick = () => {
    console.log("Reset Clicked")
    setSearchQuery("");
    setFilteredJobs(jobsData);
  };

  return (
    <div className="main">
    <h2 className="main__title">Job List - {formattedDate}</h2>
    <div className="search_bar">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar__input"
      />
      <div className="search-bar__buttons">
        <button onClick={handleSearchClick} className="search-bar__button">
          Go
        </button>
        <button onClick={handleResetClick} className="search-bar__button">
          Reset
        </button>
      </div>
    </div>
    {loading ? (
      <Preloader /> // Show the preloader while data is loading
    ) : (
      <div className="card_items">
        {filteredJobs.map((job) => (
          <JobCard key={job.jobId} data={job} />
        ))}
      </div>
    )}
  </div>
);
};

export default Main;