// Navigation functionality
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    document.querySelectorAll(".nav-item").forEach((nav) => {
      nav.classList.remove("active")
    })

    // Add active class to clicked item
    this.classList.add("active")

    const page = this.getAttribute("data-page")
    console.log("[v0] Navigating to:", page)

    // Add your navigation logic here
    // Example: window.location.href = `/${page}`;
  })
})

// Card click handlers
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const title = this.querySelector(".card-title")?.textContent || "Card"
    console.log("[v0] Card clicked:", title)
    // Add your card click logic here
  })
})

// Category click handlers
document.querySelectorAll(".category-item").forEach((category) => {
  category.addEventListener("click", function () {
    const name = this.querySelector(".category-name")?.textContent || "Category"
    console.log("[v0] Category clicked:", name)
    // Add your category click logic here
  })
})

// Button click handlers
document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation()
    const text = this.textContent
    console.log("[v0] Button clicked:", text)
    // Add your button click logic here
  })
})

// Search functionality
document.querySelector(".search-btn")?.addEventListener("click", () => {
  console.log("[v0] Search clicked")
  // Add your search logic here
})

// Menu functionality
document.querySelector(".menu-btn")?.addEventListener("click", () => {
  console.log("[v0] Menu clicked")
  // Add your menu logic here
})

// Promo banner button
document.querySelector(".promo-btn")?.addEventListener("click", () => {
  console.log("[v0] Promo button clicked")
  // Add your promo logic here
})

