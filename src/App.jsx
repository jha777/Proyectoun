import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Store, Coffee, Shirt, Wrench, Sparkles, Car, HeartPulse, GraduationCap, Music, Camera, BookOpen, Plane, Dumbbell, Flower, Building2, BedDouble, Bus, ShoppingCart, Croissant, Pill, PawPrint, Box, Laptop, Utensils, Home, Gem, Bike, X, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const cities = ['Todas', 'Florida', 'Cali', 'Miranda', 'Medellín', 'Palmira', 'Candelaria', 'Villagorgona', 'Bucaramanga', 'Bogotá',];
// --- MOCK DATA: Simula los negocios que obtendrías de tu base de datos ---
const mockBusinesses = [
  {
    id: 1,
    name: 'KAMPFER Streaming',
    category: 'Entretenimiento',
    city: 'Cali',
    logoUrl: '/images/negocios/logokamfers.png',
    description: 'KAMPFER Streaming te conecta con tus plataformas favoritas de forma segura, económica y sin complicaciones. Suscripciones 100% estables, soporte personalizado y acceso inmediato al mejor entretenimiento.',
    websiteUrl: 'https://kampferstreaming.shop/',
  },
  {
    id: 2,
    name: 'Fabrica de Gorras VC Caps',
    category: 'Tiendas de Ropa',
    city: 'Medellín',
    logoUrl: '/images/negocios/logovccaps.png',
    description: 'Descubre nuestra increíble colección de gorras. Diseños exclusivos, fabricación propia y ventas al por menor y mayor. ¡Tu estilo, nuestra pasión!',
    websiteUrl: 'https://www.fabricadegorrasvc.com/',
  },
  {
    id: 3,
    name: 'JEFFTECH - Diseño Web',
    category: 'Servicios',
    city: 'Florida',
    logoUrl: '/images/negocios/logojefftech.png',
    description: 'Tu socio estratégico para la transformación digital. Creamos páginas web, tiendas online y soluciones de software a medida para que tu negocio crezca en el mundo digital.',
    websiteUrl: 'https://wa.me/573225212078',
  },
  {
    id: 4,
    name: 'Droguería Alemana',
    category: 'Droguerías',
    city: 'Medellín',
    logoUrl: '/images/negocios/drogueriaalemana.png',
    description: 'Salud | Bienestar | Cuidado - 🕒 24 horas | Pensado en tu salud - 💻 Compra online - 📱 Pide por WhatsApp',
    websiteUrl: 'https://www.tudrogueriavirtual.com/',
  },
  {
    id: 5,
    name: 'WohlPet - Club y Tienda Virtual para Mascotas.',
    category: 'Mascotas',
    city: 'Cali',
    logoUrl: '/images/negocios/wolhpet.png',
    description: 'Encuentra en WohlPet, alimento para perro, alimento para gato, arena para gatos, juguetes, productos antipulgas.',
    websiteUrl: 'https://www.wohlpet.com/',
  },
  {
    id: 6,
    name: 'Meik',
    category: 'Salud y Belleza',
    city: 'Medellín',
    logoUrl: '/images/negocios/meik.png',
    description: 'Maquillaje Dermatológico con protección solar SPF15. Salud y protección para tu piel.',
    websiteUrl: 'https://meik.com.co/',
  },
    {
    id: 7,
    name: 'PAULA VELEZ',
    category: 'Tiendas de Ropa',
    city: 'Bucaramanga',
    logoUrl: '/images/negocios/paulavelez.png',
    description: '¿Sabias que manejamos los tenis más lindos en cuero?😻 más de 20.000 clientes felices en todo el mundo.',
    websiteUrl: 'https://paulavelez.com.co/',
  },
  {
    id: 8,
    name: 'Automóvil Club de Colombia',
    category: 'Automotriz',
    city: 'Cali',
    logoUrl: '/images/negocios/automovilclub.png',
    description: 'Automóvil Club de Colombia Cali: Formamos conductores responsables, ofrecemos servicio de asistencia 24 horas, te asesoramos en trámites de tránsito, prevención vial y emergencias vehiculares 🚗',
    websiteUrl: 'https://acc-cali.com/',
  },
  {
    id: 9,
    name: 'GTech Systems - Venta y Soporte Técnico Computadores ',
    category: 'Tecnología',
    city: 'Cali',
    logoUrl: '/images/negocios/gtech.png',
    description: '¡Los No. 1 en PC Gaming y Alto Rendimiento! en Colombia.',
    websiteUrl: 'https://gtech.systems/',
  },
  {
    id: 10,
    name: 'Lucho Perfumería',
    category: 'Salud y Belleza',
    city: 'Bucaramanga',
    logoUrl: '/images/negocios/luchoperfumeria.png',
    description: 'Lucho Perfumería es tu destino en Bucaramanga para encontrar las mejores fragancias.',
    websiteUrl: 'https://luchoperfumeria.com.co/',
  },
  {
    id: 11,
    name: 'Smart Muscle Lab ',
    category: 'Gimnasios',
    city: 'Cali',
    logoUrl: '/images/negocios/smartmuscle.png',
    description: 'Creado por científicos, mejorado por deportistas.',
    websiteUrl: 'https://smartmuscle.com.co/',
  },
  {
    id: 12,
    name: 'GOSS Accesorios',
    category: 'Mascotas',
    city: 'Bogotá',
    logoUrl: '/images/negocios/gossacce.png',
    description: 'Accesorios para el adiestramiento de tu mascota y mucho mas.',
    websiteUrl: 'https://www.gossaccesorios.com/',
  },
  {
    id: 13,
    name: 'LILÉ',
    category: 'Hogar',
    city: 'Bogotá',
    logoUrl: '/images/negocios/lile.png',
    description: 'Te ofrecemos una gran variedad de productos para la cama como juegos de sábanas y de duvet, en micro-fibra fina y algodón, cobijas confeccionadas en una suave piel de conejo sintética, plumones, almohadas y muchos mas productos.',
    websiteUrl: 'https://casalile.com/',
  },
  {
    id: 14,
    name: 'Multi Packing',
    category: 'Otros',
    city: 'Bogotá',
    logoUrl: '/images/negocios/multipack.png',
    description: 'Empresa dedicada a la fabricación de productos plásticos y metálicos, que brindan soluciones en organización y logística industrial.',
    websiteUrl: 'https://www.multi-packing.com.co/',
  },
  {
    id: 15,
    name: 'La Tienda de la Plateria',
    category: 'Joyerías',
    city: 'Medellín',
    logoUrl: '/images/negocios/plateria.png',
    description: '•Mayorista •Minorista°• Envíos locales y nacionales',
    websiteUrl: 'https://www.latiendadelaplateria.com/',
  },
  {
    id: 16,
    name: 'Hotel Poblado Alejandría',
    category: 'Hoteles',
    city: 'Medellín',
    logoUrl: '/images/negocios/hotelpoblado.png',
    description: 'Ubicado en el corazón de la ciudad de Medellín, el Hotel Poblado Alejandría es la mejor elección para hospedarte y sentirte como en casa.',
    websiteUrl: 'https://hotelpobladoalejandria.com/',
  },
  {
    id: 17,
    name: 'OWL Tienda Polos',
    category: 'Tiendas de Ropa',
    city: 'Bogotá',
    logoUrl: '/images/negocios/tiendapolos.png',
    description: 'Tienda de Ropa Para Caballero - Envios a Toda Colombia - Ofrecemos Pago Contra/Entrega - Calidad Y Moda',
    websiteUrl: 'https://www.tiendaowl.com/',
  },
  {
    id: 18,
    name: 'Select Store',
    category: 'Tecnología',
    city: 'Medellín',
    logoUrl: '/images/negocios/seelect.png',
    description: '𝗧𝗘𝗖𝗟𝗔𝗗𝗢𝗦 𝗠𝗘𝗖Á𝗡𝗜𝗖𝗢𝗦 & 𝗔𝗖𝗖𝗘𝗦𝗢𝗥𝗜𝗢𝗦 𝗗𝗘𝗦𝗞 𝗦𝗘𝗧𝗨𝗣',
    websiteUrl: 'https://selectonline.co/',
  },
  {
    id: 19,
    name: 'Janus Ltda Oficial',
    category: 'Tecnología',
    city: 'Cali',
    logoUrl: '/images/negocios/janus.png',
    description: 'Innovamos juntos. 🌟 Inspírate y crece con JANUS LTDA',
    websiteUrl: 'https://www.janus.com.co/',
  },
  {
    id: 20,
    name: 'Sofia Brown Art',
    category: 'Hogar',
    city: 'Bucaramanga',
    logoUrl: '/images/negocios/sofiabrown.png',
    description: 'Cuadros Personalizados en Lienzo. Sofia Brown. Toma tu fotografía y la convierte en arte. 🖼️ 🎨',
    websiteUrl: 'https://www.sofiabrown.com.co/',
  },
  {
    id: 21,
    name: 'AnimalPez Colombia',
    category: 'Tiendas de Ropa',
    city: 'Medellín',
    logoUrl: '/images/negocios/animalpez.png',
    description: '🔥 Indumentaria para Deportes al aire libre ✈Importador 🐍Carnadas de Pesca 📲Tienda Virtual',
    websiteUrl: 'https://animalpez.com/',
  },
  {
    id: 22,
    name: 'ZonaBiker Cascos, Llantas y Accesorios ',
    category: 'Motos',
    city: 'Bucaramanga',
    logoUrl: '/images/negocios/zonabiker.png',
    description: '📍ZONABIKER LA 21📍- 📦Envíos a toda Colombia📦',
    websiteUrl: 'https://zonabiker.com.co/',
  },
  {
    id: 23,
    name: 'La Tienda de Audio',
    category: 'Tecnología',
    city: 'Bogotá',
    logoUrl: '/images/negocios/tiendaaudio.png',
    description: '🔈¡Todo en Soluciones de Audio e Iluminación para Dj, Productores Musicales y mucho más!',
    websiteUrl: 'https://latiendadeaudio.com/',
  },
  {
    id: 24,
    name: 'OLYMPUS HIGH LEVEL DOGS',
    category: 'Mascotas',
    city: 'Bogotá',
    logoUrl: '/images/negocios/olimpus.png',
    description: 'Somos OLYMPUS High Level Dogs una empresa Colombiana dedicada al diseño, fabricación y comercialización de articulos para mascotas',
    websiteUrl: 'https://olympushld.com/',
  },
  {
    id: 25,
    name: 'PENGY',
    category: 'Gimnasios',
    city: 'Bogotá',
    logoUrl: '/images/negocios/pengy.png',
    description: 'Botellas térmicas de acero inoxidable que mantienen tus bebidas frías o calientes por más de 24 horas',
    websiteUrl: 'https://www.pengy.com.co/',
  },
  {
    id: 26,
    name: 'Peace of Mind',
    category: 'Tiendas de Ropa',
    city: 'Cali',
    logoUrl: '/images/negocios/peceofmind.png',
    description: 'Peace of Mind nace del sueño de una caleña llena de fuerza y energía que tuvo el deseo de crear prendas donde la voz a través de los mensajes se transformara en piezas coleccionables con valor emocional y sensorial.',
    websiteUrl: 'https://www.peaceofmind.com.co/',
  },
  {
    id: 27,
    name: 'Mónica Suárez Swimwear',
    category: 'Tiendas de Ropa',
    city: 'Cali',
    logoUrl: '/images/negocios/monicasuarez.png',
    description: 'Creamos Bikinis únicos y de la mejor calidad, tienes la opción de personalizarlos, ventas al por mayor.',
    websiteUrl: 'https://monicasuarezswimwear.co/',
  },
  {
    id: 28,
    name: 'SumiMascotas',
    category: 'Mascotas',
    city: 'Cali',
    logoUrl: '/images/negocios/sumimascotas.png',
    description: 'Distribución y venta de productos para mascotas.',
    websiteUrl: 'https://sumimascotas.com/',
  },
  {
    id: 29,
    name: 'Rojo Joyería Colombia ',
    category: 'Joyerías',
    city: 'Cali',
    logoUrl: '/images/negocios/rojojoyeria.png',
    description: 'Pasión y elegancia para tu estilo único. Asesoría personalizada por videollamada. Envíos nacionales',
    websiteUrl: 'https://www.rojojoyeria.com/',
  },
  {
    id: 30,
    name: 'V-TWO',
    category: 'Tiendas de Ropa',
    city: 'Bogotá',
    logoUrl: '/images/negocios/vdos.png',
    description: '¡Tú estilo sin límites con V-TWO! Importadores, línea casual y urbana para tu negocio.',
    websiteUrl: 'https://vtwoshop.com/',
  },
  {
    id: 31,
    name: 'Habibi Alfombras',
    category: 'Hogar',
    city: 'Bogotá',
    logoUrl: '/images/negocios/habibi.png',
    description: 'Alfombras de Turquía, antialérgicas, te asesoramos, cambia y decora tus espacios.',
    websiteUrl: 'https://habibialfombrasturcas.com/',
  },
  {
    id: 32,
    name: 'Audiocentro Colombia',
    category: 'Tecnología',
    city: 'Bogotá',
    logoUrl: '/images/negocios/audiocentro.png',
    description: 'El centro especializado más completo en audio, iluminación artística e instrumentos musicales.',
    websiteUrl: 'https://www.audiocentro.com.co/',
  },
  {
    id: 33,
    name: 'Publica tu Negocio',
    category: 'Tecnología',
    city: 'Florida',
    logoUrl: '/images/negocios/publicatunegocio.png',
    description: 'TUKU Express es la WEB donde descubres emprendimientos Colombianos por Ciudad/Categoría y entras directo a sus páginas web.',
    websiteUrl: 'https://wa.me/573225212078?text=Hola,%20quiero%20Publicar%20mi%20Negocio',
  },
  {
    id: 34,
    name: 'Publica tu Negocio',
    category: 'Tecnología',
    city: 'Florida',
    logoUrl: '/images/negocios/publicatunegocio.png',
    description: 'TUKU Express es la WEB donde descubres emprendimientos Colombianos por Ciudad/Categoría y entras directo a sus páginas web.',
    websiteUrl: 'https://wa.me/573225212078?text=Hola,%20quiero%20Publicar%20mi%20Negocio',
  },
];

