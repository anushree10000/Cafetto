import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const events = [
  { title: "Live Music Fridays", date: "Every Friday · 8 PM", img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80", desc: "Acoustic sets from local artists." },
  { title: "Open Mic Night", date: "Thu · Aug 15 · 7 PM", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=80", desc: "Poetry, comedy, whatever you bring." },
  { title: "Board Game Evening", date: "Wed · Aug 21 · 6 PM", img: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80", desc: "Catan, chess, and unlimited refills." },
  { title: "Local Artist Showcase", date: "Sat · Sep 7 · 5 PM", img: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=900&q=80", desc: "Meet the painters on our walls." },
  { title: "Coffee Brewing Workshop", date: "Sun · Sep 15 · 10 AM", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", desc: "Master pour-over from our head barista." },
];

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[color:var(--beige)]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-burnt font-semibold">
            What's On
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-espresso">
            Events &amp; <span className="italic text-forest">Gatherings</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-cream text-espresso rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {e.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-espresso">{e.title}</h3>
                <p className="mt-2 text-sm text-espresso/70">{e.desc}</p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest text-cream px-5 py-2.5 text-sm font-semibold hover:bg-forest/90 hover:gap-3 transition-all">
                  Reserve Spot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
