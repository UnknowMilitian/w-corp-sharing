<template>
  <div class="detail-edu" id="detail-edu">
    <header>
      <div class="section-wrapp">
        <div class="container educenter advanced">
          <img class="educenter-bg_img" src="../assets/img/places/najot te'lim.png" alt="" />
          <div class="educenter-top">
            <router-link to="/" class="general-back_link"
              ><i class="fa-regular fa-angle-left">
                <font-awesome-icon icon="fa-angle-left"></font-awesome-icon> </i
            ></router-link>
            <img class="educenter-pfp-img" src="../assets/img/edu centers/najot talim.png" alt="" />
            <h1 class="educenter-name">Najot Ta'lim</h1>
            <p class="educenter-location">
              <i class="fa-regular fa-location-dot"></i> Farg'ona - Toshkent
            </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="section-wrapp">
        <div class="container educenter mid">
          <div class="educenter-top_filter">
            <div class="educenter-left educenter-side active">O'quv kurslari</div>
            <div class="educenter-right educenter-side">Vakansiyalar</div>
            <div class="educenter-line"></div>
          </div>
          <div class="educenter-course-loop">
            <router-link to="/" class="educenter-course-item" data-aos="fade-up">
              <img src="../assets/img/sam-user-pfp.png" alt="" />
              <div class="educenter-course_info">
                <p class="educenter-course_name">Front-End Developerlar</p>
                <p class="educenter-course_quantity">O'quvchilar soni: 45</p>
              </div>
            </router-link>

            <router-link to="/" class="educenter-course-item" data-aos="fade-up">
              <img src="../assets/img/naz-user-pfp.png" alt="" />
              <div class="educenter-course_info">
                <p class="educenter-course_name">Back-End Developerlar</p>
                <p class="educenter-course_quantity">O'quvchilar soni: 45</p>
              </div>
            </router-link>

            <router-link to="/" class="educenter-course-item" data-aos="fade-up">
              <img src="../assets/img/fes-user-pfp.png" alt="" />
              <div class="educenter-course_info">
                <p class="educenter-course_name">Dizaynerlar</p>
                <p class="educenter-course_quantity">O'quvchilar soni: 45</p>
              </div>
            </router-link>

            <router-link to="/" class="educenter-course-item" data-aos="fade-up">
              <img src="../assets/img/rui-user-pfp.png" alt="" />
              <div class="educenter-course_info">
                <p class="educenter-course_name">Bot developerlar</p>
                <p class="educenter-course_quantity">O'quvchilar soni: 45</p>
              </div>
            </router-link>
          </div>
          <div class="vacancies_loop closed-loop">
            <div class="vacancies-item" data-aos="fade-up">
              <div class="vacancy-item_right">
                <img src="../assets/img/edu centers/digital city.png" alt="" />
              </div>
              <div class="vacancy-item_left">
                <h1 class="vacancy-company_name">Digital city</h1>
                <p class="vacancy-title vacancy-info">Grafik dizayner kerak!</p>
                <p class="vacancy-experience vacancy-info">Tajriba: 2 yil</p>
                <p class="vacancy-age vacancy-info">Yoshi: 20+</p>
                <p class="vacancy-tech vacancy-info">
                  Texnologiyalar: Photoshop,<a href="/">...</a>
                </p>
                <p class="vacancy-link vacancy-info"><a href="/">Ko'rish</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'DetailEdu'
}
</script>
<style scoped></style>
