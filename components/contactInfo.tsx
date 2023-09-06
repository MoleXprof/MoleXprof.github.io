import { classnames } from "../utils";

type ContactInfoProps = {
  title: string;
  subtitle?: string;
  colour: string;
  contact: any;
  contactOther: any;
};

const ContactInfo = ({
  title,
  subtitle,
  colour,
  contact,
  contactOther,
}: ContactInfoProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 my-24 md:my-32">
        <div>
          <h2 className="font-bold md:text-5xl text-3xl">{title}</h2>
          <h3 className="md:text-2xl text-lg font-light">{subtitle}</h3>
          <div className={classnames(colour, "mt-2 md:h-3 h-2 md:w-20 w-16")} />
        </div>
        <div className="font-light text-sm md:text-lg">{contact}</div>
        <div className="font-light text-sm md:text-lg">{contactOther}</div>
      </div>
    </div>
  );
};

export default ContactInfo;
