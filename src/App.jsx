import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import { CartProvider } from './components/CartContext'

const API = import.meta.env.VITE_BACKEND_URL || ''

function HomePage() {
  const [featured, setFeatured] = useState([])
  const [all, setAll] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [f, a] = await Promise.all([
          fetch(`${API}/api/products?featured=true`).then(r => r.json()),
          fetch(`${API}/api/products?limit=12`).then(r => r.json()),
        ])
        setFeatured(f)
        setAll(a)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <section id="featured" className="mx-auto max-w-7xl px-6 md:px-10 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-[800]">Featured</h2>
            <a href="#catalog" className="text-sm underline">View all</a>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p._id || p.slug} item={p} />)}
          </div>
        </section>

        <section id="catalog" className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
          <h2 className="text-2xl md:text-3xl font-[800]">All products</h2>
          {loading && <div className="mt-6 text-gray-500">Loading...</div>}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {all.map(p => <ProductCard key={(p._id || p.slug) + '-all'} item={p} />)}
          </div>
        </section>

        <footer id="about" className="border-t border-black/5 py-12">
          <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
            <div>
              <div className="font-[800]">no.noise</div>
              <p className="text-sm text-gray-500">Minimal garments designed to be remembered, not seen.</p>
            </div>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} No Noise Studio</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  )
}