const categories = [
  { name: 'Todos', icon: Store },
  { name: 'Restaurantes', icon: Utensils },
  { name: 'Panaderías', icon: Croissant },
  { name: 'Tiendas de Ropa', icon: Shirt },
  { name: 'Servicios', icon: Wrench },
  { name: 'Hogar', icon: Home },
  { name: 'Tecnología', icon: Laptop },
  { name: 'Artesanías', icon: Sparkles },
  { name: 'Joyerías', icon: Gem },
  { name: 'Turismo', icon: Plane },
  { name: 'Markets', icon: ShoppingCart },
  { name: 'Hoteles', icon: BedDouble },
  { name: 'Droguerías', icon: Pill },
  { name: 'Salud y Belleza', icon: HeartPulse },
  { name: 'Spa', icon: Flower },
  { name: 'Mascotas', icon: PawPrint },
  { name: 'Automotriz', icon: Car },
  { name: 'Motos', icon: Bike },
  { name: 'Transporte', icon: Bus },
  { name: 'Inmobiliarias', icon: Building2 },
  { name: 'Educación', icon: GraduationCap },
  { name: 'Librerías', icon: BookOpen },
  { name: 'Entretenimiento', icon: Music },
  { name: 'Fotografía', icon: Camera },
  { name: 'Gimnasios', icon: Dumbbell },
  { name: 'Otros', icon: Box },
];

