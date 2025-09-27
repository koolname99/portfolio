import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "./../../Navbar";


function Projects() {
  return (

    <Container fluid className="project-section">
      <Navbar />



      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        ></Col>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          My Lastest <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "black", fontSize: "18px" }}>
          Here are projects I've worked on.
        </p>

        <Col md={4} className="project-card">
          <ProjectCard
            title="Easy CSV"
            description="It was developed as part of HackUTA 6 with my talented team members from UT Dallas. Easy CSV is a helper program that uses natural language processing to provide instant answers from CSV data, without requiring any prior knowledge of SQL."
            ghLink="https://devpost.com/software/con-chim-non?ref_content=my-projects-tab&ref_feature=my_projects"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            title="Online Tutoring Web Application"
            description="It was developed as part of the UT Dallas senior design project: a full-stack web application for an online tutoring service. I collaborated with five other engineering students to create this web app, utilizing React for the front end, Node.js for the back end, and MySQL for the database. The app enables tutors to manage their appointments through a calendar, edit their tutor profiles, and cancel any upcoming appointments. Student accounts can book appointments, add favorite tutors, and edit their profiles. The web app also supports cookies to maintain user login, and two-factor authentication adds an extra layer of security for platform users. Lastly, it supports email reminders for upcoming appointments for both tutor and student accounts."
            ghLink="https://github.com/kaylambaker/online-tutoring-68"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            title="MoodTunes"
            description="It was developed as part of HackUTD X with my talented team members from UT Dallas and UT San Antonio. MoodTunes is an AI-powered system designed to create a music experience that syncs perfectly with your emotions while driving. MoodTunes analyzes your facial expressions in real-time, detecting your mood and emotions. Then, it intelligently selects and plays music that matches your current state of mind. Your data will be processed on device, so nothing is being uploaded to the cloud!"
            ghLink="https://devpost.com/software/moodtunes-saq3b4"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            title="DiaryAI"
            description="We developed as part of HackSMU V with my talented team members from UT Dallas. DiaryAI is an innovative solution designed to simplify your cluttered digital life. This application quickly retrieves search keywords and information from hundreds of files on your computer, delivering results within seconds. Also, DiaryAI can summarize information from various file types including PDFs, CSVs, TXT, and Markdown files."
            ghLink="https://devpost.com/software/diaryai?fbclid=IwAR1PpJIlSOl4FSVH97oVLnxeQB-cB4UngkyFF2LtvG70Lvv1kDPosx57HfE"
          />
        </Col>

      </Row>

    </Container>
  );
}

export default Projects;