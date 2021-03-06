import {Portfolio} from './portfolio.js'
import Certificates  from './certificates.js'
const buttons = document.querySelectorAll('.menu-lists');
const menu = document.querySelector('.main-menu')
const right = document.querySelector('.right-side-content')
const main = document.querySelector('.main-content')
const home = document.querySelector('.home-main-section')
const portfolio = document.querySelector('.portfolio')
const certificates = document.querySelector('.certificates')
const aboutMe = document.querySelector('.about-me')
const contact = document.querySelector('.contact')
 const menuBtn = document.querySelector('.menu-btn')
const menuBar = document.querySelector('.left-margin')
const sections = document.querySelector('.sections')
const portfolioContent = document.querySelector('.portfolio-content')
const certificatess = document.querySelector('.certificates-content');

const rect = main.getBoundingClientRect().width
window.addEventListener('DOMContentLoaded', function(){
    displayProjects()
    displayCertificates()
})



const displayProjects = ()=>{
  let projects =  Portfolio.map(item=>{
        const{name,type,img,href} = item
        return ` <a href=${href} target="_blank"><article class="portfolio-article">
      <div class="article-underiline"></div>
        <img src="${img}">
        <header class="article-header">
<span class="article-span">${name}</span>
        </header>
        <footer class="article-footer">${type}</footer>
      
        </article></a>`
    })
 projects = projects.join('')
 portfolioContent.innerHTML= projects
}
const displayCertificates = ()=>{
    let certificate = Certificates.map(item=>{
        const {img} =item
        return `  <article class="certificate-article">
        <img src=${img} alt="" class="cert-image">
            </article>
        `
    }).join('')
    certificatess.innerHTML =certificate
}
const change = (id)=>{
     const main = document.querySelector('.main-content')
  const menuBar = document.querySelector('.left-margin')
     if(id==0){
portfolio.classList.remove('add')
certificates.classList.remove('add')
aboutMe.classList.remove('add')
home.classList.remove('none')
contact.classList.remove('add')
home.classList.add('disp')
 if(rect < 761){
 menuBar.classList.remove('menu-display')  
 }}
     if(id==1){
home.classList.remove('disp')
portfolio.classList.remove('add')
certificates.classList.remove('add')
home.classList.add('none')
contact.classList.remove('add')
aboutMe.classList.add('add')
if(rect < 761){
 menuBar.classList.remove('menu-display')  
 }}
    if(id==2){
home.classList.remove('disp')
home.classList.add('none')
aboutMe.classList.remove('add')
certificates.classList.remove('add')
contact.classList.remove('add')
portfolio.classList.add('add')
    if(rect < 761){
menuBar.classList.remove('menu-display')  
 }}
    if(id==3){
        home.classList.remove('disp')
       home.classList.add('none')
    aboutMe.classList.remove('add')
        portfolio.classList.remove('add')
        contact.classList.remove('add')
        certificates.classList.add('add')
     if(rect < 761){
     menuBar.classList.remove('menu-display')
    }}
    if(id==4){
           home.classList.remove('disp')
       home.classList.add('none')
       aboutMe.classList.remove('add')
       portfolio.classList.remove('add')
       certificates.classList.remove('add')
       contact.classList.add('add')
       if(rect < 761){
     menuBar.classList.remove('menu-display')   
 }
    }
 }
 menuBtn.addEventListener('click', (e)=>{
    menuBar.classList.toggle('menu-display')
 })
menu.addEventListener('click',(e)=>{
    const id = e.target.dataset.id   
    if(id){
buttons.forEach((button)=>{
    button.classList.remove('active')
    e.target.classList.add('active')
})
    }
    change(id)
})
