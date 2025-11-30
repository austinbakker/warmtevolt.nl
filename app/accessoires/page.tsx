import Link from "next/link";
import Image from "next/image";

export default function Accessoires() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
            Slimme Toevoegingen
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Accessoires & Zoneregeling
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Haal het maximale uit uw warmtepomp met slimme zoneregeling. Bespaar extra energie en verhoog uw comfort door elke ruimte afzonderlijk te verwarmen.
          </p>
        </div>

        {/* Honeywell Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-gray-100">
                <Image 
                   src="/accessoires/honeywell-hc-100.png" 
                   alt="Honeywell HCC100 Vloerverwarming regelaar" 
                   fill
                   className="object-contain p-8"
                   sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-gray-100">
                    <span className="text-gray-900 font-bold text-lg">Honeywell HCC100</span>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dynamische Vloerverwarming Controle
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Met de Honeywell zoneregeling (zoals Evohome) krijgt u volledige controle over uw vloerverwarming. In plaats van het hele huis te verwarmen, kunt u nu per groep of zone de temperatuur bepalen.
            </p>
            <ul className="space-y-4 mb-8">
                {[
                    "Regel de temperatuur per kamer of zone",
                    "Ideaal voor vloerverwarming per groep aansturen",
                    "Zelflerend systeem voor optimaal comfort",
                    "Bespaar tot 30% extra op uw stookkosten"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Tado Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tado Slimme Thermostaatknoppen
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Voor woningen met radiatoren is het Tado systeem de perfecte oplossing. Vervang uw oude radiatorknoppen door slimme Tado knoppen en verwarm alleen de kamers die u gebruikt.
            </p>
            <ul className="space-y-4 mb-8">
                {[
                    "Zone-controle voor elke kamer met een radiator",
                    "Geofencing: verwarming uit als niemand thuis is",
                    "Open raam detectie",
                    "Eenvoudige bediening via de app"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
             <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-gray-100">
                <Image 
                   src="/accessoires/tado.png" 
                   alt="Tado Slimme Thermostaatknoppen" 
                   fill
                   className="object-contain p-8"
                   sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-gray-100">
                    <span className="text-gray-900 font-bold text-lg">Tado° Slimme Thermostaat</span>
                </div>
             </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Wilt u uw systeem uitbreiden?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Neem deze accessoires direct mee in uw offerte-aanvraag of vraag ons naar de mogelijkheden voor uw bestaande installatie.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/offerte"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-white rounded-full hover:bg-green-50 focus:outline-none shadow-lg hover:scale-105"
                    >
                        Offerte aanvragen
                    </Link>
                    <Link
                        href="/offerte"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/20 transition-all duration-200 bg-white/10 rounded-full hover:bg-white/20 focus:outline-none"
                    >
                        Neem contact op
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

