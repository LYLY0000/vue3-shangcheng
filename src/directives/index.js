import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el:指令绑定的那个元素 img
        //binging :bingding.value 指令等于号后面绑定的表达式的值 图片url
        //console.log(el, binding.value);
        //通过解构赋值获得useIntersectionObserver的返回值
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            //console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()//停止监听
            }
          },
        )
      },
    })
  }
}