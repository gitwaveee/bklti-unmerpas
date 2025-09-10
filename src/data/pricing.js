export const pricing = [
  {
    name: "Free",
    description: "For individuals & students",
    value: {
      monthly: 0,
      yearly: 0,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "Access to public discussions",
      "Join community Q&A sessions",
      "Basic consultation (text only)",
      "Learning resources & articles",
    ],
    button: {
      label: "Get started",
      href: "#",
      color: "light",
      icon: "tabler:arrow-right",
    },
  },
  {
    name: "Pro",
    description: "For professionals & small teams",
    value: {
      monthly: 15,
      yearly: 12,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "All Free features",
      "1-on-1 consultation with IT experts",
      "Access to exclusive webinars & guides",
      "Customizable consultation topics",
    ],
    button: {
      label: "Start free trial",
      href: "#",
      icon: "tabler:rocket",
    },
  },
  {
    name: "Enterprise",
    description: "For companies & organizations",
    value: {
      monthly: 29,
      yearly: 24,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Tailored IT solutions & strategy",
      "Data import & export",
    ],
    button: {
      label: "Contact sales",
      href: "#",
      color: "light",
      icon: "tabler:mail",
    },
  },
];
