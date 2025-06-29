import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Store, Coffee, Shirt, Wrench, Sparkles, X, ArrowUpRight } from 'lucide-react';

const cities = ['Todas', 'Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
// --- MOCK DATA: Simula los negocios que obtendrías de tu base de datos ---
const mockBusinesses = [
  {
    id: 1,
    name: 'Café de la Finca',
    category: 'Restaurantes',
    city: 'Cali',
    logoUrl: 'https://placehold.co/400x300/A1887F/FFFFFF?text=Café',
    description: 'Un café de especialidad que trae los mejores granos de las montañas del Valle del Cauca directamente a tu taza. Disfruta de un ambiente tranquilo y un sabor inigualable.',
    websiteUrl: '#',
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
    name: 'Soluciones Digitales JEFFTECH',
    category: 'Servicios',
    city: 'Bogotá',
    logoUrl: 'https://placehold.co/400x300/1E88E5/FFFFFF?text=JEFFTECH',
    description: 'Tu socio estratégico para la transformación digital. Creamos páginas web, tiendas online y soluciones de software a medida para que tu negocio crezca en el mundo digital.',
    websiteUrl: 'https://jefftech.store/',
  },
  {
    id: 4,
    name: 'Sabor a Leña Pizzería',
    category: 'Restaurantes',
    city: 'Barranquilla',
    logoUrl: 'https://placehold.co/400x300/E53935/FFFFFF?text=Pizza',
    description: 'La auténtica pizza artesanal cocinada en horno de leña. Ingredientes frescos y una masa que te transportará a Italia. Perfecta para compartir en familia o con amigos.',
    websiteUrl: '#',
  },
  {
    id: 5,
    name: 'ArteSano Manualidades',
    category: 'Artesanías',
    city: 'Bogotá',
    logoUrl: 'https://placehold.co/400x300/00897B/FFFFFF?text=ArteSano',
    description: 'Decoración y regalos únicos hechos a mano por artesanos colombianos. Cada pieza cuenta una historia y lleva la esencia de nuestra cultura.',
    websiteUrl: '#',
  },
  {
    id: 6,
    name: 'Estilo Clásico Barbería',
    category: 'Servicios',
    city: 'Barranquilla',
    logoUrl: 'https://placehold.co/400x300/546E7A/FFFFFF?text=Barber',
    description: 'Más que un corte de cabello, una experiencia. Expertos barberos dedicados al cuidado masculino en un ambiente clásico y relajado.',
    websiteUrl: '#',
  },
    {
    id: 7,
    name: 'Chiqui Ropa Infantil',
    category: 'Tiendas de Ropa',
    city: 'Cali',
    logoUrl: 'https://placehold.co/400x300/FDD835/000000?text=Chiqui',
    description: 'Ropa cómoda, divertida y duradera para los más pequeños de la casa. Diseños alegres para acompañar sus aventuras diarias.',
    websiteUrl: '#',
  },
  {
    id: 8,
    name: 'El Rincón del Postre',
    category: 'Restaurantes',
    city: 'Bogotá',
    logoUrl: 'https://placehold.co/400x300/D81B60/FFFFFF?text=Postre',
    description: 'Endulza tu día con nuestra selección de postres caseros. Tortas, galletas y bebidas frías preparadas con amor y los mejores ingredientes.',
    websiteUrl: '#',
  },
];

const categories = [
  { name: 'Todos', icon: Store },
  { name: 'Restaurantes', icon: Coffee },
  { name: 'Tiendas de Ropa', icon: Shirt },
  { name: 'Servicios', icon: Wrench },
  { name: 'Artesanías', icon: Sparkles },
];

// --- Componente de Tarjeta de Negocio ---
const BusinessCard = ({ business, onSelect }) => (
  <div 
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
    onClick={() => onSelect(business)}
  >
    <img className="h-40 w-full object-cover" src={business.logoUrl} alt={`Logo de ${business.name}`} />
    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-800">{business.name}</h3>
      <p className="text-sm font-semibold text-indigo-600">{business.category}</p>
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
          <img className="h-60 w-full object-cover rounded-t-2xl" src={business.logoUrl} alt={`Logo de ${business.name}`} />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/70 rounded-full p-2 text-gray-700 hover:bg-white hover:text-black transition-all"
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
            href="https://wa.me/573225212078?text=Hola,%20me%20interesa%20publicar%20mi%20emprendimiento%20en%20TukuExpress"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-0 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Publicar Mi Negocio
          </a>
        </div>
      </header>

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
            href="https://jefftech.store"
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
