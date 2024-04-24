<template>
    <div class="second container">
      <h2>專案名稱：應用區塊鏈技術於船舶中心電子研究紀錄簿系統</h2>
      <div class="flex-second">
        <div class="item-second">
          <h3 style="text-align: left; color: black;">一、系統描述</h3>
          <p  style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            在以太坊私有鏈上建立船舶研發成果系統，將船舶中心電子研究記錄相關檔案儲存於加密系統，並使用Solidity撰寫智能合約，將船舶研發紀錄資料的 Hash Value存在區塊練私有鏈上，此系統具有隱私性、不可竄改性、便利性、交易速度快、成本極低等特性，可以簡化船舶中心作業流程並節省作業時間、資料維護交接成本，提高資料整合效率和整體組織運作效率。
          </p>
        </div>
        <div class="item-second">
          <div class="item-second">
          <h3 style="text-align: left; color: black;">二、系統架構</h3>
          <img class="img-first" src="../assets/secondprojectpic.png" style="flex:1;">
        </div>
        </div>
        <div class="item-second">
          <h3 style="text-align: left; color: black;">三、系統製作流程</h3>
          <ol style="text-align: left; color: black; padding-left: 70px;">
            <li>
              <span style="font-weight:bolder;font-size:25px;">建立私有以太坊節點：</span><span style="font-size:25px;text-align: left; color: black;">此私有以太坊由三個節點組成，本系統使用Geth建立即啟動節點。</span>
            </li>
            <li>
              <span style="font-weight:bolder;font-size:25px;">對研究紀錄加密後上傳區塊鏈：</span><span style="font-size:25px;text-align: left; color: black;">從 API 取得的船舶中心電子研究記錄簿資料上傳到區塊鏈，為了保障資料的安全，因此先利用AES對稱區塊加密模型將資料加密後，再上傳至私有鏈上。</span>
            </li>
            <li>
              <span style="font-weight:bolder;font-size:25px;">對資料至區塊鏈下載後解密：</span><span style="font-size:25px;text-align: left; color: black;">利用上傳資料到區塊鏈上所產生的交易標號進行下載，再用上傳時所產生的金鑰進行解密。</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </template>

  <style>
  .second{
    background-color: rgb(216, 240, 213);
    padding-top: 10px;
  }
  .flex-second {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }

  .item-second {
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
    name: 'SecondView',
    components: {
    },
  });
  </script>