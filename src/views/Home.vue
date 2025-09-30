<template>
  <div class="home">
    <h1>🏬Home</h1>
    <!-- button -->
    <button class="btn" @click="toggleMessage">{{ message }}</button>
    <!-- card section -->
    <div class="cards">
      <div class="card" v-for="(item, index) in products" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <button class="card-btn">자세히 보기</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// 버튼 클릭 이벤트
const message = ref("눌러보기");
const isClicked = ref(false);
const toggleMessage = () => {
  isClicked.value = !isClicked.value;
  message.value = isClicked.value ? "눌렀습니다." : "눌러보기"
};

// 카드 데이터
const products = ref([
  { title: "🍎 사과", desc: "맛있고 건강한 사과입니다." },
  { title: "🍌 바나나", desc: "부드럽고 달콤한 바나나입니다." },
  { title: "🍇 포도", desc: "달콤한 포도 한 송이입니다." },
]);
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
@import "../assets/style/mixins";
.home{
  padding: 20px;
  h1{
    color: $main-color;
  }
  .btn{
    @include btn-style($main-color, white);
  }
  .cards{
    display: flex;
    gap: 10px;
  }
  .card{
    @include card-style;
    width: 200px;
    .card-btn{
      @include btn-style($sub-color, white)
    }
  }
}
</style>
