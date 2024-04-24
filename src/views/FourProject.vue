<template>
    <div class="second container">
      <h2>專案名稱：簽核系統</h2>
      <video width="640" height="360" controls>
        <source src="../assets/r-music智慧音樂推薦系統.mp4" type="video/mp4">
      </video>
      <div class="flex-four">
        <div class="item-four">
          <h3 style="text-align: left; color: black;">一、系統描述</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            與勝新冷凍合作，協助傳統產業進行數位轉型，此簽核系統是利用 Django 進行開發，包含五張表單(新增、編輯、刪除)、帳號管理(登入登出、代理人設定、變更帳號)、管理員權限(創建帳號、編輯帳號、刪除帳號)等內容。</p>
        </div>
        <div class="item-four">
          <h3 style="text-align: left; color: black;">二、系統架構圖</h3>
          <img src="../assets/fourprojectpic.png" style="flex:1;margin-bottom: 10px;">
        </div>
        <div class="item-four">
          <h3 style="text-align: left; color: black;">三、系統流程圖</h3>
          <img src="../assets/fourprojectpic2.png" style="flex:1;margin-bottom: 10px;">
        </div>
      </div>
    </div>
  </template>
  <style>

  .flex-four {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }

  .item-four {
    flex: 1;
    /* background-color: #f08bc3; */
    margin: 5px;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FourView',
    components: {
    },
  });
  </script>