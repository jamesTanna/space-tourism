 let element = (identifier) => {
  return document.querySelector(identifier)
}

 let elements = identifier => {
  return document.querySelectorAll(identifier)
}
 let hide = (element) => {
  element.style.display= 'none'
}

 let hideAll = elements => {
  elements.forEach(element => {
    element.style.display = 'none'
  })
}
 let setDisplay = ( element, property ) => {
    element.style.display = property
}
let getStyleProp = (element, property) => {
    let styles = getComputedStyle(element);
    let value = styles.getPropertyValue(property);
    return value;
}
 let setStyle = ( element, property, value ) =>{
  element.style.setProperty(property, value)
}

 function setInnerHtml (element, html){
  element.innerHtml = html
}

 function setInnerText(element, text){
  element.innerText = text
}

 function addElement(element,innerText, parentElement){
  let newElement = document.createElement(element);
  newElement.appendChild(document.createTextNode(innerText))
  if (parentElement === 'body') {
    document.body.appendChild(newElement)
  } else{
    parentElement.appendChild(newElement)
  }
  return newElement;
}

 function addVoidElement(element, parentElement){
  let newElement = document.createElement(element)
  if (parentElement === 'body') {
    document.body.appendChild(newElement)
  } else {
    parentElement.appendChild(newElement)
  }
  return newElement;
}

 function setAttribute (element, attribute, value) {
  let newAttribute = document.createAttribute(attribute)
  newAttribute.value = value
    if (element === 'body') {
      document.body.setAttributeNode(newAttribute)
    } else {
      element.setAttributeNode(newAttribute)
    }
}
 function click(element, callback) {
  element.addEventListener('click', callback)
}

 function dblclick(element, callback){
  element.addEventListener('dblclick', callback)
}

 function rightClick (element, callback){
  element.addEventListener('contextmenu', callback)
}

 function mouseDown(element, callback){
  element.addEventListener('mousedown',
  callback)
}

 function mouseEnter(element, callback){
  element.addEventListener('mouseenter', callback)
}

 function mouseLeave(element, callback){
  element.addEventListener('mouseleave', callback)
}

 function mouseMove (element, callback){
  element.addEventListener('mousemove', callback)
}

 function mouseOut(element, callback) {
  element.addEventListener('mouseout', callback)
}

 function mouseOver(element, callback) {
  element.addEventListener('mouseover', callback)
}

 function mouseUp(element, callback) {
  element.addEventListener('mouseup', callback)
}
 function submit(formElement, callback) {
   formElement.addEventListener('submit', callback)
 }
 function hover(element, callback) {
  element.addEventListener('mouseenter', callback)
  element.addEventListener('mouseout', callback)
}

 function setClass(element, className) {
  element.classList.add(className)
}
 function addElementwithClass (element, innerText, className, parentElement) {
  const newElement = document.createElement(element)
  newElement.appendChild(document.createTextNode(innerText))
  newElement.classList.add(className)
  if (parentElement === 'body') {
    document.body.appendChild(newElement)
  } else {
    parentElement.appendChild(newElement)
  }
  return newElement;
}
 let addVoidElementwithClass =  (element, className, parentElement) =>   {
    let newElement = document.createElement(element);
    newElement.classList.add(className);
    if(parentElement === 'body'){
        document.body.appendChild(newElement);
    }else{
        element.appendChild(newElement);
    }
    return newElement;
 }
let keyUp = (element, callback)  =>{
  element.addEventListener('keyup', callback)
}
let keyDown = (element, callback) => {
  element.addEventListener('keydown', callback)
}
let change = (selectElement, callback)=>{
  selectElement.addEventListener('change', callback)
}
let resize = (element, callback) => {
  element.addEventListener('resize', callback)
}
let windowResize = callback => {
  window.addEventListener('resize', callback)
}
let logOne = message => console.log(message)
let logAll = messages => messages.forEach(message => console.log(message))

let valueOf = inputNameString => {
  element(input).value
}