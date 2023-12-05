import React from "react";
import "./JobCard.css";


const JobCard = ({data}) => {
  console.log(data)

   // Convert the publication date string to a Date object
   const publicationDate = new Date(data.jobPublicationDate);

   // Options for formatting the date
   const dateOptions = {
     year: "numeric",
     month: "long",
     day: "numeric",
   };
 
   // Format the date using the options
   const formattedDate = publicationDate.toLocaleDateString(undefined, dateOptions);
 



    return (
    <div className="card">
       <div className="card__info">
         <span className="card__name">{data.companyName}</span>
         <span>{data.jobName}</span>
         <span>Job publication date {formattedDate}</span>
         <a href={data.link} target="_blank" rel="noopener noreferrer">
            Job Link Website
          </a>
       </div>
    </div>
    );
  };
  
  export default JobCard;
  