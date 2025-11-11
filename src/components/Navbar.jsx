import { Menu, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { state } = useCart()
  const count = Object.values(state.items).reduce((n, it) => n + it.qty, 0)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-black/5 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="text-xl font-[800] tracking-tight">no.noise</a>
        <a href="#" className="relative">
          <ShoppingBag className="w-6 h-6" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full px-1.5 py-0.5">{count}</span>
          )}
        </a>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 grid gap-3 bg-white/70">
          <a className="py-2" href="#featured">Featured</a>
          <a className="py-2" href="#catalog">All</a>
          <a className="py-2" href="#about">About</a>
        </div>
      )}
    </header>
  )
}
