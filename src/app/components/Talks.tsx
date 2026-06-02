import React from "react";
import TalkCard from "./TalkCard";
import { talkData } from "../../data";

type Talk = {
  id: string;
  title: string;
  eventName: string;
  location: string;
  date: string;
  description: string;
  talkImage: string;
  links: {
    slides?: string;
    video?: string;
    eventPage?: string;
  };
  skills?: string[];
};

type TalksListProps = {
  talks: Talk[];
};

const TalksList: React.FC<TalksListProps> = ({ talks }) => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {talks.map((talk) => (
        <TalkCard key={talk.id} talk={talk} />
      ))}
    </div>
  );
};

const Talks: React.FC = () => {
  return (
    <div
      id="Talks"
      className="page-section text-base p-5 text-white"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2 className="other-header">Talks & Sessions</h2>
      </div>
      <TalksList talks={talkData} />
    </div>
  );
};

export default Talks;
