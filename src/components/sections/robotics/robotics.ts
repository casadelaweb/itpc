import Swiper from 'swiper'
import { A11y, Thumbs } from 'swiper/modules'
import { CSSSelector, SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/thumbs'
/// import 'swiper/css/lazy'
import { swiperSettingsDefault } from 'src/scripts/swiperSettingsDefault'

document.addEventListener('DOMContentLoaded', () => {
  
  const sliderNavigation = new Swiper('[data-slider=robotics-navigation]' as CSSSelector, {
    modules: [A11y, Thumbs,],
    enabled: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    ...swiperSettingsDefault,
  } as SwiperOptions)
  
  new Swiper('[data-slider=robotics-products]' as CSSSelector, {
    modules: [A11y, Thumbs,],
    enabled: true,
    slidesPerView: 1,
    spaceBetween: 20,
    ...swiperSettingsDefault,
    thumbs: {
      swiper: sliderNavigation,
      thumbsContainerClass: 'swiper-thumbs',
      slideThumbActiveClass: 'active',
    },
  } as SwiperOptions)
  
}, { passive: true, })
