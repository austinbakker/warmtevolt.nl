import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Blogs - Voordeligste-Warmtepomp.nl",
    description: "Lees onze laatste artikelen en onderzoeken over warmtepompen.",
};

export default function BlogsIndex() {
    return (
        <div className="bg-gray-50 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
                        Kennisbank
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Inzichten & Onderzoek
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Alles wat u moet weten over warmtepompen, besparingen en duurzaam wonen.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Post Card 1 */}
                    <Link
                        href="/blogs/waarom-kwakkelweer-lastiger-is-dan-vrieskou"
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-gray-200">
                            {/* Fallback pattern if no image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-2">
                                    Onderzoek
                                </span>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors leading-tight">
                                Warmtepomp Kopen? Waarom &quot;Kwakkelweer&quot; Lastiger is dan Vrieskou
                            </h2>
                            <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                                Uit recent onderzoek blijkt dat de echte uitdaging voor een warmtepomp niet de Siberische kou is, maar juist de typisch Nederlandse, mistige winterdag van 2 graden boven nul. Lees alles over de &quot;Defrost Trap&quot;.
                            </p>
                            <div className="mt-auto flex items-center text-green-600 font-bold">
                                Lees artikel
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Blog Post Card 2 */}
                    <Link
                        href="/blogs/thermodynamic-hydraulic-enhancement-radiator-systems"
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden bg-gray-200">
                            <div className="absolute inset-0 bg-white group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <Image
                                    src="/blogs/forced-convection.png"
                                    alt="Forced Convection Diagram"
                                    fill
                                    className="object-contain p-8"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2">
                                    Bespaartip
                                </span>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors leading-tight">
                                Radiatorventilatoren: Het Geheime Wapen voor uw Warmtepomp
                            </h2>
                            <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                                Krijgt u uw huis niet warm met de warmtepomp? Ontdek hoe simpele radiatorventilatoren uw oude radiatoren geschikt maken voor lage temperaturen en uw energierekening verlagen.
                            </p>
                            <div className="mt-auto flex items-center text-green-600 font-bold">
                                Lees artikel
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Placeholder for future posts */}
                    <div className="bg-gray-100 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                        <span className="text-gray-400 font-medium">Binnenkort meer artikelen...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
