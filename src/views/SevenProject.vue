<template>
    <div class="second container">
      <h2>專案名稱：北科大資財系課程與104人力銀行職缺專長之需求分析</h2>
      <div class="flex-seven">
        <div class="item-seven">
          <h3 style="text-align: left; color: black;">一、研究動機</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            根據Yes123求職調查，自2022年10月解封以來，63.3%的畢業生尚未找到正職工作，顯示了新鮮人在進入職場時面臨著就業困難。而研究觀察到部分社會新鮮人在求職過程中感到「職涯方向模糊」、「自身能力不足」，其原因可能是學校課程未能提供特定技能和工具，使得新鮮人在求職中缺乏自信心。
          </p>
        </div>
        <div class="item-seven">
          <h3 style="text-align: left; color: black;">二、研究目標</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            本研究旨在分析國立臺北科技大學資訊與財金管理系的課程是否提供新鮮人所需的專業技能，以及這些技能是否符合企業的期望。藉此，研究有助於提升學校課程的實用性，促進學校和企業之間更有效的合作，使畢業生更好地迎接職場挑戰。
          </p>
        </div>
        <div class="item-seven">
          <h3 style="text-align: left; color: black;">三、研究方法</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            研究流程包含利用爬蟲爬取104網站，統計台北科技大學資訊與財金管理系畢業生的職務、職缺描述和技能要求，透過RapidMiner作為分析工具，進行資料清理、標記、前處理，再利用自然語言處理辨識每個職務所需技能，根據107年到111學年度課程大綱整理系上開設課程涵蓋的技能和工具，進行比對。
          </p>
          <img src="../assets/sevenprojectpic.png" style="flex:1;margin-bottom: 10px;">
        </div>
        <div class="item-seven">
          <h3 style="text-align: left; color: black;">四、研究結果與分析</h3>
          <p></p>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px; font-weight: bold;">1. 必修課程有無符合職缺需求</p>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            北科大資財系必修課程旨在提供學生在不同專業領域的全面素養，主要包括會計與財務管理、計算機科學與程式設計以及資訊科技與管理。我們在本研究中，發現金融管理類職位和資訊科技類職位的需求正在持續增加，並且透過RapidMiner的分析，進一步觀察到在104人力銀行的職務需求中，金融管理類的職位需求最為突出，其次是資訊科技類。
          </p>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px; font-weight: bold;">2. 選修課程分析</p>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            自107學年起，北科大資財系的選修課程開課數一直呈現穩健成長的趨勢。在分析選修課程時，可以發現本校資財系有蠻多的課程都是<span style="color:red;">大學部和研究所課程合開。</span>
          </p>
          <ol>
            <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">優點：1.跨層次學習機會 2.授課的多元觀點 3.節省資源</p>
            <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">缺點：1.教學需求不同且難度難調整 2.學生吸收狀況差異大 3.不利於直升研究所招生</p>
          </ol>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            在107-110學年選修類別中，資訊領域相關選修課程的比重比金融和管理領域高。<span style="color:red;">學校課程所學技能與職場需求相符性很高，不過對真實進入職場可能會用到的框架或常用的軟體課程是較缺乏的。</span>
          </p>
        </div>
        <div class="item-seven">
          <h3 style="text-align: left; color: black;">五、結論</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            近年課程多元進步，發現較缺乏金融科技相關課程，建議增加實務性課程。另外大學部與碩士班合開課程增加，提供跨層次學習機會，但需更關注大學部學生需求。與其他學校相比，可強化資訊科學和永續發展課程，<span style="color:red;">提前進行產學合作，整體建議增加實務課程，提高競爭力和教學品質</span>。
          </p>
        </div>
      </div>
    </div>
  </template>
  <style>
  .flex-seven {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }

  .item-seven {
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
    name: 'SevenView',
    components: {
    },
  });
  </script>