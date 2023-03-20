

import { SectionHints } from "./types";

const ContactHints: SectionHints = {
  title: "Improve your contact information",
  content: [
    {
      type: "p",
      body: "Having relevant contact info helps recruiters and your referrers to contact you and fill out the referral form respectively."
    },
    {
      type: "p",
      body: "You can add multiple contact details and choose which one to display on your resume. The most common ones are -"
    },
    {
      type: "ul",
      body: ["Email", "Phone", "LinkedIn"]
    },
    {
      type: "p",
      body: "With Resuminator, you can also add your personal website and social media handles like Twitter, LeetCode, GitHub, etc."
    }
  ]
};

export default ContactHints;
