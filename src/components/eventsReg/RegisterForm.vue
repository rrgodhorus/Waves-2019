<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      hide-overlay
      transition="dialog-bottom-transition"
      max-width="1000px"
    >
      <template v-slot:activator="{ on }">
        <v-btn large color="primary" dark v-on="on">Register</v-btn>
      </template>

      <v-card class="bg-pic" height="700px">
        <!-- Heading of form -->
        <v-card-title>
          <span class="headline">Waves 2019 Registration</span>
        </v-card-title>
        <!-- End of Heading -->

        <!-- Beginning of Form -->
        <v-form class="text-xs-center" ref="form" v-model="valid">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap class="layout-class">
                <!-- Full Name -->
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="fullName"
                    label="Full name*"
                    solo
                    required
                    :rules="fullNameRules"
                    outline
                  ></v-text-field>
                </v-flex>
                <!-- End of First Name -->

                <!-- Gender -->
                <v-flex xs12 sm6>
                  <v-select
                    :items="['Male', 'Female']"
                    v-model="gender"
                    label="Gender*"
                    required
                    solo
                    :rules="genderRules"
                    outline
                  ></v-select>
                </v-flex>
                <!-- End of Gender -->

                <!-- College Name -->
                <v-flex xs12 sm12>
                  <v-text-field
                    v-model="college"
                    label="Name of College*"
                    solo
                    required
                    outline
                    :rules="collegeRules"
                  ></v-text-field>
                </v-flex>
                <!-- End of College Name -->

                <!-- Events Participating -->
                <v-flex xs12 sm12>
                  <v-autocomplete
                    v-model="eventsRegistered"
                    :items="events"
                    label="Events Participating"
                    multiple
                    required
                    solo
                    :rules="eventRules"
                    outline
                  ></v-autocomplete>
                </v-flex>
                <!-- End of Events Participating -->

                <!-- Email -->
                <v-flex xs12>
                  <v-text-field
                    v-model="emailId"
                    solo
                    label="Email*"
                    required
                    :rules="emailRules"
                    outline
                  ></v-text-field>
                </v-flex>
                <!-- End of Email -->

                <!-- Phone Number -->
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="phoneNum"
                    label="Phone Number*"
                    @keypress="onlyNumber"
                    solo
                    required
                    :rules="numberRules"
                    outline
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <p class="red--text bottom-text">*indicates required field</p>
          </v-card-text>
        </v-form>

        <v-card-actions style="background-color:white !important;">
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat @click="dialog = false">Back</v-btn>
          <v-btn
            :loading="registerLoading"
            :disabled="!valid"
            color="secondary"
            flat
            @click.prevent="register()"
          >Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" top right :color="snackbarColor[snackbarStatus]" :timeout="5000">
      {{ snackbarText[snackbarStatus] }}
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>





<script>
// This import loads the firebase namespace along with all its type information.
import * as firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/database";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyA9ao2jREN3GxXTAATr9pzmiKXqoeyu1P0",
  authDomain: "waves-2019.firebaseapp.com",
  databaseURL: "https://waves-2019.firebaseio.com",
  projectId: "waves-2019",
  storageBucket: "waves-2019.appspot.com",
  messagingSenderId: "84163332812",
  appId: "1:84163332812:web:dd26e9e80caf7757"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  name: "Form",
  data: () => ({
    dialog: false,
    valid: false,
    snackbar: false,
    snackbarStatus: 0,
    snackbarText: [
      "Registered successfully",
      "Registration unsuccessful! Try again later."
    ],
    snackbarColor: ["success", "error"],
    registerLoading: false,
    fullName: "",
    gender: "",
    college: "",
    emailId: "",
    phoneNum: "",
    eventsRegistered: [],

    fullNameRules: [v => !!v || "First Name is required"],

    genderRules: [v => !!v || "Gender is required"],

    numberRules: [
      v => !!v || "Phone Number is required",
      v => {
        if (v) return v.length === 10 || "Phone Number should be 10 digits";
        else return false;
      }
    ],

    collegeRules: [v => !!v || "Name of College is required"],

    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],

    eventRules: [v => !!v.length || "Events is required"],

    events: [
      "Natyanjali",
      "Dancing Duo",
      "Footloose",
      "Sizzle",
      "Indian Rock",
      "Solonote",
      "Rapsody",
      "Silence of the amps",
      "Jukebox",
      "Rangmanch",
      "Nukkad Natak",
      "Avant-garde",
      "Just fold it",
      "Moteef",
      "Blind Art",
      "Arthathon",
      "Kickstart",
      "Let's not get wasted",
      "Contention",
      "Inverse",
      "Word games",
      "Cultural Gauntlet",
      "Quiz",
      "Moot court",
      "Fashion Parade",
      "Strangely familiar",
      "Show me the funny",
      "Mr and Miss Waves",
      "Irshad",
      "News-ance"
    ]
  }),

  methods: {
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    register() {
      this.registerLoading = true;
      const eventsString = this.eventsRegistered.join(", ");
      const date = new Date().toLocaleString("en-in");
      const regData = {
        name: this.fullName,
        gender: this.gender,
        emailID: this.emailId,
        college: this.college,
        phone: this.phoneNum,
        eventsRegistered: eventsString,
        timeStamp: date
      };
      const registerUser = firebase
        .functions()
        .httpsCallable("registerForEvents");
      registerUser(regData).then(res => {
        if (res.data) {
          console.error(err);
          this.snackbarStatus = 1;
          this.snackbar = true;
          this.registerLoading = false;
        } else {
          this.dialog = false;
          this.$refs.form.reset();
          this.snackbarStatus = 0;
          this.snackbar = true;
          this.registerLoading = false;
        }
      });
    }
  }
};
</script>   


<style>
.bottom-card {
  height: 5px;
}
.bg-pic {
  background-image: url("waves_watermark.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
