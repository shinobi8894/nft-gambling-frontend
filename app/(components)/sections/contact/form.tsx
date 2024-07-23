import Email from "@/components/basic/icons/email";
import Telegram from "@/components/basic/icons/telegram";
import TextInput from "@/components/basic/input";

const ContactForm: React.FC = () => (
  <form className="w-full max-w-[620px]">
    <div className="flex gap-2 mb-2 w-full">
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" icon={Email} />
    </div>
    <textarea
      rows={10}
      placeholder="Message"
      className="border border-border mb-5 outline-none bg-main w-full rounded-md text-white pl-2 pt-2"
    />
    <button className="h-input w-full md:w-fit rounded-md flex gap-2 items-center bg-primary text-white pl-5 pr-5">
      <span>Send Message</span>
      <Telegram />
    </button>
  </form>
);

export default ContactForm;
