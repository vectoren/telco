export const COMPANY_INFO = {
  name: 'Telco',
  email: 'info@telco.pl',
  phone: '+48 123 456 789',
  address: 'ul. Technologiczna 1, 00-001 Warszawa',
  socials: {
    github: 'https://github.com/telco-it'
  }
};

export const HERO_TITLES = [
  "Projektujemy",
  "Montujemy",
  "Serwisujemy"
];

export const PRICING_DATA = [
  {
    id: 'consulting',
    title: 'Audyt & Projekt',
    price: '800 PLN',
    period: 'jednorazowo',
    description: 'Analiza istniejącej infrastruktury i plan modernizacji.',
    features: ['Inwentaryzacja sprzętu', 'Testy przepustowości', 'Mapa sieci logicznej', 'Rekomendacje bezpieczeństwa'],
    isFeatured: false,
    cta: 'Zamów audyt'
  },
  {
    id: 'basic',
    title: 'Start-up Connect',
    price: '1 500 PLN',
    period: 'instalacja',
    description: 'Fundamenty sieciowe dla małych zespołów (do 10 osób).',
    features: ['Router MikroTik/Ubiquiti', 'Switch POE 16-port', '2 punkty WiFi 6', 'Okablowanie kat. 6', 'Podstawowy VPN'],
    isFeatured: true,
    cta: 'Wybierz Start'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Core',
    price: '4 900 PLN',
    period: 'instalacja',
    description: 'Pełna moc i bezpieczeństwo dla wymagającego biznesu.',
    features: ['Szafa RACK 42U', 'Segmentacja VLAN', 'Firewall Hardware (HA)', 'Monitoring środowiskowy', 'Certyfikacja sieci'],
    isFeatured: false,
    cta: 'Skontaktuj się'
  },
  {
    id: 'maintenance',
    title: 'SLA Support',
    price: '1000 PLN',
    period: 'miesięcznie',
    description: 'Stała opieka techniczna i gwarancja ciągłości pracy.',
    features: ['Czas reakcji do 2h', 'Zapasowy sprzęt (NBD)', 'Backup konfiguracji', 'Aktualizacje firmware', 'Nielimitowany helpdesk'],
    isFeatured: false,
    cta: 'Zadbaj o sieć'
  },
  {
    id: 'home-single',
    title: 'Dom Jednorodzinny',
    price: '900 PLN',
    period: 'instalacja',
    description: 'Stabilne WiFi i sieć LAN w każdym pokoju Twojego domu.',
    features: ['Okablowanie do 5 pkt', 'Konfiguracja Routera', 'System Mesh WiFi', 'Bezpieczna sieć gościnna', '+100zł Za dodatkowy punkt'],
    isFeatured: true,
    cta: 'Wybierz dla domu'
  },
  {
    id: 'home-multi',
    title: 'Budynki Wielorodzinne',
    price: 'Wycena indywidualna',
    period: 'projekt',
    description: 'Infrastruktura teletechniczna dla deweloperów i wspólnot.',
    features: ['Piony teletechniczne', 'Systemy Domofonowe IP', 'Monitoring wizyjny', 'Administracja dostępem'],
    isFeatured: false,
    cta: 'Zapytaj o ofertę'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Connect',
    price: '1 800 PLN',
    period: 'konfiguracja',
    description: 'Integracja urządzeń IoT w jedną, bezpieczną sieć.',
    features: ['Konfiguracja HUB-ów', 'Zabezpieczenie urządzeń IoT', 'Zdalny dostęp VPN', 'Integracja z Home Assistant'],
    isFeatured: false,
    cta: 'Zautomatyzuj dom'
  },
  {
    id: 'free-quote',
    title: 'Darmowa Wycena',
    price: '0 PLN',
    period: 'bez zobowiązań',
    description: 'Przyjedziemy, sprawdzimy i zaproponujemy najlepsze rozwiązanie.',
    features: ['Wizyta lokalna (do 30km)', 'Pomiary sygnału WiFi', 'Dobór sprzętu', 'Kosztorys w 24h'],
    isFeatured: false,
    cta: 'Umów wizytę'
  }
];

export const UNIT_PRICING = [
  {
    category: 'Sieci LAN & Światłowody',
    items: [
      { name: 'Wykonanie punktu sieciowego (RJ45 Cat6a)', price: '120 - 180 PLN' },
      { name: 'Przyłącze światłowodowe (spawanie + puszka)', price: '250 PLN' },
      { name: 'Certyfikacja punktu sieciowego (raport)', price: '25 PLN / pkt' },
      { name: 'Montaż koryta kablowego / rurki PCV', price: '15 PLN / mb' }
    ]
  },
  {
    category: 'Urządzenia & RACK',
    items: [
      { name: 'Montaż i uzbrojenie szafy RACK (do 12U)', price: '400 PLN' },
      { name: 'Montaż i uzbrojenie szafy RACK (powyżej 24U)', price: '800 PLN' },
      { name: 'Konfiguracja Routera / Firewall (podstawowa)', price: '300 PLN' },
      { name: 'Montaż i konfiguracja Access Pointa', price: '150 PLN / szt' }
    ]
  },
  {
    category: 'Monitoring & Security',
    items: [
      { name: 'Montaż kamery IP (wewn./zewn.)', price: '200 PLN / szt' },
      { name: 'Konfiguracja rejestratora NVR', price: '350 PLN' },
      { name: 'Uruchomienie zdalnego podglądu (VPN)', price: '150 PLN' }
    ]
  },
  {
    category: 'Serwis & Konsultacje',
    items: [
      { name: 'Godzina pracy inżyniera (on-site)', price: '200 PLN' },
      { name: 'Zdalna pomoc techniczna (rozliczenie co 30 min)', price: '100 PLN' },
      { name: 'Dojazd do klienta (powyżej 30km)', price: '2.50 PLN / km' },
      { name: 'Ekspresowa naprawa (reakcja < 4h)', price: '+50% stawki' }
    ]
  }
];

