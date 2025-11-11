import { motion } from 'framer-motion'

export default function ProductCard({ item }) {
  return (
    <motion.a href={`/product/${item.slug}`} whileHover={{ y: -4 }} className="group block">
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow ring-1 ring-black/5">
        <img src={item.images?.[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        {item.featured && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wide bg-white/80 backdrop-blur px-2 py-1 rounded-full border border-black/5">featured</span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-medium">{item.title}</div>
          <div className="text-sm text-gray-500">{item.category}</div>
        </div>
        <div className="font-semibold">${item.price}</div>
      </div>
    </motion.a>
  )
}
