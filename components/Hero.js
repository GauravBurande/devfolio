import ButtonSignin from "./ButtonSignin";
import { Manrope } from "next/font/google"

const font = Manrope({
  subsets: ["greek"],
});

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url(/graphic.webp)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 pt-10 md:pt-20 relative  md:max-w-2xl lg:max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-row items-center justify-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /></svg>
            <span className="uppercase font-semibold text-foreground/90 text-xs md:text-base">minimalistic + beautiful</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
          </div>
          <div className="relative flex flex-row items-center text-center justify-center space-x-2">
            <h1 className={`font-bold text-5xl leading-tight lg:leading-normal sm:text-6xl md:text-7xl px-5 md:px-7 lg:px-10 ${font.className}`}>
              Simply showcase your work, skills and yourserlf diffrently
              <span className="inline-block px-1">
                <svg
                  className="text-foreground h-8 sm:h-10 md:w-14 md:h-14" viewBox="0 0 32 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.889 0.329834C12.3238 0.492699 9.96222 0.899872 9.63648 1.18489C9.2293 1.51063 9.10715 2.16211 9.18859 3.09861C9.35146 4.19797 8.82213 5.9081 6.98985 10.2241C4.18036 16.9018 2.10378 22.7243 0.719395 27.7733C-0.176385 31.0714 -0.176385 31.4785 0.393657 32.3336C1.24872 33.6773 2.63311 34.1252 6.78627 34.3695C8.7407 34.4916 10.4508 34.7359 10.5323 34.8988C10.6544 35.1024 9.39217 38.4005 7.76348 42.2686C6.09407 46.1775 3.97678 51.715 3.04028 54.6467C2.10378 57.5376 1.04513 60.3878 0.719395 61.0393C-0.0542328 62.5458 -0.0135155 63.5638 0.882264 64.3374C1.94091 65.3146 3.52889 65.1924 4.5061 64.0931C4.95399 63.6045 8.08922 59.1663 11.5095 54.2395C14.9297 49.3127 20.793 40.8842 24.5797 35.5096C29.1401 29.0762 31.5017 25.371 31.5017 24.6788C31.5017 22.4393 28.2443 21.0549 22.8696 21.0549C21.7702 21.0549 20.9152 20.9735 20.9152 20.8921C20.9152 20.8106 21.5666 18.8562 22.381 16.5353C23.8875 12.1378 25.4348 8.88046 27.3892 5.78595C28.8143 3.50578 28.6922 2.73215 26.5341 1.22561C24.6204 -0.0773392 22.381 -0.28093 14.889 0.329834ZM20.9152 7.90324C19.0422 11.7307 15.6219 21.5435 15.6219 23.0908C15.6219 24.8416 16.5177 25.2488 20.9559 25.5745C23.1953 25.6967 25.109 25.941 25.2312 26.0631C25.4348 26.2667 21.9331 31.4378 13.8711 42.7165C12.3238 44.9152 10.9801 46.7068 10.8987 46.7068C10.8173 46.7068 11.428 45.2003 12.2017 43.3273C16.6806 33.0258 16.9249 32.13 15.9477 31.3564C15.2555 30.8271 10.4915 30.0127 8.0485 30.0127C4.95399 30.0127 4.87256 29.8499 6.05336 25.9003C7.68205 20.1999 13.6268 5.6638 14.5225 5.09375C14.8076 4.93088 16.6806 4.76801 18.7164 4.76801H22.4624L20.9152 7.90324Z" fill="currentColor" />
                </svg>

              </span>
            </h1>
          </div>
        </div>
        <h2 className="flex flex-col text-xl md:text-2xl px-5 items-center text-center justify-center space-y-2 lg:pb-4">
          <span className="text-foreground/60">Also with Dark theme! {" "}
            <span className="text-foreground">Everyone likes dark theme, don&apos;t you?</span>
          </span>
        </h2>
        <div className="flex flex-col w-full h-full items-center justify-center space-y-6">
          <ButtonSignin />
          <p>Get your cool looking portfolio page!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
