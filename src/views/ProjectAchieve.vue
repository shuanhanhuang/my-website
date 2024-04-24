<template>
    <div class="container">
      <div class="card text-center mt-2">
        <div class="card-header">大學專題</div>
        <div class="card-body outflex">
          <div class="card" style="width: 18rem; height:350px">
            <img src="../assets/project_music.png" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">智慧音樂推薦系統</h5>
              <p class="card-text">將使用者輸入的關鍵詞，丟入訓練好的Word2Vec模型，推薦出適當的歌曲。</p>
              <a href="/collegeproject" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-center" style="height: auto;">
        <div class="card-header">研究所</div>
        <div class="card-body all container">
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/Blockchain.png" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">區塊鏈</h5>
              <p class="card-text">在以太坊私有鏈上建立船舶研發成果系統，將協助校外研究機構之電子研究記錄儲存於加密系統。</p>
              <a href="/blockchain" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/salary.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">勞安所</h5>
              <p class="card-text">和勞安所合作，研究本校畢業生各科系薪水成長幅度，並透過演算法預測本校畢業生未來薪資。</p>
              <a href="/labor" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/sign.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">勝新冷凍--簽核系統</h5>
              <p class="card-text">協助勝新冷凍公司建立內部簽核系統，幫助其導入電子文件系統，節省公司流程，提升效率。</p>
              <a href="/sign" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/file_System.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">勝新冷凍--規範書系統</h5>
              <p class="card-text">協助勝新冷凍公司建立規範書系統，將客戶的規範書內容透過文字比對後填入製品規格單的對應欄位。</p>
              <a href="/design" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/blockchain_sign.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">區塊鏈簽核系統</h5>
              <p class="card-text">透過過往專案經驗和結果和技術，將簽核系統和區塊鏈技術進行結合，讓每個操作都能同步記錄於私有鏈。</p>
              <a href="/blockchain_sign" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
          <div class="card" style="width: 18rem; height:auto;">
            <img src="../assets/class.png" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">北科大課程研究分析</h5>
              <p class="card-text">將北科大授課內容與求職網站的職缺需求，透過文本分析演算法加以判斷學校課程是否符合市場需求。</p>
              <a href="/class_analyze" class="btn btn-primary">詳細專案內容</a>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  <style>
  .outflex{
    display: flex;
    justify-content: center;
  }
  .card-body{
    height: auto;
  }
  .card{
    margin-right: 20px;
    margin-top: 20px;
  }
  .all{
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
  

  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProjectAchieve',
    components: {
      
    },
  });
  </script>
  