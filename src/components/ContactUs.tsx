import React from "react";
import Header from "./Header";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
function ContactUs() {
  return (
    <div>
      <section className="md:p-10 mt-6 md:mt-0" id="contact-us">
        <div className="relative flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="py-5 text-sm">
            Have a question or feedback? We'd love to hear from you
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <h3>Name</h3>
              <Input className="w-[500px]" />
            </div>
            <div>
              <h3>Email</h3>
              <Input className="w-[500px]" />
            </div>
            <div>
              <h3>Message</h3>
              <Textarea className="w-[500px]" />
            </div>
            <div>
              <Checkbox /> <span>I Agree the Terms</span>
            </div>
            <Button className="w-fit">Submit</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
