import ButtonLead from "./ButtonLead";
// import ButtonSignin from "./ButtonSignin";

const CTA = () => {
  return (
    <section className="overflow-hidden py-10 flex flex-col items-center">
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Unlock 10x More Website Traffic!
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Experience rapid indexing, effortlessly track status, and witness a surge in traffic. Join now and take the fast lane to Google&apos;s search results.
          </p>

          {/* <ButtonSignin text="start indexing" /> */}
          <ButtonLead />
        </div>
      </div>
    </section>
  );
};

export default CTA;
