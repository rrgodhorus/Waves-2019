<template>
  <div>
    <div class="image-hotspot hidden-xs-only" :class="{'is-selected': open }">
      <transition-group name="hotspots">
        <template v-for="(hotspot, index) in hotspotItems">
          <a
            v-if="hotspot.title === 'Searock'"
            href="http://searock.bitswaves.org/"
            target="_blank"
            class="hotspot-point"
            :style="{ top: hotspot.position.top, left: hotspot.position.left }"
            @click="hotspotClicked(hotspot, index)"
            :key="index"
          >
            <span class="icon-disp" :data-title="hotspot.title">
              <span class="icon-big"></span>
            </span>
          </a>
          <a
            v-else
            href="#"
            class="hotspot-point"
            :style="{ top: hotspot.position.top, left: hotspot.position.left }"
            @click.prevent="hotspotClicked(hotspot, index)"
            :key="index"
          >
            <span class="icon-disp" :data-title="hotspot.title">
              <span class="icon-big"></span>
            </span>
          </a>
        </template>
      </transition-group>

      <img src="map.jpg" alt @click="closeDetails">
    </div>
    <!-- Register form modal activator -->
    <div class="bg-pic">
      <Form></Form>
      <v-layout row justify-center>
        <v-btn
          large
          color="secondary"
          dark
          href="https://drive.google.com/file/d/1Ek47TrqBJ_MonCwqmR1NwX33n-GL7pZf/view?usp=sharing"
          target="_blank"
        >Get the Rulebook</v-btn>
      </v-layout>
    </div>
    <div>
      <v-expansion-panel v-model="panels">
        <!-- Dance -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Dance" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">DANCE</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card>
            <v-card class="bg-pic" color="white">
              <v-container fluid grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card color="rgba(0,0,0,0.4)" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Dancing Duo</div>
                          <span
                            class="subheading"
                          >Dancing Duo is a duet dancing competition. Contestants come in pairs and dance their way through multiple engaging rounds while showcasing their dancing skills and chemistry. This event attracts dancers from various styles and makes for a great crowd-pleaser and is definitely a must-watch!</span>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="rgba(0,0,0,0.6)" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Natyanjali</div>
                          <span
                            class="subheading"
                          >Natyanjali is one of the Big Four events of Waves. Natyanjali is a stage team dance competition that has colleges from all across the country bringing their best. There are two categories in this event: Thematic where teams convey a message through their dance and Non-thematic where the teams perform anything they wish. Teams will be performing their own prepared dance sequences on a stage, in front of a judging panel. Each team will be judged against the other teams performing under the same category, i.e. Thematic or Non-thematic.</span>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="rgba(0,0,0,0.5)" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Footloose</div>
                          <span
                            class="subheading"
                          >Footloose is the newest addition to the Dance Events of Waves, with its second edition taking place this Waves. This is a team street dance battle where teams from all over the country take it to the streets and face off to see who’s really the best. Footloose is already a crowd favourite, and the competition just gets bigger and better.</span>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="rgba(0,0,0,0.45)" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Sizzle</div>
                          <span
                            class="subheading"
                          >Sizzle is a solo street dance battle event. The dancers bring their own flare, making the one-on-one battles intense! Being one of the most anticipated events of Waves, Sizzle proves to get bigger and better with each edition. The highlight of this event is the Final face-offs that take place out on the streets, amidst energetic, cheering crowds.</span>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-card>
        </v-expansion-panel-content>

        <!-- Music -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Music" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">MUSIC</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
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
                  </v-card>
                </v-flex>

                <v-flex id="Searock" xs12>
                  <v-card color="rgba(0,0,0,0.7)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">SeaRock</div>
                        <span
                          class="subheading"
                        >One of the most grandiose semi-pro rock band competitions in the country. Alumni of the likes of Zygnema, The Family Cheese, Knight Shades, and Inner Sanctum. Bringing you enticing opportunities to showcase your talents, Searock is back with its 15th iteration this fall.</span><br/>
                        <a href="http://searock.bitswaves.org/" class="subheading">Click here to Register</a>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Silence of the Amps</div>
                        <span
                          class="subheading"
                          >If you wanna listen to pure music or for a delightful experience of musicians, join us in Silence Of The Amps, where you can listen to the Acoustic Covers of your favorite artists.
                        <br>"Music that is acoustic, unwired, unplugged is it's most purest form"-Craig Conley</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Drama -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Drama" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">DRAMA</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Nukkad Natak</div>
                        <span
                          class="subheading"
                        >A street play addresses a public issue and engages the public through its intensity and vivid scenes. Gather your crew, build up your scenes, compose your jingles, and join us in Nukkad Natak, the street play event, to put up a captivating production to impress the masses.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Rangmanch</div>
                        <span
                          class="subheading"
                        >All the world’s a stage, so round up your cast and bring the stage to life, in Rangmanch, the stage play event. Participants get the opportunity to perform a play of their choice and display their acting skills, engaging the audience with their words, music and theatrics.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Design -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Design" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">DESIGN</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Let's not get wasted</div>
                        <span class="subheading">
                          This is an artsy event where you make use of your creativity. You will be given some (useful) waste and you have to make the most creative thing you can, according to the (secret) theme that will be given on spot.
                          <br>“Creativity is contagious, pass it on.”-Albert Einstein
                        </span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">moTEEf</div>
                        <span
                          class="subheading"
                        >We’ve got a creativity challenge for you. With a theme that will be provided on spot you will have to use your imaginative powers to design a T-shirt. The final round will include transforming a plain white T-shirt into a cool and trendy fashion statement outfit! So team up and get creative.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.5)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Kick Start</div>
                        <span
                          class="subheading"
                        >You will have to make use of your complete creativity in this design contest. Participants will be given a dull white sneaker. This piece of footwear needs to be transformed into a cool and trendy looking sneaker by you. The theme will be given on the spot. Are you up for the challenge?</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.45)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Avant-garde</div>
                        <span
                          class="subheading"
                        >Find your inner diva with our new design event: avant-garde, literally translating to people or works that are experimental, radical, or unorthodox with respect to art, culture, or society. Here you have to put together the most creative and realistic outfit according to the theme, and here's the challenge, with your everyday clothes! Only people who loves challenges may enter!!!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Fine Arts -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="FineArts" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">FINE ARTS</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Artathon</div>
                        <span
                          class="subheading"
                        >Artathon is exactly what it sounds like: a marathon of Art. With 3 surprise rounds, this event tests your creativity and makes you think on your feet. Each round tests different artistic skills, requiring the artists to express their ideas in their artwork.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Blind Art</div>
                        <span
                          class="subheading"
                        >This fun event involves teams of two, where one describes the item to be drawn, and the other (blindfolded) artist draws the same, based on the description. Which pair has the best communication and trust? Try it and find out!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.5)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Just Fold It</div>
                        <span
                          class="subheading"
                        >The Japanese art of paper folding is not as simple as it seems. Create a colourful composition from the given paper sheets and present it to the judges.Join us, and turn an ordinary square sheet of paper into an extraordinary creation of your own, using Origami and your imagination!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Carpe Dictum -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="CarpeDictum" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">CARPE DICTUM</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex id="Inverse" xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Inverse</div>
                        <span
                          class="subheading"
                        >The national poetry slam for Waves ‘19 is your ticket into the world of the spoken word.Time to break out the old meter, dust off that rhythm and put those poetic devices to work to deliver a performance of a lifetime. If spoken word poetry is your passion, this is the place to be. Fabulous prizes await!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Cultural Gauntlet</div>
                        <span
                          class="subheading"
                        >The cultural gauntlet is the perfect place to put your skills of the English language to the test. Whether it is maintaining grammatical accuracy in Just-a-Minute, going head to head for a lifejacket to escape a hypothetical sinking ship in ShipWreck or switching views on the fly in Block and Tackle. The Cultural Gauntlet has got all your bases covered!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.45)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Melas</div>
                        <span class="subheading">“Everything irrelevant to life”</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

               

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.45)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Word Games</div>
                        <span
                          class="subheading"
                        >The ultimate test of your mastery of the written word! Whether you’re a practiced word wizard or just looking to kill some time with a refreshing detox, our carefully curated collection is right up to the task. Tackle a fun miscellanea of crafty puzzles - puns, palindromes, cryptic crosswords and so much more - as you valiantly vie to be the victorious virtuoso. Let the (word) games begin!</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Fashion -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Fashion" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">FASHION</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex id="FashionParade" xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Fashion Parade</div>
                        <span
                          class="subheading"
                        >This is our fashion design and choreography competition and it receives participation from teams coming from over 100 colleges. It is one of the most highly anticipated events in the fest. FashP has provided a platform to students to show their taste and style in fashion. Fire up the ramp with your panache and confidence in this battle of beauty and style.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Quiz -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Quiz" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">QUIZ</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Waves Open</div>
                        <span class="subheading">“The fifth Grand Slam of the year.“</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">The Vices Quiz</div>
                        <span class="subheading">“There is no God here.”</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.5)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Voyage – The Travel and Living Quiz</div>
                        <span class="subheading">“How far do you think you can go? “</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Film & Photography -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="FilmPhotography" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title
                  style="font-family: 'Permanent Marker', cursive;"
                >Film and Photography</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">SHO(R)T</div>
                        <span
                          class="subheading"
                        >Short is a themed team short film competition. This competition takes place online, and is a great platform for budding filmmakers and film enthusiasts to hone their skills and show off their work. The winning film has the amazing opportunity to get published online.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Oh Snap!</div>
                        <span
                          class="subheading"
                        >Oh Snap is a team photography competition. This competition takes place online and all the submissions follow a certain theme. Oh Snap is a great opportunity for a photographer to show off what the world looks like through their eyes and what an idea means to them.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>

        <!-- Specials -->
        <v-expansion-panel-content>
          <template v-slot:header>
            <div id="Specials" style="margin: auto;" class="grey lighten-3">
              <v-toolbar color="#151515" dark>
                <v-toolbar-title style="font-family: 'Permanent Marker', cursive;">SPECIALS</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
            </div>
          </template>
          <v-card class="bg-pic" color="white">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Strangely Familiar</div>
                        <span
                          class="subheading"
                        >Strangely Familiar is a competition in which two participants, unknown to each other are paired up and get to know each other by participating in quizzes and games as multiple teams. Judges for this event are generally famous Youtubers like from the channel Filter Copy.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex id="Showmethefunny" xs12>
                  <v-card color="rgba(0,0,0,0.6)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Show Me The Funny</div>
                        <span
                          class="subheading"
                        >Show Me The Funny is a stand up comedy competition which provides a platform for emerging stand-up comedians of the country to showcase their talent.The eliminations shall be held in a few cities all across the country, where participants shall perform a stand up comedy act in the allotted time . Another round will be held on Day 0 of Waves, which will be open to all. The winners of this round,as well as the winners of the national eliminations held in the various cities will compete in the final round.The winner will have the golden oppprtunity to open for the Waves comedy night.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.7)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Contention</div>
                        <span
                          class="subheading"
                        >Contention is BITS Goa's very own Parliamentary Debate Competition. Hosted in the British Parliamentary format and with over a 100 participants, stimulating motions, an array of prolific core adjudicators and amazing cash prizes, it is a tournament not to be missed by any debater</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>


                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.5)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Newsance</div>
                        <span class="subheading">
                          How many of us have seen press conferences on television before? Those of MS Dhoni or maybe even Trump? Have you ever dreamt of being one of the interviewers?
                          For the first time in Waves, DoJMA brings to you Newsance - the mock press conference.
                          Have a try at being a journalist in this thrilling event where participants compete in a fast paced environment to ask the most grilling and enticing questions!
                        </span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex id="MrMsWaves" xs12>
                  <v-card color="rgba(0,0,0,0.45)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Mr. and Ms. Waves</div>
                        <span
                          class="subheading"
                        >Mr. and Miss Waves is one of the Big Four events of Waves. Held in the auditorium, it is a personality based contest packed with grueling interviews, impromptu performances and a cutthroat talent round. The highlight of this event is the notorious Notepad Guy, who makes each performance all the more entertaining.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex id="MOOT" xs12>
                  <v-card color="rgba(0,0,0,0.7)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">MOOT</div>
                        <span
                          class="subheading"
                        >Lex Omnia is one of the premier events conducted by Waves . It is a Moot Court competition where students from Law Colleges compete. The debates are long , stakes are high and you’ll survive only if you can enagage. There’s two sides to every story , the right one is the one you make them believe.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">IRSHAD</div>
                        <span
                          class="subheading"
                        >“Irshad” is a Hindi-Urdu performance poetry competition which aims at bringing different perspectives of the things, happenings and feelings in the world, at one platform of blissful poetry. This year we plan to reach out to the poets through our regional qualifiers in Delhi, Mumbai, Bengaluru, Lucknow, Jaipur, Indore, Aligarh, Hyderabad and Goa.</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>


                <v-flex xs12>
                  <v-card color="rgba(0,0,0,0.4)" class="white--text">
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Human Library</div>
                        <span
                          class="subheading"
                        >Everyone of us has a story to tell. The person sitting next to you on the train, the guy who just sold you coffee - all of their lives are bundles of experiences just waiting to be told. And what better way to relate to these tales than a book? Even better, a human book? This Waves, engulf yourself in a story told like never before! Come to the Human Library, and uncover the mesmerising tales of our wonderful and energetic "books".</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>


              </v-layout>
            </v-container>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
