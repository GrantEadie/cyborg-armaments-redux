import * as c from './ActionTypes';

export const updatePartList = (masterPartList) => {
  return {
    type: c.UPDATE_PART_LIST,
    masterPartList: masterPartList
  }
}

export const updateCart = (masterCartList) => {
  return {
    type: c.UPDATE_CART,
    masterCartList: masterCartList
  }
}

export const selectPart = (selectedPart) => {
  return {
    type: c.SELECT_PART,
    selectedPart: selectedPart
  }
}

export const formVisible = (formVisibleOnPage) => {
  return {
    type: c.FORM_VISIBLE,
    formVisibleOnPage: formVisibleOnPage
  }
}

export const editPart = (editing) => {
  return {
    type: c.EDIT,
    editing: editing
  }
}

export const cartTotal = (cartTotal) => {
  return {
    type: c.CART_TOTAL,
    cartTotal: cartTotal
  }
}

export const bodyTypeVisible = (bodyTypeVisibleOnPage) => {
  return {
    type: c.CHANGE_VISIBLE_BODYTYPE,
    bodyTypeVisibleOnPage: bodyTypeVisibleOnPage
  }
}

export const updateTime = (id, formattedWaitTime) => ({ 
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
})