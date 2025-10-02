import  { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUtensils, FaWifi, FaWheelchair, FaSnowflake, FaCocktail,
  FaUsers, FaConciergeBell, FaSwimmingPool, FaShieldAlt, FaUserClock
} from "react-icons/fa";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      AOS.init({ duration: 5000, once: false });

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 scroll-smooth">
      {/* NAVBAR */}
      <div
        className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-black shadow-lg py-2" : "bg-black py-4"
        }`}
      >
         {/* Logo */}
        <div className="flex-1 flex items-center gap-2">
          <img
            src="/src/assets/logocasaandina.png"
            alt="Logo Casa Andina"
            className="h-8 w-auto ml-6"  // <-- Esto mueve el logo un poco a la derecha
          />
        </div>

         {/* Menu (oculto al hacer scroll) */}
        {!isScrolled && (
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-white">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#descripcion">Descripción</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#ofertas">Ofertas</a></li>
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#restaurante">Restaurante</a></li>
              <li><a href="#valoraciones">Valoraciones</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* HERO SECTION */}
      <div
        id="inicio"
        className="hero min-h-[80vh] pt-16"
        style={{
          backgroundImage:
            "url('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/05/30122005/hoteles-lujo-destacada-1.jpg')",
        }}
      >
        <div className="hero-overlay bg-black/60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 data-aos="fade-down" className="mb-5 text-5xl font-bold">
              Bienvenido a Hotel Casa Andina
            </h1>
            <p data-aos="fade-up" className="mb-5">
              La mejor experiencia de descanso en la ciudad de Tacna.
            </p>
            <button
              data-aos="zoom-in"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-110 transition duration-300 cursor-pointer"
            >
              Reservar Ahora
            </button>

          </div>
        </div>
      </div>

      {/* DESCRIPCIÓN */}
<div id="descripcion" className="py-16 px-8 bg-base-100">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Imagen */}
    <div data-aos="fade-right" className="flex justify-center">
      <img
        src="https://s3.us-east-1.amazonaws.com/ca-webprod/Ambientes/internet-hotel-casa-andina-select-tacna.jpg"
        alt="Hotel Andina"
        className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />
    </div>

    {/* Texto */}
    <div data-aos="fade-left" className="text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
      <p>
        Hotel Andina combina tradición y modernidad, ofreciendo experiencias
        únicas a nuestros huéspedes. Disfruta de habitaciones confortables,
        gastronomía de primer nivel y un servicio pensado para ti.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        Nuestra misión es brindarte una estadía inolvidable, con atención personalizada
        y detalles que hacen la diferencia.
      </p>
    </div>

  </div>
</div>



      {/* SERVICIOS */}
      <div id="servicios" className="py-16 px-8 bg-base-100">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          <div data-aos="flip-left" className="p-6 card bg-base-200 shadow-lg">
            <FaUtensils className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Restaurante</h3>
            <p>Gastronomía de autor con ingredientes frescos y locales.</p>
          </div>
          <div data-aos="flip-up" className="p-6 card bg-base-200 shadow-lg">
            <FaWifi className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">WiFi</h3>
            <p>Conexión rápida y gratuita en todo el hotel.</p>
          </div>
          <div data-aos="flip-right" className="p-6 card bg-base-200 shadow-lg">
            <FaWheelchair className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Acceso adaptado</h3>
            <p>Instalaciones accesibles para sillas de ruedas.</p>
          </div>
          <div data-aos="zoom-in" className="p-6 card bg-base-200 shadow-lg">
            <FaSnowflake className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Aire acondicionado</h3>
            <p>Ambientes climatizados para tu comodidad.</p>
          </div>
          <div data-aos="zoom-in-up" className="p-6 card bg-base-200 shadow-lg">
            <FaCocktail className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Bar / Lounge</h3>
            <p>Un espacio elegante para disfrutar de cócteles y música.</p>
          </div>
          <div data-aos="zoom-in-down" className="p-6 card bg-base-200 shadow-lg">
            <FaUsers className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Personal multilingüe</h3>
            <p>Atención en varios idiomas para todos nuestros huéspedes.</p>
          </div>
          <div data-aos="fade-up" className="p-6 card bg-base-200 shadow-lg">
            <FaUserClock className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Recepción 24 horas</h3>
            <p>Siempre disponibles para tus necesidades.</p>
          </div>
          <div data-aos="fade-down" className="p-6 card bg-base-200 shadow-lg">
            <FaShieldAlt className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Seguridad 24 horas</h3>
            <p>Protección garantizada en todas nuestras instalaciones.</p>
          </div>
          <div data-aos="fade-left" className="p-6 card bg-base-200 shadow-lg">
            <FaSwimmingPool className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Piscina</h3>
            <p>Relájate en nuestra piscina al aire libre con ambiente exclusivo.</p>
          </div>
          <div data-aos="fade-right" className="p-6 card bg-base-200 shadow-lg">
            <FaConciergeBell className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Mostrador de consejería</h3>
            <p>Asistencia personalizada para reservas y recomendaciones.</p>
          </div>
        </div>
      </div>

      {/* GALERÍA */}
      <div id="galeria" className="py-16 px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
          Galería De fotos Casa Andina
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://s3.us-east-1.amazonaws.com/ca-webprod/Ambientes/lobby-casa-andina-select-tacna.jpg",
            "https://s3.us-east-1.amazonaws.com/ca-webprod/Ambientes/fachada-hotel-casa-andina-select-tacna-1747601900.jpg",
            "https://s3.us-east-1.amazonaws.com/ca-webprod/Ambientes/873c0d6d-711d-4b42-ad12-6e27f53071e6.jpg",
          ].map((img, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <img src={img} alt={`Galería ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* OFERTAS */}
      <div id="ofertas" className="py-16 px-8 bg-base-100 text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
          Ofertas Especiales
        </h2>
        <p data-aos="fade-up" className="mb-6">
          Aprovecha nuestras promociones exclusivas.
        </p>
        <button
          data-aos="zoom-in"
          className="btn btn-secondary hover:scale-110 transition duration-300"
        >
          Ver Ofertas
        </button>
      </div>

      {/* HABITACIONES */}
      <div id="habitaciones" className="py-16 px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
          Nuestras Habitaciones
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Habitación Simple",
              img: "https://images.unsplash.com/photo-1560448075-bb485b067938",
            },
            {
              title: "Habitación Doble",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            },
            {
              title: "Suite Ejecutiva",
              img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
            },
          ].map((h, i) => (
            <div
              key={i}
              data-aos="flip-left"
              className="card bg-base-100 shadow-xl hover:scale-105 transition duration-300"
            >
              <figure>
                <img src={h.img} alt={h.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{h.title}</h2>
                <p>Confort y elegancia garantizados.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary hover:scale-110 transition duration-300">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESTAURANTE */}
      <div
        id="restaurante"
        className="py-16 px-8 bg-base-100 text-center"
      >
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">
          Restaurante Casa Andina
        </h2>
        <p data-aos="fade-up" className="mb-6">
          Descubre la mejor gastronomía local e internacional.
        </p>
        <img
          data-aos="zoom-in"
          src="https://s3.us-east-1.amazonaws.com/ca-webprod/Ambientes/restaurante-select-tacna-1743958276.jpg"
          alt="Restaurante"
          className="mx-auto rounded-xl shadow-lg hover:scale-105 transition duration-300 max-w-2xl"
        />
      </div>

      {/* VALORACIONES */}
      <div id="valoraciones" className="py-16 px-8">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
          Valoraciones de Nuestros Huéspedes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              nombre: "María",
              comentario:
                "¡Increíble experiencia! El personal fue muy amable.",
              estrellas: "⭐⭐⭐⭐⭐",
            },
            {
              nombre: "Carlos",
              comentario:
                "La habitación muy cómoda y con una vista espectacular.",
              estrellas: "⭐⭐⭐⭐",
            },
            {
              nombre: "Lucía",
              comentario:
                "El restaurante superó mis expectativas, ¡volveré pronto!",
              estrellas: "⭐⭐⭐⭐⭐",
            },
          ].map((v, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="card bg-base-100 shadow hover:scale-105 transition duration-300 p-4 text-center"
            >
              <p className="text-xl font-bold">{v.nombre}</p>
              <p className="text-yellow-500">{v.estrellas}</p>
              <p>"{v.comentario}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="footer footer-center p-10 bg-base-200 text-base-content"
      >
        <div>
          <p>© 2025 Hotel Andina - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
