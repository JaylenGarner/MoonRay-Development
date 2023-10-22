"use client";

import { workSans } from "@/lib/fonts";
import { useState } from "react";
import handleEmail from "@/lib/handleEmail";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    const response = await handleEmail(formData);

    if (response) {
      setIsLoading(false);
      setComplete(true);
    }
  };

  return (
    <div className="pt-16">
      <form onSubmit={handleSubmit}>
        <div className={`flex_center flex-col space-y-8 ${workSans.className}`}>
          <input
            type="text"
            placeholder="Name"
            required
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message..."
            required
            className="input resize-none h-[200px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex_center pt-8">
          <button
            type="submit"
            className="bg-[#212121] text-slate-200 p-2 text-xl rounded-md w-[200px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
