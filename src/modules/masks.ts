import IMask from 'imask'

export class Masks {
  private elements: HTMLElement[]
  private patterns: {
    tel: string,
  }
  private selectors: {
    tel: string,
  }
  
  constructor() {
    this.elements = []
    this.selectors = { tel: '[data-mask=tel]', }
    this.patterns = { tel: '+7 (000) 000-00-00', }
  }
  
  public init(): void {
    const { body, } = document
    
    this.elements = Array.from(body.querySelectorAll(this.selectors.tel))
    this.elements.forEach((element: HTMLElement) => {
      if(element.matches(this.selectors.tel)) {
        IMask(element, { mask: this.patterns.tel, })
      }
    })
  }
}
