import React from "react";
import CertificationCard from "./CertificationCard";
import { certificationData } from "../../data";

type Certification = {
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  expiryDate?: string;
  skills?: string[];
};

type CertificationProps = {
  certifications: Certification[];
};

const Certifications: React.FC<CertificationProps> = ({ certifications }) => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {certifications.map((certification, index) => (
        <CertificationCard key={index} certification={certification} />
      ))}
    </div>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div
      id="Certifications"
      className="page-section section-bg text-base p-5 text-white"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2 className="other-header">Licenses & Certifications</h2>
      </div>
      <Certifications certifications={certificationData} />
    </div>
  );
};

export default MyComponent;
