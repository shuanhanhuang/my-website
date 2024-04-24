<template>
    <div class="second container">
      <h2>專案名稱：勞動部勞動及職業安全衛生研究所產官學合作研究</h2>
      <div class="flex-third">
        <div class="item-third">
          <h3 style="text-align: left; color: black;">一、研究動機</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">
            臺北科技大學以培育學以致用的產業一流人才為目標。近年來，由於台灣高齡少子化的問題，已預見未來本土勞動力將大幅減少，各產業面臨缺工。北科大也面臨到大學少子化、高教市場競爭、教育科技推進、非傳統部就學人口增加、招生管道多元等變化，需逐步建立完善校務研究機制，優化校內基礎業務，提升學生就業表現，增加北科大在高教中的競爭力。</p>
            <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">為達成此目標，本計劃希望結合勞動部的就業追蹤資料庫與北科大現有的學生資料庫，以先進的人工智慧方法來進行資料庫的分析，透過數據驅動學校的教育決策。</p>
            <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">希望透過北科大現有的畢業生資料，找出畢業薪資關聯性因素，以資料加值應用的思維加速教育決策，進行育才課程推薦，以使學校能從產官學各方角度，精準預測未來產業人力需求，並根據長年蒐集的學生資料，做出精確的治校策略，推動學生畢業後的就業力與薪資表現，協助校內單位進行校務發展。</p>
        </div>
        <div class="item-third">
          <h3 style="text-align: left; color: black;">二、研究目標</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">從北科大資料庫取得學生各項學習因素，如性別、畢業成績級距、入學方式、畢業學校、英文成績級距、微積分成績級距…等表現，研究這些因素是否會影響學生畢業後的薪資，此將作為學校推動各項施政的治理參考，以實現學校數據驅動校務的目標</p>
        </div>
        <div class="item-third">
          <h3 style="text-align: left; color: black;">三、研究資料集</h3>
          <ol style="text-align: left; color: black; padding-left: 70px;">
            <li><p style="font-size:25px;text-align: left;">各式學生成績：英文成績、大學名次、微積分成績、專業科目成績、微學分、證照、高中學校、高中名次、統測分數</p></li>
            <li><p style="font-size:25px;text-align: left;">各式學生記錄：出缺席記錄、記功過次數、品德分數、社團記錄、服務記錄、獎學金記錄、學習服務記錄、輔導記錄</p></li>  
          </ol>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;"></p>
        </div>
        <div class="item-third">
          <h3 style="text-align: left; color: black;">四、研究結果</h3>
          <p style="font-size:25px;text-align: left; color: black; padding-left: 50px;">總共有做出12個學生成績和未來薪資關係的研究主題，以下舉三個研究結果做說明。</p>
          <ol style="color: black; padding-left: 70px;">
            <li>
              <p style="font-weight:bolder;font-size:25px; text-align: left;">各學院畢業生畢業第四年薪資變化情形：</p>
              <p style="font-size:25px; text-align: left;">截至2022年的資料可以根據下圖看出，電資學院和機電學院的相關科系在薪資方面表現出色，然而，設計學院的相關科系薪水較低，且與薪水冠軍科系相差超過3萬元。這種差異除了市場趨勢外，可能有其他原因導致，設計工作更受到專案或合約性質的影響，使得薪酬較為不穩定。此外，設計相對於工程或科技領域需要更多的創造力和藝術感，這些特質可能被認為不易量化或評估，因此在薪資上可能受到一定程度的影響。</p>
            </li>
            <img src="../assets/thirdprojectpic.png" style="flex:1; text-align: center;">
            <li>
              <p style="font-weight:bolder;font-size:25px;text-align: left;">全校不分科系之大學生畢業後3年和研究所畢業後1年的薪資差異：</p>
              <p style="font-size:25px;text-align: left;">如下圖可以得知，研究所畢業後的薪水確實比大學畢業後三年的薪水還要出色，而實際上理工科系的差距又最為顯著，相信這也是受到近年來台灣IC設計、製造實力日益突出，且在AI產業蓬勃發展，高科技產業對具有高度專業知識和研究能力的人才的需求不斷增加等原因所致。</p>
            </li>
            <img src="../assets/thirdprojectpic2.png" style="flex:1; text-align: center;">
            <li>
              <p style="font-weight:bolder;font-size:25px;text-align: left;">以機器學習方式分析畢業生畢業第6年的薪資</p>
              <p style="font-size:25px;text-align: left;">利用 SVR 和 random forest 等演算法對全校學生的整體分析，評估了學生的學院、學制、性別、身分別、入學方式、畢業成績級距、畢業學年度和各年度薪水等方面的資訊，預測畢業後第六年的薪資。</p>
            </li>
            <p style="font-size:25px;text-align: left;">從下兩張圖可以看出不管是SVR還是random forest，兩個演算法在預測的準確率上都相當突出，對於預測畢業後薪水的變化是相當可靠的。</p>
            <div class="flex3">
                <div class="item3"><img src="../assets/thirdprojectpic3.png" style="width:100%;"></div>
                <div class="item3"><img src="../assets/thirdprojectpic4.png" style="height:100%;"></div>
            </div>
          </ol>
          
        </div>
      </div>
    </div>
  </template>
  <style>
  .flex-third {
    display: flex;
    height: auto;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: column;
  }
  .flex3 {
    display: flex;
    height: 150px;
    flex-direction: row;
    
  }

  .item3 {
    flex: 1;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }

  .item-third {
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
    name: 'ThirdView',
    components: {
    },
  });
  </script>