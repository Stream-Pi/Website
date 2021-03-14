import * as yup from "yup";
import type { IconObj } from "@util/Types";

export type LabelProps = IconObj & {
  label: string;
  subtext?: string;
};

// const regex = /(((http|https|ftp|ftps)\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/gm
export const regex = /(((http|https|ftp|ftps|sftp):\/\/)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?)/i;
export const sKey = "6LeW0r0UAAAAAKlB50lc_4pFxwDWDMBhXPrz5lKU";
export const validSubjects = [
  "Press",
  "Feedback",
  "Feature Request",
  "Contributing",
  "Other",
];

export const schema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .test(
      "from-streampi",
      "Emails can not come from stream-pi",
      (val) => /@stream-pi\.[A-Z0-9]+/i.test(val) === false
    )
    .required(),
  subject: yup.string().oneOf(validSubjects).required(),
  message: yup
    .string()
    .test(
      "has-link",
      "Email cannot contain any links",
      (val) => regex.test(val) === false
    )
    .required(),
});
