import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://static.tildacdn.com/tild3232-3336-4133-a132-633033306361/a7e01016339944963e50.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/00655993-1a8e-409b-8656-b97f8fa9c9c0/files/98816d52-79b2-4cfa-b792-cd149edb3803.jpg";
const WORKERS_IMG = "https://cdn.poehali.dev/projects/00655993-1a8e-409b-8656-b97f8fa9c9c0/files/a6762df8-cb07-4177-bf02-beae229777f1.jpg";

const advantages = [
  { icon: "Clock", title: "180 дней", desc: "Средний срок постройки дома под ключ" },
  { icon: "Shield", title: "Фиксированная цена", desc: "Стоимость закрепляем в договоре — без скрытых доплат" },
  { icon: "FileCheck", title: "Под ключ", desc: "От выбора участка до ввода дома в эксплуатацию" },
  { icon: "Landmark", title: "Ипотека", desc: "Работаем с ведущими банками России" },
  { icon: "Award", title: "10+ лет опыта", desc: "Более 200 сданных объектов в Калининграде и области" },
  { icon: "Users", title: "Своя бригада", desc: "Только штатные сотрудники — никаких субподрядчиков" },
];

const projects = [
  {
    name: "«Балтийский»",
    area: "98 м²",
    floors: "1 этаж",
    price: "от 4 900 000 ₽",
    tag: "Популярный",
    img: HERO_IMG,
  },
  {
    name: "«Янтарный»",
    area: "145 м²",
    floors: "2 этажа",
    price: "от 7 200 000 ₽",
    tag: "Хит продаж",
    img: INTERIOR_IMG,
  },
  {
    name: "«Малахит»",
    area: "210 м²",
    floors: "2 этажа + мансарда",
    price: "от 11 500 000 ₽",
    tag: "Премиум",
    img: WORKERS_IMG,
  },
];

const plans = [
  {
    name: "Стандарт",
    price: "от 35 000 ₽/м²",
    features: [
      "Фундамент ленточный",
      "Газобетон + утепление",
      "Кровля металлочерепица",
      "Инженерные коммуникации",
      "Чистовая отделка",
    ],
    highlight: false,
  },
  {
    name: "Комфорт",
    price: "от 48 000 ₽/м²",
    features: [
      "Всё из «Стандарт»",
      "Тёплый пол",
      "Панорамные окна",
      "Система «умный дом»",
      "Дизайн-проект в подарок",
    ],
    highlight: true,
  },
  {
    name: "Премиум",
    price: "от 65 000 ₽/м²",
    features: [
      "Всё из «Комфорт»",
      "Авторский дизайн интерьера",
      "Ландшафтный проект",
      "Гараж или баня в подарок",
      "Персональный менеджер 24/7",
    ],
    highlight: false,
  },
];

