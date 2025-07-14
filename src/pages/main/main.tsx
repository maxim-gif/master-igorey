import "./main.scss";
import { ParticipantCard } from "../../components/ParticipantCard/ParticipantCard";
export const Main = () => {
  return (
    <div className="homepage-wrapper">
        <div className="cards-wrapper">
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
            <ParticipantCard />
        </div>
    </div>
  );
};