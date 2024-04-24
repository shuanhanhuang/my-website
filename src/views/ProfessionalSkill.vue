<template>
    <div class="container">
      <div style="background-color: rgb(247, 233, 216); padding-bottom: 20px;">
        <nav class="navbar navbar-expand-lg justify-content-center container" style="background-color:rgb(247, 233, 216);">
          <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">證照與英語能力</a>
              </li>
          </ul> 
        </nav>
        <div class="flex-skill">
          <div class="item-skill">
            <p style="font-size: 20px; color: black; padding-top: 10px; text-align: left;">TQC Excel</p>
            <img src="../assets/TQC.png" style="width: 90%;">
          </div>
          <div class="item-skill">
            <p style="font-size: 20px; color: black; padding-top: 10px; text-align: left;">TOEIC 750分(閱讀400 聽力350)</p>
            <img src="../assets/toeic.png" style="width: 70%;">
          </div>
          <div class="item-skill">
            <p style="font-size: 20px; color: black; padding-top: 10px; text-align: left;">資訊安全工程師-初級證照</p>
            <img src="../assets/MOEA.png" style="width: 70%;">
          </div>
        </div>
      </div>
      
      <div style="background-color: #cdf1ed;; padding-bottom: 20px;">
        <nav class="navbar navbar-expand-lg justify-content-center container" style="background-color:#cdf1ed;;">
          <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">專業技能</a>
              </li>
          </ul> 
        </nav>
        <div class="" style="text-align: center;">
          <p style="font-size: 20px; color: black; padding-top: 10px; text-align: center;">軟實力</p>
          <img src="../assets/softskillnew.png" style="width: 30%; padding-bottom: 20px;">
        </div>
        <div class="" style="padding-left: 150px; padding-right: 150px;">
          <p style="font-size: 20px; color: black; padding-top: 10px; text-align: center;">硬實力</p>
            <span style="text-align: left; display: block;">C語言與python程式語言</span>
            <div class="progress ">
              <span class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 83%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></span>
            </div>
            <span style="text-align: left; display: block;">網頁製作</span>
            <div class="progress">
              <span class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 75%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></span>
            </div>
            <span style="text-align: left; display: block;">資料分析</span>
            <div class="progress">
              <span class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 80%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></span>
            </div>
            <span style="text-align: left; display: block;">Java程式語言</span>
            <div class="progress">
              <span class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 65%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></span>
            </div>
            <span style="text-align: left; display: block;">機器學習</span>
            <div class="progress">
              <span class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: 75%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></span>
            </div>
          </div>
      </div>
      <div style="background-color: rgb(247, 233, 216); padding-bottom: 20px;">
        <nav class="navbar navbar-expand-lg justify-content-center container" style="background-color:rgb(247, 233, 216);">
          <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">成績證明</a>
              </li>
          </ul> 
        </nav>
        <div class="flex-skill">
          <div class="item-skill">
            <p style="font-size: 20px; color: black; padding-top: 10px; text-align: left;">研究所大數據學程研究獎項</p>
            <img src="../assets/bigdata.png" style="width: 50%;">
          </div>
          <div class="item-skill">
            <p style="font-size: 20px; color: black; padding-top: 10px; text-align: left;">大學大二獎狀</p>
            <img src="../assets/score.png" style="width: 50%;">
          </div>
        </div>
      </div>
    </div>
  </template>
  <style>
  
  
  .item-skill {
    flex: 1;
    /* background-color: #f08bc3; */
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
  }

  .flex-skill{
    display: flex;
    height: auto;
    justify-content:center;
    padding: 15px;
    /* background-color: #61a0f8; */
    flex-direction: row;
  }

  .progress-container {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中對齊 */
}

.progress-label {
  margin-right: 10px; /* 在標籤和進度條之間增加一些右邊距 */
}
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProfessionalSkill',
    components: {
    },
  });
  </script>
  