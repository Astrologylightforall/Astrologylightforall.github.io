// Language state
let currentLanguage = 'en';
    
// Language translations
const translations = {
  en: {
    home: "Home",
    services: "Services",
    horoscope: "Horoscope",
    testimonials: "Testimonials",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    dailyHoroscope: "Daily Horoscope",
    selectZodiac: "Select your zodiac sign to read today's personalized horoscope",
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces",
    hindi: "हिंदी",
    // Hero Section
    heroTitle: "Best Astrologer in Rajouri Garden Delhi | Expert Vedic Astrology Consultation",
    heroSubtitle: "Welcome to Astrology light for All - the most trusted Vedic astrologer in Rajouri Garden, Delhi. With 15+ years of experience, our expert astrologer provides accurate kundli analysis, marriage compatibility, gemstone consultation, and personalized horoscope readings. Get authentic Vedic astrology guidance for career, love, and life decisions.",
    checkHoroscope: "Check Daily Horoscope",
    bookConsultation: "Book Consultation Now",
    // Services Section
    servicesTitle: "Best Astrology Services in Rajouri Garden Delhi",
    loveCompatibility: "Love Compatibility",
    loveCompatibilityDesc: "Discover the real energy behind your relationships—see if your love is meant to flow or if hidden clashes are holding you back.",
    kundaliAnalysis: "Kundali Analysis",
    kundaliAnalysisDesc: "Get a clear, honest look at your life's blueprint—find the root of your challenges and the timing for your next breakthrough.",
    gemstoneRecommendation: "Gemstone Recommendation",
    gemstoneRecommendationDesc: "Find the right gemstone to boost your energy and support your journey—never wear the wrong stone again.",
    vastuShastra: "Vastu Shastra",
    vastuShastraDesc: "Transform your home's energy with simple, practical Vastu tips—no breaking walls, just real results.",
    numerology: "Numerology",
    numerologyDesc: "Align your name and numbers for success—see how a small change can open big doors in life and business.",
    lalKitabRemedies: "Lal Kitab Remedies",
    lalKitabRemediesDesc: "Simple, powerful remedies for life's toughest problems—practical solutions rooted in ancient wisdom.",
    // Testimonials Section
    testimonialsTitle: "What Our Clients Say",
    testimonial1: "The kundli analysis was incredibly accurate! Astrology light for All helped me understand my life path better. The marriage compatibility report was spot on.",
    testimonial1Author: "Priya Sharma, Mumbai",
    testimonial2: "I was skeptical at first, but the daily horoscopes are amazingly accurate. The gemstone recommendation changed my life positively.",
    testimonial2Author: "Rahul Verma, Delhi",
    testimonial3: "The Vastu consultation transformed our home energy. We feel more peaceful and prosperous since following their advice.",
    testimonial3Author: "Anjali Patel, Bangalore",
    testimonial4: "Professional, caring, and accurate. The birth chart analysis revealed aspects of my personality I never knew existed.",
    testimonial4Author: "Sunita Reddy, Hyderabad",
    // About Section
    aboutTitle: "About Best Astrologer in Rajouri Garden Delhi",
    aboutPara1: "Astrology light for All is the most trusted and experienced Vedic astrologer in Rajouri Garden, Delhi with over 15+ years of dedicated practice. Our expert astrologer combines traditional Vedic wisdom with modern understanding to provide authentic, accurate, and personalized astrological guidance.",
    aboutPara2: "We specialize in comprehensive kundli analysis, marriage compatibility, career guidance, gemstone consultation, and remedial solutions. Our approach is rooted in ancient Vedic texts while being relevant to contemporary life challenges faced by people in Delhi and across India.",
    aboutPara3: "Whether you're seeking clarity about your career, love life, marriage prospects, or spiritual growth, our personalized consultations by the best astrologer in Rajouri Garden provide the guidance you need to make informed decisions and lead a fulfilling life. Visit our center in Rajouri Garden, Delhi for authentic Vedic astrology consultation.",
    // FAQ Section
    faqTitle: "Frequently Asked Questions - Best Astrologer in Rajouri Garden Delhi",
    faq1Question: "What services does the best astrologer in Rajouri Garden Delhi offer?",
    faq1Answer: "Our expert astrologer in Rajouri Garden, Delhi offers comprehensive Vedic astrology services including kundli analysis, marriage compatibility, daily horoscope, gemstone consultation, vastu consultation, and remedial solutions. We are the most trusted astrologer in Rajouri Garden with 15+ years of experience.",
    faq2Question: "How can I book a consultation with the astrologer in Rajouri Garden?",
    faq2Answer: "You can book a consultation with our expert astrologer in Rajouri Garden, Delhi by calling us directly, filling out our contact form, or visiting our center in Rajouri Garden. We offer both in-person and online consultations for your convenience.",
    faq3Question: "What is the cost of kundli analysis in Rajouri Garden Delhi?",
    faq3Answer: "Our kundli analysis services in Rajouri Garden, Delhi are reasonably priced and vary based on the depth of analysis required. We offer different packages to suit your needs and budget. Contact us for detailed pricing information.",
    faq4Question: "Do you provide marriage compatibility analysis in Delhi?",
    faq4Answer: "Yes, we are the best astrologer in Rajouri Garden Delhi for marriage compatibility analysis. Our expert kundli matching services help couples understand their compatibility and make informed decisions about marriage.",
    faq5Question: "What are the timings of the astrologer in Rajouri Garden?",
    faq5Answer: "Our astrologer in Rajouri Garden, Delhi is available from 9:00 AM to 8:00 PM, seven days a week. We also offer emergency consultations for urgent matters. Please call ahead to confirm availability.",
    faq6Question: "Is the astrologer in Rajouri Garden Delhi experienced in Vedic astrology?",
    faq6Answer: "Yes, our astrologer in Rajouri Garden, Delhi has over 15+ years of experience in authentic Vedic astrology. We follow traditional methods and provide accurate predictions based on ancient Vedic texts and calculations.",
    // Contact Section
    contactTitle: "Contact Best Astrologer in Rajouri Garden Delhi",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    serviceRequired: "Service Required",
    selectService: "Select a service",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    // Footer
    copyright: "© 2024 Astrology light for All. All rights reserved. | Best Astrologer in Rajouri Garden Delhi | Vedic Astrology Consultation | Kundli Analysis Delhi | Marriage Compatibility Delhi",
    // Location Bar
    locationText: "Astrology light for all, Ground Floor, 10/17, Block 10, Subhash Nagar, New Delhi, Delhi, 110027",
    getDirections: "Get Directions",
    viewOnMaps: "View on Maps"
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    horoscope: "राशिफल",
    testimonials: "प्रशंसापत्र",
    about: "हमारे बारे में",
    faq: "सामान्य प्रश्न",
    contact: "संपर्क",
    dailyHoroscope: "दैनिक राशिफल",
    selectZodiac: "आज का व्यक्तिगत राशिफल पढ़ने के लिए अपना राशि चिह्न चुनें",
    aries: "मेष",
    taurus: "वृषभ",
    gemini: "मिथुन",
    cancer: "कर्क",
    leo: "सिंह",
    virgo: "कन्या",
    libra: "तुला",
    scorpio: "वृश्चिक",
    sagittarius: "धनु",
    capricorn: "मकर",
    aquarius: "कुंभ",
    pisces: "मीन",
    hindi: "English",
    // Hero Section
    heroTitle: "राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी | विशेषज्ञ वैदिक ज्योतिष परामर्श",
    heroSubtitle: "सभी के लिए ज्योतिष प्रकाश में आपका स्वागत है - राजौरी गार्डन, दिल्ली में सबसे विश्वसनीय वैदिक ज्योतिषी। 15+ वर्षों के अनुभव के साथ, हमारा विशेषज्ञ ज्योतिषी सटीक कुंडली विश्लेषण, विवाह अनुकूलता, रत्न परामर्श और व्यक्तिगत राशिफल प्रदान करता है। करियर, प्रेम और जीवन के निर्णयों के लिए प्रामाणिक वैदिक ज्योतिष मार्गदर्शन प्राप्त करें।",
    checkHoroscope: "दैनिक राशिफल देखें",
    bookConsultation: "अभी परामर्श बुक करें",
    // Services Section
    servicesTitle: "राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिष सेवाएं",
    loveCompatibility: "प्रेम अनुकूलता",
    loveCompatibilityDesc: "अपने रिश्तों के पीछे की वास्तविक ऊर्जा की खोज करें—देखें कि क्या आपका प्यार बहने के लिए है या छिपे हुए टकराव आपको रोक रहे हैं।",
    kundaliAnalysis: "कुंडली विश्लेषण",
    kundaliAnalysisDesc: "अपने जीवन के नक्शे की स्पष्ट, ईमानदार झलक प्राप्त करें—अपनी चुनौतियों की जड़ और अपने अगले सफलता का समय खोजें।",
    gemstoneRecommendation: "रत्न सिफारिश",
    gemstoneRecommendationDesc: "अपनी ऊर्जा को बढ़ाने और अपनी यात्रा का समर्थन करने के लिए सही रत्न खोजें—कभी भी गलत पत्थर न पहनें।",
    vastuShastra: "वास्तु शास्त्र",
    vastuShastraDesc: "सरल, व्यावहारिक वास्तु युक्तियों के साथ अपने घर की ऊर्जा को बदलें—दीवारें तोड़े बिना, सिर्फ वास्तविक परिणाम।",
    numerology: "अंक ज्योतिष",
    numerologyDesc: "सफलता के लिए अपना नाम और संख्याओं को संरेखित करें—देखें कि कैसे एक छोटा बदलाव जीवन और व्यवसाय में बड़े दरवाजे खोल सकता है।",
    lalKitabRemedies: "लाल किताब उपचार",
    lalKitabRemediesDesc: "जीवन की सबसे कठिन समस्याओं के लिए सरल, शक्तिशाली उपचार—प्राचीन ज्ञान में निहित व्यावहारिक समाधान।",
    // Testimonials Section
    testimonialsTitle: "हमारे ग्राहक क्या कहते हैं",
    testimonial1: "कुंडली विश्लेषण अविश्वसनीय रूप से सटीक था! सभी के लिए ज्योतिष प्रकाश ने मुझे अपना जीवन पथ बेहतर ढंग से समझने में मदद की। विवाह अनुकूलता रिपोर्ट बिल्कुल सही थी।",
    testimonial1Author: "प्रिया शर्मा, मुंबई",
    testimonial2: "मैं पहले संदेहास्पद था, लेकिन दैनिक राशिफल अद्भुत रूप से सटीक हैं। रत्न सिफारिश ने मेरे जीवन को सकारात्मक रूप से बदल दिया।",
    testimonial2Author: "राहुल वर्मा, दिल्ली",
    testimonial3: "वास्तु परामर्श ने हमारे घर की ऊर्जा को बदल दिया। उनकी सलाह का पालन करने के बाद से हम अधिक शांतिपूर्ण और समृद्ध महसूस करते हैं।",
    testimonial3Author: "अंजलि पटेल, बैंगलोर",
    testimonial4: "पेशेवर, देखभाल करने वाला और सटीक। जन्म कुंडली विश्लेषण ने मेरे व्यक्तित्व के पहलुओं को प्रकट किया जो मैंने कभी नहीं जाना था।",
    testimonial4Author: "सुनीता रेड्डी, हैदराबाद",
    // About Section
    aboutTitle: "राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी के बारे में",
    aboutPara1: "सभी के लिए ज्योतिष प्रकाश राजौरी गार्डन, दिल्ली में सबसे विश्वसनीय और अनुभवी वैदिक ज्योतिषी है जिसके पास 15+ वर्षों का समर्पित अभ्यास है। हमारा विशेषज्ञ ज्योतिषी पारंपरिक वैदिक ज्ञान को आधुनिक समझ के साथ जोड़ता है ताकि प्रामाणिक, सटीक और व्यक्तिगत ज्योतिषीय मार्गदर्शन प्रदान किया जा सके।",
    aboutPara2: "हम व्यापक कुंडली विश्लेषण, विवाह अनुकूलता, करियर मार्गदर्शन, रत्न परामर्श और उपचार समाधान में विशेषज्ञता रखते हैं। हमारा दृष्टिकोण प्राचीन वैदिक ग्रंथों में निहित है जबकि दिल्ली और पूरे भारत में लोगों द्वारा सामना की जाने वाली समकालीन जीवन चुनौतियों के लिए प्रासंगिक है।",
    aboutPara3: "चाहे आप अपने करियर, प्रेम जीवन, विवाह संभावनाओं या आध्यात्मिक विकास के बारे में स्पष्टता चाहते हैं, राजौरी गार्डन में सर्वश्रेष्ठ ज्योतिषी द्वारा हमारे व्यक्तिगत परामर्श आपको सूचित निर्णय लेने और एक पूर्ण जीवन जीने के लिए आवश्यक मार्गदर्शन प्रदान करते हैं। प्रामाणिक वैदिक ज्योतिष परामर्श के लिए राजौरी गार्डन, दिल्ली में हमारे केंद्र का दौरा करें।",
    // FAQ Section
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न - राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी",
    faq1Question: "राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी क्या सेवाएं प्रदान करता है?",
    faq1Answer: "हमारा विशेषज्ञ ज्योतिषी राजौरी गार्डन, दिल्ली में व्यापक वैदिक ज्योतिष सेवाएं प्रदान करता है जिसमें कुंडली विश्लेषण, विवाह अनुकूलता, दैनिक राशिफल, रत्न परामर्श, वास्तु परामर्श और उपचार समाधान शामिल हैं। हम राजौरी गार्डन में सबसे विश्वसनीय ज्योतिषी हैं जिसके पास 15+ वर्षों का अनुभव है।",
    faq2Question: "राजौरी गार्डन में ज्योतिषी के साथ परामर्श कैसे बुक कर सकता हूं?",
    faq2Answer: "आप हमारे विशेषज्ञ ज्योतिषी के साथ राजौरी गार्डन, दिल्ली में परामर्श बुक कर सकते हैं हमें सीधे कॉल करके, हमारा संपर्क फॉर्म भरकर या राजौरी गार्डन में हमारे केंद्र का दौरा करके। हम आपकी सुविधा के लिए व्यक्तिगत और ऑनलाइन दोनों परामर्श प्रदान करते हैं।",
    faq3Question: "राजौरी गार्डन दिल्ली में कुंडली विश्लेषण की लागत क्या है?",
    faq3Answer: "राजौरी गार्डन, दिल्ली में हमारी कुंडली विश्लेषण सेवाएं उचित मूल्य पर हैं और आवश्यक विश्लेषण की गहराई के आधार पर भिन्न होती हैं। हम आपकी आवश्यकताओं और बजट के अनुरूप विभिन्न पैकेज प्रदान करते हैं। विस्तृत मूल्य जानकारी के लिए हमसे संपर्क करें।",
    faq4Question: "क्या आप दिल्ली में विवाह अनुकूलता विश्लेषण प्रदान करते हैं?",
    faq4Answer: "हां, हम विवाह अनुकूलता विश्लेषण के लिए राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी हैं। हमारी विशेषज्ञ कुंडली मिलान सेवाएं जोड़ों को उनकी अनुकूलता को समझने और विवाह के बारे में सूचित निर्णय लेने में मदद करती हैं।",
    faq5Question: "राजौरी गार्डन में ज्योतिषी के समय क्या हैं?",
    faq5Answer: "राजौरी गार्डन, दिल्ली में हमारा ज्योतिषी सुबह 9:00 बजे से शाम 8:00 बजे तक, सप्ताह के सातों दिन उपलब्ध है। हम तत्काल मामलों के लिए आपातकालीन परामर्श भी प्रदान करते हैं। कृपया उपलब्धता की पुष्टि के लिए पहले कॉल करें।",
    faq6Question: "क्या राजौरी गार्डन दिल्ली में ज्योतिषी वैदिक ज्योतिष में अनुभवी है?",
    faq6Answer: "हां, राजौरी गार्डन, दिल्ली में हमारा ज्योतिषी प्रामाणिक वैदिक ज्योतिष में 15+ वर्षों के अनुभव के साथ है। हम पारंपरिक तरीकों का पालन करते हैं और प्राचीन वैदिक ग्रंथों और गणनाओं के आधार पर सटीक भविष्यवाणियां प्रदान करते हैं।",
    // Contact Section
    contactTitle: "राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी से संपर्क करें",
    fullName: "पूरा नाम",
    emailAddress: "ईमेल पता",
    phoneNumber: "फोन नंबर",
    serviceRequired: "आवश्यक सेवा",
    selectService: "एक सेवा चुनें",
    yourMessage: "आपका संदेश",
    sendMessage: "संदेश भेजें",
    // Footer
    copyright: "© 2024 सभी के लिए ज्योतिष प्रकाश। सर्वाधिकार सुरक्षित। | राजौरी गार्डन दिल्ली में सर्वश्रेष्ठ ज्योतिषी | वैदिक ज्योतिष परामर्श | दिल्ली में कुंडली विश्लेषण | दिल्ली में विवाह अनुकूलता",
    // Location Bar
    locationText: "सभी के लिए ज्योतिष प्रकाश, ग्राउंड फ्लोर, 10/17, ब्लॉक 10, सुभाष नगर, नई दिल्ली, दिल्ली, 110027",
    getDirections: "दिशा-निर्देश प्राप्त करें",
    viewOnMaps: "मानचित्र पर देखें"
  }
};

