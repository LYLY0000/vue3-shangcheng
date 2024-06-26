//封装分类数据业务相关代码
import { getCategoryAPI } from "@/api/category";

import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export function useCategory() {
  const categoryData = ref({});
  const route = useRoute(); //获取参数
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory());
  //目标：路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    //存在问题：使用最新的路由参数请求最新的分类数据
    //解决方法：利用onBeforeRouteUpdate所给的to数据传参
    getCategory(to.params.id);
  });
  return { categoryData }
}