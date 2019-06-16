<template>
  <div>
    <v-navigation-drawer app temporary class="hidden-sm-and-up" v-model="sideNav">
      <v-toolbar flat>
        <v-toolbar-side-icon @click.stop="sideNav = !sideNav">
          <v-img :src="require('@/assets/logo_waves.png')" cover @click="$vuetify.goTo(0)"/>
        </v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Waves 2019</router-link>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="(link,index) in links" :key="index" :to="link.route">
          <v-icon left>mdi-diamond</v-icon>
          <v-list-tile-title v-text="link.name"/>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar height="75px" color="black">
      <v-toolbar-side-icon color="white" @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="WavesLogo.png" height="75px" alt="Waves">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="(link,index) in links" :key="index" :to="link.route">
          <!-- <v-icon left>{{ link.icon }}</v-icon> -->
          <span class="white--text">{{ link.name }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>


<script>
export default {
  name: "Toolbar",
  data() {
    return {
      sideNav: false,
      links: [
        { icon: "home", name: "Home", route: "/" },
        { icon: "event", name: "Events", route: "/event" },
        { icon: "phone", name: "Contact Us", route: "/contact-us" }
        // { icon: "developer_board", name: "Developers", route: "/developer" }
      ]
    };
  }
};
</script>
