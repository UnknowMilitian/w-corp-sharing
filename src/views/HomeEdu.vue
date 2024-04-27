<template>
  <div id="home-edu" class="home-edu">
    <header>
      <div class="section-wrapp">
        <div class="container educenter">
          <div class="main-header_top_wrapper">
            <div class="main-header_top-right">
              <router-link to="/" class="main-logo">
                <img src="@/assets/img/logo.svg" alt="" />
              </router-link>
              <h1 class="main-request_username">Ilyosbek</h1>
              <p class="main-current_location">
                <i class="fa-regular fa-location-dot"></i>
                <span class="main-current_id_location"></span>
              </p>
            </div>
            <div class="main-header_top-left">
              <img src="@/assets/img/sam-user-pfp.png" alt="" />
            </div>
          </div>

          <div class="main-header_top_block_wrapper">
            <div class="main-header_top-search">
              <form action="" class="main-search_form">
                <input type="text" class="main-search_input" placeholder="Ish/Ishchi qidiring..." />
                <button type="submit" class="main-search_btn">
                  <i class="fa-regular fa-search">
                    <font-awesome-icon icon="fa-search"></font-awesome-icon>
                  </i>
                </button>
              </form>
            </div>
            <div class="main-header_top-filter">
              <i class="fa-solid fa-bars-sort">
                <font-awesome-icon icon="fa-bars-staggered"></font-awesome-icon>
              </i>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="section-wrapp">
        <div class="container">
          <div class="main-edu_centers">
            <div class="main-block_header">
              <h1 class="main-block_heading">O’quv markazlar</h1>
              <router-link to="/" class="main-block_link"> Hammasi </router-link>
            </div>
            <div class="main-educenter-scroll">
              <div class="main-educenter_loop">
                <router-link to="education" class="main-educenter-item">
                  <img src="@/assets/img/edu centers/najot talim.png" alt="" />
                  <p class="main-educenter-item_name">Najot Ta'lim</p>
                  <span class="main-educenter-item_type">O'quv markazi</span>
                </router-link>

                <router-link to="education" class="main-educenter-item">
                  <img src="@/assets/img/edu centers/mohirdev.png" alt="" />
                  <p class="main-educenter-item_name">MohirDev</p>
                  <span class="main-educenter-item_type">O’quv akademiya</span>
                </router-link>

                <router-link to="education" class="main-educenter-item">
                  <img src="@/assets/img/edu centers/robocode.png" alt="" />
                  <p class="main-educenter-item_name">Robocode</p>
                  <span class="main-educenter-item_type">O'quv markazi</span>
                </router-link>

                <router-link to="education" class="main-educenter-item">
                  <img src="@/assets/img/edu centers/astrum.png" alt="" />
                  <p class="main-educenter-item_name">Astrum</p>
                  <span class="main-educenter-item_type">O'quv akademiya</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="main-vacancies">
            <div class="main-block_header">
              <h1 class="main-block_heading">Vakansiyalar</h1>
              <router-link to="/" class="main-block_link"> Hammasi </router-link>
            </div>

            <div class="vacancies_loop">
              <div class="vacancies-item" data-aos="fade-up">
                <div class="vacancy-item_right">
                  <img src="@/assets/img/edu centers/digital city.png" alt="" />
                </div>

                <div class="vacancy-item_left">
                  <h1 class="vacancy-company_name">Digital city</h1>
                  <p class="vacancy-title vacancy-info">Grafik dizayner kerak!</p>
                  <p class="vacancy-experience vacancy-info">Tajriba: 2 yil</p>
                  <p class="vacancy-age vacancy-info">Yoshi: 20+</p>
                  <p class="vacancy-tech vacancy-info">
                    Texnologiyalar: Photoshop,<router-link to="/">...</router-link>
                  </p>
                  <p class="vacancy-link vacancy-info"><router-link to="/">Ko'rish</router-link></p>
                </div>
              </div>

              <div class="vacancies-item" data-aos="fade-up">
                <div class="vacancy-item_right">
                  <img src="@/assets/img/edu centers/adc.png" alt="" />
                </div>

                <div class="vacancy-item_left">
                  <h1 class="vacancy-company_name">ADC</h1>
                  <p class="vacancy-title vacancy-info">Back-endchi kerak!</p>
                  <p class="vacancy-experience vacancy-info">Tajriba: 4 yil</p>
                  <p class="vacancy-age vacancy-info">Yoshi: 20+</p>
                  <p class="vacancy-tech vacancy-info">
                    Texnologiyalar: Photoshop,<router-link to="/">...</router-link>
                  </p>
                  <p class="vacancy-link vacancy-info"><router-link to="/">Ko'rish</router-link></p>
                </div>
              </div>

              <div href="/" class="vacancies-item" data-aos="fade-up">
                <div class="vacancy-item_right">
                  <img src="@/assets/img/edu centers/astrum.png" alt="" />
                </div>

                <div class="vacancy-item_left">
                  <h1 class="vacancy-company_name">Astrum</h1>
                  <p class="vacancy-title vacancy-info">Grafik dizayner kerak!</p>
                  <p class="vacancy-experience vacancy-info">Tajriba: 2 yil</p>
                  <p class="vacancy-age vacancy-info">Yoshi: 27+</p>
                  <p class="vacancy-tech vacancy-info">
                    Texnologiyalar: Photoshop,<router-link to="/">...</router-link>
                  </p>
                  <p class="vacancy-link vacancy-info"><router-link to="/">Ko'rish</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'HomeEdu'
}
</script>

<style scoped></style>
