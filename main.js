'use strict'

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


const emailInput = document.querySelector('#exampleInputEmail1')
const modalOpen = document.querySelector('#exampleModal')

modalOpen.addEventListener('shown.bs.modal', ()=>{
    emailInput.focus()
})