const reviews = [
  {
    name: "Александр К.",
    city: "Калининград",
    text: "Строили дом 5 месяцев вместо обещанных 6 — и это приятно удивило. Качество отделки на высоте, никаких доделок после сдачи.",
    rating: 5,
  },
  {
    name: "Елена и Сергей М.",
    city: "Гурьевск",
    text: "Брали ипотеку, ребята полностью сопроводили сделку с банком. Цена не выросла ни на рубль от договорной.",
    rating: 5,
  },
  {
    name: "Михаил Т.",
    city: "Зеленоградск",
    text: "Второй дом строим уже с «Малахитом». Первый стоит 4 года — ни единой трещины, всё идеально.",
    rating: 5,
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-golos">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/00655993-1a8e-409b-8656-b97f8fa9c9c0/bucket/0f1b7027-add6-4e4f-9eb9-143a80bfdec0.jpg" alt="СК Малахит 39" className="h-10 w-auto object-contain rounded-lg bg-white px-2 py-1" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-400">
            <a href="#advantages" className="hover:text-emerald-400 transition-colors">Преимущества</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Проекты</a>
            <a href="#plans" className="hover:text-emerald-400 transition-colors">Тарифы</a>
            <a href="#reviews" className="hover:text-emerald-400 transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Контакты</a>
          </div>
          <a
            href="tel:+79622674779"
            className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 962 267 47-79
          </a>
          <button className="md:hidden text-stone-300" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-stone-900 border-t border-emerald-900/30 px-4 py-4 flex flex-col gap-4 text-sm">
            <a href="#advantages" onClick={() => setMenuOpen(false)} className="text-stone-300">Преимущества</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-stone-300">Проекты</a>
            <a href="#plans" onClick={() => setMenuOpen(false)} className="text-stone-300">Тарифы</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-stone-300">Отзывы</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-stone-300">Контакты</a>
            <a href="tel:+79622674779" className="text-emerald-400 font-semibold">+7 962 267 47-79</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Дом под ключ" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-6">
              <Icon name="MapPin" size={14} />
              Калининград и область
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Дома под ключ{" "}
              <span className="text-emerald-400">за 180 дней</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Строим от фундамента до отделки. Цена фиксирована в договоре — вы платите ровно столько, сколько обговорено.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Получить расчёт
                <Icon name="ArrowRight" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-stone-600 hover:border-emerald-500 text-stone-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Смотреть проекты
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-stone-800 pt-8">
              {[
                { num: "200+", label: "Сданных домов" },
                { num: "10 лет", label: "На рынке" },
                { num: "100%", label: "Выполнили в срок" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">{s.num}</div>
                  <div className="text-stone-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Почему выбирают нас</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-stone-800 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 transition-colors">
                  <Icon name={a.icon} size={24} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
                <p className="text-stone-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-stone-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Как мы работаем</div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">От идеи до новоселья</h2>
              <p className="text-stone-400 text-lg mb-10">
                Сопровождаем на каждом этапе — вы просто следите за ходом строительства через личный кабинет.
              </p>
              <div className="space-y-6">
                {[
                  { n: "01", t: "Консультация и проект", d: "Выбираем проект, считаем смету, подписываем договор" },
                  { n: "02", t: "Подготовка участка", d: "Геодезия, разметка, земляные работы" },
                  { n: "03", t: "Строительство", d: "Фундамент, стены, кровля — всё по СНиПам" },
                  { n: "04", t: "Отделка и коммуникации", d: "Электрика, сантехника, чистовая отделка" },
                  { n: "05", t: "Сдача ключей", d: "Подписываем акт, оформляем документы" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {step.n}
                    </div>
                    <div>
                      <div className="font-bold text-white">{step.t}</div>
                      <div className="text-stone-500 text-sm mt-0.5">{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-2xl" />
              <img
                src={WORKERS_IMG}
                alt="Строительство"
                className="relative rounded-2xl w-full h-[500px] object-cover border border-stone-700/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Готовые решения</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Популярные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.name}
                className="bg-stone-800 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-emerald-500/40 transition-all group hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">{p.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-3">{p.name}</h3>
                  <div className="flex gap-4 text-stone-400 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Square" size={14} />
                      {p.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Building2" size={14} />
                      {p.floors}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-emerald-400">{p.price}</span>
                    <a href="#contact" className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                      Подробнее →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY HOMES */}
      <section id="plans" className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Уже построено</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Готовые дома</h2>
            <p className="text-stone-400 mt-4 text-lg">Реальные объекты, сданные нашим клиентам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://static.tildacdn.com/tild6138-6337-4434-b839-636163663537/cover.jpg",
                name: "Дом в Гурьевске",
                area: "120 м²",
                floors: "2 этажа",
                year: "2023",
                tag: "Сдан",
              },
              {
                img: INTERIOR_IMG,
                name: "Дом в Зеленоградске",
                area: "98 м²",
                floors: "1 этаж",
                year: "2023",
                tag: "Сдан",
              },
              {
                img: WORKERS_IMG,
                name: "Дом в Калининграде",
                area: "160 м²",
                floors: "2 этажа",
                year: "2024",
                tag: "Сдан",
              },
              {
                img: "https://static.tildacdn.com/tild3232-3336-4133-a132-633033306361/a7e01016339944963e50.jpg",
                name: "Дом в Светлогорске",
                area: "145 м²",
                floors: "2 этажа",
                year: "2024",
                tag: "Сдан",
              },
              {
                img: INTERIOR_IMG,
                name: "Дом в Черняховске",
                area: "85 м²",
                floors: "1 этаж",
                year: "2024",
                tag: "Сдан",
              },
              {
                img: WORKERS_IMG,
                name: "Дом в Балтийске",
                area: "210 м²",
                floors: "2 этажа + мансарда",
                year: "2024",
                tag: "Сдан",
              },
            ].map((house) => (
              <div
                key={house.name}
                className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-emerald-500/40 transition-all group hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={house.img}
                    alt={house.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">{house.tag}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">{house.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-white mb-3">{house.name}</h3>
                  <div className="flex gap-4 text-stone-400 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Square" size={14} className="text-emerald-400" />
                      {house.area}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Building2" size={14} className="text-emerald-400" />
                      {house.floors}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    Хочу такой же <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Смотреть все объекты
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Клиенты о нас</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-300 mb-6 leading-relaxed">«{r.text}»</p>
                <div>
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="text-stone-500 text-sm flex items-center gap-1 mt-0.5">
                    <Icon name="MapPin" size={12} />
                    {r.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-16 bg-emerald-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Узнайте точную стоимость вашего дома
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Оставьте заявку — перезвоним в течение 15 минут и рассчитаем смету бесплатно
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-stone-100 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
          >
            Получить расчёт бесплатно
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">Свяжитесь с нами</div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Давайте обсудим ваш дом</h2>
              <p className="text-stone-400 text-lg mb-10">
                Оставьте заявку — специалист перезвонит и расскажет всё о проектах, ценах и сроках строительства.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 962 267 47-79" },
                  { icon: "Mail", label: "Email", value: "info@cc-malachite.com" },
                  { icon: "MapPin", label: "Офис", value: "г. Калининград, ул. Примерная, 1" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 9:00–18:00, Сб 10:00–15:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-stone-500 text-sm">{c.label}</div>
                      <div className="text-white font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-700/50 rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-stone-400">Перезвоним в течение 15 минут</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-white mb-6">Оставить заявку</h3>
                  <div>
                    <label className="block text-sm text-stone-400 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-400 mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-400 mb-2">Комментарий (необязательно)</label>
                    <textarea
                      rows={4}
                      placeholder="Площадь, этажность, пожелания..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-stone-600 text-xs text-center">
                    Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 border-t border-stone-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/00655993-1a8e-409b-8656-b97f8fa9c9c0/bucket/0f1b7027-add6-4e4f-9eb9-143a80bfdec0.jpg" alt="СК Малахит 39" className="h-8 w-auto object-contain rounded-md bg-white px-2 py-0.5" />
          </div>
          <div className="text-stone-500 text-sm text-center">ООО «СК Малахит 39» · Калининград · © 2024</div>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}