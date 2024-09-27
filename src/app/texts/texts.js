const title = "Creaciones Panchita";
const email = "Luzesperanza_1993@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573103097077";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Creaciones Panchita, nos especializamos en la confección de prendas personalizadas, combinando calidad con un toque de amor en cada pieza. Nuestra misión es ofrecer ropa cómoda y elegante de la mejor calidad. Cada prenda es elaborada con atención al detalle y con materiales de primera calidad.",
        description2: "Entendemos que cada cliente tiene sus propias necesidades y preferencias. Por eso, trabajamos para ofrecer productos personalizados que se adapten a tu estilo y comodidad, con un servicio al cliente que se destaca por su amabilidad y profesionalismo. ¡Descubre nuestra colección y experimenta el verdadero significado de confort y estilo!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Calidad con amor en cada prenda.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/vTiGPw4kn9oiLXwx/?mibextid=qi2Omg", // Facebook proporcionado
        instagram: "https://www.instagram.com/luzesperanza_1993/profilecard/?igsh=aHF0MGw3bG94YTNm", // Instagram proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
