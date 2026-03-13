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