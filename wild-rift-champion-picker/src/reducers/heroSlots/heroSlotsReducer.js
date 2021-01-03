export const HERO_SLOT_SET = 'heroSlots/SET'
export const HERO_SLOT_REMOVE = 'heroSlots/REMOVE'

// actions
const setHero = (slotId, hero) => ({
  type: HERO_SLOT_SET,
  slotId, hero,
})

const removeHero = (slotId) => ({
  type: HERO_SLOT_REMOVE,
  slotId,
})


// =======================

export const actions = {
  setHero,
  removeHero,
}

// selectors

const selectHeroBySlot = ({ heroSlots }, slotId) => heroSlots.slots[slotId]

// =======================

export const selectors = {
  selectHeroBySlot,
}

// reducers

const initialState = {
  slots: [],
}

export default function heroSlotsReducer(state = initialState, action) {
  switch (action.type) {
    case HERO_SLOT_SET: {
      const { slotId, hero } = action
      return {
        ...state,
        slots: {
          ...state.slots,
          [slotId]: hero,
        }
      }
    }

    case HERO_SLOT_REMOVE: {
      const { slotId } = action
      const { [slotId]: currentSlot, ...newSlots } = state.slots
      return {
        ...state,
        slots: newSlots,
      }
    }

    default: {
      return state
    }
  }
}