const hotspots = [
  {
    id: 1,
    title: "Searock",
    panelIndex: 1,
    position: { top: "10%", left: "37%" }
  },
  {
    id: 2,
    title: "Mr & Ms Waves",
    panelIndex: 9,
    position: { top: "22%", left: "12%" }
  },
  {
    id: 3,
    title: "Quiz",
    panelIndex: 7,
    position: { top: "29%", left: "30%" }
  },
  {
    id: 4,
    title: "Music",
    panelIndex: 1,
    position: { top: "50%", left: "21.5%" }
  },
  {
    id: 5,
    title: "Fine Arts",
    panelIndex: 4,
    position: { top: "63%", left: "28%" }
  },
  {
    id: 6,
    title: "Specials",
    panelIndex: 9,
    position: { top: "82%", left: "29%" }
  },
  {
    id: 7,
    title: "Fashion Parade",
    panelIndex: 6,
    position: { top: "20%", left: "49%" }
  },
  {
    id: 8,
    title: "Dance",
    panelIndex: 0,
    position: { top: "45%", left: "47%" }
  },
  {
    id: 9,
    title: "Carpe Dictum",
    panelIndex: 5,
    position: { top: "69%", left: "51.5%" }
  },
  {
    id: 10,
    title: "Inverse",
    panelIndex: 5,
    position: { top: "21%", left: "58%" }
  },
  {
    id: 11,
    title: "Drama",
    panelIndex: 2,
    position: { top: "13%", left: "70%" }
  },
  {
    id: 12,
    title: "Film & Photography",
    panelIndex: 8,
    position: { top: "25%", left: "77%" }
  },
  {
    id: 13,
    title: "Show me the funny",
    panelIndex: 9,
    position: { top: "42%", left: "70%" }
  },
  {
    id: 14,
    title: "Design",
    panelIndex: 3,
    position: { top: "17%", left: "87%" }
  },
  {
    id: 15,
    title: "MOOT",
    panelIndex: 9,
    position: { top: "75%", left: "80%" }
  }
];
export default {
  name: "Events",
  components: {
    Form: () => import("@/components/eventsReg/Form")
  },
  data() {
    return {
      hotspots,
      open: false,
      hotspotPosition: null,
      selectedHotspot: null,
      numOfPanels: 10,
      panels: null
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
      const id = hotspot.title
        .split(" ")
        .join("")
        .replace(/&/g, "");

      this.panels = +hotspot.panelIndex;
      setTimeout(() => {
        this.$vuetify.goTo(`#${id}`);
      }, 100);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script:400");
@import url("https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap");
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat");

$spot-color: #312525f1;

.bg-pic {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Backgrounds%2FBackground_Events-min.jpg?alt=media&token=f73ff590-5812-43e8-b6ee-62cc2cd7e442");
  background-size: cover;
  background-repeat: no-repeat;

  v-card {
    background: transparent;
  }
}

[v-cloak] {
  display: none;
}
.headline {
  font-family: "Kaushan Script", cursive !important;
}
.subheading {
  font-family: "Montserrat", cursive !important;
  font-size: 1.3rem !important;
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
    font-size: 1.5vw;
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
      color: black;
      text-shadow: 5px 4px #f7debe;
      font-weight: 500;
      font-size: 1.8em;
      // opacity: 0;
      transform: translate(-50%, -30%) scale(0.5);
      transition: all 0.25s;
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
