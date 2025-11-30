import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Waterzijdig inregelen",
      description:
        "Optimaliseer uw verwarmingssysteem voor maximaal rendement. Door uw installatie waterzijdig in te regelen, wordt de warmte gelijkmatig verdeeld, wat zorgt voor meer comfort en een lagere energierekening.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      ),
    },
    {
      title: "Warmtepomp service & onderhoud",
      description:
        "Verleng de levensduur van uw warmtepomp en voorkom storingen. Ons vakkundige onderhoudsteam zorgt ervoor dat uw systeem jaar in jaar uit topprestaties blijft leveren.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
    },
    {
      title: "2de opinie warmtepomp installatie",
      description:
        "Twijfelt u over een offerte of de werking van uw huidige installatie? Onze experts geven een onafhankelijk en deskundig advies, zodat u zeker weet dat u de juiste keuze maakt.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
    {
      title: "Vloerverwarming service",
      description:
        "Het ideale afgiftesysteem voor uw warmtepomp. Wij verzorgen aanleg, onderhoud en reparatie van uw vloerverwarming voor een optimaal comfort.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
      ),
    },
    {
      title: "Zonnepanelen",
      description:
        "Combineer uw warmtepomp met zonnepanelen voor een energieneutrale woning. Wij adviseren en installeren A-merk zonnepanelen voor maximale opbrengst.",
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ),
    },
  ];

  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
            Diensten
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Extra Services
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Naast warmtepomp installaties bieden wij een compleet pakket aan diensten om uw woning te verduurzamen en comfortabeler te maken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="mb-6 bg-white rounded-xl p-4 inline-block w-fit shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href="/offerte"
                className="text-green-600 font-bold hover:text-green-700 flex items-center mt-auto"
              >
                Informatie aanvragen <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-600 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Heeft u interesse in een van deze diensten?</h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                    Neem contact met ons op voor een vrijblijvend adviesgesprek. Wij helpen u graag verder met het verduurzamen van uw woning.
                </p>
                <Link
                    href="/offerte"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-green-600 transition-all duration-200 bg-white rounded-full hover:bg-gray-100 focus:outline-none shadow-lg"
                >
                    Contact opnemen
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

