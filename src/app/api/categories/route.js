import { NextResponse } from "next/server";

let cat_arr = {
    data1: [
      "Software & App Development",
      "Website Development & SEO",
      "Cloud Services",
      "Robotics & Automation",
      "3D Printing & prototyping",
      "Data Science & Analytics",
      "AI & Machine Learning",
      "IOT, AR & VR",
      "Blockchain",
      "Tech Consultancy",
      "Research & Development",
      "View all Services",
    ],
    data2: [
      "eCommerce",
      "Healthcare",
      "Finance",
      "Education",
      "Gaming",
      "Social Networking",
      "Agriculture",
      "Travel & Aviation",
      "Logistics",
      "Restaurant",
      "Real Estate",
      "View all Industries",
    ],
    data3: [
      "About",
      "Tech Stack",
      "Contact Us",
      "Careers",
      "Webinars",
      "Terms & Conditions",
      "Privacy Policy",
      "Legal Information",
      "Blog",
      "Stories",
      "Youtube (@xzect_labs)",
      "Github (@xzect)",
    ],
  }

export async function GET() {
  return NextResponse.json(cat_arr);
}
