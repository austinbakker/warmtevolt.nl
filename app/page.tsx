import Link from "next/link";
import Image from "next/image";

export default function Home() {
   return (
      <div className="bg-white">
         {/* Hero Section */}
         <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0">
               <img
                  src="/heroimage.jpeg"
                  alt="Warmtepomp installatie"
                  className="w-full h-full object-cover animate-ken-burns scale-105"
               />
               {/* Geometric Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
               {/* Geometric Shapes Overlay */}
               <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     Toekomstbestendig wonen
                  </div>

                  <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                     De <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">slimste keuze</span> voor uw energie.
                  </h1>

                  <p className="text-gray-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl font-light">
                     Vooroplopen in hernieuwbare energie. Wij bieden efficiënte en innovatieve warmtepomp oplossingen voor een duurzame toekomst.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 mb-16">
                     <Link
                        href="/advies"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-green-600 rounded-full hover:bg-green-500 shadow-lg hover:shadow-green-500/50 overflow-hidden"
                     >
                        <span className="relative z-10">Gratis adviesgesprek</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-green-500/20"></div>
                     </Link>
                     <Link
                        href="/prijzen"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40"
                     >
                        Bekijk onze prijzen
                     </Link>
                  </div>

                  {/* Premium Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
                     {[
                        { number: "5+", label: "Jaar ervaring" },
                        { number: "120+", label: "Installaties" },
                        { number: "1200", label: "KW geplaatst" },
                        { number: "3000+", label: "Tevreden klanten" }
                     ].map((stat, idx) => (
                        <div key={idx} className="text-left">
                           <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.number}</h3>
                           <p className="text-green-400/80 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
               <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
         </section>

         {/* Geometric Services Section */}
         <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4 relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div className="max-w-xl">
                     <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block text-sm">Onze Collectie</span>
                     <h2 className="text-4xl font-bold text-gray-900 leading-tight">Vijf krachtige oplossingen voor uw woning.</h2>
                  </div>
                  <Link href="/prijzen" className="hidden md:inline-flex items-center font-bold text-gray-900 hover:text-green-600 transition-colors mt-6 md:mt-0">
                     Bekijk alle specificaties <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Card 1: Batavia */}
                  <div className="group bg-white rounded-3xl p-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 flex flex-col">
                     <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                        <img src="/batavia-12kw.png" alt="Batavia 12kW" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                           Best Value • 12kW
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Batavia</h3>
                        <p className="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">
                           De warmtepomp met de beste prijs-kwaliteitverhouding. Betrouwbare prestaties voor een scherpe prijs.
                        </p>
                        <Link href="/prijzen" className="inline-block border-b-2 border-gray-200 pb-1 text-gray-900 text-sm font-bold hover:border-green-500 hover:text-green-600 transition-all mt-auto">
                           Bekijk details
                        </Link>
                     </div>
                  </div>

                  {/* Card 2: We Heat Flint */}
                  <div className="group bg-white rounded-3xl p-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 flex flex-col">
                     <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                        <img src="/flint.webp" alt="We Heat Flint" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                           Hybride • 6kW
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">We Heat Flint</h3>
                        <ul className="text-gray-500 mb-4 text-sm leading-relaxed space-y-1 flex-grow">
                           <li>• All-weather prestaties tot 70°C</li>
                           <li>• Meest concurrerende prijs</li>
                           <li>• Compact model, 6kW</li>
                        </ul>
                        <Link href="/prijzen" className="inline-block border-b-2 border-gray-200 pb-1 text-gray-900 text-sm font-bold hover:border-green-500 hover:text-green-600 transition-all mt-auto">
                           Bekijk details
                        </Link>
                     </div>
                  </div>

                  {/* Card 3: We Heat Sparrow */}
                  <div className="group bg-white rounded-3xl p-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 flex flex-col">
                     <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                        <img src="/sparrow.webp" alt="We Heat Sparrow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                           Hybride / All Electric • 9kW
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">We Heat Sparrow</h3>
                        <ul className="text-gray-500 mb-4 text-sm leading-relaxed space-y-1 flex-grow">
                           <li>• Stil & efficiënt, moderne look</li>
                           <li>• EPP behuizing voor optimale prestaties</li>
                           <li>• Ongekend comfort</li>
                           <li>• Verkrijgbaar in diverse kleuren</li>
                        </ul>
                        <Link href="/prijzen" className="inline-block border-b-2 border-gray-200 pb-1 text-gray-900 text-sm font-bold hover:border-green-500 hover:text-green-600 transition-all mt-auto">
                           Bekijk details
                        </Link>
                     </div>
                  </div>

                  {/* Card 4: We Heat Blackbird */}
                  <div className="group bg-white rounded-3xl p-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 flex flex-col">
                     <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                        <img src="/blackbird.png" alt="We Heat Blackbird" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                           Hybride / All Electric • 9/11kW
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">We Heat Blackbird</h3>
                        <ul className="text-gray-500 mb-4 text-sm leading-relaxed space-y-1 flex-grow">
                           <li>• Onzichtbaar & ultrastil</li>
                           <li>• Horizontaal design voor platte daken</li>
                           <li>• Stilste in zijn klasse</li>
                           <li>• Betrouwbaar koelen & verwarmen</li>
                        </ul>
                        <Link href="/prijzen" className="inline-block border-b-2 border-gray-200 pb-1 text-gray-900 text-sm font-bold hover:border-green-500 hover:text-green-600 transition-all mt-auto">
                           Bekijk details
                        </Link>
                     </div>
                  </div>

                  {/* Card 5: Viessmann */}
                  <div className="group bg-white rounded-3xl p-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 flex flex-col">
                     <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100 p-4">
                        <div className="relative w-full h-full">
                           <Image 
                              src="/viessmann-warmtepomp.webp" 
                              alt="Viessmann Warmtepomp" 
                              fill
                              className="object-contain transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                           />
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 z-10">
                           Premium Merk
                        </div>
                     </div>
                     <div className="px-4 pb-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Viessmann</h3>
                        <ul className="text-gray-500 mb-4 text-sm leading-relaxed space-y-1 flex-grow">
                           <li>• Duits kwaliteitsmerk</li>
                           <li>• Hoge betrouwbaarheid</li>
                           <li>• Uitstekende service</li>
                           <li>• Energie-efficiënt</li>
                        </ul>
                        <Link href="/prijzen" className="inline-block border-b-2 border-gray-200 pb-1 text-gray-900 text-sm font-bold hover:border-green-500 hover:text-green-600 transition-all mt-auto">
                           Bekijk details
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Dark Process Section */}
         <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
               <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/3">
                     <span className="text-green-400 font-bold tracking-widest uppercase mb-4 block text-sm">Onze Werkwijze</span>
                     <h2 className="text-4xl font-bold mb-6 leading-tight">Van advies tot installatie in 3 stappen.</h2>
                     <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Wij maken verduurzamen eenvoudig. Geen gedoe, maar een duidelijk proces met persoonlijke begeleiding.
                     </p>
                     <Link href="/advies" className="inline-flex items-center font-bold text-white hover:text-green-400 transition-colors">
                        Start uw aanvraag <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                     </Link>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                        { id: "01", title: "Analyse", desc: "We bespreken uw wensen en analyseren uw woonsituatie voor het beste rendement." },
                        { id: "02", title: "Voorstel", desc: "U ontvangt een helder voorstel op maat, inclusief subsidieberekening." },
                        { id: "03", title: "Installatie", desc: "Onze gecertificeerde monteurs zorgen voor een vakkundige installatie." }
                     ].map((step, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                           <span className="text-5xl font-black text-white/10 mb-6 block group-hover:text-green-500/20 transition-colors">{step.id}</span>
                           <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{step.title}</h3>
                           <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-24 bg-green-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  Klaar voor de volgende stap?
               </h2>
               <p className="text-green-100 text-xl mb-12 max-w-2xl mx-auto font-light">
                  Vraag vandaag nog een vrijblijvend adviesgesprek aan en start direct met besparen op uw energierekening.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link
                     href="/advies"
                     className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-green-700 transition-all duration-300 bg-white rounded-full hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                     Gratis adviesgesprek
                  </Link>
                  <Link
                     href="/prijzen"
                     className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-green-700 rounded-full hover:bg-green-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-green-600"
                  >
                     Bekijk prijzen
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
}
