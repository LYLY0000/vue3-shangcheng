//封装banner轮播图业务相关代码
import { getBannerAPI } from "@/api/home";
import { onMounted, ref } from "vue";

export function useBanner() {
  let bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };
  onMounted(() => getBanner());
  return {
    bannerList
  }
}