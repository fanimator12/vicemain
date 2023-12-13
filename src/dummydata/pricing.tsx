import { ButtonProps } from "@mui/material";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant: ButtonProps["variant"];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "Free*",
    features: [
      "Up to 5 PDF uploads/month",
      "Basic maintenance plans",
      "Standard calendar",
      "Email notifications",
      "Email support",
    ],
    buttonText: "Try Now",
    buttonVariant: "outlined",
  },
  {
    name: "Standard",
    price: "DKK 599",
    features: [
      "Up to 30 PDF uploads/month",
      "Detailed maintenance plans",
      "Enhanced calendar features",
      "SMS & Email alerts",
      "Priority support & basic analytics",
    ],
    buttonText: "Subscribe",
    buttonVariant: "contained",
  },
  {
    name: "Premium",
    price: "Custom",
    features: [
      "Unlimited PDF uploads",
      "Customized maintenance plans",
      "Interactive, shareable calendar",
      "Multi-channel notifications",
      "24/7 support & advanced analytics",
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined",
  },
];

export default pricingPlans;