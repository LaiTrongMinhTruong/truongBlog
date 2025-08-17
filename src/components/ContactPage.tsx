import avatar from "../assets/avatarContact.png";
import { Button } from "./ui/button";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 pb-30 pt-15">
      <div>
        <img
          src={avatar}
          alt="Lai Trong Minh Truong"
          className="rounded-full"
        />
      </div>
      <h3 className="text-3xl font-bold lowercase">Contact Me Now</h3>
      <p className="text-md font-light text-center">
        Contact me to get started with growing your business online
      </p>
      <Button className="hover:underline" variant="outline" >
        <a href="https://minh-truong-cv.vercel.app/contact" target="_blank" rel="noopener noreferrer">
          Click here for contact info and my CV
        </a>
      </Button>
    </div>
  );
};

export default ContactPage;
