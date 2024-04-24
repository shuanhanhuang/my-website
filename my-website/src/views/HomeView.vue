<template>
  <div class="home">
    
    <div style="background-color: rgb(212, 219, 250);">
      <div class="container flex-home">
          <div class="item1-home"><img src="https://picsum.photos/1000/250" ></div>
          <div class="item-home">
            <p style="font-size: 30px; color: black; font-weight: bold; padding-top: 30px;">黃暄涵</p>
            <p style="font-size: 25px; color: black; text-align: left; padding-right: 20px;">HSUAN-HAN,HUANG</p>
            <p style="font-size: 25px; color: black; text-align: left; padding-right: 20px;">工程師 | 軟體 | 韌體 </p>
            <p style="font-size: 25px; color: black; text-align: left; ">台北科技大學 資訊與財金管理系</p>
          </div>
      </div>
    </div>
    <div style="background-color: rgb(250, 223, 212);">
      <div class="container flex-home">
          <div class="item-home">
            <span>
              <a href="mailto:yvonne09.huang@gmail.com"><img src="../assets/gmail.png" style="width: 4%; padding-bottom: 10px; padding-top: 10px; padding-right: 10px;"></a>
              <a href="https://medium.com/@yvonne09.huang"><img src="../assets/medium.png"  style="width: 4%; padding-bottom: 10px; padding-top: 10px; padding-right: 10px;"></a>
              <a href="https://github.com/shuanhanhuang"><img src="../assets/git.png" style="width: 4%; padding-bottom: 10px; padding-top: 10px; padding-right: 10px;"></a>
            </span>
          </div>
      </div>
    </div>
    <div style="background-color: rgb(216, 238, 210);">
      <nav class="navbar navbar-expand-lg justify-content-center container" style="background-color: rgb(216, 238, 210); ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">About me</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a class="btn btn-outline-success" aria-current="page" href="/about" style="font-size: 30px;font-weight: bolder;">查看更多</a>
          </form>
        </div>
        
      </nav>
      <div class="container flex-home "style="background-color: rgb(216, 238, 210); ">
          <div class="item1-home"><img src="../assets/cloudnew.png" style="height:100%; background-color: rgb(216, 238, 210); "></div>
          <div class="item-home">
            <p style="font-size: 30px; color: black; background-color: rgb(216, 238, 210); text-align: left; padding-top: 10px;">1.家庭與成長環境</p>
            <p style="font-size: 30px; color: black; background-color: rgb(216, 238, 210); text-align: left; padding-top: 20px;">2.求學歷程</p>
            <p style="font-size: 30px; color: black; background-color: rgb(216, 238, 210); text-align: left; padding-top: 20px;">3.工作與求學經歷</p>
            <p style="font-size: 30px; color: black; background-color: rgb(216, 238, 210); text-align: left; padding-top: 20px;">4.個人特質</p>
          </div>
      </div>
    </div>

    <div style="background-color: rgb(193, 225, 235);">
      <nav class="navbar navbar-expand-lg justify-content-center container" style="background-color: rgb(193, 225, 235); ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">專業技能</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a class="btn btn-outline-info" aria-current="page" href="/skill" style="font-size: 30px;font-weight: bolder;">查看更多</a>
          </form>
        </div>
      </nav>
      <div class="container flex-home "style="background-color: rgb(193, 225, 235); padding-bottom: 20px;">
          <div class="item-home">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    證照與英語能力
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body" style="font-size: 20px;">
                    多益750分<br>
                    大學取得TQC Excel 證照<br>
                    研究所取得資訊安全初級證照
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    專業能力
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body" style="font-size: 20px;">
                    程式語言：C語言、python、Java<br>
                    實際應用：網頁開發、資料庫<br>
                    大數據：機器學習、資料分析<br>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    成績證明
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body" style="font-size: 20px;">
                    研究所課程專題佳作<br>
                    大二班排前三<br>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div style="background-color: rgb(250, 243, 212); padding-bottom: 20px;">
      <nav class="navbar navbar-expand-lg  container" style="background-color: rgb(250, 243, 212); ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">專案成就</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a class="btn btn-outline-warning" aria-current="page" href="/project" style="font-size: 30px;font-weight: bolder;">查看更多</a>
          </form>
        </div>
      </nav>
      <div class="card-body all container flex-home">
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
      </div>
      
    </div>
    <div style="background-color: rgb(240, 209, 197); padding-bottom: 20px;">
      <nav class="navbar navbar-expand-lg  container" style="background-color: rgb(240, 209, 197); ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style="font-size: 30px;font-weight: bolder;">課外參與</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a class="btn btn-outline-danger" aria-current="page" href="/particpate" style="font-size: 30px;font-weight: bolder;">查看更多</a>
          </form>
        </div>
      </nav>
      <div class="card-body all container flex-home" >
        <div class="circle">
          社團參與
          <div class="hidden-circle">
              大學積極參與社團活動，擁有創立社團與擔任社團幹部等經驗。
          </div>
        </div>
        <div class="circle">
          Medium 經營
          <div class="hidden-circle">
              分享C語言學習筆記，至今所有文章合計超過500人瀏覽和200人次閱讀。
          </div>
        </div>
        <div class="circle">
          報名線上課程
          <div class="hidden-circle">
            課餘時間報名mcu韌體和Linux程式設計課程，拓展學習領域。
          </div>
        </div>
        <div class="circle">
          自我學習
          <div class="hidden-circle">
            加強網頁製作、學習人工智慧相關領域知識，並練習LeetCode強化程式能力。
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  *{
      padding: 0px;
      margin: 0px;
  }
  .flex-home {
    display: flex;
    height: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    // background-color: rgb(240, 209, 197);
  }
  .item1-home {
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

  .item-home {
    flex: 1;
    margin-left: -20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }
  .circle {
    width: 250px; /* 圓形的直徑 */
    height: 250px; /* 圓形的直徑 */
    background-color: #4c87af; /* 圓形的背景顏色 */
    border-radius: 50%; /* 使 div 變成圓形 */
    display: flex; /* 使用 flexbox 進行布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    color: white; /* 文字顏色 */
    font-size: 20px; /* 文字大小 */
    font-family: Arial, sans-serif; /* 字體 */
    margin-right: 20px;
    transition: all 0.3s ease;
    position: relative; /* 设置为相对定位 */
  }

  .hidden-circle {
      width: 250px;
      height: 250px;
      background-color: #4c87af;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Arial, sans-serif;
      position: absolute; /* 绝对定位 */
      top: 0;
      left: 0;
      opacity: 0; /* 初始不可见 */
      padding: 20px;
      transition: opacity 0.3s ease;
      pointer-events: none; /* 防止影响鼠标事件 */
  }

    .circle:hover .hidden-circle {
        opacity: 1; /* 鼠标悬停时显示 */
    }


</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
