import move2top from "@/lib/move2top/move2top";

move2top.install = function(Vue) {
  Vue.component("move2top", move2top);
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(move2top);
  }
};

export default move2top;
