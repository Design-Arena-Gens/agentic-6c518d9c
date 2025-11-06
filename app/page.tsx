"use client";

import { useMemo, useState } from "react";

const vibes = [
  {
    id: "طموح",
    headline: "مرحباً بك في مساحة تصنع الفرق",
    description:
      "انطلق معنا في رحلة إبداعية تعيد تعريف التواصل الرقمي وتفتح أبواب التعاون لكل فكرة واعدة.",
  },
  {
    id: "هادئ",
    headline: "فسحة سلام في عالم سريع",
    description:
      "هنا تهدأ الوتيرة لنصغي إلى قصصك، نبني جسوراً إنسانية، ونمنحك مساحة تعبر فيها عن ذاتك.",
  },
  {
    id: "ملهم",
    headline: "قصص تلهم البداية التالية",
    description:
      "من شغف فردي إلى مشاريع جماعية، نضيء دروباً جديدة لكل من يرغب في مشاركة صوته ورؤيته.",
  },
];

const highlights = [
  "مجتمع عربي نابض بالمعرفة والإبداع",
  "دروس وفعاليات مباشرة أسبوعية",
  "شبكة من المستشارين ورواد الأعمال",
];

const resources = [
  {
    title: "الرسالة",
    text: "نبني مساحات رقمية تدعم الهوية العربية وتحتضن الشغف نحو مستقبل أفضل.",
  },
  {
    title: "الرؤية",
    text: "منصة عربية عالمية تُسهِّل التعلّم التعاوني وتُطلق قصص نجاح جديدة.",
  },
  {
    title: "القيم",
    text: "الإنسان أولاً، الشفافية، الشغف، والتطور المستمر.",
  },
];

export default function Home() {
  const [selectedVibe, setSelectedVibe] = useState(vibes[0]);
  const vibeTabs = useMemo(
    () =>
      vibes.map((vibe) => (
        <button
          key={vibe.id}
          onClick={() => setSelectedVibe(vibe)}
          className={
            "vibe-tab" + (selectedVibe.id === vibe.id ? " active" : "")
          }
        >
          {vibe.id}
        </button>
      )),
    [selectedVibe]
  );

  return (
    <main>
      <section className="hero">
        <div className="badge">مرحباً</div>
        <h1>بوابة تلهمك للبدء والانطلاق</h1>
        <p>
          مساحة رقمية تحتفي باللغة العربية، تجمع المبدعين، وتمنحك أدوات للتعبير،
          التعلم، وبناء مشاريعك القادمة بثقة.
        </p>
        <div className="actions">
          <a className="primary" href="#explore">
            ابدأ الاستكشاف
          </a>
          <a className="secondary" href="#connect">
            انضم للمجتمع
          </a>
        </div>
      </section>

      <section className="vibes" aria-labelledby="vibes-title">
        <div className="vibes-header">
          <h2 id="vibes-title">اختر الإحساس الذي يناسبك</h2>
          <p>تفاعل مع نبرة الترحيب لتجد الجو الذي يشبهك.</p>
        </div>
        <div className="vibes-tabs" role="tablist">
          {vibeTabs}
        </div>
        <article className="vibe-card" role="tabpanel">
          <h3>{selectedVibe.headline}</h3>
          <p>{selectedVibe.description}</p>
        </article>
      </section>

      <section id="explore" className="highlights" aria-labelledby="highlights-title">
        <h2 id="highlights-title">لماذا هذه المنصة؟</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="resources" aria-labelledby="resources-title">
        <h2 id="resources-title">ملامح الرحلة</h2>
        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title}>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">هل أنت مستعد لترك أثرك؟</h2>
        <p>
          انضم إلى قائمة الانتظار وساهم في بناء مجتمع يلهم التغيير. سنوافيك بكل
          جديد حول اللقاءات والموارد القادمة.
        </p>
        <form className="cta-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">بريدك الإلكتروني</label>
          <div className="input-row">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
            <button type="submit">أرسل</button>
          </div>
        </form>
      </section>
    </main>
  );
}