const currentAffairsData = {
  cas: [
    {
      date: "28-10-2025",
      title_en: "🥛 Father of Operation Flood and its Scope",
      title_ta: "🥛 வெள்ளச் செயல்பாட்டின் தந்தை மற்றும் அதன் நோக்கம்",
      title_hi: "🥛 ऑपरेशन फ्लड के जनक और उसका दायरा",
      desc_en:
        "📌 Key Points:~~~~🔹 The Father of Operation Flood was **Dr. Verghese Kurien**.~~~~🔹 Operation Flood was the largest integrated **dairy development programme** of the world.~~~~🔹 It was started by the National Dairy Development Board in **1970**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 When was the Operation Flood programme started?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 வெள்ளச் செயல்பாட்டின் தந்தை **டாக்டர் வர்கீஸ் குரியன்** ஆவார்.~~~~🔹 வெள்ளச் செயல்பாடு உலகின் மிகப்பெரிய ஒருங்கிணைந்த **பால் பண்ணை மேம்பாட்டுத் திட்டமாக** இருந்தது.~~~~🔹 இது தேசிய பால் பண்ணை மேம்பாட்டு வாரியத்தால் **1970** இல் தொடங்கப்பட்டது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 வெள்ளச் செயல்பாடு திட்டம் எப்போது தொடங்கப்பட்டது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 ऑपरेशन फ्लड के जनक **डॉ. वर्गीस कुरियन** थे।~~~~🔹 ऑपरेशन फ्लड दुनिया का सबसे बड़ा एकीकृत **डेयरी विकास कार्यक्रम** था।~~~~🔹 यह राष्ट्रीय डेयरी विकास बोर्ड द्वारा **1970** में शुरू किया गया था।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 ऑपरेशन फ्लड कार्यक्रम कब शुरू किया गया था?",
      shorts_en: "Dr. Varghese Kurien, Dairy Development, NDDB, 1970.",
      shorts_ta: "டாக்டர் வர்கீஸ் குரியன், பால் பண்ணை மேம்பாடு, NDDB, 1970.",
      shorts_hi: "डॉ. वर्गीस कुरियन, डेयरी विकास, NDDB, 1970.",
      ver: 24000,
      id: 281020251,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🌻 Yellow and Blue Revolutions",
      title_ta: "🌻 மஞ்சள் மற்றும் நீலப் புரட்சிகள்",
      title_hi: "🌻 पीली और नीली क्रांतियाँ",
      desc_en:
        "📌 Key Points:~~~~🔹 The increase in **oil-seeds** production was due to the **'Yellow Revolution'**.~~~~🔹 The progress in the increase of **fish production** was called the **'Blue Revolution'**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 The 'Blue Revolution' is associated with the increase in production of what?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 **எண்ணெய் வித்துக்கள்** உற்பத்தியில் ஏற்பட்ட அதிகரிப்பு **'மஞ்சள் புரட்சி'** காரணமாக இருந்தது.~~~~🔹 **மீன் உற்பத்தியில்** ஏற்பட்ட முன்னேற்றம் **'நீலப் புரட்சி'** என்று அழைக்கப்பட்டது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 'நீலப் புரட்சி' எதன் உற்பத்தியின் அதிகரிப்புடன் தொடர்புடையது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 **तेल-बीज** उत्पादन में वृद्धि **'पीली क्रांति'** के कारण हुई थी।~~~~🔹 **मछली उत्पादन** में वृद्धि की प्रगति को **'नीली क्रांति'** कहा गया था।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 'नीली क्रांति' का संबंध किसके उत्पादन में वृद्धि से है?",
      shorts_en: "Yellow Revolution (Oil-seeds), Blue Revolution (Fish).",
      shorts_ta: "மஞ்சள் புரட்சி (எண்ணெய் வித்துக்கள்), நீலப் புரட்சி (மீன்).",
      shorts_hi: "पीली क्रांति (तेल-बीज), नीली क्रांति (मछली)।",
      ver: 24000,
      id: 281020252,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "☕ India's Global Ranking in Coffee Production",
      title_ta: "☕ காபி உற்பத்தியில் இந்தியாவின் உலகளாவிய தரவரிசை",
      title_hi: "☕ कॉफी उत्पादन में भारत की वैश्विक रैंकिंग",
      desc_en:
        "📌 Key Points:~~~~🔹 India ranks **sixth** in world **coffee** production.~~~~🔹 India contributes only **4%** of the world's coffee production.~~~~ ❓ Sample MCQ:~~~~🔹🧠 What is India's world rank in coffee production?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 உலக **காபி** உற்பத்தியில் இந்தியா **ஆறாவது** இடத்தில் உள்ளது.~~~~🔹 உலக காபி உற்பத்தியில் இந்தியா **4%** மட்டுமே பங்களிக்கிறது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 காபி உற்பத்தியில் இந்தியாவின் உலகத் தரவரிசை என்ன?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 विश्व **कॉफी** उற்பத்தியில் भारत का स्थान **छठा** है।~~~~🔹 भारत विश्व के कॉफी उற்பादन में केवल **4%** का योगदान करता है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 कॉफी उत्पादन में भारत का विश्व में कौन सा स्थान है?",
      shorts_en: "India, 6th rank, Coffee production, 4% contribution.",
      shorts_ta: "இந்தியா, 6வது இடம், காபி உற்பத்தி, 4% பங்களிப்பு.",
      shorts_hi: "भारत, छठा स्थान, कॉफी उत्पादन, 4% योगदान।",
      ver: 24000,
      id: 281020253,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🌾 Crop Production and Raw Materials",
      title_ta: "🌾 பயிர் உற்பத்தி மற்றும் மூலப்பொருட்கள்",
      title_hi: "🌾 फसल उत्पादन और कच्चा माल",
      desc_en:
        "📌 Key Points:~~~~🔹 **Assam** is the biggest **tea** producer in the country.~~~~🔹 India holds the **first position** in the world in the production of **sugar-cane and sugar**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 India ranks first globally in the production of which two related commodities?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 நாட்டில் **அஸ்ஸாம்** மிகப்பெரிய **தேயிலை** உற்பத்தியாளர் ஆகும்.~~~~🔹 **கரும்பு மற்றும் சர்க்கரை** உற்பத்தியில் இந்தியா உலகில் **முதல் இடத்தில்** உள்ளது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 இந்தியா உலகளவில் எந்த இரண்டு தொடர்புடைய பொருட்களின் உற்பத்தியில் முதலிடம் வகிக்கிறது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 देश में **असम** सबसे बड़ा **चाय** उत्पादक है।~~~~🔹 **गन्ना और चीनी** के उत्पादन में भारत विश्व में **पहले स्थान** पर है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 भारत विश्व स्तर पर किन दो संबंधित वस्तुओं के उत्पादन में पहले स्थान पर है?",
      shorts_en: "Agriculture, raw material, foodgrains, industrial market.",
      shorts_ta: "விவசாயம், மூலப்பொருள், உணவு தானியங்கள், தொழில்துறை சந்தை.",
      shorts_hi: "कृषि, कच्चा माल, खाद्यान्न, औद्योगिक बाजार।",
      ver: 24000,
      id: 281020254,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🍬 Cuba: The Sugar Bowl of the World",
      title_ta: "🍬 கியூபா: உலகின் சர்க்கரைக் கிண்ணம்",
      title_hi: "🍬 क्यूबा: विश्व का शक्कर का कटोरा",
      desc_en:
        "📌 Key Points:~~~~🔹 **Cuba** is known as the **Sugar Bowl of the World**.~~~~🔹 Here, sugar is primarily made of **Beetroot**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 Which country is referred to as the 'Sugar Bowl of the World'?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 **கியூபா** **உலகின் சர்க்கரைக் கிண்ணம்** என்று அழைக்கப்படுகிறது.~~~~🔹 இங்கு, சர்க்கரை முக்கியமாக **பீட்ரூட்** இலிருந்து தயாரிக்கப்படுகிறது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 எந்த நாடு 'உலகின் சர்க்கரைக் கிண்ணம்' என்று குறிப்பிடப்படுகிறது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 **क्यूबा** को **विश्व का शक्कर का कटोरा** (Sugar Bowl of the World) कहा जाता है।~~~~🔹 यहाँ, चीनी मुख्य रूप से **चुकंदर** (Beetroot) से बनाई जाती है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 किस देश को 'विश्व का शक्कर का कटोरा' कहा जाता है?",
      shorts_en: "Cuba, Sugar Bowl of the World, Beetroot sugar.",
      shorts_ta: "கியூபா, உலகின் சர்க்கரைக் கிண்ணம், பீட்ரூட் சர்க்கரை.",
      shorts_hi: "क्यूबा, विश्व का शक्कर का कटोरा, चुकंदर की चीनी।",
      ver: 24000,
      id: 281020255,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🌾 Role of Agriculture in Industrial Sector",
      title_ta: "🌾 தொழில்துறை துறையில் விவசாயத்தின் பங்கு",
      title_hi: "🌾 औद्योगिक क्षेत्र में कृषि की भूमिका",
      desc_en:
        "📌 Key Points:~~~~🔹 The importance of agriculture in the industrial sector is not only for the supply of **raw material**.~~~~🔹 It also provides **foodgrains** for the people working in that sector and a **market** for industrial products.~~~~ ❓ Sample MCQ:~~~~🔹🧠 Besides raw materials, what else does agriculture provide for the industrial sector?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 தொழில்துறை துறையில் விவசாயத்தின் முக்கியத்துவம் **மூலப்பொருட்களை** வழங்குவது மட்டுமல்ல.~~~~🔹 இது அந்தத் துறையில் பணிபுரியும் மக்களுக்கு **உணவு தானியங்களையும்** மற்றும் தொழில்துறை தயாரிப்புகளுக்கு **சந்தையையும்** வழங்குகிறது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 மூலப்பொருட்களைத் தவிர, தொழில்துறை துறைக்கு விவசாயம் வேறு எதை வழங்குகிறது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 औद्योगिक क्षेत्र में कृषि का महत्व केवल **कच्चे माल** की आपूर्ति के लिए नहीं है।~~~~🔹 यह उस क्षेत्र में काम करने वाले लोगों के लिए **खाद्यान्न** और औद्योगिक उत्पादों के लिए **बाजार** भी प्रदान करता है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 कच्चे माल के अलावा, कृषि औद्योगिक क्षेत्र के लिए और क्या प्रदान करती है?",
      shorts_en: "Agriculture, raw material, foodgrains, industrial market.",
      shorts_ta: "விவசாயம், மூலப்பொருள், உணவு தானியங்கள், தொழில்துறை சந்தை.",
      shorts_hi: "कृषि, कच्चा माल, खाद्यान्न, औद्योगिक बाजार।",
      ver: 24000,
      id: 281020256,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🌧️ Dependency of Indian Agriculture",
      title_ta: "🌧️ இந்திய விவசாயத்தின் சார்ந்துள்ள நிலை",
      title_hi: "🌧️ भारतीय कृषि की निर्भरता",
      desc_en:
        "📌 Key Points:~~~~🔹 Indian agriculture **still depends upon monsoon**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 What is the primary factor that Indian agriculture still relies on?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 இந்திய விவசாயம் **இன்னும் பருவமழையைச் சார்ந்துள்ளது**.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 இந்திய விவசாயம் இன்னும் சார்ந்திருக்கும் முதன்மை காரணி எது?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 भारतीय कृषि **अभी भी मानसून पर निर्भर** करती है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 भारतीय कृषि अभी भी किस प्राथमिक कारक पर निर्भर करती है?",
      shorts_en: "Indian agriculture, monsoon dependency.",
      shorts_ta: "இந்திய விவசாயம், பருவமழை சார்ந்துள்ள நிலை.",
      shorts_hi: "भारतीय कृषि, मानसून पर निर्भरता।",
      ver: 24000,
      id: 281020257,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🍚 Foodgrains Production in 2011-12 (India)",
      title_ta: "🍚 2011-12 இல் உணவு தானிய உற்பத்தி (இந்தியா)",
      title_hi: "🍚 2011-12 में खाद्यान्न उत्पादन (भारत)",
      desc_en:
        "📌 Key Points:~~~~🔹 Foodgrains Production in India was at a record high of **259.32 million tonnes** in **2011-12**.~~~~ ❓ Sample MCQ:~~~~🔹🧠 What was the record high foodgrains production in India during 2011-12?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 இந்தியாவில் உணவு தானிய உற்பத்தி **2011-12** இல் **259.32 மில்லியன் டன்களை** எட்டி சாதனை படைத்தது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 2011-12 இல் இந்தியாவில் உணவு தானிய உற்பத்தி எட்டிய அதிகபட்ச அளவு என்ன?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 भारत में खाद्यान्न उत्पादन **2011-12** में **259.32 मिलियन टन** के रिकॉर्ड उच्च स्तर पर था।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 2011-12 के दौरान भारत में खाद्यान्न का रिकॉर्ड उच्च उत्पादन कितना था?",
      shorts_en: "Record foodgrains, 259.32 million tonnes, 2011-12.",
      shorts_ta: "சாதனை உணவு தானியங்கள், 259.32 மில்லியன் டன், 2011-12.",
      shorts_hi: "रिकॉर्ड खाद्यान्न, 259.32 मिलियन टन, 2011-12।",
      ver: 24000,
      id: 281020258,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🍎 National Food Security Act (NFSA) 2013: Objective and Coverage",
      title_ta: "🍎 தேசிய உணவு பாதுகாப்புச் சட்டம் (NFSA) 2013: நோக்கம் மற்றும் பாதுகாப்பு",
      title_hi: "🍎 राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013: उद्देश्य और कवरेज",
      desc_en:
        "📌 Key Points:~~~~🔹 The objective of NFSA 2013 is to provide food and nutritional security in human life cycle.~~~~🔹 The Act provides coverage up to **75% of the rural** population and **50% of the urban** population.~~~~ ❓ Sample MCQ:~~~~🔹🧠 What is the main objective of the National Food Security Act (NFSA) 2013?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 NFSA 2013 இன் நோக்கம் மனித வாழ்க்கைச் சுழற்சியில் உணவு மற்றும் ஊட்டச்சத்து பாதுகாப்பை வழங்குவதாகும்.~~~~🔹 இந்தச் சட்டம் **கிராமப்புற மக்களில் 75% வரையிலும்** மற்றும் **நகர்ப்புற மக்களில் 50% வரையிலும்** பாதுகாப்பு வழங்குகிறது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 தேசிய உணவு பாதுகாப்புச் சட்டம் (NFSA) 2013 இன் முக்கிய நோக்கம் என்ன?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 NFSA 2013 का उद्देश्य मानव जीवन चक्र में खाद्य और पोषण सुरक्षा प्रदान करना है।~~~~🔹 यह अधिनियम **ग्रामीण आबादी के 75% तक** और **शहरी आबादी के 50% तक** कवरेज प्रदान करता है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013 का मुख्य उद्देश्य क्या है?",
      shorts_en: "NFSA 2013, Food and nutritional security, 75% rural, 50% urban.",
      shorts_ta: "NFSA 2013, உணவு மற்றும் ஊட்டச்சத்து பாதுகாப்பு, 75% கிராமப்புறம், 50% நகர்ப்புறம்.",
      shorts_hi: "NFSA 2013, खाद्य और पोषण सुरक्षा, 75% ग्रामीण, 50% शहरी।",
      ver: 24000,
      id: 281020259,
      category: "Economy",
    },
    {
      date: "28-10-2025",
      title_en: "🍎 NFSA 2013: Distribution Method and Special Focus",
      title_ta: "🍎 NFSA 2013: விநியோக முறை மற்றும் சிறப்பு கவனம்",
      title_hi: "🍎 NFSA 2013: वितरण विधि और विशेष ध्यान",
      desc_en:
        "📌 Key Points:~~~~🔹 Beneficiaries receive subsidized food grains under the **TPDS** (Targeted Public Distribution System).~~~~🔹 The Act covers about **two-thirds of the population** and lays special focus on **women and children** for nutritional support.~~~~ ❓ Sample MCQ:~~~~🔹🧠 Under which system do beneficiaries receive subsidized food grains through NFSA?",
      desc_ta:
        "📌 முக்கிய குறிப்புகள்:~~~~🔹 பயனாளிகள் **TPDS** (இலக்கு பொது விநியோக முறை) மூலம் மானிய விலையில் உணவு தானியங்களைப் பெறுகிறார்கள்.~~~~🔹 இந்தச் சட்டம் **மக்கள் தொகையில் மூன்றில் இரண்டு பங்கு** பேரை உள்ளடக்கியது மற்றும் ஊட்டச்சத்து ஆதரவுக்காக **பெண்கள் மற்றும் குழந்தைகள்** மீது சிறப்பு கவனம் செலுத்துகிறது.~~~~ ❓ மாதிரி MCQ:~~~~🔹🧠 NFSA மூலம் மானிய விலையில் உணவு தானியங்களை பயனாளிகள் எந்த அமைப்பின் கீழ் பெறுகிறார்கள்?",
      desc_hi:
        "📌 मुख्य बिंदु:~~~~🔹 लाभार्थियों को **TPDS** (लक्षित सार्वजनिक वितरण प्रणाली) के तहत रियायती खाद्यान्न प्राप्त होता है।~~~~🔹 यह अधिनियम **जनसंख्या के लगभग दो-तिहाई** को कवर करता है और पोषण सहायता के लिए **महिलाओं और बच्चों** पर विशेष ध्यान देता है।~~~~ ❓ नमूना बहुविकल्पीय प्रश्न:~~~~🔹🧠 NFSA के माध्यम से लाभार्थी किस प्रणाली के तहत रियायती खाद्यान्न प्राप्त करते हैं?",
      shorts_en: "TPDS, Two-thirds population, Focus on women and children.",
      shorts_ta: "TPDS, மூன்றில் இரண்டு பங்கு மக்கள், பெண்கள் மற்றும் குழந்தைகள் மீது கவனம்.",
      shorts_hi: "TPDS, दो-तिहाई जनसंख्या, महिलाओं और बच्चों पर ध्यान।",
      ver: 24000,
      id: 2810202510,
      category: "Economy",
    },
  ],
  questions: [
    {
      qid: 281020251,
      q_en: "When was the Operation Flood programme started?",
      q_ta: "வெள்ளச் செயல்பாடு திட்டம் எப்போது தொடங்கப்பட்டது?",
      q_hi: "ऑपरेशन फ्लड कार्यक्रम कब शुरू किया गया था?",
      o_a: "1960",
      o_b: "1970",
      o_c: "1980",
      o_d: "1990",
      ans: "B",
      exp_en: "The text states, 'It was started by National Dairy Development Board in 1970.'",
    },
    {
      qid: 281020252,
      q_en: "The 'Blue Revolution' is associated with the increase in production of what?",
      q_ta: "'நீலப் புரட்சி' எதன் உற்பத்தியின் அதிகரிப்புடன் தொடர்புடையது?",
      q_hi: "'नीली क्रांति' का संबंध किसके उत्पादन में वृद्धि से है?",
      o_a: "Oil-seeds",
      o_b: "Fish",
      o_c: "Dairy",
      o_d: "Sugar-cane",
      ans: "B",
      exp_en: "The text states, 'The progress in increase of fish production was called 'Blue Revolution'.'",
    },
    {
      qid: 281020253,
      q_en: "What is India's world rank in coffee production?",
      q_ta: "காபி உற்பத்தியில் இந்தியாவின் உலகத் தரவரிசை என்ன?",
      q_hi: "कॉफी उत्पादन में भारत का विश्व में कौन सा स्थान है?",
      o_a: "Third",
      o_b: "Fourth",
      o_c: "Fifth",
      o_d: "Sixth",
      ans: "D",
      exp_en: "The text states, 'India ranks sixth in world coffee production.'",
    },
    {
      qid: 281020254,
      q_en: "India ranks first globally in the production of which two related commodities?",
      q_ta: "இந்தியா உலகளவில் எந்த இரண்டு தொடர்புடைய பொருட்களின் உற்பத்தியில் முதலிடம் வகிக்கிறது?",
      q_hi: "भारत विश्व स्तर पर किन दो संबंधित वस्तुओं के उत्पादन में पहले स्थान पर है?",
      o_a: "Coffee and Tea",
      o_b: "Oil-seeds and Fish",
      o_c: "Sugar-cane and sugar",
      o_d: "Rice and Wheat",
      ans: "C",
      exp_en: "The text states, 'India holds first position in the world in the production of sugar-cane and sugar.'",
    },
    {
      qid: 281020255,
      q_en: "Which country is referred to as the 'Sugar Bowl of the World'?",
      q_ta: "எந்த நாடு 'உலகின் சர்க்கரைக் கிண்ணம்' என்று குறிப்பிடப்படுகிறது?",
      q_hi: "किस देश को 'विश्व का शक्कर का कटोरा' कहा जाता है?",
      o_a: "India",
      o_b: "Cuba",
      o_c: "Brazil",
      o_d: "China",
      ans: "B",
      exp_en: "The text states, 'Cuba is known as the Sugar Bowl of the World.'",
    },
    {
      qid: 281020256,
      q_en: "Besides raw materials, what else does agriculture provide for the industrial sector?",
      q_ta: "மூலப்பொருட்களைத் தவிர, தொழில்துறை துறைக்கு விவசாயம் வேறு எதை வழங்குகிறது?",
      q_hi: "कच्चे माल के अलावा, कृषि औद्योगिक क्षेत्र के लिए और क्या प्रदान करती है?",
      o_a: "Skilled labour",
      o_b: "Technology transfer",
      o_c: "Foodgrains and market for industrial products",
      o_d: "Foreign exchange",
      ans: "C",
      exp_en:
        "The text states that agriculture provides 'foodgrains for the people working in that sector and market for industrial products.'",
    },
    {
      qid: 281020257,
      q_en: "What is the primary factor that Indian agriculture still relies on?",
      q_ta: "இந்திய விவசாயம் இன்னும் சார்ந்திருக்கும் முதன்மை காரணி எது?",
      q_hi: "भारतीय कृषि अभी भी किस प्राथमिक कारक पर निर्भर करती है?",
      o_a: "Irrigation facilities",
      o_b: "Monsoon",
      o_c: "Subsidized seeds",
      o_d: "Government loans",
      ans: "B",
      exp_en: "The text states, 'Indian agriculture still depends upon monsoon.'",
    },
    {
      qid: 281020258,
      q_en: "What was the record high foodgrains production in India during 2011-12?",
      q_ta: "2011-12 இல் இந்தியாவில் உணவு தானிய உற்பத்தி எட்டிய அதிகபட்ச அளவு என்ன?",
      q_hi: "2011-12 के दौरान भारत में खाद्यान्न का रिकॉर्ड उच्च उत्पादन कितना था?",
      o_a: "200.50 million tonnes",
      o_b: "225.80 million tonnes",
      o_c: "259.32 million tonnes",
      o_d: "275.15 million tonnes",
      ans: "C",
      exp_en: "The text states that the record high was '259.32 million tonnes in 2011-12'.",
    },
    {
      qid: 281020259,
      q_en: "What is the main objective of the National Food Security Act (NFSA) 2013?",
      q_ta: "தேசிய உணவு பாதுகாப்புச் சட்டம் (NFSA) 2013 இன் முக்கிய நோக்கம் என்ன?",
      q_hi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013 का मुख्य उद्देश्य क्या है?",
      o_a: "To promote industrial growth",
      o_b: "To ensure food and nutritional security",
      o_c: "To provide subsidized housing",
      o_d: "To control inflation",
      ans: "B",
      exp_en: "The text states the objective is 'To provide food and nutritional security in human life cycle'.",
    },
    {
      qid: 2810202510,
      q_en: "Under which system do beneficiaries receive subsidized food grains through NFSA?",
      q_ta: "NFSA மூலம் மானிய விலையில் உணவு தானியங்களை பயனாளிகள் எந்த அமைப்பின் கீழ் பெறுகிறார்கள்?",
      q_hi: "NFSA के माध्यम से लाभार्थी किस प्रणाली के तहत रियायती खाद्यान्न प्राप्त करते हैं?",
      o_a: "Integrated Child Development Services (ICDS)",
      o_b: "Targeted Public Distribution System (TPDS)",
      o_c: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      o_d: "Aayushman Bharat Yojana",
      ans: "B",
      exp_en:
        "The text states beneficiaries receive subsidized food grains 'under TPDS (Targeted Public Distribution System)'.",
    },
  ],
}

