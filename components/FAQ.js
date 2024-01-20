import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's in the free version for my awesome portfolio?",
    answer: "In the free version, you get a killer portfolio page, export options like PDF and Word, a sleek portfolio editor, and access to our Discord community for vibes and feedback."
  },
  {
    question: "Is free hosting on a cool subdomain available?",
    answer: "Absolutely! With upcoming features, you might even get a chance to host on a rad subdomain for that extra cool factor."
  },
  {
    question: "Will I know who's checking out my portfolio with analytics?",
    answer: "Totally! The idea of adding analytics is on the table, and I'm totally open to it if that's what the community wants."
  },
  {
    question: "Can I customize my portfolio's appearance?",
    answer: "For sure! Customization features are in the pipeline. I'm all ears for ideas on how you'd like to make your portfolio stand out."
  },
  {
    question: "Can I get a custom domain for my portfolio?",
    answer: "Absolutely! If there's a demand for custom domains, it's definitely something I'm considering for the future. Let me know if you're into it!"
  },
  {
    question: "Are there any plans for unique templates?",
    answer: "Absolutely! If users are vibing with the idea of unique templates, that's something I'm down to explore and create. Let me know your thoughts!"
  },
  {
    question: "How can I show support for these potential features?",
    answer: "Just hop on our Discord community and share your thoughts! Your feedback will guide the direction of future features and improvements."
  },
  {
    question: "Can I upgrade to premium whenever I want?",
    answer: "Totally! Premium features will only be built if users are excited about them. If there's demand, I'll make it happen. Your call!"
  }
];


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
          {faqs.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
