import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "De Verborgen Kosten van Goedkope Warmtepompen - Warmtevolt.nl",
    description: "Een goedkope warmtepomp lijkt aantrekkelijk, maar kan duurder uitpakken. Ontdek de verborgen kosten van budgetmodellen: stroomverbruik, geluidsoverlast en levensduur.",
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
                <span className="text-red-500 font-bold tracking-widest uppercase mb-4 block">
                    Waarschuwing
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    De Verborgen Kosten van Goedkope Warmtepompen: Waar Moet U Op Letten?
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed border-l-4 border-red-500 pl-6 italic">
                    Goedkoop is vaak duurkoop. Dat geldt zeker voor warmtepompen. Een model van €3.000 kan u uiteindelijk duizenden euro&apos;s meer kosten dan een kwaliteitsmodel. Wij leggen uit waarom.
                </p>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-green text-gray-700">

                {/* 1. Iceberg Analogy */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Het IJsberg-effect: Aanschaf vs. Gebruik</h2>
                <p>
                    Bij de aanschaf van een warmtepomp kijken veel mensen vooral naar het prijskaartje. Logisch, want het is een flinke investering. Maar de aanschafprijs is slechts het topje van de ijsberg.
                </p>
                <p>
                    De echte kosten zitten onder water: uw energierekening over de komende 15 jaar. Een goedkope warmtepomp verbruikt vaak ongemerkt veel meer stroom, waardoor u elk jaar honderden euro&apos;s meer betaalt aan uw energieleverancier.
                </p>

                {/* Infographic 1: Iceberg Cost */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-96 w-full">
                        <Image
                            src="/blogs/iceberg-cost.png"
                            alt="Het IJsberg-effect: Aanschafprijs vs Energiekosten"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        De aanschaf is eenmalig, maar de energierekening komt elke maand terug.
                    </p>
                </div>

                {/* 2. Efficiency Drop */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Rendement als het écht koud is</h2>
                <p>
                    Op papier lijken de specificaties van budget warmtepompen vaak best aardig. Maar let op: die testen worden vaak gedaan bij +7°C buitentemperatuur.
                </p>
                <p>
                    Het grote verschil ontstaat pas als het vriest. Een kwaliteitswarmtepomp (A-merk) blijft ook bij -7°C efficiënt werken. Een budgetmodel zakt dan vaak door het ijs en gaat werken als een veredelde straalkachel (COP van 1 of 2). Precies op de dagen dat u de meeste warmte nodig heeft!
                </p>

                {/* Infographic 2: Efficiency Drop Graph */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src="/blogs/efficiency-drop.png"
                            alt="Grafiek: Rendement stort in bij kou"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Budgetmodellen verliezen hun kracht en efficiëntie zodra het echt koud wordt.
                    </p>
                </div>

                {/* 3. Noise Pollution */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Geluidsoverlast: Een Dure Ergernis</h2>
                <p>
                    Een ander punt waar op bezuinigd wordt is isolatie en de kwaliteit van de ventilator. Goedkope warmtepompen maken vaak aanzienlijk meer lawaai.
                </p>
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 my-6">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Wist u dat?</h4>
                    <p className="text-yellow-900/80">
                        Elke 3 decibel (dB) extra is een verdubbeling van de geluidsdruk. Een verschil van 6 of 10 dB is dus enorm.
                    </p>
                </div>
                <p>
                    Dit kan zorgen voor slapeloze nachten of ruzie met de buren. Om dit achteraf op te lossen, moet u vaak dure geluidskasten (suskasten) kopen van €1.000 tot €2.000, waarmee uw prijsvoordeel direct verdampt is.
                </p>

                {/* Infographic 3: Noise Comparison */}
                <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <div className="relative h-64 sm:h-80 w-full">
                        <Image
                            src="/blogs/noise-comparison.png"
                            alt="Vergelijking Geluidsniveau"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <p className="text-center text-sm text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-medium">
                        Goedkoop is vaak lawaaiig. Let op het aantal decibellen (dB).
                    </p>
                </div>

                {/* 5. Conclusions */}
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusie: Kijk verder dan de prijs</h2>
                <p>
                    Laat u niet verleiden door een stuntprijs. Een warmtepomp schaft u aan voor 15 tot 20 jaar. Kies voor een merk met bewezen betrouwbaarheid, goede service en hoge efficiëntie bij lage temperaturen.
                </p>

                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Kies voor A-merken (Mitsubishi, Daikin, Panasonic, etc.).</li>
                    <li>Let op de SCOP-waarde (seizoensrendement), niet alleen de COP bij 7 graden.</li>
                    <li>Check het geluidsniveau in de specificaties.</li>
                </ul>

                <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Wilt u zekerheid?</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Wij vergelijken alleen kwaliteitswarmtepompen waar we zelf 100% achter staan. Zo komt u niet voor verrassingen te staan.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/advies" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-colors">
                            Advies op maat aanvragen
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}

