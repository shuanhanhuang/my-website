<template>
    <div class="container first">
      <h2>專案名稱：智慧音樂推薦系統</h2>
      <video width="640" height="360" controls>
        <source src="../assets/r-music智慧音樂推薦系統.mp4" type="video/mp4">
      </video>
      <div class="flex-first">
        <div class="item-first">
          <h3 style="text-align: left; color: black;">一、系統功能簡介</h3>
          <p  style="font-size:25px;text-align: left; color: black; padding-left: 50px;">本系統使用爬蟲程式爬取歌曲的歌詞及歌曲鑑賞，將資料以jieba斷詞進行資料前處理，
            再用TF-IDF演算法擷取歌曲的歌詞中15個關鍵詞，再使用LDA來將歌曲進行分類，並存進資料庫中，
            最後用推薦模組中的Word2Vec以及推薦演算法去達到情境式的推薦歌曲。
          </p>
          <img src="../assets/firstprojectpic.png" style="flex:1;margin-bottom: 10px;">
        </div>
        <div class="item-first">
          <h3 style="text-align: left; color: black;">二、系統架構</h3>
          <img class="img-first" src="../assets/firstprojectpic2.png" style="flex:1;">
        </div>
        <div class="item-first">
          <h3 style="text-align: left; color: black;">三、創意描述</h3>
          <p  style="font-size:25px;text-align: left; color: black; padding-left: 50px;">本系統主要目的是情境式推薦歌曲，以人性化輸入方式，使用者可以將自身的情境及情緒傳達給系統。
            使用者可以輸入情境及情緒的相關詞語，然後系統會利用人工智慧技術及一個推薦演算法來推薦符合使用者情境的歌曲，以增加生活的樂趣或獲得心情上的撫慰。舉例來說，
            <span style="color: red;">思念家人的遊子可以透過此系統，去找到符合思念故鄉、親人的歌曲；或是在參加一個party時，則可以找到熱鬧助興的歌。</span>
            首先我們用爬蟲技術從網路上找到免費歌曲及其歌曲鑑賞，歌曲鑑賞是對歌曲的說明或評論。在對歌詞及歌曲鑑賞做完前處理後，
            我們利用<span style="color: red;">潛在狄利克雷分配模型(Latent Dirichlet Allocation, LDA）人工智慧技術</span>，對歌詞鑑賞進行分析，將歌曲自動分成15類並取得每個分類的關鍵詞。
            再利用使用者輸入情境及情緒的相關語詞，跟各類別的關鍵詞，<span style="color: red;">使用，Word2Vec做相關性的計算找出適當的歌曲類別。</span>
            再次利用情緒的相關語詞跟該類別歌曲的歌詞做相關性的計算，最後推薦最符合使用者情境的十首歌曲供使用者選擇。
          </p>
        </div>
        <div class="item-first">
          <h3 style="text-align: left; color: black;">四、推薦演算法</h3>
          <ol style="text-align: left; color: black; padding-left: 70px;">
            <li>
              <p  style="font-size:25px;text-align: left; color: black;">根據使用者輸入的相關詞語去和每一分類的5個關鍵詞用Word2vec model進行相關度計算，取得使用者情境和各個類別的相關度。</p>
            </li>
            <li>
              <p  style="font-size:25px;text-align: left; color: black;">在相關度最高的類別中，根據使用者輸入的相關詞語去和每首歌的 15 個關鍵詞用 Word2Vec model進行相關度計算，取得每首歌和使用者情境的相關度。</p>
            </li>
            <li>
              <p  style="font-size:25px;text-align: left; color: black;">推薦相關度最高的前十首歌。</p>
            </li>
          </ol>
        </div>
        <div class="item-first">
          <h3 style="text-align: left; color: black;">四、系統特色</h3>
          <ol style="text-align: left; color: black; padding-left: 70px;">
            <li>
              <span style="font-weight:bolder;font-size:25px;">人性化的情境輸入：</span><span style="font-size:25px;text-align: left; color: black;">使用者可以透過我們設計的人性化的方式輸入地點、事件及情緒等相關詞語，傳達自身的情境給我們的系統。</span>
            </li>
            <li>
              <span style="font-weight:bolder;font-size:25px;">情境式音樂推薦：</span><span style="font-size:25px;text-align: left; color: black;">本系統可以根據使用者的情境推薦歌曲。</span>
            </li>
            <li>
              <span style="font-weight:bolder;font-size:25px;">人工智慧技術推薦歌曲：</span><span style="font-size:25px;text-align: left; color: black;">利用LDA人工智慧技術，將歌曲自動分成15類並取得每個分類的關鍵詞。
                再用本專題提出的推薦演算法：<span style="color: red;">利用Word2Vec模型進行歌曲和使用者情境的相關度計算，推薦最符合使用者情境的歌曲給使用者。</span></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </template>

  <style>
  .first{
    background-color: rgb(216, 240, 213);
    padding-top: 10px;
  }
  .flex-first {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }
  .img-first{
    max-width: 50%; /* 设置最大宽度为其容器的宽度 */
    height: auto; /* 自动计算高度以保持宽高比 */
    margin-bottom: 10px; /* 设置下边距 */
  }

  .item-first {
    flex: 1;
    /* background-color: #f08bc3; */
    margin: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }

  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FirstView',
    components: {
    },
  });
  </script>