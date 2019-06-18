<template>
  <div class="bg-pic">
    <waves/>
    <v-container fluid id="home-about">
      <v-layout wrap>
        <v-flex xs12 sm6 md6 xl6>
          <v-card min-height="360px"  color="rgba(200,200,200,0.3)" class="cards black--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">ABOUT US</div>
                <span
                  class="subheading"
                >Waves is BITS Goa’s annual cultural fest, a melting pot of art, talent, skill, creativity, and intellectual prowess in their purest forms that attracts students from across the nation. During Waves, students can witness all sorts of amazing competitions, including breath-taking dance-offs, eclectic musical performances, heated debates, intense poetry slams, and a wide variety of other interesting events. And that’s just during the days-- the nights of Waves have seen artists such as Vishal-Shekhar, Amit Trivedi, Farhan Akhtar, Salim-Sulieman, Nucleya, The Local Train, and other amazing musical acts setting the stage on fire. For everything that BITS Goa is and represents, Waves is the fest you just can’t miss.</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6 xl6>
          <v-card min-height="360px"  color="rgba(200,200,200,0.3)" class="cards black--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">ABOUT THE THEME</div>
                <span
                  class="subheading"
                >Break the chains of monotony, and set the explorer free, because this Waves we are going on an electrifying journey. Let yourself be consumed by Wanderlust, and walk through sprightly forests, rugged mountains and gushing rivers. Board the whistling trains, and sail the mighty seas. Come, En Voyage, and let adventure fill your soul. Dance among the fireflies, and listen to Summer birds sing, as you lose yourself in what promises to be an epic odyssey of three days. It’s time to move out of the shadows of everyday life, because every tale has two shades. This Waves, let’s explore the unexplored and En Voyage on Unchartered Ventures.</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import * as THREE from 'three'
export default {
  name: "Home",

  components: {
    Waves: () => import("@/components/home/Waves")
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script:400");
@import url("https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap");
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
.bg-pic {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/waves-2019.appspot.com/o/contacts%2FBackground.jpg?alt=media&token=9ebe4fba-b295-4814-8140-408b6df799c1");
  background-size: cover;
  background-repeat: repeat;
}
.cards {
  margin: 20px;
}
.headline {
  font-family: "Kaushan Script", cursive !important;
}
.subheading {
  font-family: "Nanum Pen Script", cursive !important;
  font-size: 24px !important;
}
</style>

