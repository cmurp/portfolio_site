import { Form } from "react-router-dom";

interface contact {
    first: string;
    last: string;
    avatar: string;
    twitter: string;
    notes: string;
    favorite: boolean;
}

interface FavoriteProps {
    contact: contact;
}

export default function Contact() {
  const contact: contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <>HELLO THERE</>
  );
}