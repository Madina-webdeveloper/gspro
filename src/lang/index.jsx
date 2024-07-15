export const lang = {
  russian: "Russian",
  english: "English",
  uzbek: "Uzbek",
};
export let selectionsLang = "English";
export const setSelectionsLang = (body) => {
  localStorage.setItem("lang", body);
  selectionsLang = body;
  window.location.reload();
};

export const language = {
  english: {
    header: {
      about: "About us",
      product: "Products",
      contact: "Contact",
      sertificate: "Product certificates",
      delivery: "Delivery",
    },
    footer: {
      about: "About us",
      product: "Products",
      contact: "Contact",
      sertificate: "Product certificates",
      delivery: "Delivery",
      informations: "Informations",
    },
    homePG: {
      heroSC: { desc: "YOUR PRODUCTS — OUR PACKAGING" },
      aboutDesc: `GREAT SOATOBOD PRODUCTION company produces high-quality woven
    polypropylene bags for packaging, transportation and
    further storage of bulk food products such as cereals,
    sugar, flour, soda, salt, products related to agriculture
    farming, industrial chemical materials and much more.
    Our products undergo rigorous quality control. We can
    buy polypropylene bags wholesale. I have an opportunity
    production of products in large volumes.`,
      contactSC: {
        title: "DID NOT FIND WHAT YOU WERE LOOKING FOR?",
        desc: `Fill out the application and our specialists will contact you as soon as possible
        time. We will find the product for you or select a suitable analogue!`,
        name: "Please write your name",
        number: "Please write your number",
        email: "Please write your email",
        btn: "Submit",
      },
    },
    aboutPG: {
      desc1: `Valuable experience of Great Soatobod Production in the production market
        polypropylene bags allows us to guarantee undoubted
        quality. Our company does not set a goal to make money
        on clients, since our main task is to ensure that everyone
        the client has become our regular, returning again and again for
        purchasing polypropylene bags from Great Soatobod Production.
        Also among our priorities is the quality of service at every
        stage of selling bags from customer calls to post-sales
        service. Buy polypropylene bags from Great Soatobod
        Everyone can produce at competitive prices!`,
      desc2: `The company "Great Soatobod Production" is open to absolutely any
        types of cooperation. The company's specialists are always ready to give
        clients with the most detailed consultations, telling them about everything
        technological features, subtleties of polypropylene bags. They
        will help you order products that will fully meet
        characteristics of your production.`,
    },
    productPG: {
      title1: "Onion bags",
      desc1: `Every year, during the harvest season, your favorite farm is faced with the question of how to pack the harvest. After all, there are different buyers, and everything needs to be taken into account. The use of vegetable bags greatly simplifies the loading, transportation, unloading and sale of fruit and vegetable products. Horse onion bags by JV Great Saatabad Production LLC are available in different colors and different load capacities. You can choose a vegetable net for goods weighing 5 kg, 8 kg, 12 kg, 15 kg, 30 kg and even 40 kg.`,
      titleB: "Plain propylene bags",
      title2: "Simple polypropylene bag, for flour, cereals, animal feed.",
      desc2: `We offer our customers the largest selection of containers made from polypropylene. You will definitely find what you are looking for with us. In our work we follow a customer-oriented policy. Do you want to purchase polypropylene packaging at a low cost? We are waiting for you in our company. Our specialists will be happy to advise you, help you place your order, and introduce you to the range of polypropylene bags.`,
    },   sertificatePG:{
      title:"Product certificates",
      desc:`All produced bags undergo quality control and are studied in production and laboratory conditions to ensure compliance with standards. All manufactured products have a Certificate of Conformity and a Sanitary-Epidemiological Conclusion.
      All manufactured products are certified and meet high standards. The safety of using polypropylene bags for food packaging is confirmed by the hygienic certificate of the sanitary and epidemiological conclusion of the Ministry of Health of the Republic of Uzbekistan.
      In order to ensure support for the stable guaranteed quality of products, as well as the competent formation of the enterprise's goals, while taking into account consumer demand, and a clear definition of internal processes and their management, in 2015, GREAT SOATOBOD PRODUCTION LLC introduced an ISO 9001 quality management system : 2015.`
    },deliveryDesc:`Our company understands how important it is for the customer to receive high-quality products in the shortest possible time. Great Soatobod Production delivers throughout the territory of the Republic of Uzbekistan, as well as to neighboring countries. Having a fleet of vehicles with different carrying capacities, the company’s employees will always find the optimal solution for delivering orders.`
  },
  uzbek: {
    header: {
      about: "Biz haqimizda",
      product: "Mahsulotlar",
      contact: "Aloqa",
      sertificate: "Mahsulot sertifikatlari",
      delivery: "Yetkazib berish",
    },
    footer: {
      about: "Biz haqimizda",
      product: "Mahsulotlar",
      contact: "Aloqa",
      sertificate: "Mahsulot sertifikatlari",
      delivery: "Yetkazib berish",
      informations: "Ma'lumotlar",
    },
    homePG: {
      heroSC: { desc: "SIZNING MAHSULOTLARINGIZ —  BIZNING QADOG'IMIZ" },
      aboutDesc: `“GREAT SOATOBOD PRODUCTION” korxonasi sifatli to‘qimachilik ishlab chiqaradi
      qadoqlash, tashish va uchun polipropilen paketlar
      don kabi quyma oziq-ovqat mahsulotlarini keyingi saqlash;
      shakar, un, soda, tuz, qishloq xo'jaligiga oid mahsulotlar
      dehqonchilik, sanoat kimyoviy materiallari va boshqalar.
      Mahsulotlarimiz qattiq sifat nazorati ostida. Biz qila olamiz
      polipropilen paketlarni ulgurji sotib oling. Menda imkoniyat bor
      katta hajmdagi mahsulotlar ishlab chiqarish.`,
      contactSC: {
        title: "Izlagan narsangni topolmadingmi?",
        desc: `Arizani to'ldiring va bizning mutaxassislarimiz imkon qadar tezroq siz bilan bog'lanadi
        vaqt. Biz siz uchun mahsulotni topamiz yoki mos analogni tanlaymiz!`,
        name: "Iltimos, ismingizni yozing",
        number: "Iltimos, nomeringizni yozing",
        email: "Iltimos, elektron pochtangizni yozing",
        btn: "Yuborish",
      },
    },
    aboutPG: {
      desc1: ` Great Soatobod Production kompaniyasining ishlab chiqarish bozoridagi qimmatli tajribasi
        polipropilen paketlar bizga shubhasiz kafolat berishga imkon beradi
        sifat. Bizning kompaniyamiz pul ishlashni maqsad qilib qo'ymaydi
        mijozlarga, chunki bizning asosiy vazifamiz hammani ta'minlashdir
        mijoz bizning doimiy bo'lib, qayta-qayta qaytib keladi
        Great Soatobod Production ishlab chiqarishidan polipropilen qoplarni xarid qilish.
        Shuningdek, bizning ustuvor vazifalarimiz qatoriga har biriga xizmat ko'rsatish sifati kiradi
        mijozlar qo'ng'iroqlaridan sotuvdan keyingi sotuvga qadar sumkalarni sotish bosqichi
        xizmat.  Great Soatobod Production dan polipropilen qoplarni xarid qiling
        Har kim raqobatbardosh narxlarda ishlab chiqarishi mumkin!`,
      desc2: `"Great Soatobod Production" kompaniyasi har kim uchun ochiq
        hamkorlik turlari. Kompaniyaning mutaxassislari har doim berishga tayyor
        mijozlarga eng batafsil maslahatlar, ularga hamma narsani aytib berish
        texnologik xususiyatlar, polipropilen paketlarning nozikliklari. Ular
        to'liq javob beradigan mahsulotlarga buyurtma berishga yordam beradi
        ishlab chiqarishingizning xususiyatlari.`,
    },
    productPG: {
      title1: "Piyoz paketlari",
      desc1: `Har yili o'rim-yig'im mavsumida sizning sevimli fermangiz hosilni qanday yig'ish kerakligi haqidagi savolga duch keladi. Axir, har xil xaridorlar bor va hamma narsani hisobga olish kerak. Sabzavotli qoplardan foydalanish meva-sabzavot mahsulotlarini yuklash, tashish, tushirish va sotishni sezilarli darajada osonlashtiradi. "Great Saatabad Production" MChJ QK tomonidan ishlab chiqarilgan ot piyoz qoplari turli rangda va turli yuk ko'tarish qobiliyatida mavjud. 5 kg, 8 kg, 12 kg, 15 kg, 30 kg va hatto 40 kg og'irlikdagi tovarlar uchun sabzavot tarmog'ini tanlashingiz mumkin.`,
      titleB: "Oddiy propilen paketlar",
      title2: "Oddiy polipropilen paket, un, don, hayvon emlari uchun.",
      desc2: `Biz mijozlarimizga polipropilendan tayyorlangan idishlarning eng katta tanlovini taklif qilamiz. Biz bilan albatta izlagan narsangizni topasiz. Bizning ishimizda biz mijozlarga yo'naltirilgan siyosatga amal qilamiz. Polipropilen qadoqlashni arzon narxda sotib olishni xohlaysizmi? Sizni kompaniyamizda kutamiz. Mutaxassislarimiz sizga maslahat berishdan, buyurtma berishda yordam berishdan va polipropilen paketlar assortimenti bilan tanishtirishdan mamnun bo'lishadi.`,
    },   sertificatePG:{
      title:"Mahsulot sertifikatlari",
      desc:`Barcha ishlab chiqarilgan sumkalar sifat nazoratidan o'tkaziladi va standartlarga muvofiqligini ta'minlash uchun ishlab chiqarish va laboratoriya sharoitida o'rganiladi. Barcha ishlab chiqarilgan mahsulotlar muvofiqlik sertifikatiga va sanitariya-epidemiologiya xulosasiga ega.
      Barcha ishlab chiqarilgan mahsulotlar sertifikatlangan va yuqori standartlarga javob beradi. Oziq-ovqat mahsulotlarini qadoqlash uchun polipropilen qoplardan foydalanish xavfsizligi O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligining sanitariya-epidemiologiya xulosasining gigiyenik sertifikati bilan tasdiqlanadi.
      Mahsulotlarning barqaror kafolatlangan sifatini qo‘llab-quvvatlash, shuningdek, iste’molchilar talabini hisobga olgan holda korxona maqsadlarini malakali shakllantirish, ichki jarayonlar va ularni boshqarishni aniq belgilash maqsadida 2015-yilda “GREAT SOATOBOD PRODUCTION” MChJ tomonidan ISO 9001 sifat menejmenti tizimi: 2015.`
    },deliveryDesc:`Kompaniyamiz mijoz uchun eng qisqa vaqt ichida yuqori sifatli mahsulotlarni olish qanchalik muhimligini tushunadi. "Great Soatobod Production" kompaniyasi butun O'zbekiston Respublikasi hududiga, shuningdek, qo'shni davlatlarga yetkazib beradi. Har xil yuk ko'tarish qobiliyatiga ega bo'lgan avtoulovlar parkiga ega bo'lgan kompaniya xodimlari har doim buyurtmalarni etkazib berish uchun maqbul echimni topadilar.`
  },

  russian: {
    header: {
      about: "О нас",
      product: "Продукция",
      contact: "Контакт",
      sertificate: "Сертификаты на продукцию",
      delivery: "Доставка",
    },
    footer: {
      about: "О нас",
      product: "Продукция",
      contact: "Контакт",
      sertificate: "Сертификаты на продукцию",
      delivery: "Доставка",
      informations: "Информация",
    },
    homePG: {
      heroSC: { desc: "ВАША ПРОДУКЦИЯ — НАША УПАКОВКА" },
      aboutDesc: `Компания GREAT SOATOBOD PRODUCTION производит качественные тканные
      полипропиленовые мешки для упаковывания, транспортирования и
      дальнейшего хранения сыпучих продуктов питания, таких как крупы,
      сахар, мука, сода, соль, продукции, связанной с сельским
      хозяйством, промышленно-химических материалов и многого другого.
      Наша продукция проходит тщательный контроль качества. У нас можно
      преобрести полипропиленовые мешки оптом. Есть возможность
      производства продуктов в больших объемах.`,
      contactSC: {
        title: "НЕ НАШЛИ ТО, ЧТО ИСКАЛИ?",
        desc: `Заполните заявку и наши специалисты свяжутся с вами в ближайшее
время. Мы найдем товар за Вас или подберем подходящий аналог!`,
        name: "Пожалуйста, напишите свое имя",
        number: "Пожалуйста, напишите свой номер",
        email: "Пожалуйста, напишите свой адрес электронной почты",
        btn: "Представлять на рассмотрение",
      },
    },
    aboutPG: {
      desc1: `      Ценный опыт работы Great Soatobod Production на рынке производства
        полипропиленовых мешков позволяет гарантировать несомненное
        качество. Наша компания не ставит перед собой цель заработать деньги
        на клиентах, так как наша главная задача состоит в том, чтобы каждый
        клиент стал нашим постоянным, вновь и вновь возвращаясь за
        приобретением полипропиленовых мешков в Great Soatobod Production.
        Также среди наших приоритетов – качество обслуживания на каждом
        этапе продажи мешков от звонков клиентов до постпродажного
        обслуживания. Купить полипропиленовые мешки в Great Soatobod
        Production по выгодным ценам может каждый!`,
      desc2: `Компания "Great Soatobod Production" открыта абсолютно для любых
        видов сотрудничества. Специалисты компании всегда готовы дать
        клиентам максимально подробные консультации, рассказав обо всех
        технологических особенностях, тонкостях полипропиленовых мешков. Они
        помогут заказать продукцию, которая будет полностью отвечать
        особенностям Вашего производства.`,
    },
    productPG: {
      title1: "Мешки для лука",
      desc1: `Каждый год, в период сбора урожая перед любым фермерским хозяйством встает вопрос, как упаковать собранный урожай. Ведь потребности покупателей различны, и все их необходимо учесть. Использование овощных мешков значительно упрощает погрузку, перевозку, разгрузку и реализацию плодово-овощной продукции. Мешки для лука от СП ООО "Great Soatobod Production" доступны в различном цвете и с разной грузоподъемностью. Вы сможете подобрать овощную сетку под товары весом в 5 кг, 8 кг, 12 кг, 15 кг, 30 кг и даже 40 кг.`,
      titleB: "Мешки пропиленовые простые",
      title2: "Мешок полипропиленовый простой, для муки, круп, комбикормов.",
      desc2: `Мы предлагаем заказчикам самый большой выбор тары, изготовленной из полипропилена. Вы обязательно найдете у нас то, что ищите. В своей работе мы следуем политике ориентации на клиента. Вы хотите приобрести упаковку из полипропилена и по низкой стоимости? Ждем вас в нашей компании. Наши специалисты с удовольствием проконсультируют вас, помогут оформить заказ, ознакомят с ассортиментом полипропиленовых мешков.`,
    },
    sertificatePG:{
      title:"Сертификаты на продукцию",
      desc:`Все производимые мешки проходят контроль качества и изучаются в производственных и лабораторных условиях на соответствие стандартам. На всю выпускаемую продукцию имеются Сертификат Соответствия и Санитарно-Эпидемиологическое Заключение.
      Вся выпускаемая продукция сертифицирована и соответствует высоким требованиям стандартов. Безопасность использования полипропиленовых мешков для упаковки пищевых продуктов подтверждена гигиеническим сертификатом санитарно -эпидемиологического заключения Министерства здравоохранения Республики Узбекистан.
      В целях обеспечения поддержки стабильного гарантийного качества выпускаемой продукции, а также грамотного сформирования целей предприятия, при этом принимая во внимание потребительский спрос, и чёткого определения внутренних процессов и их управления, в 2015 году ООО «GREAT SOATOBOD PRODUCTION» была внедрена система менеджмента качества ISO 9001: 2015.`
    },
    deliveryDesc:`У нас в компании понимают, как для заказчика важно получить высококачественную продукцию в максимально короткие сроки. Great Soatobod Production осуществляет доставку по всей территории Республики Узбекистан, а так же в страны ближнего зарубежья. Имея в собственности автопарк с автомобилями разной грузоподъемности, сотрудники компании всегда найдут оптимальное решение для доставки заказов.`
  },
};
