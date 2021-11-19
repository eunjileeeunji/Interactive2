
let artworkPageHTML = document.querySelector('#artworkPage')

if(artworkPageHTML){
  
  let pageNum = window.location.search.replace('?','') * 1
  console.log(pageNum)
  
  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  
  let page = pageNum
  window.scrollTo(page * window.innerWidth,0)
  
  artworkPageHTML.style.scrollBehavior = 'smooth'
  
  next.addEventListener('click',function(){
    page ++
    if(page > 8){
      page = 8
    }
    history.replaceState({},'','?' + page)
    window.scrollTo(page * window.innerWidth,0)
  })
  prev.addEventListener('click',function(){
    page --
    if(page < 0){
      page = 0
    }
    history.replaceState({},'','?' + page)
    window.scrollTo(page * window.innerWidth,0)
  })
  
  console.log('is the artwork page')
  
  document.addEventListener('mousewheel',function(e){
    e.preventDefault()
    e.stopPropagation()
    return false
  },{passive: false})
  
}
