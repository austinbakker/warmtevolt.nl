import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Radiatorventilatoren: Het Geheime Wapen voor uw Warmtepomp - Voordeligste-Warmtepomp.nl",
    description: "Krijgt u uw huis niet warm met de warmtepomp? Ontdek hoe simpele radiatorventilatoren uw oude radiatoren geschikt maken voor lage temperaturen en uw energierekening verlagen.",
};

export default function BlogPost() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            {/* Header / Hero */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link href="/blogs" className="inline-flex items-center text-green-600 font-bold mb-8 hover:underline">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Terug naar overzicht
                </Link>
                <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
                    Bespaartip
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Radiatorventilatoren: Het Geheime Wapen voor uw Warmtepomp
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed border-l-4 border-green-500 pl-6 italic">
                    Heeft u oude radiatoren en twijfelt u of een warmtepomp wel werkt? Voordat u duizenden euro&apos;s uitgeeft aan vloerverwarming, is er een slimmere oplossing die u direct geld bespaart.
                </p>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green text-gray-700">

                {/* 1. Introduction */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Waarom uw radiatoren niet warm genoeg worden</h2>
                <p>
                    Het grootste verschil tussen een cv-ketel en een warmtepomp is de temperatuur. Een cv-ketel pompt water van 70°C of 80°C door uw radiatoren. Die worden gloeiend heet, en die hitte straalt er vanaf.
                </p>
                <p>
                    Een warmtepomp werkt het beste (en zuinigst) op 35°C tot 45°C. Als u dat &apos;lauwe&apos; water door uw oude radiatoren stuurt, gebeurt er vaak... te weinig. Het huis warmt traag op en op koude dagen krijgt u het misschien niet behaaglijk. Veel mensen denken dan dat ze hun hele huis moeten verbouwen voor vloerverwarming. Gelukkig hoeft dat niet.
                </p>

                {/* Infographic 1: Natural vs Forced Convection */}
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Het probleem: Trage Lucht</h3>
                <p>
                    Bij een traditionele radiator stijgt warme lucht langzaam op (natuurlijke trek). Maar dat werkt alleen goed als de radiator heet is. Bij lauw water stijgt de lucht amper op en blijft de warmte &quot;hangen&quot; in de radiator.
                </p>
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-96 w-full">
                        <Image
                            src="/blogs/forced-convection.png"
                            alt="Vergelijking: Zonder vs Met Ventilatoren"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Links: Oude situatie (traag). Rechts: Met ventilatoren (snel en krachtig).
                    </p>
                </div>

                <p>
                    Door ventilatoren onder uw radiator te plaatsen, forceert u de luchtstroom. U blaast de warmte als het ware de kamer in. Hierdoor voelt een radiator van 35°C ineens alsof hij veel groter en krachtiger is.
                </p>


                {/* 2. Output Gain */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Verdubbel de kracht van uw verwarming</h2>
                <p>
                    Het klinkt bijna te mooi om waar te zijn, maar het effect is enorm. Uit testen blijkt dat u met goede ventilatoren de warmteafgifte van een radiator bijna kunt <strong>verdubbelen</strong> als het water niet zo heet is.
                </p>

                {/* Infographic 2: Heat Output Gain */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src="/blogs/output-gain-chart.png"
                            alt="Grafiek: Meer warmte met dezelfde radiator"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Ziet u het verschil? Dezelfde radiator levert mét ventilatoren (groen) veel meer warmte.
                    </p>
                </div>

                <p>
                    Dit betekent dat u in veel gevallen uw oude radiatoren gewoon kunt laten hangen als u overstapt op een warmtepomp. Dat scheelt hak- en breekwerk, en duizenden euro&apos;s aan verbouwingskosten.
                </p>

                {/* 3. Efficiency & Money */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Bespaar geld op uw energierekening</h2>
                <p>
                    Er is nog een voordeel, en dat voelt u in uw portemonnee. Omdat uw radiatoren met ventilatoren veel krachtiger zijn, kan de warmtepomp op een nóg lagere temperatuur draaien.
                </p>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 my-6">
                    <h4 className="text-lg font-bold text-green-800 mb-2">De Gouden Regel</h4>
                    <p className="text-green-900/80">
                        Hoe lager de watertemperatuur die uw warmtepomp hoeft te maken, hoe minder stroom hij verbruikt.
                    </p>
                </div>

                {/* Infographic 3: COP Efficiency */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src="/blogs/cop-efficiency-graph.png"
                            alt="Grafiek: Lagere temperatuur is hoger rendement"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Lager is beter! Door de temperatuur te verlagen, stijgt het rendement.
                    </p>
                </div>

                <p>
                    Als u dankzij ventilatoren de watertemperatuur met 5 graden kunt verlagen (bijvoorbeeld van 45°C naar 40°C), bespaart u al snel <strong>15% tot 20%</strong> op uw stroomverbruik voor verwarming. Elk jaar weer.
                </p>

                {/* 5. Conclusions */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusie: Een No-Brainer</h2>
                <p>
                    Radiatorventilatoren zijn waarschijnlijk de meest kosteneffectieve upgrade die u kunt doen voor uw warmtepomp. Voor een investering van enkele tientjes per radiator krijgt u:
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Een warmer en comfortabeler huis.</li>
                    <li>Geen dure verbouwing of vloerverwarming nodig.</li>
                    <li>Een lager stroomverbruik en dus een lagere energierekening.</li>
                </ul>

                <p>
                    Let bij aanschaf wel op de kwaliteit. Goedkope ventilatoren maken vaak herrie. Kies voor systemen die bekend staan als &apos;stil&apos; of &apos;speedcomfort&apos;, zodat u alleen de warmte voelt en de ventilatoren niet hoort.
                </p>

                <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Persoonlijk advies nodig?</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Twijfelt u of uw huidige radiatoren geschikt zijn? Wij kijken graag met u mee voor een oplossing op maat.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/advies" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors">
                            Gratis adviesgesprek advies
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