export const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'Sieć LAN w Biurowcu klasy A',
    category: 'Infrastruktura',
    client: 'SkyTower Business Center',
    image: 'assets/portfolio/office-network.jpg',
    tags: ['RACK 42U', 'Cat 7', 'Certyfikacja'],
    slug: 'siec-lan-biurowiec',
    fullDescription: 'Kompleksowe wykonanie sieci strukturalnej obejmującej 150 punktów logicznych w standardzie Cat 7. Projekt obejmował montaż dwóch szaf RACK 42U, wykonanie magistrali światłowodowej między piętrami oraz pełną certyfikację okablowania miernikiem Fluke.'
  },
  {
    id: 2,
    title: 'WiFi 6 Mesh w Rezydencji',
    category: 'Smart Home',
    client: 'Klient Indywidualny',
    image: 'assets/portfolio/home-wifi.jpg',
    tags: ['WiFi 6', 'Ubiquiti', 'Roaming'],
    slug: 'wifi-mesh-rezydencja',
    fullDescription: 'Wdrożenie profesjonalnego systemu bezprzewodowego w domu o powierzchni 450m2. Wykorzystano 6 punktów dostępowych WiFi 6 zintegrowanych w technologii Mesh, co zapewniło nieprzerwany roaming i pełną przepustowość łącza 1Gbps w każdym pomieszczeniu oraz ogrodzie.'
  },
  {
    id: 3,
    title: 'Monitoring IP i System Alarmowy',
    category: 'Security',
    client: 'Logistyka Polska Sp. z o.o.',
    image: 'assets/portfolio/security-warehouse.jpg',
    tags: ['4K IP', 'Dahua', 'VCA'],
    slug: 'monitoring-magazyn-logistyczny',
    fullDescription: 'Instalacja systemu monitoringu wizyjnego opartego na 24 kamerach 4K z analityką obrazu (AI). System wykrywa wtargnięcia w strefy zastrzeżone i automatycznie powiadamia ochronę, redukując liczbę fałszywych alarmów o 90%.'
  },
  {
    id: 4,
    title: 'Światłowód w Budynku Wielorodzinnym',
    category: 'Infrastruktura',
    client: 'Deweloper Nova',
    image: 'assets/portfolio/fiber-apartment.jpg',
    tags: ['FTTH', 'Spawanie', 'Splittery'],
    slug: 'swiatlowod-osiedle-nova',
    fullDescription: 'Wykonanie pionów teletechnicznych i doprowadzenie światłowodu (FTTH) do 48 lokali mieszkalnych. Prace obejmowały spawanie w przełącznicach głównych, montaż gniazd abonenckich oraz pomiary tłumienia toru optycznego.'
  },
  {
    id: 5,
    title: 'Modernizacja Serwerowni Banku',
    category: 'Enterprise',
    client: 'Bank Regionalny',
    image: 'assets/portfolio/server-room.jpg',
    tags: ['Firewall', 'HA Cluster', 'UPS'],
    slug: 'modernizacja-serwerowni-bank',
    fullDescription: 'Audyt i wymiana kluczowych urządzeń sieciowych w infrastrukturze bankowej. Wdrożenie klastra wysokiej dostępności (High Availability) opartego na urządzeniach FortiGate oraz zabezpieczenie zasilania systemem redundantnych UPS-ów.'
  },
  {
    id: 6,
    title: 'Sieć Hybrydowa dla Hotelu',
    category: 'Hotelarstwo',
    client: 'Grand Hotel Spa',
    image: 'assets/portfolio/hotel-network.jpg',
    tags: ['VLAN', 'Portal Gościa', 'QoS'],
    slug: 'siec-hybrydowa-hotel',
    fullDescription: 'Separacja ruchu sieciowego dla personelu i gości hotelowych przy użyciu protokołu VLAN. Wdrożenie Captive Portal z integracją mediów społecznościowych oraz priorytetyzacja ruchu (QoS) dla wideokonferencji w strefie biznesowej.'
  },
  {
    id: 7,
    title: 'Monitoring Osiedla Zamkniętego',
    category: 'Security',
    client: 'Wspólnota Mieszkaniowa Zielna',
    image: 'assets/portfolio/housing-cctv.jpg',
    tags: ['PTZ', 'ANPR', 'Monitoring'],
    slug: 'monitoring-osiedle-zielna',
    fullDescription: 'System nadzoru osiedla obejmujący kamery obrotowe PTZ oraz system rozpoznawania tablic rejestracyjnych (ANPR) przy bramach wjazdowych, zintegrowany z systemem automatyki bramowej.'
  },
  {
    id: 8,
    title: 'Instalacja Smart Office',
    category: 'Smart Office',
    client: 'TechHub Coworking',
    image: 'assets/portfolio/smart-office.jpg',
    tags: ['KNX', 'Audio Multiroom', 'Dali'],
    slug: 'smart-office-techhub',
    fullDescription: 'Automatyzacja oświetlenia i klimatyzacji w nowoczesnej przestrzeni coworkingowej. Zastosowanie protokołu KNX pozwoliło na redukcję kosztów energii o 30% oraz centralne zarządzanie wszystkimi instalacjami z poziomu tabletu.'
  }
];