import "./Card.css";
import CardHeader from "./CardHeader";
import CardButton from "./CardButton";
import CardIncludes from "./CardIncludes";
import CardDescription from "./CardDescription";
import CardLink from "./CardLink";

function Card() {
  const includes = [
    {
      id: 1,
      text: "11.5 hours on-demend video",
    },
    {
      id: 2,
      text: "85 downloadable resources",
    },
    {
      id: 3,
      text: "Full lifetime access",
    },
    {
      id: 4,
      text: "Access on mobile and TV",
    },
    {
      id: 5,
      text: "Certificate of Completion",
    },
  ];

  const link = {
    text: "Invite Friend",
    href: "invite-link",
  };

  return (
    <div className="card">
      <CardHeader header="FREE" />
      <CardButton text="Enroll now" />
      <CardIncludes includes={includes} />
      <hr />
      <CardDescription description="Share and earn up to $30 *" />
      <CardLink link={link} />
    </div>
  );
}

export default Card;
