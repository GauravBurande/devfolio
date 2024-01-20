import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqList = [
  {
    "question": "How do I index more than 200 pages per day?",
    "answer": "To index more pages, upgrade to a plan with a higher limit. Whether you have multiple sites or a massive one, a higher quota speeds up your progress."
  },
  {
    "question": "How can I add new sitemaps?",
    "answer": "To add a new sitemap, go to the Manage Sites page and sync your site with GSC. It's an easy step to enhance your IndexerPro experience."
  },
  {
    "question": "How do I add new sites?",
    "answer": "To add new websites, use the Manage Sites page. Just ensure your account has GSC access – it's a simple process."
  },
  {
    "question": "How does IndexerPro index pages?",
    "answer": "IndexerPro uses the official Google Indexing API to swiftly index your pages. No secrets, just a reliable method designed for this purpose."
  },
  {
    "question": "How long does it take to index pages?",
    "answer": "Wondering how long it takes? IndexerPro accelerates the process. While not instant, it's designed to make your anxious wait shorter."
  },
  {
    "question": "When will indexed pages appear in GSC?",
    "answer": "After submitting pages for indexing, be patient. Results won't instantly appear on GSC's indexing report due to a slight delay in updating."
  },
  {
    "question": "Why do you need Owner permissions?",
    "answer": "We know requesting Owner permissions may seem intrusive. Rest assured, it helps integrate your unique IndexerPro service account with Google Search Console for a seamless experience."
  },
]

const Item = ({ item }) => {

  return (
    <AccordionItem value={item}>
      <AccordionTrigger>{item?.question}</AccordionTrigger>
      <AccordionContent>
        {item?.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">any questions?</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
