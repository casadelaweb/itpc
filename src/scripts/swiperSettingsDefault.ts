import { SwiperOptions } from 'swiper/types'

export const swiperSettingsDefault: SwiperOptions = {
  grabCursor: true,
  a11y: {
    enabled: true,
    firstSlideMessage: 'Это самый первый слайд',
    lastSlideMessage: 'Это самый последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  // preloadImages: true,
  //lazy: {
  //  loadOnTransitionStart: true,
  //  loadPrevNext: true,
  //},
  watchSlidesProgress: true,
  // watchSlidesVisibility: true,
}
