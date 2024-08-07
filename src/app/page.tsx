import Image from "next/image";
import Navbar from "./navbar";
import Card from "./Card";
import Features from "./Features";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const items = [
  { feature: "Çözünürlük", value: "256 × 640" },
  { feature: "Pixel Aralığı", value: "1.5 - 1.86 - 2.5 mm" },
  { feature: "Optimal İzleme Mesafesi", value: "~2 metre" },
  { feature: "İzleme Açısı", value: "120" },
  { feature: "Parlaklık", value: "500 nits" },
  { feature: "Yenileme Hızı", value: "3840 Hz" },
  { feature: "Tarama", value: "1/32" },
  { feature: "Çalışma Gerilimi", value: "220VAC" },
  { feature: "Ortalama Güç Tüketimi", value: "260W" },
  { feature: "Ağırlık", value: "30 kg" },
  { feature: "Katlanmış taşıma boyutları", value: "80 × 48.5 × 38 cm" },
  { feature: "Taşınabilirlik", value: "Evet" },
  { feature: "Otomatik Açma/Kapama", value: "Evet" },
  { feature: "Güç Kablosu Uzunluğu", value: "3 m" },
];

export default function Home() {
  const cards = [
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "GERÇEK ZAMANLI İÇERİK GÜNCELLEMESİ",
      description: "Anlık olarak içerik değişikliği yapılabilir",
      imageUrl: "/guncelleme.png",
    },
    {
      title: "TAŞINABİLİRLİK KOLAYLIĞI",
      description:
        "Scrollup kolay taşınabilir kompakt tasarımı ile öne çıkmaktadır",
      imageUrl: "/tasima.png",
    },
    {
      title: "YÜKSEK ÇÖZÜNÜRLÜK KALİTESİ",
      description:
        "Scrollup-Foldable yüksek çözünürlüğü ile markanızı öne çıkartır",
      imageUrl: "/cozunulurluk.png",
    },
    {
      title: "OTOMATİK KURULUM",
      description:
        "Scrollup–Foldable otomatik katlanabilir mekanizması ise kolay kurulum sağlar",
      imageUrl: "/kurulum.png",
    },
    {
      title: "ÇEŞİTLİ İÇERİK SEÇENEKLERİ",
      description:
        "Fotoğraf, video, GIF veya animasyon tanıtım faaliyetlerine uyum sağlar",
      imageUrl: "/icerik.png",
    },
    {
      title: "ÖZELLEŞTİRİLEBİLİR ÇALMA LİSTESİ",
      description:
        "İhtiyaca yönelik akış oluşturma ve anlık güncelleyebilme seçeneği sunar",
      imageUrl: "/playlist.png",
    },
    {
      title: "GÖZ ALICI TASARIM",
      description:
        "Teknoloji ve tasarımı bir araya getiren dikkat çekici ürün görseli",
      imageUrl: "/tasarim.png",
    },
  ];
  const featureTexts = [
    {
      text: "Kolayca kontrol edilebilir",
    },
    {
      text: "Kolayca kontrol edilebilir",
    },
    {
      text: "Kolayca kontrol edilebilir",
    },
  ];
  const sponsors = [
    {
      name: "tubitak",
      logoUrl: "/tubitak.png",
      smallImage: true,
    },
    {
      name: "wisersense",
      logoUrl: "/wisersense.png",
    },
    {
      name: "kontrolmatik",
      logoUrl: "/KontrolmatikTech.png",
    },
    {
      name: "plans",
      logoUrl: "/plans.png",
    },
    {
      name: "fenerbahce",
      logoUrl: "/fenerbahce.png",
      smallImage: true,
    },
    {
      name: "cocacola",
      logoUrl: "/cocacola.png",
    },
    {
      name: "deico",
      logoUrl: "/deico.png",
    },
    {
      name: "migros",
      logoUrl: "/migros.png",
    },
    {
      name: "martı",
      logoUrl: "/martı.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "İstanbulKentUni",
      logoUrl: "/İstanbulKentUni.png",
    },
    {
      name: "GUHEM",
      logoUrl: "/GUHEM.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-archivo bg-white pt-20 md:pt-24">
      {/* Ensure the navbar is visible on all screens */}
      <Navbar />
      <div
        id="modern-view"
        className="px-4 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-20 w-full max-w-[1200px]"
      >
        <div className="flex flex-col w-full lg:w-[535px] text-3xl lg:text-5xl">
          <h1 className="font-bold mb-2 text-center lg:text-left">
            Taşınabilir LED Ekranla
          </h1>
          <h2 className="font-extralight mb-4 text-center lg:text-left">
            Modern Görüntü Deneyimi
          </h2>
        </div>
        <div className="flex h-full w-full lg:w-[535px] text-center lg:text-left items-center lg:items-end mt-4 lg:mt-0">
          <p className="font-archivo text-gray-600">
            Scrollup, olağanüstü taşınabilirliği, kullanım esnekliği ve
            kullanıcı dostu arayüzü ile dinamik ve geçici mekanlar için özel
            olarak tasarlanmış bir LED ekran serisidir.
          </p>
        </div>
      </div>
      <Image
        src="/greenscreen.png"
        alt="Portable LED screen display"
        width={1140}
        height={500}
        className="rounded-3xl mt-8 max-w-full"
        loading="lazy"
      />
      <div className="flex flex-wrap items-center justify-center max-w-[1000px] h-auto mt-8 lg:mt-[64px] px-4 lg:px-[14px]">
        {sponsors.map((card, index) => (
          <div className="w-1/3 sm:w-1/4 p-2" key={index}>
            <Card
              key={index}
              color="white"
              imageUrl={card.logoUrl}
              onlyImage
              smallImage={card.smallImage}
            />
          </div>
        ))}
      </div>
      <div
        id="scrollupapp"
        className="flex flex-col lg:flex-row justify-between w-full h-auto lg:h-[80vh] mt-20 lg:mt-80"
      >
        <div className="justify-center flex flex-col gap-5 py-12 px-6 lg:px-40 text-white w-full lg:w-[60%] h-full rounded-r-[40px] rounded-tl-none rounded-bl-none bg-[#3bb24a]">
          <h3 className="font-bold leading-tight text-[24px] lg:text-[40px]">
            Scrollup Uygulama
          </h3>
          <div className="text-[14px] lg:text-[16px] tracking-widest">
            Scrollup mobil uygulama ile kolayca kontrol edilebilir. Uygulama,
            kullanıcıların dinamik ve güncel bir görüntüleme deneyimi için
            görüntüleri ve videoları sorunsuz bir şekilde yüklemelerine,
            planlamalarına ve düzenlemelerine olanak tanır.
          </div>

          <div className="gap-16 flex flex-col">
            {featureTexts.map((card, index) => (
              <Features key={index} text={card.text} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[40%] mt-8 lg:mt-auto mb-auto">
          <Image
            src="/Homepage.png"
            alt="App screenshot"
            width={401}
            height={406}
            className="mx-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div
        id="overview"
        className="px-4 lg:px-10 w-full max-w-[1200px] flex flex-col pt-14 text-[30px] lg:text-[40px] text-left"
      >
        <div className="font-bold text-center lg:text-left">
          Her Zaman, Her Yerde
        </div>
        <div className="font-extralight text-center lg:text-left">
          Dikkat Çeken Taşınabilir Ekran
        </div>
        <div
          id="features"
          className="font-sans font-thin text-[14px] lg:text-[16px] leading-8 w-full lg:w-3/5 mx-auto lg:mx-0"
        >
          Her detayı, görsel etkinlikleri maksimize etmek üzere düşünülmüş bu
          ürünler, yüksek çözünürlükleri ile konumlandığı ortamda dikkat çeker
          ve sizin mesajınızı en etkin şekilde vermenize destek olur.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full max-w-[1160px] mt-4 px-4">
        {cards.map((card, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto p-2"
            key={index}
          >
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              color="grey"
            />
          </div>
        ))}
      </div>

      <div className="w-full text-center flex items-center flex-col mb-16 pt-[100px] px-4">
        <div className="w-full max-w-[500px] flex flex-col gap-10">
          <div className="font-bold text-2xl lg:text-4xl">
            Her Zaman, Her Yerde
          </div>
          <div className="font-thin leading-8">
            Scrollup kullanarak, görsel iletişim faaliyetlerinizi herhangi bir
            yerde etkin ve dikkat çekici bir şekilde gerçekleştirin. Kompakt ve
            çarpıcı tasarımı ile marka çalışmalarınızı dikkat çekici bir şekilde
            sergileyin, anlık yönetin.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 h-auto lg:h-[700px] w-full max-w-[1140px] px-4">
        <div className="flex items-center justify-center h-full flex-col w-full lg:w-2/3">
          <div className="h-[400px] sm:h-full w-full relative">
            <Image
              src="/Adv2.jpg"
              alt="Promotional ad"
              layout="fill"
              className="rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 w-full lg:w-1/3 mt-4 lg:mt-0">
          <div className="relative h-[400px] sm:h-1/2">
            <Image
              src="/Adv3.jpg"
              alt="Product showcase"
              layout="fill"
              className="rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative h-[400px] sm:h-1/2">
            <Image
              src="/Adv.jpg"
              alt="Product showcase"
              layout="fill"
              className="rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        id="usage"
        className="flex flex-col lg:flex-row items-center justify-center gap-x-5 h-auto lg:h-[600px] w-full max-w-[1140px] mt-16 px-4"
      >
        <div className="w-full lg:w-1/2 h-[400px] sm:h-full relative">
          <Image
            src="/Adv4.png"
            alt="Usage example"
            layout="fill"
            className="rounded-xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 h-[400px] sm:h-full relative mt-4 lg:mt-0">
          <Image
            src="/Adv5.jpg"
            alt="Usage example"
            layout="fill"
            className="rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div
        id="technical"
        className="flex flex-col lg:flex-row justify-between w-full h-auto mb-20 lg:mb-20 mt-20"
      >
        <div className="flex flex-col gap-5 py-4 pt-20 text-white w-full lg:w-[60%] rounded-r-[40px] rounded-tl-none rounded-bl-none bg-[#3bb24a]">
          <div className="p-6 rounded-lg max-w-4xl flex">
            <div className="mr-10 w-full">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">
                Teknik Özellikler
              </h1>
              <div className="min-w-full border rounded-xl">
                <div>
                  <div className="flex rounded">
                    <div className="w-1/2 py-4 px-4 bg-transparent border-r text-left font-bold">
                      Özellikler
                    </div>
                    <div className="w-1/2 py-4 px-4 bg-transparent text-left font-bold">
                      Değer
                    </div>
                  </div>
                </div>
                <div>
                  {items.map((item, index) => (
                    <div key={index} className="flex border-t">
                      <div className="w-1/2 border-r py-2 px-4">
                        {item.feature}
                      </div>
                      <div className="w-1/2 py-2 px-4">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] my-8 lg:my-36">
          <Image
            src="/TableImage.png"
            alt="Technical table"
            width={280}
            height={660}
            className="mx-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div
        id="contact"
        className="flex w-full max-w-[1000px] justify-center mt-20 px-4"
      >
        <Tabs
          defaultValue="account"
          className="flex flex-col items-center w-full"
        >
          <TabsList className="flex text-md sm:text-xl p-8 bg-gray-100 items-center justify-center sm:gap-12">
            <TabsTrigger className="text-black p-3 px-6" value="account">
              İŞ ORTAKLIĞI
            </TabsTrigger>
            <TabsTrigger className="text-black p-3" value="password">
              TEKLİF AL
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full">
            <div className="flex flex-col md:flex-row items-start justify-center bg-white px-4 mt-20 w-full">
              <div className="w-full md:mr-6">
                <div className="p-6">
                  <div className="text-3xl text-[#161c24] font-archivo mb-6">
                    Bize Ulaşın
                  </div>
                  <div className="mb-4 font-extralight text-[#586272] leading-8 w-full md:w-4/5">
                    Markanızı etkin bir şekilde ön plana çıkartmak için bizimle
                    iletişime geçin. Talebiniz üzerine, ekibimiz en kısa sürede
                    sizinle iletişim kuracaktır.
                  </div>
                  <div className="space-y-4 pb-[120px]">
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Ad*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Soyad*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Telefon*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="tel"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          E-posta*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="email"
                        />
                      </div>

                      <div className="w-full px-2 mb-4">
                        <label className="block  text-[#246b49] mb-2 font-semibold">
                          Kısa Mesaj
                        </label>
                        <textarea className="w-full p-2 border rounded"></textarea>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 px-2">
                      <input type="checkbox" className="mr-2" />
                      <div className="font-[14px] pl-[20px]">
                        <Link
                          href={"/privacy"}
                          target="_blank"
                          className="text-[#443fde]"
                        >
                          Hizmet koşullarını ve Gizlilik Politikasını{" "}
                        </Link>
                        kabul ediyorum.
                      </div>
                    </div>
                    <div className="px-2">
                      <button className="w-full md:w-[200px] h-[60px] bg-[#3BB24A] text-white font-medium py-2 px-4 rounded-lg">
                        Mesaj Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full md:w-[370px] h-[240px] justify-center items-center mt-4 md:mt-0 bg-[#f9fffc] p-6 rounded-lg shadow-lg">
                <div className="text-[#111418] leading-8 font-sans text-[14px]">
                  <div>Bilkent Cyberpark Tepe Building B01</div>
                  <div>Çankaya, Ankara/Turkey</div>
                  <Link href={"mailto:info@infinia.com.tr"} target="_blank">
                    <div>info@infinia.com.tr</div>
                  </Link>
                  <div>+90 (312) 265 05 09</div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password" className="w-full">
            <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-white px-4 mt-20 w-full">
              <div className="w-full md:mr-6">
                <div className="p-6">
                  <div className="text-3xl text-[#161c24] font-archivo mb-6">
                    İş Ortağımız Olun
                  </div>
                  <div className="mb-4 font-extralight text-[#586272] leading-8 w-full md:w-4/5">
                    Scrollup ile iş ortaklığı kurarak yenilikçi görsel
                    iletişimin bir parçası olmak için lütfen formu doldurun.
                    İletişim bilgileriniz üzerinden ekibimiz en kısa sürede
                    sizinle iletişim kuracaktır.
                  </div>
                  <div className="space-y-4 pb-[120px]">
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Yetkilinin Adı*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Yetkilinin Soyadı*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Telefon*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="tel"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          E-posta*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="email"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Firma Adı*
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          İl
                        </label>
                        <input
                          className="w-full p-2 border rounded"
                          type="text"
                        />
                      </div>
                      <div className="w-full px-2 mb-4">
                        <label className="block text-[#246b49] mb-2 font-semibold">
                          Kısa Mesaj
                        </label>
                        <textarea className="w-full p-2 border rounded"></textarea>
                      </div>
                    </div>
                    <div className="flex items-center mb-4 px-2">
                      <input type="checkbox" className="mr-2" />
                      <div className="font-[14px] pl-[20px]">
                        <Link
                          href={"/privacy"}
                          target="_blank"
                          className="text-[#443fde]"
                        >
                          Hizmet koşullarını ve Gizlilik Politikasını{" "}
                        </Link>
                        kabul ediyorum.
                      </div>
                    </div>
                    <div className="px-2">
                      <button className="w-full md:w-[200px] h-[60px] bg-[#3BB24A] text-white font-medium py-2 px-4 rounded-lg">
                        Mesaj Gönder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full md:w-[370px] h-[240px] justify-center items-center mt-8 md:mt-0 bg-[#f9fffc] p-6 rounded-lg shadow-lg">
                <div className="text-[#111418] leading-8 font-sans text-[14px]">
                  <div>Bilkent Cyberpark Tepe Building B01</div>
                  <div>Çankaya, Ankara/Turkey</div>
                  <Link href={"mailto:info@infinia.com.tr"} target="_blank">
                    <div>info@infinia.com.tr</div>
                  </Link>
                  <div>+90 (312) 265 05 09</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-full h-auto lg:h-[320px] bg-[#3bb24a] pt-[40px] px-4">
        <div className="m-auto w-full max-w-[1140px]">
          <Image
            src="/logo.png"
            alt="Scrollup logo"
            width={160}
            height={50}
            className="mt-10 mx-auto lg:mx-0"
            loading="lazy"
          ></Image>
          <div className="border-b pt-10 border-white"></div>
          <div className="flex flex-col lg:flex-row py-[42px] justify-between">
            <div className="font-sans font-[14px] text-white text-center lg:text-left">
              Scrollup. All Rights Reserved, 2024.
            </div>
            <div className="flex gap-7 items-center justify-center mt-4 lg:mt-0">
              <Link
                href={
                  "https://www.linkedin.com/company/infiniadesignandinnovation/mycompany/"
                }
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  width={22}
                  height={22}
                  alt="linkedin"
                  loading="lazy"
                ></Image>
              </Link>
              <Link
                href={"https://www.instagram.com/infiniaofficial/"}
                target="_blank"
              >
                <Image
                  src="/insta.png"
                  alt="instagram"
                  width={20}
                  height={20}
                  loading="lazy"
                ></Image>
              </Link>
              <Link href={"https://x.com/INFINIAofficial"} target="_blank">
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={16}
                  height={16}
                  loading="lazy"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