let currentLanguage = "en";
let dailyBtn = document.querySelector(".daily-current-affairs");
let isContentVisible = false;

dailyBtn.addEventListener("click", () => {
  const articlesContainer = document.querySelector(".articles-container");

  if (!isContentVisible) {
    console.log("[v0] Data loaded successfully:", currentAffairsData.cas.length, "articles");

    // Render the content first (fills the container)
    renderContent();

    // Then show it (no empty space before rendering)
    requestAnimationFrame(() => {
      articlesContainer.classList.add("show");
    });

    dailyBtn.textContent = "Hide Current Affairs";
  } else {
    // Hide and clear the content
    articlesContainer.classList.remove("show");

    // Optional: clear the HTML after animation ends
    setTimeout(() => {
      articlesContainer.innerHTML = "";
    }, 300);

    dailyBtn.textContent = "Daily Current Affairs";
  }

  isContentVisible = !isContentVisible;
});





// Language switching
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    currentLanguage = this.getAttribute("data-lang")
    document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"))
    this.classList.add("active")
    renderContent()
  })
})

function getText(obj, key) {
  const langKey = `${key}_${currentLanguage}`
  return obj[langKey] || obj[key] || ""
}

function renderArticles() {
  const container = document.querySelector(".articles-container")
  if (!container) {
    console.log("[v0] Articles container not found")
    return
  }

  container.innerHTML = currentAffairsData.cas
    .map(
      (article) => `
    <div class="card article-card">
      <h3 class="article-title">${getText(article, "title")}</h3>
      <p class="article-desc">${getText(article, "shorts")}</p>
      <button class="card-btn read-btn" onclick="readArticle(${article.id})">Read More</button>
    </div>
  `,
    )
    .join("")
}

function renderContent() {
  renderArticles()
}

window.readArticle = (id) => {
  const article = currentAffairsData.cas.find((a) => a.id === id)
  if (article) {
    console.log("[v0] Reading article:", getText(article, "title"))
    alert(`${getText(article, "title")}\n\n${getText(article, "desc")}`)
  }
}
