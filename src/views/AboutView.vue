<template>
  <div class="second container">
    <div class="flex-about">
      <div class="item-about">放照片</div>
      <div class="item-ablut flex-2-about">
        <h3 style="text-align: left; color: black;">一、家庭與成長背景</h3>
        <p style="font-size:25px;text-align: left; color: black;">
          父親常說「我們是三重的一股清流」，我和妹妹的品德養成更是父母親的教育核心，還記得小時候因為不喜歡喝水，下課前都會把水倒掉並說是自己喝完的，結果有一天被發現之後，母親告訴我重點不是水有沒有喝完，而是不誠實，現在對我來說「誠實不僅僅是一種美德，更是一種生活習慣和態度」。
        </p>
        <h3 style="text-align: left; color: black;">二、求學歷程</h3>
        <p style="font-size:25px;text-align: left; color: black;">
          回顧我的求學經歷，各階段的學習成就十分平穩，成績也皆能保持在中等之上，因為父親的工作背景，再加上考慮到未來的市場趨勢，因此選擇了資管系就讀，一開始因為對程式的邏輯還不太熟悉，造成學習的狀況不理想，在要求自己養成每天寫程式的習慣後，成績也有了起色，在大二大三拿到班排第三以及「程式設計」班排第一的成績。開始對程式產生興趣的我並萌生了讀研究所的想法。
        </p>
        <p style="font-size:25px;text-align: left; color: black;">
          大學畢業專題我是負責python爬蟲、資料預處理、建立模型和分類模組的部分，並且擔任組長的角色，這是第一次將所學的內容實際的運用出來，從製作到比賽的過程中也吸取很多養分，最後也在老師的邀請下和學弟妹分享這些經驗，雖然比賽沒有得名，但整個大學生涯不管是課內或是課外我都成長很多。
        </p>
        <p style="font-size:25px;text-align: left; color: black;">
          進入研究所後除了進入台新銀行實習以外，也參與了很多實驗室的合作，包括從未接觸過的區塊鏈、近幾年因為少子化很多大學開始深耕的校務研究，更特別的是也擁有了幫助中小企業做數位轉型的機會，因為是與其他機構或單位合作，與大學製作專題的情況又不一樣，這些對我來說都是有別於大學的經驗和事務，也讓我覺得這兩年的研究所生活過得相當精采與充實。
        </p>
        <h3 style="text-align: left; color: black;">三、工作與求學經歷</h3>
        <ol class="list-group ">
          <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-start" style="text-align: left;">
            <div class="ms-2 me-auto">
              <div class="fw-bold">2018~2022</div>
              就讀淡江大學 資訊管理學系<br>
              <img src="../assets/arrow.png" style="max-width: 2%">最後以班排第五名，全校第七名畢業
            </div>
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-start" style="text-align: left;">
            <div class="ms-2 me-auto">
              <div class="fw-bold">2022~2024</div>
              就讀台北科技大學 資訊與財金管理學研究所<br>
              <img src="../assets/arrow.png" style="max-width: 2%">兩年間參與四個專案，提升實戰經驗
            </div>
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-start" style="text-align: left;">
            <div class="ms-2 me-auto">
              <div class="fw-bold">2023~2024</div>
              進入台新銀行實習<br>
              <img src="../assets/arrow.png" style="max-width: 2%">了解公司運作，協助修改需求，並成功上線
            </div>
            <span class="badge bg-primary rounded-pill"></span>
          </li>
        </ol>
        <h3 style="text-align: left; color: black; margin-top: 10px;">四、個人特質</h3>
        <p style="font-size:25px;text-align: left; color: black;"><img src="../assets/positive.png" style="max-width: 6%">開朗樂觀：即便偶爾遇到挫折或陷入低谷，也能很快走出陰霾，重拾陽光般的好心情。</p>
        <p style="font-size:25px;text-align: left; color: black;"><img src="../assets/positive.png" style="max-width: 6%">積極進取：熱衷於課餘自主學習、自發性地報名線上課程，接觸多元技能，不斷豐富和充實自我。</p>
        <p style="font-size:25px;text-align: left; color: black;"><img src="../assets/positive.png" style="max-width: 6%">團隊合作：擔任專題組長和社團幹部等經驗。</p>
        <p style="font-size:25px;text-align: left; color: black;"><img src="../assets/dislike.png" style="max-width: 6%">容易粗心：經過在銀行實習的經驗，學習更謹慎的把控每一個環節，持續調整與改正。</p>
      </div>
    </div>
  </div>
</template>

<style>
.flex-about {
  display: flex;
  height: auto;
  padding: 15px;
  /* background-color: #61a0f8; */
  flex-wrap: wrap;
}

.item-about {
  flex: 0 0 30%;
  background-color: #f08bc3;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
}

.img-about{
   flex:1;
    max-width: 100%; /* 设置最大宽度为其容器的宽度 */
    height: auto; /* 自动计算高度以保持宽高比 */
    margin-bottom: 10px; /* 设置下边距 */
  }

.flex-2-about {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
  padding-left: 50px;
  /* background-color: #f08bc3; */
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>