export interface ContactInfo {
  academyName: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
  cityState: string;
  registrationUrl: string;
  playStoreUrl: string;
  blogFreeClassesUrl: string;
  socialLinks: {
    youtube: string;
    facebook: string;
    instagram: string;
  };
}

export const contactData: ContactInfo = {
  academyName: "Enunciate Academy",
  tagline: "Sainik School, Navodaya & RMS Entrance Examination Institute",
  phone: "9492444498",
  phoneFormatted: "+91 94924 44498",
  whatsapp: "9492444498",
  whatsappMessage: "Hello Enunciate Academy! I would like to inquire about Sainik School & Navodaya entrance coaching for my child.",
  email: "enunciateacademy@gmail.com",
  address: "Main Academic Campus, Educational Zone",
  cityState: "Hyderabad, Telangana - 500001",
  registrationUrl: "https://app.helloleads.io/index.php/app/account/eventForm/06d53a85b81cfb8c620a8ca7412dd38c",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.enunciateacademy.learners",
  blogFreeClassesUrl: "https://blog.enunciateacademy.com/free-video-classes",
  socialLinks: {
    youtube: "https://youtube.com/@enunciateacademy",
    facebook: "https://facebook.com/enunciateacademy",
    instagram: "https://instagram.com/enunciateacademy"
  }
};

export const getWhatsAppLink = (customMessage?: string) => {
  const msg = encodeURIComponent(customMessage || contactData.whatsappMessage);
  return `https://wa.me/91${contactData.whatsapp}?text=${msg}`;
};

export const getCallLink = () => {
  return `tel:${contactData.phone}`;
};

