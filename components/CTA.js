// import ButtonLead from "./ButtonLead";
import ButtonSignin from "./ButtonSignin";

const CTA = () => {
  return (
    <section className="overflow-hidden bg-accent py-10 flex flex-col items-center">
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-4xl p-8 md:p-0">
          <h2 className="font-bold text-3xl leading-normal md:leading-relaxed md:text-5xl tracking-tight mb-8 md:mb-12">
            Craft a standout presence for your portfolio!
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Stop procrastinating and get your own portfolio. Your portfolio&apos;s landing page is gonna look mad cool—bet you&apos;re gonna love it for sure!
          </p>

          <ButtonSignin text="Get started" />
          {/* <ButtonLead /> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
