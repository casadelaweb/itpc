class Header {
  public header: HTMLElement
  private headerHeight: number
  private readonly onResize: (event?: Event) => void
  private readonly onScroll: (event?: Event) => void
  
  constructor() {
    this.header = undefined
    this.headerHeight = undefined
    this.onResize = this.handleResize.bind(this)
    this.onScroll = this.handleScroll.bind(this)
  }
  
  public init(): void {
    this.updateElements()
    this.updateHeaderHeight()
    this.hoverHeader()
    this.updateListeners()
  }
  
  private updateListeners(): void {
    this.updateGlobalListeners()
  }
  
  private updateGlobalListeners(): void {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  }
  
  private handleResize(): void {
    this.updateHeaderHeight()
  }
  
  private handleScroll(): void {
    this.hoverHeader()
  }
  
  private updateElements(): void {
    const { body, } = document
    this.header = body.querySelector('.header') ?? body.querySelector('header')
    this.headerHeight = this.header.offsetHeight
  }
  
  private updateHeaderHeight(): void {
    this.headerHeight = this.header.offsetHeight
    const value = this.headerHeight + 'px'
    this.header.classList.add('active')
    document.documentElement.style.setProperty('--headerHeight', value)
  }
  
  private hoverHeader(): void {
    const { scrollY, } = window
    
    if(scrollY > this.headerHeight) {
      this.header.classList.add('scrolled')
    } else {
      this.header.classList.remove('scrolled')
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Header().init()

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const links = document.querySelectorAll('.header__menu a')
  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    this.classList.toggle('active')
  })
  function linkAction(){
    menu.classList.remove('active')
    this.classList.remove('active')
  }
  links.forEach(n => n.addEventListener('click', linkAction))

})
