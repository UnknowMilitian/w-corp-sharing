<template>
  <div class="register-auth" id="register-auth">
    <header>
      <div class="login-section-wrapp">
        <div class="container">
          <div class="header-wrapp">
            <router-link to="/" class="logo">
              <img src="@/assets/img/logo.svg" alt="" />
            </router-link>

            <div class="login-img">
              <img src="@/assets/img/login-2.svg" alt="" />
            </div>

            <div class="login-auth">
              <form action="" class="auth-form">
                <div class="auth-item">
                  <label for="id_email">Email</label>
                  <input type="text" id="id_email" />
                </div>

                <div class="auth-item">
                  <label for="id_username">Username</label>
                  <input type="text" id="id_username" />
                </div>

                <div class="auth-item">
                  <label for="id_password">Password</label>
                  <input type="password" id="id_password" />
                  <span class="password_shower"
                    ><i class="fa-solid fa-eye">
                      <font-awesome-icon icon="fa-eye"></font-awesome-icon> </i
                  ></span>
                </div>

                <div class="auth-item">
                  <label for="id_password">Password</label>
                  <input type="password" id="id_password" />
                  <span class="password_shower"
                    ><i class="fa-solid fa-eye">
                      <font-awesome-icon icon="fa-eye"></font-awesome-icon> </i
                  ></span>
                </div>
              </form>

              <router-link to="login" class="login-auth_link_btn">Kirish</router-link>
              <router-link to="register" class="login-auth_link">Ro'yxatdan otish</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'RegisterAuth'
}
</script>
<style scoped></style>
