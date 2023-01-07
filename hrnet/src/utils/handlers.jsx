// GETTING HTML ELEMENT(S) /////////////////////////////////////////////////////

/**
 * Get an element by its id
 * @param   {string}  id    [element identifier]
 * @return  {node}    html   [collection]
 */
export const getElement = (id) => {
  return document.getElementById(id)
}

/**
 * Get many elements by their common classname
 * @param   {string}  className  [element className]
 * @return  {object}  html       [nodes collection]
 */
export const getElements = (className) => {
  return [...document.getElementsByClassName(className)]
}

// SETTING MULTIPLE ATTRIBUTES for html elements ///////////////////////////////
/**
 * Set multiple attributes
 * @param   {node}    element       [html]
 * @param   {string}  attributes    [attributes names]
 * @return  {object}                [element attributes]
 */
export const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}
