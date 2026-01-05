import Link from "next/link";

export default function Prijzen() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase mb-4 block">
            Tarieven
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Prijzen Warmtepompen
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Transparante prijzen voor duurzame oplossingen. Bekijk hieronder onze indicatieve tarieven.
          </p>
        </div>

        <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Vermogen
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Prijs (incl. BTW)
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  ISDE Subsidie*
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  model: "Basis Hybride",
                  type: "Lucht-water",
                  power: "4 kW",
                  price: "€ 4.000 - € 6.000",
                  subsidy: "€ 2.400",
                },
                {
                  model: "Standaard Hybride",
                  type: "Lucht-water",
                  power: "6 kW",
                  price: "€ 6.000 - € 8.000",
                  subsidy: "€ 2.700",
                },
                {
                  model: "All-Electric Ready",
                  type: "Lucht-water",
                  power: "8 kW",
                  price: "€ 9.000 - € 12.000",
                  subsidy: "€ 3.000",
                },
                {
                  model: "Premium All-Electric",
                  type: "Lucht-water",
                  power: "12 kW",
                  price: "€ 14.000 - € 18.000",
                  subsidy: "€ 3.750",
                }
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.power}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {item.subsidy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                * De subsidiebedragen zijn indicatief en afhankelijk van de actuele ISDE-regelgeving en meldcode.
                Dit is inclusief basis installatie. Voor een exacte prijsopgave kunt u een adviesgesprek aanvragen.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Wilt u een exacte berekening?</h3>
          <Link
            href="/advies"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none shadow-lg"
          >
            Vraag nu een adviesgesprek aan
          </Link>
        </div>
      </div>
    </div>
  );
}
