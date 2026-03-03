const clients = [
  { name: "Starbucks", logo: "/images/client-logos/starbucks.png" },
  { name: "Shake Shack", logo: "/images/client-logos/shakeshack.png" },
  { name: "Popeyes", logo: "/images/client-logos/popeyes.png" },
  { name: "S&R", logo: "/images/client-logos/s&r.png" },
  { name: "Century Pacific Food", logo: "/images/client-logos/cenpacfood.png" },
  { name: "Landers", logo: "/images/client-logos/landers.webp" },
  { name: "Mama Lou's", logo: "/images/client-logos/mamalous.png" },
  { name: "SaladStop!", logo: "/images/client-logos/saladstop.png" },
  { name: "Bizu Patisserie", logo: "/images/client-logos/bizu.png" },
  { name: "Kuya J", logo: "/images/client-logos/kuyaj.png" },
  { name: "Kitchen City", logo: "/images/client-logos/kitchencity.png" },
  { name: "The Palms Country Club", logo: "/images/client-logos/palms.png" },
  { name: "MacroAsia SATS", logo: "/images/client-logos/macroasia.png" },
  { name: "Rare Global Food", logo: "/images/client-logos/rareglobal.png" },
  { name: "Food Asia", logo: "/images/client-logos/foodasia.png" },
  { name: "ifoods Group", logo: "/images/client-logos/ifoods.png" },
  { name: "Consolidated Dairy", logo: "/images/client-logos/consolidated.png" },
  { name: "General's Lechon", logo: "/images/client-logos/generalslechon.png" },
  { name: "Jaric Marketing", logo: "/images/client-logos/jaric.png" },
  { name: "DVMS Foods", logo: "/images/client-logos/dvmsfoods.png" },
  { name: "Lexerl Trading", logo: "/images/client-logos/lexerltrading.png" },
  { name: "Flavorcrest", logo: "/images/client-logos/flavorcreset.png" },
  { name: "Manila Comisario", logo: "/images/client-logos/manilacomisario.png" },
  { name: "Frus Corp", logo: "/images/client-logos/fruscorp.png" },
  { name: "Educar Distribution", logo: "/images/client-logos/educar.png" },
  { name: "Wisk", logo: "/images/client-logos/WISK.png" },
  { name: "Rombe Philippines", logo: "/images/client-logos/rombe.png" },
  { name: "Unilogix", logo: "/images/client-logos/unilogix.png" },
  { name: "One Concord Food", logo: "/images/client-logos/oneconcord.png" },
  { name: "Manufoods Corp", logo: "/images/client-logos/manufoods.png" },
  { name: "Tablo Kitchen", logo: "/images/client-logos/tablo.jpg" },
  { name: "First Atkins Holdings", logo: "/images/client-logos/atkins.png" },
  { name: "My Own Meat Shop", logo: "/images/client-logos/myown.png" },
  { name: "Jeverps Manufacturing", logo: "/images/client-logos/jeverps.png" },
  { name: "Specialty Food", logo: "/images/client-logos/specialtyfood.png" },
  { name: "StartGrad", logo: "/images/client-logos/startgrad.png" },
];

export default function Clients() {
  const duplicated = [...clients, ...clients];

  return (
    <section className="py-20 bg-frost-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
      </div>

      {/* Scrolling carousel */}
      <div className="scroll-container relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-frost-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-frost-blue to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-scroll-left gap-5"
          style={{ width: "max-content" }}
        >
          {duplicated.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-48 h-28 flex items-center justify-center px-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
