<template>
  <div>
    <v-navigation-drawer absolute class="hidden-sm-and-up" v-model="sideNav">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Waves</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="(link,index) in links" :key="index" :to="link.route">
          <!-- <v-icon left>{{ link.icon }}</v-icon> -->
          {{ link.name }}
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Waves</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="(link,index) in links" :key="index" :to="link.route">
          <!-- <v-icon left>{{ link.icon }}</v-icon> -->
          {{ link.name }}
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
        { icon: "event", name: "Event", route: "/event" },
        { icon: "phone", name: "Contact Us", route: "/contactUs" },
        { icon: "developer_board", name: "Developers", route: "/developer" }
      ]
    };
  }
};
</script>