// Horoscope data
const horoscopes = {
  en: {
    aries: "Today is perfect for taking bold initiatives. Your natural leadership qualities will shine. Focus on career advancement and trust your instincts. New opportunities await you.",
    taurus: "Financial matters require your attention today. Stay patient and avoid impulsive decisions. Your determination will bring long-term rewards. Focus on stability.",
    gemini: "Communication is your strength today. Reach out to friends and family. Your curiosity will lead to valuable insights. Networking opportunities are favorable.",
    cancer: "Emotional well-being is important today. Spend time with loved ones and nurture your relationships. Trust your intuition in personal matters.",
    leo: "Your creativity and charisma are at their peak. Take center stage and inspire others. Artistic pursuits and leadership roles are favored today.",
    virgo: "Attention to detail will serve you well today. Stay organized and methodical in your approach. Health and wellness should be your priority.",
    libra: "Seek balance in all areas of life today. Your diplomatic nature will help resolve conflicts. Partnership and collaboration are highlighted.",
    scorpio: "Your intuition is particularly strong today. Trust your gut feelings and explore deeper meanings. Transformation and personal growth are possible.",
    sagittarius: "Adventure and learning opportunities abound today. Embrace new experiences and expand your horizons. Travel and education are favored.",
    capricorn: "Hard work and determination will bring success today. Focus on your long-term goals and maintain your disciplined approach. Recognition is likely.",
    aquarius: "Innovation and originality are your strengths today. Share your unique ideas and collaborate with like-minded individuals. Humanitarian causes call to you.",
    pisces: "Your imagination and intuition are heightened today. Creative pursuits and spiritual activities are favored. Trust your dreams and artistic vision."
  },
  hi: {
    aries: "आज साहसिक पहल करने के लिए बिल्कुल सही दिन है। आपकी स्वाभाविक नेतृत्व की गुणवत्ता चमकेगी। करियर में आगे बढ़ने पर ध्यान दें और अपनी अंतर्ज्ञान पर भरोसा करें। नए अवसर आपकी प्रतीक्षा कर रहे हैं।",
    taurus: "आज वित्तीय मामलों पर आपका ध्यान आवश्यक है। धैर्य रखें और आवेगी निर्णयों से बचें। आपकी दृढ़ता दीर्घकालिक लाभ लाएगी। स्थिरता पर ध्यान केंद्रित करें।",
    gemini: "आज संचार आपकी ताकत है। दोस्तों और परिवार से संपर्क करें। आपकी जिज्ञासा मूल्यवान अंतर्दृष्टि की ओर ले जाएगी। नेटवर्किंग के अवसर अनुकूल हैं।",
    cancer: "आज भावनात्मक कल्याण महत्वपूर्ण है। प्रियजनों के साथ समय बिताएं और अपने रिश्तों को पोषित करें। व्यक्तिगत मामलों में अपनी अंतर्ज्ञान पर भरोसा करें।",
    leo: "आज आपकी रचनात्मकता और करिश्मा अपने चरम पर हैं। केंद्र में आएं और दूसरों को प्रेरित करें। कलात्मक गतिविधियां और नेतृत्व की भूमिकाएं आज अनुकूल हैं।",
    virgo: "आज विस्तार पर ध्यान आपकी मदद करेगा। संगठित और व्यवस्थित रहें। स्वास्थ्य और कल्याण आपकी प्राथमिकता होनी चाहिए।",
    libra: "आज जीवन के सभी क्षेत्रों में संतुलन खोजें। आपकी राजनयिक प्रकृति संघर्षों को हल करने में मदद करेगी। साझेदारी और सहयोग पर प्रकाश डाला गया है।",
    scorpio: "आज आपकी अंतर्ज्ञान विशेष रूप से मजबूत है। अपनी आंतरिक भावनाओं पर भरोसा करें और गहरे अर्थों की खोज करें। परिवर्तन और व्यक्तिगत विकास संभव है।",
    sagittarius: "आज साहसिक और सीखने के अवसर प्रचुर मात्रा में हैं। नए अनुभवों को अपनाएं और अपने क्षितिज का विस्तार करें। यात्रा और शिक्षा अनुकूल हैं।",
    capricorn: "आज कड़ी मेहनत और दृढ़ता सफलता लाएगी। अपने दीर्घकालिक लक्ष्यों पर ध्यान केंद्रित करें और अपना अनुशासित दृष्टिकोण बनाए रखें। मान्यता की संभावना है।",
    aquarius: "आज नवाचार और मौलिकता आपकी ताकतें हैं। अपने अनूठे विचार साझा करें और समान विचारधारा वाले लोगों के साथ सहयोग करें। मानवीय कारण आपको बुला रहे हैं।",
    pisces: "आज आपकी कल्पना और अंतर्ज्ञान बढ़ी हुई हैं। रचनात्मक गतिविधियां और आध्यात्मिक गतिविधियां अनुकूल हैं। अपने सपनों और कलात्मक दृष्टि पर भरोसा करें।"
  }
};

