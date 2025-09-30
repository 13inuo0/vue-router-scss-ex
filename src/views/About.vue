<template>
  <div class="about">
    <h1>👋 About 페이지</h1>
    <p class="intro">여기는 소개 페이지에요!</p>
    <button class="btn">눌러보기</button>
    <button class="btn-d">눌러보기</button>
    <button class="btn-C">눌러보기</button>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
// 변수 사용
$main-color : #4caf50;
$hover-color : #1f5c21;
$font-color : #333;
// mixin = 버튼에 대해 담아두고 사용
@mixin btn-style($bg, $color){
  background-color: $bg;
  color: $color;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all .3s;
  &:hover{
    background-color: darken($bg,20%);
  }
}
// 중첩
.about{
  padding: 20px;
  background-color: #f0f0f0;
  h1{
    color: $main-color;
    margin-bottom: 15px;
  }
  .intro{
    color: $font-color;
    margin-bottom: 15px;

  }
  .btn{
    @include btn-style($main-color, white)
  }
  .btn-d{
    @include btn-style(red,white )
  }
  .btn-C{
    @include btn-style(skyblue, blue )
  }
}
</style>
