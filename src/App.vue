<template>
  <nav class="navbar navbar-expand-lg justify-content-center" style="background-color: #e3f2fd">
    <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style="font-size: large;font-weight: bolder;">個人網頁</a>
        </li>
    </ul>
    <ul class="nav justify-content-center">
      <li class="nav-item" >
        <button class="nav-link custom-btn" @click="goToHome">首頁</button>
      </li>
      <li class="nav-item">
        <button class="nav-link custom-btn" @click="goToAbout">個人簡介</button>
      </li>
      <li class="nav-item">
        <button class="nav-link custom-btn" @click="goToSkill">專業技能</button>
      </li>
      <li class="nav-item">
        <button class="nav-link custom-btn" @click="goToProject">專案成就</button>
      </li>
      <li class="nav-item">
        <button class="nav-link custom-btn" @click="goToPart">課外參與</button>
      </li>
    </ul>
  </nav>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.custom-btn {
  background-color: #80db84; /* 將顏色設置為你想要的 $blue-300 */
  color: white; /* 設置文字顏色為白色，以保持對比 */
  border: none; /* 移除按鈕邊框 */
  padding: 8px 16px; /* 設置按鈕內邊距 */
  margin: 0 5px; /* 設置按鈕之間的間距 */
  border-radius: 5px; /* 設置按鈕圓角 */
}

</style>
<script lang="ts">
import { Router } from 'vue-router';
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    goToProject(this: { $router: Router }) {
      if (this.$router) {
        this.$router.push('/project');
      }
    },
    goToHome(this: { $router: Router }) {
      if (this.$router) {
        this.$router.push('/');
      }
    },
    goToAbout(this: { $router: Router }) {
      if (this.$router) {
        this.$router.push('/about');
      }
    },
    goToSkill(this: { $router: Router }) {
      if (this.$router) {
        this.$router.push('/skill');
      }
    },
    goToPart(this: { $router: Router }) {
      if (this.$router) {
        this.$router.push('/particpate');
      }
    },
  },
});
</script>