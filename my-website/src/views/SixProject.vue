<template>
    <div class="second container">
      <h2>專案名稱：簽核系統</h2>
      <div class="flex-six">
        <div class="item-six">
          <h3 style="text-align: left; color: black;">一、研究動機</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            隨著科技的發展，企業內部簽核系統面臨著一系列挑戰。首先，傳統的紙本簽核方式效率低下，容易產生文件遺失和處理延遲的問題，雖然部分企業已轉向數位簽核，但依然面臨資料安全性、流程透明度、效率提升等方面的需求。
          </p>
        </div>
        <div class="item-six">
          <h3 style="text-align: left; color: black;">二、研究目標</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            此本研究設計了一個結合了智能合約和私有區塊鏈技術的簽核系統以解決傳統和部分數位化審核流程所面臨的問題，<span style="color:red;">系統的核心功能圍繞著智能合約的應用</span>，簽核過程的每一步，包括新增和編輯表單，以及主管的批准、拒絕和重新提交，都會觸發相應智能合約的執行。重要的是，<span style="color:red;">系統將這些操作上傳到一個私有以太坊</span>。私有以太坊是一個去中心化的分散帳本，可以確保整個簽核過程的安全性、完整性和透明度。資料以加密且防篡改的方式儲存，提供了每筆交易的可稽核追蹤。
          </p>
        </div>
        <div class="item-six">
          <h3 style="text-align: left; color: black;">三、研究方法</h3>
          <p></p>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px; font-weight: bold;">1. 系統設計</p>
          <ul style="padding-left: 120px;color: black; ">
            <li>
              <p style="font-size:25px;text-align: left; color: black; ">
              簽核系統包含簽呈、會議記錄、內部連絡單、發包議價單、設計變更通知單等五大表單，此系統的核心功能有新增、編輯、刪除表單以及主管的簽核流程。
              </p>
            </li>
            <li>
              <p style="font-size:25px;text-align: left; color: black;">
                為了有效保護內部簽核系統的安全性和機密性，在上傳資料到私有以太坊之前，資料會經過幾層保護，首先將資料<span style="color:red;">採用 AES 對稱式加密演算法進行加密</span>，使用一組隨機的金鑰，生成密文和驗證標籤，另外，也增加了<span style="color:red;">初始化向量以確保相同的明文每次加密都會生成不同的密文</span>。同時，也<span style="color:red;">將原始資料放入 SHA-256 的雜湊函數</span>，以生成固定大小且不可逆的摘要。
              </p>
            </li>
            <li>
              <p style="font-size:25px;text-align: left; color: black;">將這些安全的元素合併成最終的加密資料並上傳到私有區塊鏈，確保資料的機密性和完整性。這種整合私有區塊鏈的方法有效地保障了內部簽核系統的安全性，同時提供了可靠的數據記錄和溯源機制。</p>
            </li>
            <li>
              <p style="font-size:25px;text-align: left; color: black;">
                除了上述的上傳以外，本研究還提供了檢視紀錄的網頁，除了可以查詢以太坊私有鏈的所有紀錄以外，也有比對的功能，幫助公司企業確認查詢當下的資料庫內容和過去上傳到以太坊的該筆資料是否相同，更方便檢視資料庫是否被竄改。
              </p>
            </li>
          </ul>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px; font-weight: bold;">2. 系統架構</p>
          <img src="../assets/sixprojectpic.png" style="height:100%;">
        </div>
      </div>
    </div>
  </template>
  <style>
  .flex-six {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }

  .item-six {
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
    name: 'SixView',
    components: {
    },
  });
  </script>