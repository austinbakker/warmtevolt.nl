import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Nachtverlaging bij een Warmtepomp: Zin of Onzin? - Voordeligste-Warmtepomp.nl",
    description: "Moet u de thermostaat lager zetten 's nachts met een warmtepomp? Ontdek waarom nachtverlaging vaak averechts werkt bij vloerverwarming en warmtepompen.",
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
                <span className="text-blue-500 font-bold tracking-widest uppercase mb-4 block">
                    Expert Advies
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Nachtverlaging bij een Warmtepomp: Zin of Onzin?
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed border-l-4 border-blue-500 pl-6 italic">
                    We zijn het allemaal gewend van vroeger: 's avonds de thermostaat naar 15 graden. Maar met een warmtepomp is dat vaak een dure vergissing. Waarom? Dat leggen we uit.
                </p>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green text-gray-700">

                {/* 1. The Rebound Effect */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Het "Ochtend-Boete" Effect</h2>
                <p>
                    Een cv-ketel is een sprinter: hij kan heel snel veel hitte leveren. Een warmtepomp is een marathonloper: hij werkt het efficiëntst als hij rustig en constant doorloopt.
                </p>
                <p>
                    Als u &apos;s nachts de temperatuur verlaagt, koelt uw huis af. &apos;s Ochtends moet de warmtepomp dan hard werken ("sprinten") om het weer warm te krijgen. Dit kost enorm veel energie, omdat het rendement (COP) dan drastisch daalt.
                </p>

                {/* Infographic 1: Rebound Effect */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-96 w-full">
                        <Image
                            src="/blogs/night-setback-rebound.png"
                            alt="Grafiek: Ochtendpiek zorgt voor laag rendement"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        De winst van de nacht wordt tenietgedaan door het verlies in de ochtend.
                    </p>
                </div>

                {/* 2. Floor Heating vs Radiators */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vloerverwarming vs. Radiatoren</h2>
                <p>
                    Het type verwarming in uw huis bepaalt grotendeels uw strategie. Er zit een groot verschil tussen de &quot;trage&quot; vloerverwarming en &quot;snelle&quot; radiatoren.
                </p>

                {/* Infographic 2: Floor vs Radiator Comparison */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src="/blogs/floor-vs-radiator.png"
                            alt="Vergelijking: Vloerverwarming vs Radiatoren"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Vloerverwarming is traag en stabiel, radiatoren zijn sneller.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Situatie 1: Vloerverwarming</h3>
                <p>
                    Heeft u vloerverwarming? <strong>Blijf dan van de thermostaat af.</strong> Vloerverwarming is erg traag. Het duurt uren om af te koelen en uren om weer op te warmen. Nachtverlaging zorgt vaak voor een koude start van de dag en een hoger verbruik.
                </p>
                <p className="font-bold text-green-700">
                    Advies: Houd de temperatuur 24/7 constant, of verlaag maximaal 0,5 graden.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Situatie 2: Radiatoren</h3>
                <p>
                    Radiatoren koelen sneller af en warmen sneller op. Hier heeft nachtverlaging <em>iets</em> meer zin, maar wees voorzichtig. Een te grote verlaging zorgt ook hier voor een inefficiënte ochtendpiek.
                </p>
                <p className="font-bold text-orange-700">
                    Advies: Een beperkte verlaging van 1 tot 2 graden is mogelijk.
                </p>

                {/* 3. Decision Tree */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wat moet u doen? (Beslisboom)</h2>
                <p>
                    Twijfelt u nog? We hebben een simpele beslisboom gemaakt om u te helpen kiezen.
                </p>

                {/* Infographic 3: Decision Tree */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-96 w-full">
                        <Image
                            src="/blogs/setback-decision-tree.png"
                            alt="Beslisboom: Wel of geen nachtverlaging?"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Volg de stappen voor uw ideale instelling.
                    </p>
                </div>

                {/* 4. Insulation */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">De rol van isolatie</h2>
                <p>
                    In een goed geïsoleerd nieuwbouwhuis koelt het &apos;s nachts sowieso nauwelijks af (vaak minder dan 1 graad). Nachtverlaging heeft dan simpelweg geen nut, omdat er niets te verlagen valt.
                </p>
                <p>
                    In een slecht geïsoleerd huis koelt het hard af. Daar lijkt de besparing groot, maar daar moet de warmtepomp &apos;s ochtends extra hard voor werken om dat warmteverlies weer in te halen.
                </p>

                {/* 5. Conclusions */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusie</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 text-xl">✓</span>
                            <span><strong>Vloerverwarming:</strong> Temperatuur constant houden (dag en nacht gelijk).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 text-xl">✓</span>
                            <span><strong>Radiatoren:</strong> Maximaal 1 à 2 graden omlaag, maar niet lager.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 text-xl">✓</span>
                            <span><strong>Comfort:</strong> Constant stoken is comfortabeler en vaak net zo zuinig (of zuiniger).</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Meer weten over efficiënt stoken?</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Een goed ingestelde warmtepomp is goud waard. Wij helpen u graag op weg met de juiste keuze.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/advies" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors">
                            Bekijk onze warmtepompen
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
