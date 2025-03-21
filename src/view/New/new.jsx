import React from 'react';
import Overview from './Overview/Overview';
import ServicesSolutions from './ServicesSolutions/ServicesSolutions';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import NewsEvents from './NewsEvents/NewsEvents';
import CertAwards from './CertAwards/CertAwards';
import './new.css'; // Import file CSS chứa class .new-bg

const New = () => {
  return (
    <div className="new-bg">
      <Overview />
      <ServicesSolutions />
      <ProjectsSection />
      <NewsEvents />
      <CertAwards />
    </div>
  );
};

export default New;
