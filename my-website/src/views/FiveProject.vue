<template>
    <div class="second container">
      <h2>專案名稱：規範書系統</h2>
      <video width="640" height="360" controls>
        <source src="../assets/r-music智慧音樂推薦系統.mp4" type="video/mp4">
      </video>
      <div class="flex-five">
        <div class="item-five">
          <h3 style="text-align: left; color: black;">一、系統目標</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            勝新冷凍是一家專門製作客製化冷氣的工廠，其客戶會請設計公司根據客戶需求產出冷氣規範書，勝新會再將收到的規範書轉成公司內部的製品規格單並進行報價，不同的設計公司在描述相同意思的句子會有不同的書寫方式，因此希望可以透過建立規範書系統，來節省人工閱讀的時間，以強化競爭力。</p>
        </div>
        <div class="item-five">
          <h3 style="text-align: left; color: black;">二、系統描述</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            幫助勝新將客戶委託設計公司所產出的規範書透過文字比對的方式，將比對到的句子填入製品規格單相對應的欄位中。
          </p>
        </div>
        <div class="item-five">
          <h3 style="text-align: left; color: black;">二、系統流程圖</h3>
          <img class="img-first" src="../assets/fiveprojectpic.png" style="flex:1;margin-bottom: 10px;">
        </div>
        <div class="item-five">
          <h3 style="text-align: left; color: black;">四、系統介面</h3>
          <img class="img-first" src="../assets/fiveprojectpic2.png" style="flex:1;margin-bottom: 10px;">
        </div>
      </div>
    </div>
  </template>
  <style>
  .flex-five {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }

  .item-five {
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
    name: 'FiveView',
    components: {
    },
  });
  </script>