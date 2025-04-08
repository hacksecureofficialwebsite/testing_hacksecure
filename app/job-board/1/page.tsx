'use client';

import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar'; // Ensure path is correct
import Footer from '../../components/Footer'; // Ensure path is correct

// Styled components for the page layout
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures full viewport height */
  background-color: #121212;
  color: white;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  flex: 1; /* Takes remaining space, pushing footer down */
  padding: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
`;

const JobInfo = styled.div`
  margin-bottom: 20px;
`;

const JobTitle = styled.h2`
  font-size: 2rem;
  color: #f0f0f0;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  color: #bbb;
`;

const Description = styled.div`
  margin-bottom: 40px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PointsList = styled.ol`
  list-style-type: none;
  counter-reset: item;
  padding-left: 0;
`;

const Point = styled.li`
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
  counter-increment: item;

  &:before {
    content: counter(item) ".";
    position: absolute;
    left: 0;
    color: #ff5722;
    font-weight: bold;
  }
`;

const PointTitle = styled.strong`
  color: #ff5722;
  display: block;
  margin-bottom: 5px;
`;

const PointDescription = styled.p`
  color: #bbb;
  margin: 0;
`;

const ApplyContainer = styled.div`
  margin-top: 30px;
`;

const ApplyButton = styled.a`
  background-color: #ff5722;
  color: white;
  font-size: 1.2rem;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const JobDescriptionPage = () => {
  return (
    <PageWrapper>
      {/* Include Navbar */}
      <Navbar />

      {/* Main Content */}
      <MainContent>
        {/* Job Image */}
        <ImageContainer>
          <Image src="/hacksec_logo.jpeg" alt="Job Image" />
        </ImageContainer>

        {/* Job Title and Company */}
        <JobInfo>
          <JobTitle><strong>Volunteer Opportunity</strong></JobTitle>
          <CompanyName><strong>Hack Secure</strong></CompanyName>
        </JobInfo>

        {/* Job Description */}
        <Description>
          <p>
            Join HackSecure as a Volunteer
          </p>
          <p>
            Step into the world of cybersecurity with HackSecure. We're inviting passionate individuals to join us as volunteers and contribute to real-world cybersecurity initiatives.
          </p>
          
          <PointsList>
            <Point>
              <PointTitle>Official Offer Letter</PointTitle>
              <PointDescription>Formal acknowledgment of your role at HackSecure.</PointDescription>
            </Point>
            <Point>
              <PointTitle>Certificate of Experience</PointTitle>
              <PointDescription>Showcase your contribution with a verified certificate.</PointDescription>
            </Point>
            <Point>
              <PointTitle>Hands-On Learning</PointTitle>
              <PointDescription>Gain real-world exposure through live projects, CTFs, and research tasks.</PointDescription>
            </Point>
            <Point>
              <PointTitle>Work with Experts</PointTitle>
              <PointDescription>Collaborate directly with our core team of cybersecurity professionals.</PointDescription>
            </Point>
            <Point>
              <PointTitle>Community Access</PointTitle>
              <PointDescription>Be part of our global network of cybersecurity enthusiasts and professionals.</PointDescription>
            </Point>
          </PointsList>

          <p>
            Make an impact. Learn. Grow. Secure the future — with HackSecure.
          </p>
          <p>
            Apply now and be the change in cybersecurity.
          </p>
        </Description>

        {/* Apply Now Button */}
        <ApplyContainer>
          <ApplyButton href="https://forms.gle/kk4CqePi3bx11dVi7">
            Apply Now
          </ApplyButton>
        </ApplyContainer>
      </MainContent>

      {/* Include Footer */}
      <Footer />
    </PageWrapper>
  );
};

export default JobDescriptionPage;
