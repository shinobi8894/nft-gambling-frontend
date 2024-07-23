interface ContactHeaderProps {}

const ContactHeader: React.FC<ContactHeaderProps> = () => (
  <div className="flex max-w-[420px] flex-col p-2 items-center md:items-start text-white">
    <h1 className="font-bold mb-5 text-primary text-3xl text-center md:text-left lg:text-6xl md:text-5xl sm:text-3xl">
      Send Us A Message
    </h1>
    <p className="mb-5 text-center md:text-left">
      Do you have an enquiry? Send us a message today, our 24/7 customer service
      team are available to respond.
    </p>
  </div>
);

export default ContactHeader;