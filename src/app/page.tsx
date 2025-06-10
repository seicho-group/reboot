import {HeroSection} from "@/components/hero/hero";
import {PromoBar} from "@/components/promo-bar/promo-bar";
import {Services} from "@/components/services/services";
import {CTA} from "@/components/cta/cta";
import {Map} from "@/components/map/map";
import {Footer} from "@/components/footer/footer";

export const metadata = {
    title: "ReBoot - качественные ремонтные услуги",
    description: "Сервис ремонта мобильных устройств в городе Пермь по адресу Техническая ул., 13, быстрый и качественный ремонт Reboot",
    keywords: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Сервис', "телефоны", "Пермь"],
    creator: 'Салаватович Айдар Канзафаров',
    publisher: 'ИП Салаватович Айдар Канзафаров',
    metadataBase: new URL('https://reboot-perm.ru'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'ReBoot - качественные ремонтные услуги',
        description: 'Сервис ремонта мобильных устройств в городе Пермь по адресу Техническая ул., 13, быстрый и качественный ремонт Reboot',
        url: 'https://reboot-perm.ru',
        siteName: 'ReBoot',
        images: [
            {
                url: '/og.webp',
                width: 800,
                height: 600,
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/shortcut-icon.png',
        apple: '/apple-icon.png',
    },
}

export default function Home() {
  return (
      <main className={"main"}>
          <div>
            <HeroSection />
            <PromoBar />
          </div>
          <Services/>
          <CTA/>
          <Map />
          <Footer/>
      </main>
  );
}
