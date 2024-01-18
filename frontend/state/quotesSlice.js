import { createSlice } from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    createQuote: {
      prepare({ authorName, quoteText }) {
        const newQuote = { id: getNextId(), authorName, quoteText, apocryphal: false }
        return { payload: newQuote }
      },
      reducer(state, action) {
        state.quotes.push(action.payload)
      }
    },
    deleteQuote(state, action) {
      state.quotes = state.quotes.filter(qt => qt.id !== action.payload)
    },
    editQuoteAuthenticity(state, action) {
      const quoteToEdit = state.quotes.find(qt => qt.id === action.payload)
      quoteToEdit.apocryphal = !quoteToEdit.apocryphal
    },
    setHighlightedQuote(state, action) {
      const quoteToHighlight = state.quotes.find(qt => qt.id === action.payload)
      if (state.highlightedQuote === quoteToHighlight.id) {
        state.highlightedQuote = null
      } else {
        state.highlightedQuote = action.payload
      }
    },
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },
  }
})

export const {
  createQuote,
  deleteQuote,
  editQuoteAuthenticity,
  setHighlightedQuote,
  toggleVisibility,
} = quotesSlice.actions

export default quotesSlice.reducer