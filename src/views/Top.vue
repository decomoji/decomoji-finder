<template>
  <div class="Container">
    <h1 class="VisuallyHidden">デコモジファインダー</h1>
    <Header />
    <Main />
    <Collection />
    <Footer />
  </div>
</template>

<script lang="ts">
import Collection from "@/components/Collection.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { CategoriesObject } from "@/models/CategoriesObject";
import { ParsedParamsObject } from "@/models/ParsedParamsObject";
import { DecomojiAction } from "@/store/modules/decomoji/models";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component({
  components: {
    Collection,
    Footer,
    Header,
    Main,
  },
})
export default class Top extends Vue {
  // アクションを引き当てる
  @Action("decomoji/receive")
  receive!: DecomojiAction["receive"];

  // 入力プロパティを定義する
  @Prop() query!: ParsedParamsObject;

  /**
   * @lifecyle
   */
  created() {
    return this.receive(this.query);
  }
}
</script>
