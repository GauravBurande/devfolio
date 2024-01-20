const config = {
  appName: "DevFolio",
  // a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Beautiful and minimalisic simple one page portfolio for developers",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "devfolio.vercel.app",
  supportEmail: "gaurav@indexerpro.com",
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Free",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Because we are just getting started!",
        // The price you want to display, the one user will be charged on Stripe.
        price: 0,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 25,
        featureTitle: "What's included",
        features: [
          { name: "beautiful looking page for your portfolio", },
          { name: "Export it in various formats (PDF, Word, etc.)." },
          { name: "Portfolio Editor" },
          { name: "Discord Community" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Pro",
        description: "If you want it, I'll sure build it!",
        price: 9,
        priceAnchor: 25,
        featureTitle: "What's coming",
        features: [
          {
            name: "Free hosting on subdomain",
          },
          { name: "Analytics" },
          { name: "Appearance Customization" },
          { name: "Custom Domain" },
          { name: "Templates" },
        ],
      },
    ],
  },
  colors: {
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..).
    main: "#22C55E",
  },
  auth: {
    loginUrl: "/auth/sign-in",
    callbackUrl: "/dashboard",
  },
};

export default config;
