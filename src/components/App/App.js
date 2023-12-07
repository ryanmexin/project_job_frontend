import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import SignUpModal from "../SignUpModal/SignUpModal";
import { getJobs } from "../../utils/Api";
import { Route, Routes } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";
import About from "../About/About";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [jobsData, setJobsData] = useState([]);

  const openSignUpModal = () => {
    console.log("SignUp button clicked");
    setActiveModal("signup");
  };

  const openSignInModal = () => {
    console.log("SignIn clicked button");
    setActiveModal("signin");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    // Fetch jobs data when the component mounts
    getJobs()
      .then((data) => {
        console.log("Jobs data received:", data);
        // data.results is an array of jobs
        const processedData = data.results.map((job) => ({
          jobId: job.id,
          companyName: job.company.name,
          jobName: job.name,
          link: job.refs.landing_page,
          jobPublicationDate: job.publication_date,
          
        }
        ));

        setJobsData(processedData);
        console.log(processedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <Header onClickSignUp={openSignUpModal} onClickSignIn={openSignInModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              jobsData={jobsData}
            />
          }
        />
        <Route path="/about" element={<About />} /> {/* Route for the About component */}
      </Routes>
      <Footer />
      {activeModal === "signup" && (
        <SignUpModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "signup"}
          onClickSignIn={openSignInModal}
          
        />
      )}
      {activeModal === "signin" && (
        <SignInModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "signin"}
          onClickSignUp={openSignUpModal}
          
        />
      )}
    </div>
  
  );
}

export default App;