// --- Componente de Tarjeta de Negocio ---
const BusinessCard = ({ business, onSelect }) => (
  <div 
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
    onClick={() => onSelect(business)}
  >
    <img className="h-auto w-full object-cover" src={business.logoUrl} alt={`Logo de ${business.name}`} />
    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-800">{business.name}</h3>
      <p className="text-sm font-semibold text-blue-600">{business.category}</p>
      <p className="text-sm font-normal text-black">{business.city}</p>
    </div>
  </div>
);

// --- Componente de Modal con Detalles del Negocio ---
const BusinessModal = ({ business, onClose }) => {
  if (!business) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="relative">
          <img className="h-auto w-full object-cover rounded-t-2xl" src={business.logoUrl} alt={`Logo de ${business.name}`} />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-blue-700 rounded-full p-2 text-white hover:bg-white hover:text-black transition-all"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-wide">{business.category}</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-3">{business.name}</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">{business.description}</p>
          <a 
            href={business.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Visitar Sitio Web
            <ArrowUpRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};


// --- Componente Principal de la App ---
export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
  const [selectedCity, setSelectedCity] = React.useState('Todas');
  

  const filteredBusinesses = mockBusinesses.filter(business => {
    const matchesCategory = selectedCategory === 'Todos' || business.category === selectedCategory;
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          business.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'Todas' || business.city === selectedCity; 
    return matchesCategory && matchesSearch && matchesCity;
  });
  
  React.useEffect(() => {
    // Cierra el modal si se presiona la tecla Escape
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setSelectedBusiness(null);
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      {/* --- Encabezado --- */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <Helmet>
          <title>TukuExpress - La Vitrina Digital de los Emprendimientos de Colombia</title>
          <link rel="icon" href="/favicon.png" type="image/png" />
          <meta name="description" content="Descubre emprendimientos en Colombia por ciudad y categoría. TukuExpress es la vitrina digital de los negocios locales." />
          <meta name="keywords" content="emprendimientos, Colombia, negocios locales, pymes, tukuexpress, JEFFTECH" />
          <meta name="author" content="JEFFTECH" />
          <meta property="og:title" content="TukuExpress" />
          <meta property="og:description" content="Conoce los mejores emprendimientos de Colombia. Apoya el talento local en un solo lugar." />
          <meta property="og:image" content="/images/logo.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tukuexpress.shop" />
          {/* 👇 Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-MD0NE760TV"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MD0NE760TV');
            `}
          </script>
        </Helmet>
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo rectangular */}
            <img
              src="/images/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
            {/* Subtítulo */}
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              La Vitrina Digital de los emprendimientos de Colombia
            </p>
          </div>
    
          <a
            href="https://wa.me/573116596456"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-0 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Publicar Mi Negocio
          </a>
        </div>
      </header>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <a
            href="https://wa.me/573116596456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/bannertukudos.png" // Usa aquí la imagen que subiste o coloca tu propia ruta
              alt="Publica tu negocio en este espacio"
              className="w-full h-auto object-contain"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://wa.me/573225212078"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/bannerjeffte.png" // Usa aquí la imagen que subiste o coloca tu propia ruta
              alt="Publica tu negocio en este espacio"
              className="w-full h-auto object-contain"
            />
          </a>
        </SwiperSlide>
        {/* Puedes duplicar este bloque para más banners */}
      </Swiper>

      {/* --- Contenido Principal --- */}
      <main className="container mx-auto p-4 md:p-8 flex-1 pb-24">
        {/* --- Barra de Búsqueda y Filtros --- */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            {/* 🔍 Búsqueda */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Busca un negocio o categoría..."
                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* 🌍 Estilizado: Filtro por ciudad */}
            <div className="relative inline-block w-full sm:w-auto">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {/* ícono de flecha personalizado */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Botones de categorías */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                  selectedCategory === category.name 
                  ? 'bg-blue-700 text-white shadow' 
                  : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon size={16} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>


        {/* --- Cuadrícula de Negocios --- */}
        {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBusinesses.map(business => (
                <BusinessCard key={business.id} business={business} onSelect={setSelectedBusiness} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700">No se encontraron resultados</h3>
                <p className="text-gray-500 mt-2">Intenta con otra búsqueda o categoría.</p>
            </div>
          )
        }
        
      </main>
      
      {/* --- Footer --- */}
      <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-4 z-40 shadow-md">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TukuExpress por{' '}
          <a
            href="https://wa.me/573225212078"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-200 font-semibold"
          >
            JEFFTECH
          </a>. Todos los derechos reservados.
        </p>
      </footer>

      {/* --- Modal --- */}
      <BusinessModal business={selectedBusiness} onClose={() => setSelectedBusiness(null)} />
    </div>
  );
}
