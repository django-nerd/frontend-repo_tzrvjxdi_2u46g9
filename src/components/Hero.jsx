import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.08),transparent)]"/>
      <div className="pointer-events-none absolute -inset-[20%] opacity-60" aria-hidden>
        <svg className="w-full h-full blur-3xl" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path d="M120,-142.2C162.4,-121.4,206.3,-88.5,220.2,-47.2C234.1,-5.8,218,43.1,189.6,87.9C161.2,132.7,120.4,173.4,73.2,189.9C26,206.4,-27.7,198.6,-78.6,181.7C-129.5,164.9,-177.6,138.9,-203.1,99.1C-228.6,59.2,-231.6,5.7,-214.7,-39.3C-197.9,-84.2,-161.1,-120.6,-121.7,-143.5C-82.3,-166.4,-41.2,-175.6,-1.2,-173.8C38.8,-172,77.6,-159.1,120,-142.2Z" fill="url(#g)"/>
          </g>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#111827"/>
              <stop offset="100%" stopColor="#4b5563"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col justify-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">new drop</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-[800] leading-[0.95]">
            Minimal forms. Maximum presence.
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl">
            Elevated wardrobe essentials cut in sharp silhouettes. Considered details, heavyweight fabrics, and a palette that never shouts.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#featured" className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">Shop featured</a>
            <a href="#catalog" className="px-6 py-3 rounded-full border border-gray-300 hover:border-black transition">All products</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl ring-1 ring-black/5">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=80&auto=format&fit=crop" alt="hero"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-black/5">
            <span className="text-xs uppercase tracking-wide text-gray-500">Award selection</span>
            <div className="font-semibold">No noise capsule</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
