import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const key = action.item.slug + (action.item.size ? `_${action.item.size}` : '') + (action.item.color ? `_${action.item.color}` : '')
      const existing = state.items[key]
      const qty = (existing?.qty || 0) + (action.qty || 1)
      const items = {
        ...state.items,
        [key]: { ...action.item, qty }
      }
      return { ...state, items }
    }
    case 'remove': {
      const items = { ...state.items }
      delete items[action.key]
      return { ...state, items }
    }
    case 'clear':
      return { items: {} }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} })
  const api = useMemo(() => ({ state, dispatch }), [state])
  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