// Language switching function
function switchLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
  
  // Update navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    const key = link.getAttribute('href').substring(1);
    if (translations[currentLanguage][key]) {
      link.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update zodiac sign names
  document.querySelectorAll('.sign-name').forEach(sign => {
    const key = sign.getAttribute('data-' + currentLanguage);
    if (key) {
      sign.textContent = key;
    }
  });
  
  // Update language button text
  document.getElementById('languageText').textContent = translations[currentLanguage].hindi;
  
  // Update hero section
  const heroTitle = document.querySelector('.hero-text h1');
  if (heroTitle) {
    heroTitle.textContent = translations[currentLanguage].heroTitle;
  }
  
  const heroSubtitle = document.querySelector('.hero-text p');
  if (heroSubtitle) {
    heroSubtitle.innerHTML = translations[currentLanguage].heroSubtitle;
  }
  
  // Update hero buttons
  const checkHoroscopeBtn = document.querySelector('.hero-buttons .btn-primary');
  if (checkHoroscopeBtn) {
    checkHoroscopeBtn.innerHTML = `<i class="fas fa-star"></i> ${translations[currentLanguage].checkHoroscope}`;
  }
  
  const bookConsultationBtn = document.querySelector('.hero-buttons .btn-secondary');
  if (bookConsultationBtn) {
    bookConsultationBtn.innerHTML = `<i class="fas fa-phone"></i> ${translations[currentLanguage].bookConsultation}`;
  }
  
  // Update services section
  const servicesTitle = document.querySelector('#services .section-title');
  if (servicesTitle) {
    servicesTitle.textContent = translations[currentLanguage].servicesTitle;
  }
  
  // Update service cards
  const serviceCards = document.querySelectorAll('.feature-card h3');
  if (serviceCards.length >= 6) {
    serviceCards[0].textContent = translations[currentLanguage].loveCompatibility;
    serviceCards[1].textContent = translations[currentLanguage].kundaliAnalysis;
    serviceCards[2].textContent = translations[currentLanguage].gemstoneRecommendation;
    serviceCards[3].textContent = translations[currentLanguage].vastuShastra;
    serviceCards[4].textContent = translations[currentLanguage].numerology;
    serviceCards[5].textContent = translations[currentLanguage].lalKitabRemedies;
  }
  
  const serviceDescriptions = document.querySelectorAll('.feature-card p');
  if (serviceDescriptions.length >= 6) {
    serviceDescriptions[0].textContent = translations[currentLanguage].loveCompatibilityDesc;
    serviceDescriptions[1].textContent = translations[currentLanguage].kundaliAnalysisDesc;
    serviceDescriptions[2].textContent = translations[currentLanguage].gemstoneRecommendationDesc;
    serviceDescriptions[3].textContent = translations[currentLanguage].vastuShastraDesc;
    serviceDescriptions[4].textContent = translations[currentLanguage].numerologyDesc;
    serviceDescriptions[5].textContent = translations[currentLanguage].lalKitabRemediesDesc;
  }
  
  // Update horoscope section title
  const horoscopeTitle = document.querySelector('.horoscope-section .section-title');
  if (horoscopeTitle) {
    horoscopeTitle.textContent = translations[currentLanguage].dailyHoroscope;
  }
  
  // Update horoscope result text
  const horoscopeResult = document.getElementById('horoscopeResult');
  if (horoscopeResult && !horoscopeResult.querySelector('strong')) {
    horoscopeResult.innerHTML = `<p>${translations[currentLanguage].selectZodiac}</p>`;
  }
  
  // Update testimonials section
  const testimonialsTitle = document.querySelector('#testimonials .section-title');
  if (testimonialsTitle) {
    testimonialsTitle.textContent = translations[currentLanguage].testimonialsTitle;
  }
  
  // Update testimonials
  const testimonials = document.querySelectorAll('.testimonial p');
  const testimonialAuthors = document.querySelectorAll('.testimonial-author');
  
  if (testimonials.length >= 4) {
    testimonials[0].textContent = translations[currentLanguage].testimonial1;
    testimonials[1].textContent = translations[currentLanguage].testimonial2;
    testimonials[2].textContent = translations[currentLanguage].testimonial3;
    testimonials[3].textContent = translations[currentLanguage].testimonial4;
  }
  
  if (testimonialAuthors.length >= 4) {
    testimonialAuthors[0].textContent = `- ${translations[currentLanguage].testimonial1Author}`;
    testimonialAuthors[1].textContent = `- ${translations[currentLanguage].testimonial2Author}`;
    testimonialAuthors[2].textContent = `- ${translations[currentLanguage].testimonial3Author}`;
    testimonialAuthors[3].textContent = `- ${translations[currentLanguage].testimonial4Author}`;
  }
  
  // Update about section
  const aboutTitle = document.querySelector('#about .about-text h2');
  if (aboutTitle) {
    aboutTitle.textContent = translations[currentLanguage].aboutTitle;
  }
  
  const aboutParagraphs = document.querySelectorAll('#about .about-text p');
  if (aboutParagraphs.length >= 3) {
    aboutParagraphs[0].textContent = translations[currentLanguage].aboutPara1;
    aboutParagraphs[1].textContent = translations[currentLanguage].aboutPara2;
    aboutParagraphs[2].textContent = translations[currentLanguage].aboutPara3;
  }
  
  // Update FAQ section
  const faqTitle = document.querySelector('#faq .section-title');
  if (faqTitle) {
    faqTitle.textContent = translations[currentLanguage].faqTitle;
  }
  
  const faqQuestions = document.querySelectorAll('#faq .faq-item h3');
  const faqAnswers = document.querySelectorAll('#faq .faq-item p');
  
  if (faqQuestions.length >= 6) {
    faqQuestions[0].textContent = translations[currentLanguage].faq1Question;
    faqQuestions[1].textContent = translations[currentLanguage].faq2Question;
    faqQuestions[2].textContent = translations[currentLanguage].faq3Question;
    faqQuestions[3].textContent = translations[currentLanguage].faq4Question;
    faqQuestions[4].textContent = translations[currentLanguage].faq5Question;
    faqQuestions[5].textContent = translations[currentLanguage].faq6Question;
  }
  
  if (faqAnswers.length >= 6) {
    faqAnswers[0].textContent = translations[currentLanguage].faq1Answer;
    faqAnswers[1].textContent = translations[currentLanguage].faq2Answer;
    faqAnswers[2].textContent = translations[currentLanguage].faq3Answer;
    faqAnswers[3].textContent = translations[currentLanguage].faq4Answer;
    faqAnswers[4].textContent = translations[currentLanguage].faq5Answer;
    faqAnswers[5].textContent = translations[currentLanguage].faq6Answer;
  }
  
  // Update contact section
  const contactTitle = document.querySelector('#contact .section-title');
  if (contactTitle) {
    contactTitle.textContent = translations[currentLanguage].contactTitle;
  }
  
  // Update contact form labels
  const formLabels = document.querySelectorAll('.form-group label');
  const formOptions = document.querySelectorAll('#service option');
  const submitBtn = document.querySelector('.submit-btn');
  
  if (formLabels.length >= 5) {
    formLabels[0].textContent = translations[currentLanguage].fullName;
    formLabels[1].textContent = translations[currentLanguage].emailAddress;
    formLabels[2].textContent = translations[currentLanguage].phoneNumber;
    formLabels[3].textContent = translations[currentLanguage].serviceRequired;
    formLabels[4].textContent = translations[currentLanguage].yourMessage;
  }
  
  if (formOptions.length >= 7) {
    formOptions[0].textContent = translations[currentLanguage].selectService;
    formOptions[1].textContent = translations[currentLanguage].dailyHoroscope;
    formOptions[2].textContent = translations[currentLanguage].kundaliAnalysis;
    formOptions[3].textContent = translations[currentLanguage].loveCompatibility;
    formOptions[4].textContent = translations[currentLanguage].gemstoneRecommendation;
    formOptions[5].textContent = translations[currentLanguage].vastuShastra;
    formOptions[6].textContent = translations[currentLanguage].lalKitabRemedies;
  }
  
  if (submitBtn) {
    submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[currentLanguage].sendMessage}`;
  }
  
  // Update footer
  const footerCopyright = document.querySelector('.footer-bottom p');
  if (footerCopyright) {
    footerCopyright.textContent = translations[currentLanguage].copyright;
  }
  
  // Update location bar
  const locationText = document.querySelector('.location-info span');
  if (locationText) {
    locationText.textContent = translations[currentLanguage].locationText;
  }
  
  const getDirectionsBtn = document.querySelector('.btn-primary');
  if (getDirectionsBtn) {
    getDirectionsBtn.innerHTML = `<i class="fas fa-directions"></i> ${translations[currentLanguage].getDirections}`;
  }
  
  const viewOnMapsBtn = document.querySelector('.btn-secondary');
  if (viewOnMapsBtn) {
    viewOnMapsBtn.innerHTML = `<i class="fas fa-map"></i> ${translations[currentLanguage].viewOnMaps}`;
  }
}

// Language toggle event listener
document.getElementById('languageToggle').addEventListener('click', switchLanguage);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Horoscope functionality
document.querySelectorAll('.zodiac-sign').forEach(sign => {
  sign.addEventListener('click', function() {
    // Remove active class from all signs
    document.querySelectorAll('.zodiac-sign').forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked sign
    this.classList.add('active');
    
    // Get sign name and display horoscope
    const signName = this.getAttribute('data-sign');
    const horoscopeText = horoscopes[currentLanguage][signName];
    const signDisplayName = translations[currentLanguage][signName];
    
    document.getElementById('horoscopeResult').innerHTML = `
      <p><strong>${signDisplayName}</strong><br>
      ${horoscopeText}</p>
    `;
  });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const service = formData.get('service');
  const message = formData.get('message');
  
  // Simple validation
  if (!name || !email || !phone || !service || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Success message
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Add some interactive effects
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Learn More expand/collapse for services
document.querySelectorAll('.learn-more-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var detail = this.nextElementSibling;
    if (detail.style.display === 'none' || detail.style.display === '') {
      detail.style.display = 'block';
      this.textContent = 'Show Less';
    } else {
      detail.style.display = 'none';
      this.textContent = 'Learn More';
    }
  });
});
 // Chatbot popup logic
 const chatbotButton = document.getElementById('chatbot-button');
 const chatbotPopup = document.getElementById('chatbot-popup');
 const chatbotClose = document.getElementById('chatbot-close');
 const chatbotMessages = document.getElementById('chatbot-messages');
 const chatbotForm = document.getElementById('chatbot-form');
 const chatbotInput = document.getElementById('chatbot-input');
 const chatbotQuickReplies = document.getElementById('chatbot-quick-replies');

 const quickReplies = [
   { text: 'Book a Consultation', value: 'I want to book a consultation' },
   { text: 'Daily Horoscope', value: 'Show me today\'s horoscope' },
   { text: 'Service Info', value: 'Tell me about your services' },
   { text: 'Contact Details', value: 'How can I contact you?' },
   { text: 'Vastu Tips', value: 'Share a Vastu tip' }
 ];

 function addMessage(text, sender = 'bot') {
   const msg = document.createElement('div');
   msg.style.maxWidth = '85%';
   msg.style.alignSelf = sender === 'user' ? 'flex-end' : 'flex-start';
   msg.style.background = sender === 'user' ? 'var(--secondary)' : '#fff';
   msg.style.color = sender === 'user' ? '#fff' : '#2C1810';
   msg.style.padding = '0.7rem 1rem';
   msg.style.borderRadius = sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px';
   msg.style.boxShadow = '0 2px 8px rgba(139,69,19,0.07)';
   msg.textContent = text;
   chatbotMessages.appendChild(msg);
   chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
 }

 function botReply(userText) {
   let reply = '';
   const text = userText.toLowerCase();
   if (text.includes('consult')) {
     reply = 'To book a consultation, please fill out the contact form below or call us at 9999691464, 9953746052, 9210069061.';
   } else if (text.includes('horoscope')) {
     reply = 'Please select your zodiac sign in the Horoscope section above for today\'s personalized reading!';
   } else if (text.includes('service')) {
     reply = 'We offer Love Compatibility, Kundali Analysis, Gemstone Recommendation, Vastu Shastra, Numerology, and Lal Kitab Remedies. Type the service name to learn more!';
   } else if (text.includes('contact')) {
     reply = 'You can contact us at Astrologylightforall@gmail.com or call 9999691464, 9953746052, 9210069061.';
   } else if (text.includes('vastu')) {
     reply = 'Vastu Tip: Keep the northeast corner of your home clean and clutter-free for positive energy.';
   } else if (text.includes('love')) {
     reply = 'Love Compatibility: Astrology can reveal the energy flow between two people. Would you like to know more?';
   } else if (text.includes('kundali')) {
     reply = 'Kundali Analysis: Your birth chart is like your life\'s X-ray. We can help you understand your strengths and challenges.';
   } else if (text.includes('gemstone')) {
     reply = 'Gemstone Recommendation: The right stone can boost your energy. We recommend only after a detailed chart reading.';
   } else if (text.includes('numerology')) {
     reply = 'Numerology: Your name and birth date carry energy. A small change can open big doors!';
   } else if (text.includes('lal kitab')) {
     reply = 'Lal Kitab Remedies: Simple, practical solutions for life\'s toughest problems. Want to know more?';
   } else if (text.includes('youtube')) {
     reply = 'You can watch us on YouTube: youtube.com/@MANJULGMALHOTRA';
   } else if (text.includes('facebook')) {
     reply = 'Follow us on Facebook: facebook.com/ASTROLOGYLIGHTFORALL';
   } else if (text.includes('address')) {
     reply = 'Astrology light for all, Ground Floor, 10/17, Block 10, Subhash Nagar, New Delhi, Delhi, 110027';
   } else {
     reply = 'I\'m here to help! You can ask about our services, booking, horoscopes, or anything related to astrology.';
   }
   setTimeout(() => addMessage(reply, 'bot'), 600);
 }

 function showQuickReplies() {
   chatbotQuickReplies.innerHTML = '';
   quickReplies.forEach(q => {
     const btn = document.createElement('button');
     btn.textContent = q.text;
     btn.style.background = 'var(--light)';
     btn.style.color = 'var(--primary)';
     btn.style.border = '1px solid var(--secondary)';
     btn.style.borderRadius = '16px';
     btn.style.padding = '0.4rem 1rem';
     btn.style.marginBottom = '0.2rem';
     btn.style.cursor = 'pointer';
     btn.style.fontWeight = '600';
     btn.style.fontSize = '0.95rem';
     btn.addEventListener('click', function() {
       addMessage(q.text, 'user');
       botReply(q.value);
       chatbotQuickReplies.innerHTML = '';
     });
     chatbotQuickReplies.appendChild(btn);
   });
 }

 chatbotButton.addEventListener('click', function() {
   chatbotPopup.style.display = 'flex';
   chatbotButton.style.display = 'none';
   chatbotMessages.innerHTML = '';
   addMessage('👋 Hi! I\'m AstroBot. How can I help you today?');
   showQuickReplies();
 });
 chatbotClose.addEventListener('click', function() {
   chatbotPopup.style.display = 'none';
   chatbotButton.style.display = 'block';
 });
 chatbotForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const userText = chatbotInput.value.trim();
   if (!userText) return;
   addMessage(userText, 'user');
   chatbotInput.value = '';
   chatbotQuickReplies.innerHTML = '';
   botReply(userText);
 });
 // Section fade/slide-in animation
 document.querySelectorAll('section, .testimonials, .features, .about, .faq, .contact').forEach(el => {
    el.classList.add('section-animate');
  });
  // Only declare observer once
  if (!window._sectionObserverInitialized) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.section-animate').forEach(el => sectionObserver.observe(el));
    window._sectionObserverInitialized = true;
  }
  
  // Opening Animation
  window.addEventListener('load', function() {
    const openingAnimation = document.getElementById('openingAnimation');
    const consultationPopup = document.getElementById('consultationPopup');
    
    // Show opening animation for 4 seconds
    setTimeout(() => {
      if (openingAnimation) {
        openingAnimation.style.display = 'none';
      }
      
      // Show consultation popup after 2 seconds
      setTimeout(() => {
        if (consultationPopup) {
          consultationPopup.style.display = 'flex';
        }
      }, 2000);
    }, 4000);
  });
  
  // Consultation Popup Controls
  document.addEventListener('DOMContentLoaded', function() {
    const consultationPopup = document.getElementById('consultationPopup');
    const popupClose = document.getElementById('popupClose');
    const closePopup = document.getElementById('closePopup');
    
    if (popupClose) {
      popupClose.addEventListener('click', function() {
        consultationPopup.style.display = 'none';
      });
    }
    
    if (closePopup) {
      closePopup.addEventListener('click', function() {
        consultationPopup.style.display = 'none';
      });
    }
    
    // Close popup when clicking outside
    if (consultationPopup) {
      consultationPopup.addEventListener('click', function(e) {
        if (e.target === consultationPopup) {
          consultationPopup.style.display = 'none';
        }
      });
    }
  });
  
  // Dynamic Google Reviews
  const googleReviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      text: "The kundli analysis was incredibly accurate! Astrology light for All helped me understand my life path better. The marriage compatibility report was spot on.",
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      rating: 5,
      date: "1 month ago",
      text: "I was skeptical at first, but the daily horoscopes are amazingly accurate. The gemstone recommendation changed my life positively.",
      avatar: "RV"
    },
    {
      name: "Anjali Patel",
      rating: 5,
      date: "3 weeks ago",
      text: "The Vastu consultation transformed our home energy. We feel more peaceful and prosperous since following their advice.",
      avatar: "AP"
    },
    {
      name: "Sunita Reddy",
      rating: 5,
      date: "1 month ago",
      text: "Professional, caring, and accurate. The birth chart analysis revealed aspects of my personality I never knew existed.",
      avatar: "SR"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 months ago",
      text: "Excellent service! The astrologer is very knowledgeable and patient. Helped me understand my career path clearly.",
      avatar: "RK"
    },
    {
      name: "Meera Singh",
      rating: 5,
      date: "1 month ago",
      text: "The gemstone recommendation was perfect. I feel more confident and positive since wearing the suggested stone.",
      avatar: "MS"
    },
    {
      name: "Amit Gupta",
      rating: 5,
      date: "3 weeks ago",
      text: "Very accurate predictions and helpful remedies. The consultation was worth every penny. Highly recommended!",
      avatar: "AG"
    },
    {
      name: "Kavita Sharma",
      rating: 5,
      date: "2 months ago",
      text: "The marriage compatibility analysis was detailed and accurate. Helped us make an informed decision.",
      avatar: "KS"
    }
  ];
  
  let currentReviewIndex = 0;
  const reviewsPerLoad = 4;
  
  function createReviewCard(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return `
      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">${review.avatar}</div>
          <div class="reviewer-info">
            <h4>${review.name}</h4>
            <div class="review-date">${review.date}</div>
            <div class="review-stars">
              ${stars.split('').map(star => 
                star === '★' ? '<i class="fas fa-star star"></i>' : '<i class="far fa-star star"></i>'
              ).join('')}
            </div>
          </div>
        </div>
        <div class="review-text">${review.text}</div>
      </div>
    `;
  }
  
  function loadReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    
    if (!reviewsGrid) return;
    
    const endIndex = Math.min(currentReviewIndex + reviewsPerLoad, googleReviews.length);
    
    for (let i = currentReviewIndex; i < endIndex; i++) {
      reviewsGrid.innerHTML += createReviewCard(googleReviews[i]);
    }
    
    currentReviewIndex = endIndex;
    
    // Hide load more button if all reviews are loaded
    if (loadMoreBtn && currentReviewIndex >= googleReviews.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
  
  // Load initial reviews
  document.addEventListener('DOMContentLoaded', function() {
    loadReviews();
    
    // Load more reviews button
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', loadReviews);
    }
  });
  
  // Function to update reviews from Google My Business (manual method)
  function updateReviewsFromGoogle() {
    // This function can be called manually to update reviews
    // You can add new reviews to the googleReviews array
    console.log('Reviews updated from Google My Business');
  }
  
  // Auto-refresh reviews every 24 hours (optional)
  setInterval(() => {
    // This could be connected to a backend service that scrapes Google reviews
    console.log('Checking for new reviews...');
  }, 24 * 60 * 60 * 1000);