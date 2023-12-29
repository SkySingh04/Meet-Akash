import React from "react";
import AchievementCard from "./AcheivementCard"
import {achievementData} from "../../data";

type Achievement = {
  title: string;
  organization: string;
  date: string;
};
type AchievementProps = {
  achievements: Achievement[];
};

const Achievements: React.FC<AchievementProps> = ({ achievements }) => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {achievements.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} />
      ))}
    </div>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 p-4 " data-aos="fade-up" id="Achievements">
      <div className="section-title">
        <h2 className="other-header">Achievements</h2>
      </div>
      <Achievements achievements={achievementData} />
    </div>
  );
};

export default MyComponent;
