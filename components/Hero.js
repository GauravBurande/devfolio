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
        {/* <div className="flex items-center gap-6 py-10">
          <span>As seen on</span>
          <span>
            <svg className="w-28 md:w-32 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100  cursor-pointer" viewBox="0 0 935 219" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_176_3)"><path d="M218.991 109.5C218.991 169.999 170.037 219 109.596 219C49.1552 219 0.200928 169.999 0.200928 109.5C0.200928 49.0012 49.1552 0 109.596 0C170.037 0 218.991 49.0012 218.991 109.5Z" fill="#DA552F"></path><path d="M124.182 109.5H93.1866V76.65H124.182C133.207 76.65 140.591 84.0413 140.591 93.075C140.591 102.109 133.207 109.5 124.182 109.5ZM124.182 54.75H71.3076V164.25H93.1866V131.4H124.182C145.332 131.4 162.47 114.245 162.47 93.075C162.47 71.905 145.332 54.75 124.182 54.75Z" fill="white"></path><path d="M333.947 96.0863C333.947 90.0638 329.298 86.4137 323.281 86.4137H307.145V105.668H323.281C329.298 105.668 333.947 102.018 333.947 96.0863ZM291.921 146V73H325.469C341.057 73 349.536 83.4938 349.536 96.0863C349.536 108.588 340.966 119.081 325.469 119.081H307.236V146H291.921Z"></path><path d="M358.743 146V92.8013H372.418V99.8275C376.155 95.3563 382.537 91.5238 389.009 91.5238V104.846C388.006 104.664 386.821 104.573 385.271 104.573C380.713 104.573 374.697 107.128 372.509 110.504V146.091H358.743V146Z"></path><path d="M434.864 118.716C434.864 110.686 430.123 103.66 421.554 103.66C413.076 103.66 408.336 110.686 408.336 118.716C408.336 126.929 413.076 133.864 421.554 133.864C430.123 133.864 434.864 126.838 434.864 118.716ZM394.114 118.716C394.114 104.025 404.416 91.5238 421.463 91.5238C438.693 91.5238 448.994 104.025 448.994 118.716C448.994 133.408 438.693 146 421.463 146C404.416 146 394.114 133.408 394.114 118.716Z"></path><path d="M494.94 127.932V109.591C492.661 106.124 487.738 103.66 483.271 103.66C475.431 103.66 470.053 109.774 470.053 118.716C470.053 127.75 475.431 133.864 483.271 133.864C487.738 133.864 492.661 131.4 494.94 127.932ZM494.94 146V138.061C490.838 143.263 485.277 146 478.895 146C465.859 146 455.922 136.145 455.922 118.716C455.922 101.835 465.677 91.5238 478.895 91.5238C485.003 91.5238 490.838 94.0788 494.94 99.4625V73H508.705V146H494.94Z"></path><path d="M557.204 146V138.152C553.648 141.985 547.449 146 538.971 146C527.576 146 522.197 139.795 522.197 129.666V92.8012H535.872V124.282C535.872 131.491 539.609 133.864 545.444 133.864C550.731 133.864 554.925 130.944 557.295 127.932V92.8012H570.969V146H557.204Z"></path><path d="M581.088 118.716C581.088 102.839 592.666 91.5238 608.619 91.5238C619.285 91.5238 625.667 96.1775 629.131 100.923L620.197 109.318C617.736 105.668 613.998 103.751 609.258 103.751C600.962 103.751 595.219 109.774 595.219 118.808C595.219 127.841 601.053 133.955 609.258 133.955C613.998 133.955 617.736 131.765 620.197 128.298L629.131 136.693C625.667 141.438 619.285 146.183 608.619 146.183C592.666 146 581.088 134.685 581.088 118.716Z"></path><path d="M640.891 131.674V104.664H632.322V92.71H640.891V78.5663H654.565V92.8013H665.049V104.755H654.565V128.115C654.565 131.491 656.297 133.955 659.306 133.955C661.311 133.955 663.317 133.225 664.046 132.313L666.964 142.715C664.958 144.54 661.311 146.091 655.568 146.091C645.905 146 640.891 141.073 640.891 131.674Z"></path><path d="M752.383 146V114.519H718.562V146H703.337V73H718.562V101.196H752.383V73H767.789V146H752.383Z"></path><path d="M816.561 146V138.152C813.006 141.985 806.807 146 798.329 146C786.933 146 781.555 139.795 781.555 129.666V92.8012H795.229V124.282C795.229 131.491 798.967 133.864 804.801 133.864C810.089 133.864 814.282 130.944 816.652 127.932V92.8012H830.327V146H816.561Z"></path><path d="M878.734 146V113.333C878.734 106.124 874.996 103.66 869.162 103.66C863.783 103.66 859.681 106.671 857.311 109.683V146H843.636V92.8013H857.311V99.4625C860.684 95.63 867.065 91.5238 875.452 91.5238C886.938 91.5238 892.408 98.0025 892.408 108.04V146H878.734Z"></path><path d="M908.817 131.674V104.664H900.248V92.71H908.817V78.5663H922.492V92.8013H932.975V104.755H922.492V128.115C922.492 131.491 924.224 133.955 927.232 133.955C929.238 133.955 931.243 133.225 931.973 132.313L934.89 142.715C932.884 144.54 929.238 146.091 923.494 146.091C913.831 146 908.817 141.073 908.817 131.674Z"></path></g><defs><clipPath id="clip0_176_3"><rect width="935" height="219" fill="white"></rect></clipPath></defs></svg>
          </span>
          <span>
            <svg className="w-[5.5rem] md:w-24 fill-foreground saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer" viewBox="0 0 644 214" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_180_2)"><path d="M627.075 157.051V97.6266H633.795C634.727 97.7109 635.666 97.5995 636.552 97.2996C637.439 96.9997 638.253 96.518 638.942 95.8851C639.631 95.2523 640.181 94.4824 640.556 93.6247C640.931 92.767 641.123 91.8405 641.119 90.9044V90.7028C641.231 89.7931 641.155 88.8701 640.897 87.9906C640.639 87.1111 640.204 86.2937 639.619 85.5886C639.034 84.8834 638.311 84.3055 637.494 83.8902C636.677 83.475 635.784 83.2312 634.87 83.1739H627.075V72.0822C627.084 70.0116 626.315 68.0133 624.922 66.4822C623.528 64.9512 621.611 63.999 619.55 63.8139C617.432 63.6844 615.349 64.395 613.752 65.7918C612.154 67.1885 611.172 69.1588 611.016 71.2755V83.3083H604.297C603.365 83.2241 602.426 83.3354 601.54 83.6353C600.653 83.9352 599.839 84.417 599.15 85.0498C598.46 85.6826 597.911 86.4525 597.536 87.3102C597.161 88.1679 596.969 89.0945 596.973 90.0305V90.5011C596.861 91.4108 596.937 92.3337 597.195 93.2132C597.452 94.0927 597.887 94.9101 598.473 95.6153C599.058 96.3204 599.781 96.8984 600.598 97.3136C601.415 97.7289 602.308 97.9727 603.222 98.03H610.815V157.253C610.815 159.374 611.657 161.409 613.157 162.909C614.656 164.409 616.69 165.252 618.811 165.252C620.921 165.362 622.989 164.632 624.563 163.221C626.137 161.811 627.088 159.834 627.21 157.723C627.235 157.491 627.188 157.256 627.075 157.051Z" fill="currentColor"></path><path d="M577.554 83.3755C585.422 83.3755 591.799 76.9951 591.799 69.1244C591.799 61.2537 585.422 54.8733 577.554 54.8733C569.687 54.8733 563.31 61.2537 563.31 69.1244C563.31 76.9951 569.687 83.3755 577.554 83.3755Z" fill="#FF4500"></path><path d="M585.483 98.5005C585.483 96.379 584.641 94.3443 583.141 92.8441C581.642 91.3439 579.608 90.5011 577.487 90.5011C575.367 90.5011 573.333 91.3439 571.833 92.8441C570.334 94.3443 569.491 96.379 569.491 98.5005V157.051C569.491 159.173 570.334 161.207 571.833 162.708C573.333 164.208 575.367 165.051 577.487 165.051C579.608 165.051 581.642 164.208 583.141 162.708C584.641 161.207 585.483 159.173 585.483 157.051V98.5005Z" fill="currentColor"></path><path d="M467.223 53.9994C467.223 51.8779 466.381 49.8432 464.881 48.343C463.382 46.8428 461.348 46 459.227 46C457.107 46 455.073 46.8428 453.573 48.343C452.074 49.8432 451.232 51.8779 451.232 53.9994V89.7617C448.596 87.1123 445.451 85.0254 441.986 83.6273C438.521 82.2292 434.809 81.5489 431.074 81.6278C410.244 81.6278 392.841 100.786 392.841 124.314C392.841 147.842 409.706 167 430.805 167C434.654 167.094 438.483 166.411 442.062 164.99C445.641 163.569 448.897 161.441 451.635 158.732C451.92 159.74 452.403 160.682 453.057 161.501C453.711 162.32 454.522 163 455.442 163.501C456.362 164.002 457.373 164.314 458.416 164.418C459.458 164.523 460.511 164.418 461.512 164.109C463.062 163.643 464.436 162.72 465.455 161.461C466.474 160.202 467.09 158.665 467.223 157.051V53.9994ZM430.738 151.136C418.441 151.136 408.43 139.237 408.43 124.247C408.43 109.256 418.374 97.3578 430.738 97.3578C443.101 97.3578 452.979 109.323 452.979 124.247C452.979 139.17 443.101 150.799 430.805 150.799L430.738 151.136Z" fill="currentColor"></path><path d="M550.812 53.9994C550.812 51.8779 549.969 49.8432 548.47 48.343C546.97 46.8428 544.936 46 542.816 46C541.769 46 540.732 46.2073 539.766 46.6102C538.799 47.013 537.922 47.6033 537.185 48.347C536.448 49.0907 535.865 49.9731 535.471 50.9433C535.076 51.9134 534.878 52.9521 534.887 53.9994V89.7617C532.242 87.1248 529.095 85.0461 525.633 83.6489C522.17 82.2517 518.462 81.5644 514.729 81.6278C493.899 81.6278 476.496 100.786 476.496 124.314C476.496 147.842 493.294 167 514.393 167C518.287 167.131 522.167 166.465 525.795 165.043C529.423 163.622 532.722 161.474 535.492 158.732C535.776 159.74 536.26 160.682 536.914 161.501C537.568 162.32 538.379 163 539.299 163.501C540.219 164.002 541.23 164.314 542.272 164.418C543.315 164.523 544.368 164.418 545.369 164.109C546.924 163.651 548.303 162.73 549.323 161.47C550.343 160.209 550.956 158.668 551.08 157.051L550.812 53.9994ZM514.326 151.136C502.029 151.136 492.085 139.237 492.085 124.247C492.085 109.256 501.962 97.3578 514.326 97.3578C526.689 97.3578 536.567 109.323 536.567 124.247C536.567 139.17 526.689 150.799 514.393 150.799L514.326 151.136Z" fill="currentColor"></path><path d="M376.043 129.624C378.689 129.809 381.3 128.936 383.303 127.197C385.306 125.458 386.537 122.994 386.726 120.348V119.339C386.673 117.419 386.448 115.506 386.054 113.626C384.429 104.88 379.878 96.9483 373.15 91.1333C366.422 85.3183 357.916 81.9662 349.031 81.6278C328.201 81.6278 310.798 100.786 310.798 124.314C310.798 147.842 327.933 167 349.031 167C354.551 167.205 360.049 166.205 365.143 164.069C370.237 161.933 374.805 158.712 378.529 154.631C379.263 153.828 379.831 152.889 380.201 151.866C380.571 150.843 380.736 149.758 380.686 148.671C380.636 147.585 380.372 146.519 379.91 145.534C379.448 144.55 378.796 143.666 377.991 142.934L377.252 142.329C375.609 141.307 373.671 140.864 371.747 141.071C369.823 141.278 368.024 142.124 366.636 143.472C361.923 148.108 355.637 150.796 349.031 151.001C343.462 150.571 338.221 148.193 334.228 144.284C330.235 140.376 327.745 135.186 327.193 129.624H376.043ZM349.166 97.6267C354.072 97.964 358.739 99.8715 362.478 103.067C366.217 106.263 368.829 110.578 369.928 115.373H328.134C329.236 110.567 331.858 106.245 335.611 103.048C339.363 99.8513 344.046 97.95 348.964 97.6267H349.166Z" fill="currentColor"></path><path d="M311.604 89.8962C311.613 87.9899 310.94 86.1433 309.709 84.689C308.477 83.2347 306.766 82.2683 304.885 81.9639C299.583 81.0237 294.127 81.4979 289.066 83.3389C284.005 85.18 279.519 88.3227 276.059 92.4506V91.3751C275.876 89.3714 274.951 87.5086 273.465 86.1523C271.979 84.796 270.041 84.044 268.03 84.044C266.018 84.044 264.08 84.796 262.594 86.1523C261.109 87.5086 260.184 89.3714 260 91.3751V157.051C259.975 159.133 260.736 161.148 262.131 162.694C263.526 164.239 265.453 165.201 267.526 165.387C269.625 165.516 271.692 164.813 273.276 163.429C274.861 162.044 275.837 160.091 275.992 157.992C276.025 157.679 276.025 157.364 275.992 157.051V123.44C275.811 120.238 276.264 117.032 277.326 114.005C278.387 110.979 280.037 108.193 282.178 105.806C284.32 103.42 286.912 101.48 289.806 100.1C292.7 98.7192 295.838 97.9244 299.039 97.7612C300.248 97.694 301.459 97.694 302.668 97.7612H304.28C306.265 97.6093 308.12 96.7161 309.477 95.259C310.834 93.802 311.593 91.8876 311.604 89.8962Z" fill="currentColor"></path></g><path d="M105.5 211C163.766 211 211 163.766 211 105.5C211 47.234 163.766 0 105.5 0C47.234 0 0 47.234 0 105.5C0 163.766 47.234 211 105.5 211Z" fill="#FF4500"></path><path d="M175.869 105.5C175.761 102.53 174.796 99.6555 173.09 97.2221C171.384 94.7887 169.011 92.9006 166.257 91.7855C163.503 90.6703 160.484 90.3757 157.566 90.9372C154.648 91.4987 151.955 92.8923 149.811 94.95C137.809 86.7918 123.702 82.2847 109.193 81.9735L116.051 49.0575L138.628 53.805C138.896 56.2999 140.045 58.6174 141.868 60.3416C143.691 62.0658 146.069 63.0837 148.575 63.2126C151.081 63.3416 153.551 62.5731 155.542 61.0451C157.532 59.5171 158.913 57.3297 159.436 54.8755C159.959 52.4214 159.59 49.8611 158.395 47.6544C157.201 45.4477 155.259 43.7389 152.918 42.835C150.577 41.931 147.991 41.8909 145.623 42.722C143.256 43.553 141.262 45.2008 139.999 47.3695L114.152 42.2C113.729 42.1073 113.292 42.0993 112.866 42.1767C112.441 42.2541 112.034 42.4152 111.671 42.6507C111.308 42.8862 110.995 43.1915 110.751 43.5487C110.507 43.906 110.336 44.3082 110.248 44.732L102.441 81.3405C87.7545 81.5619 73.4529 86.0724 61.2964 94.317C59.67 92.7867 57.7303 91.6284 55.6118 90.9223C53.4933 90.2162 51.2465 89.9792 49.0273 90.2277C46.8081 90.4762 44.6694 91.2043 42.7595 92.3615C40.8496 93.5187 39.2142 95.0773 37.9666 96.9294C36.7189 98.7815 35.8889 100.883 35.5341 103.087C35.1792 105.292 35.308 107.548 35.9115 109.698C36.515 111.848 37.5788 113.841 39.0291 115.539C40.4795 117.237 42.2817 118.599 44.3109 119.531C44.1921 121.077 44.1921 122.628 44.3109 124.173C44.3109 147.805 71.8464 167.006 105.817 167.006C139.788 167.006 167.324 147.805 167.324 124.173C167.443 122.628 167.443 121.077 167.324 119.531C169.927 118.238 172.111 116.233 173.624 113.75C175.136 111.267 175.914 108.407 175.869 105.5ZM70.3694 116.05C70.3694 113.963 70.9881 111.924 72.1474 110.189C73.3066 108.454 74.9543 107.102 76.8821 106.303C78.8098 105.505 80.9311 105.296 82.9776 105.703C85.0241 106.11 86.9039 107.115 88.3794 108.59C89.8548 110.065 90.8596 111.945 91.2667 113.992C91.6737 116.038 91.4648 118.16 90.6663 120.087C89.8678 122.015 88.5156 123.663 86.7807 124.822C85.0457 125.981 83.006 126.6 80.9194 126.6C79.5339 126.6 78.1621 126.327 76.8821 125.797C75.6021 125.267 74.4391 124.49 73.4594 123.51C72.4798 122.53 71.7026 121.367 71.1725 120.087C70.6423 118.807 70.3694 117.435 70.3694 116.05ZM131.665 145.062C124.18 150.703 114.971 153.574 105.606 153.186C96.2421 153.574 87.0329 150.703 79.5479 145.062C79.0993 144.516 78.87 143.822 78.9047 143.116C78.9394 142.409 79.2355 141.741 79.7356 141.241C80.2356 140.741 80.9037 140.445 81.61 140.41C82.3163 140.376 83.0103 140.605 83.5569 141.053C89.8999 145.706 97.6424 148.051 105.501 147.7C113.369 148.128 121.148 145.858 127.55 141.265C128.11 140.719 128.863 140.418 129.645 140.428C130.032 140.433 130.414 140.514 130.77 140.666C131.125 140.819 131.447 141.04 131.718 141.317C131.988 141.594 132.201 141.922 132.344 142.281C132.488 142.641 132.559 143.025 132.554 143.412C132.549 143.799 132.468 144.181 132.316 144.537C132.163 144.892 131.942 145.214 131.665 145.484V145.062ZM129.766 127.022C127.679 127.022 125.64 126.403 123.905 125.244C122.17 124.085 120.817 122.437 120.019 120.509C119.22 118.582 119.012 116.46 119.419 114.414C119.826 112.367 120.83 110.487 122.306 109.012C123.781 107.537 125.661 106.532 127.708 106.125C129.754 105.718 131.875 105.927 133.803 106.725C135.731 107.524 137.379 108.876 138.538 110.611C139.697 112.346 140.316 114.385 140.316 116.472C140.373 117.901 140.139 119.328 139.628 120.664C139.117 122 138.339 123.218 137.343 124.245C136.346 125.271 135.151 126.084 133.83 126.634C132.51 127.184 131.091 127.459 129.66 127.444L129.766 127.022Z" fill="white"></path><defs><clipPath id="clip0_180_2"><rect width="383" height="121" fill="currentColor" transform="translate(260 46)"></rect></clipPath></defs></svg>
          </span>
          <span>
            <svg className="w-8 md:w-9 fill-base-content saturate-0 contrast-50 opacity-80 hover:opacity-100 hover:saturate-100 hover:contrast-100 duration-100 cursor-pointer" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_177_29)"><path d="M126 250.793C195.036 250.793 251 194.875 251 125.897C251 56.9181 195.036 1 126 1C56.9644 1 1 56.9181 1 125.897C1 194.875 56.9644 250.793 126 250.793Z" fill="black" stroke="white" strokeMiterlimit="10"></path><path d="M48.9999 53.5352L108.748 133.357L48.6233 198.256H62.1561L114.797 141.435L157.327 198.256H203.377L140.265 113.945L196.23 53.5352H182.697L134.219 105.865L95.0494 53.5352H48.9999ZM68.9004 63.4941H90.0554L183.474 188.297H162.319L68.9004 63.4941Z" fill="white"></path></g><defs><clipPath id="clip0_177_29"><rect width="252" height="252" fill="white"></rect></clipPath></defs></svg>
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
