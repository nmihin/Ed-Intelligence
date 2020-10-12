<template>
      <!-- Main Header -->
      <div class="header">
        <!-- Logo -->
        <div class="logo">
          <a href="/">
            <img src="../../../assets/images/logo.png" alt="Logo">
          </a>
        </div>
        <!-- logo-END -->
        <!-- Main Menu -->
        <div class="main-menu">
          <div class="container">
              <Mainmenu />
              <Search />
          </div>
        </div>
        <!-- main-menu-END -->

        <Profile />

      </div>
      <!-- main-header-END -->
</template>

<script>
import Search from '../search/Search.vue'
import Mainmenu from '../../navigation/mainmenu/Mainmenu.vue'
import Profile from '../profile/Profile.vue'

export default {
  name: 'App',
  components: {
    Search,
    Mainmenu,
    Profile
  }
}
</script>