import {
  Analytics,
  Build,
  CalendarToday,
  Description,
  Notifications,
  SupportAgent,
} from "@mui/icons-material";

const features = [
  {
    icon: <Description />,
    title: "PDF Uploads",
    description:
      "Upload detailed PDFs of your construction projects effortlessly.",
  },
  {
    icon: <Build />,
    title: "Maintenance Plans",
    description:
      "Our system intelligently generates a comprehensive maintenance plan from your PDFs.",
  },
  {
    icon: <CalendarToday />,
    title: "Customized Calendar",
    description:
      "Organize and manage your maintenance tasks with a personalized calendar.",
  },
  {
    icon: <Notifications />,
    title: "Timely Notifications",
    description:
      "Stay informed with alerts for upcoming maintenance tasks, ensuring everything is on track.",
  },
  {
    icon: <Analytics />,
    title: "Project Analytics",
    description:
      "Gain insights into the health and status of your building projects through detailed analytics.",
  },
  {
    icon: <SupportAgent />,
    title: "24/7 Support",
    description:
      "Our dedicated team is always available to assist you with any queries or issues.",
  },
];

export default features;
