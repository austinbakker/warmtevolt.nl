export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Warmtevolt.nl</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Wij zijn gespecialiseerd in duurzame energieoplossingen. Met onze warmtepompen bespaart u op energiekosten en draagt u bij aan een groener milieu.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Snelle Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="/prijzen" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Prijzen</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Extra Services</a>
              </li>
              <li>
                <a href="/advies" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Adviesgesprek aanvragen</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                 <span className="text-green-500 mr-3">Email:</span>
                 <a href="mailto:info@Warmtevolt.nl" className="text-gray-400 hover:text-white text-sm">info@Warmtevolt.nl</a>
              </li>
              <li className="flex items-start">
                 <span className="text-green-500 mr-3">Telefoon:</span>
                 <a href="tel:+31645049399" className="text-gray-400 hover:text-white text-sm">+31 6 45049399</a>
              </li>
              <li className="flex items-start">
                 <span className="text-green-500 mr-3">KVK:</span>
                 <span className="text-gray-400 text-sm">92639739</span>
              </li>
              <li className="flex items-start">
                 <span className="text-green-500 mr-3">BTW:</span>
                 <span className="text-gray-400 text-sm">NL866124925B01</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6 text-white">Openingstijden</h3>
             <p className="text-gray-400 text-sm mb-2">Maandag - Vrijdag:</p>
             <p className="text-white font-medium mb-4">09:00 - 17:00</p>
             <p className="text-gray-400 text-sm mb-2">Zaterdag - Zondag:</p>
             <p className="text-white font-medium">Gesloten</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Warmtevolt.nl. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

