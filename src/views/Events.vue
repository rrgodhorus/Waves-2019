<template>
  <div>
    <div class="image-hotspot hidden-xs-only" :class="{'is-selected': open }">
      <transition-group name="hotspots">
        <template v-for="(hotspot, index) in hotspotItems">
          <a
            href="#"
            class="hotspot-point"
            :style="{ top: hotspot.position.top, left: hotspot.position.left }"
            @click.prevent="hotspotClicked(hotspot, index)"
            :key="index"
          >
            <span class="icon-disp" :data-title="hotspot.title">
              <!-- <svg class="icon icon-close" viewBox="0 0 24 24">
                <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
              </svg>-->
              <span class="icon-big"></span>
            </span>
          </a>
        </template>
      </transition-group>
      <img src="map.jpg" alt @click="closeDetails">
    </div>
    <div id="Music" style="margin: auto;" class="grey lighten-3">
      <v-toolbar color="pink" dark>
        <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">MUSIC</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card color="white">
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="rgba(0,0,0,0.4)" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Indian Rock</div>
                    <span
                      class="subheading"
                    >One of the most anticipated events in WAVES, this is the grand stage for all rock enthusiasts and budding artists of the country. With all the amazing music and the Led Zeppelin vibe the participants truly bring out the amazing flare of all the greats.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Register now</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="rgba(0,0,0,0.6)" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Jukebox</div>
                    <span
                      class="subheading"
                    >This is a solo event under Music category in which participants use their vocal abilities to compete. The song can be Indian or Western.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Register now</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="rgba(0,0,0,0.5)" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Rapsody</div>
                    <span
                      class="subheading"
                    >All of us have heard the songs of Panjabi, Divine, Raftaar. Well get ready to experience the Local Hip-Hop culture, this Waves. For the first time ever, we present to you the Rapsody, a showdown for all rap enthusiasts.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Register now</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="rgba(0,0,0,0.45)" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Solonote</div>
                    <span
                      class="subheading"
                    >One of the most anticipated events of Music, here participants bring only their instrumental prowess to the fore, and not their vocal ability. Only one instrument is allowed per participant, but this one instrument can be anything, and they’re allowed to play anything. Because of this variety, there’s a lot of excitement and mystery surrounding this particular event, which makes it a sublime showcase of budding musical talent.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Register now</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12>
              <v-card color="rgba(0,0,0,0.7)" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">SeaRock</div>
                    <span
                      class="subheading"
                    >One of the most grandiose semi-pro rock band competitions in the country. Alumni of the likes of Zygnema, The Family Cheese, Knight Shades, and Inner Sanctum. Bringing you enticing opportunities to showcase your talents, Searock is back with its 15th iteration this fall.</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Register now</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
const hotspots = [
  {
    id: 1,
    title: "Searock",
    position: { top: "10%", left: "37%" }
  },
  {
    id: 2,
    title: "Mr & Mrs Waves",
    position: { top: "22%", left: "12%" }
  },
  {
    id: 3,
    title: "Quiz",
    position: { top: "29%", left: "30%" }
  },
  {
    id: 4,
    title: "Music",
    position: { top: "50%", left: "21.5%" }
  },
  {
    id: 5,
    title: "Fine Arts",
    position: { top: "63%", left: "28%" }
  },
  { id: 6, title: "Specials", position: { top: "82%", left: "29%" } },
  {
    id: 7,
    title: "Fashion Parade",
    position: { top: "20%", left: "49%" }
  },
  {
    id: 8,
    title: "Dance",
    position: { top: "45%", left: "47%" }
  },
  {
    id: 9,
    title: "Carpe Dictum",
    position: { top: "69%", left: "51.5%" }
  },
  {
    id: 10,
    title: "Inverse",
    position: { top: "21%", left: "58%" }
  },
  {
    id: 11,
    title: "Drama",
    position: { top: "13%", left: "70%" }
  },
  {
    id: 12,
    title: "Photography",
    position: { top: "25%", left: "77%" }
  },
  {
    id: 13,
    title: "Show me the funny",
    position: { top: "42%", left: "70%" }
  },
  {
    id: 14,
    title: "Design",
    position: { top: "17%", left: "87%" }
  },
  {
    id: 15,
    title: "MOOT",
    position: { top: "75%", left: "80%" }
  }
];
export default {
  name: "Events",
  data() {
    return {
      hotspots,
      open: false,
      hotspotPosition: null,
      selectedHotspot: null,
      panel: [false, true, true]
    };
  },
  computed: {
    hotspotItems() {
      return this.open ? [] : this.hotspots;
    }
  },
  methods: {
    closeDetails() {
      this.open = false;
    },
    hotspotClicked(hotspot, index) {
      // this.selectedHotspot = hotspot;
      // this.selectedIndex = index;

      // this.open = true;
      this.$vuetify.goTo(`#${hotspot.title}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script:400");
@import url("https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap");
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

$spot-color: #312525f1;

[v-cloak] {
  display: none;
}
.headline {
  font-family: "Kaushan Script", cursive !important;
}
.subheading {
  font-family: "Nanum Pen Script", cursive !important;
  font-size: 24px !important;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.image-hotspot {
  position: relative;
  padding-top: 56.2%;
  overflow: hidden;
  font-family: "Kaushan Script", cursive;

  // &.is-selected {
  //   // > img {
  //   //   filter: blur(5px);
  //   //   transition: all 0.5s 1s;
  //   // }
  // }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: auto;
    transition: all 0.5s;
  }
}

.hotspot-point {
  z-index: 2;
  position: absolute;
  display: block;

  .icon-disp {
    content: attr(data-title);
    text-shadow: 0 1px black;
    font-weight: 600;
    font-size: 1.8em;
    position: absolute;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;
    height: 1em;
    background-image: url("icon1.png");
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    animation: pulse 3s ease infinite;
    transition: background 0.3s;
    box-shadow: 0 2px 10px rgba(#000, 0.2);

    &:after {
      content: attr(data-title);
      position: absolute;
      top: 130%;
      left: 50%;
      color: white;
      text-shadow: 5px 4px rgb(12, 11, 11);
      font-weight: 500;
      font-size: 1.8em;
      // opacity: 0;
      transform: translate(-50%, -30%) scale(0.5);
      // transition: all 0.25s;
    }
  }

  .icon-big {
    opacity: 0;
    color: $spot-color;
    font-size: 1.4em;
    transition: opacity 0.2s;
  }

  // &:before,
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   pointer-events: none;
  // }

  &:before {
    z-index: -1;
    border: 0.15em solid rgba(#973297, 0.9);
    opacity: 0;
    transform: scale(2);
    transition: transform 0.25s, opacity 0.2s;
  }

  &:after {
    z-index: -2;
    background: #fff;
    animation: wave 3s linear infinite;
  }

  &:hover {
    .icon-disp {
      animation: none;
      background-image: url("icon1.png");
      background-size: contain;
      background-repeat: no-repeat;

      &:after {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
      }
    }

    .icon-big {
      opacity: 1;
    }

    &:before {
      opacity: 1;
      transform: scale(1.5);
      animation: borderColor 2s linear infinite;
    }
    &:after {
      animation: none;
      opacity: 0;
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
@keyframes borderColor {
  0% {
    border-color: #fff;
  }
  50% {
    border-color: $spot-color;
  }
  100% {
    border-color: #fff;
  }
}

@keyframes wave {
  0% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>