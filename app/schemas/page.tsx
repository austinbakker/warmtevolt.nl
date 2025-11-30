"use client";

import { useState } from "react";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type SchemaType = "hybrid" | "hybrid_buffer" | "all_electric" | "stand_alone";

interface SchemaOption {
  id: SchemaType;
  title: string | React.ReactNode;
  description: string;
  image?: string;
}

const Tooltip = ({
  children,
  text,
  className = "group relative inline-block border-b border-dotted border-gray-500 cursor-help",
  position = "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
}: {
  children: React.ReactNode;
  text: string;
  className?: string;
  position?: string;
}) => (
  <div className={className}>
    {children}
    <span
      className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute ${position} px-3 py-2 bg-gray-900 text-white text-xs rounded-md w-48 text-center z-50 pointer-events-none shadow-lg`}
    >
      {text}
      {position.includes("bottom-full") && (
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
      )}
    </span>
  </div>
);

const options: SchemaOption[] = [
  {
    id: "hybrid",
    title: "Hybride opstelling",
    description: "Een warmtepomp gecombineerd met uw huidige CV-ketel.",
    image: "/schemas/hybrid.png",
  },
  {
    id: "hybrid_buffer",
    title: (
      <span>
        Hybride met{" "}
        <Tooltip text="Meestal wordt een buffervat van 50 of 100 liter aanbevolen.">
          buffervat
        </Tooltip>
      </span>
    ),
    description: "Hybride opstelling uitgebreid met een extra buffervat voor meer efficiëntie.",
    image: "/schemas/hybrid.png",
  },
  {
    id: "all_electric",
    title: "All-electric",
    description: "Volledig elektrische warmtepomp, geen gasaansluiting meer nodig.",
    image: "/schemas/all-electric.png",
  },
  {
    id: "stand_alone",
    title: "Stand-alone systeem",
    description: "Een warmtepomp buiten en een binnenunit (buiten & binnen).",
  },
];

export default function SchemasPage() {
  const [selectedSchema, setSelectedSchema] = useState<SchemaType>("hybrid");

  const selectedOption = options.find((o) => o.id === selectedSchema);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Warmtepomp <span className="text-green-500">Schema's</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Bekijk de verschillende opstellingen en kies wat bij uw situatie past.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Selection */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Kies uw opstelling</h2>
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedSchema(option.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start space-x-3 ${
                    selectedSchema === option.id
                      ? "border-green-500 bg-green-50 ring-2 ring-green-200 ring-opacity-50"
                      : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`mt-1 flex-shrink-0 ${
                      selectedSchema === option.id ? "text-green-500" : "text-gray-300"
                    }`}
                  >
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${
                        selectedSchema === option.id ? "text-green-700" : "text-gray-900"
                      }`}
                    >
                      {option.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        selectedSchema === option.id ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {option.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full min-h-[600px] flex flex-col relative overflow-hidden shadow-inner">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full">
                {/* Header inside the card */}
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {selectedOption?.title}
                  </h3>
                  <p className="text-gray-600">{selectedOption?.description}</p>
                </div>

                {/* Image or Placeholder Area */}
                <div className="flex-grow bg-white p-6 flex items-center justify-center min-h-[300px]">
                  {selectedOption?.image ? (
                    <div className="relative w-full h-full min-h-[300px] max-h-[500px]">
                      {selectedSchema === "hybrid_buffer" ? (
                        <Tooltip
                          text="Meestal wordt een buffervat van 50 of 100 liter aanbevolen."
                          className="w-full h-full relative group cursor-help"
                          position="bottom-4 left-1/2 transform -translate-x-1/2"
                        >
                          <Image
                            src={selectedOption.image}
                            alt={`Schema voor ${
                              typeof selectedOption.title === "string"
                                ? selectedOption.title
                                : selectedOption.id
                            }`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                          />
                        </Tooltip>
                      ) : (
                        <Image
                          src={selectedOption.image}
                          alt={`Schema voor ${
                            typeof selectedOption.title === "string"
                              ? selectedOption.title
                              : selectedOption.id
                          }`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      )}
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <div className="h-32 w-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">⚙️</span>
                      </div>
                      <p className="text-gray-500 font-medium">
                        Technische tekening beschikbaar op aanvraag
                      </p>
                    </div>
                  )}
                </div>

                {/* Specs Footer */}
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3">
                    Kenmerken
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    {selectedSchema === "hybrid" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Werkt samen met CV-ketel</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Geschikt voor radiatoren</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Besparing tot 70% op gas</span>
                        </div>
                      </>
                    )}
                    {selectedSchema === "hybrid_buffer" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Inclusief buffervat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Stabielere werking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Hogere efficiëntie</span>
                        </div>
                      </>
                    )}
                    {selectedSchema === "all_electric" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>100% Elektrisch</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Verwarmt ook tapwater</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Geen vastrecht kosten gas</span>
                        </div>
                      </>
                    )}
                    {selectedSchema === "stand_alone" && (
                      <>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Split-unit systeem</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Flexibele plaatsing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          <span>Hoog rendement</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-8 text-xs text-gray-400">
                * Schema ter illustratie
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
