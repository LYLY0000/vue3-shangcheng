import httpInstance from "@/utils/http";
//结算面详情
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: '/member/order/pre'
  })
}
