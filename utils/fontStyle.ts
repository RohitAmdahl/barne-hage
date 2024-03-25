import { Schoolbell } from "next/font/google";

const schoolFont = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-school",
});

// Export the constant variable
export default schoolFont;
