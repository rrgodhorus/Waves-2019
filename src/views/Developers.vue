<template>
    <div class="developers">
             <v-container fluid class="outside">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="heading-1">DEVELOPERS</h1>
      </v-flex>
    </v-layout>
<v-layout row wrap justify-center align-center class="row">
      <v-flex sm4 xs12 class="contact">
        <v-card class="card" elevation="5" color="rgba(0,0,0,0.75)" dark>
          <div class="img-1">
            <v-avatar size="175" class="img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Bharat.jpeg?alt=media&token=b4bbf164-882d-43ea-a9ad-05cd72207bcf"
                class="image"
              >
            </v-avatar>
          </div>

          <div class="details">
            <h3>Bharat Dhir</h3>
            <h4>Events Head</h4>
            <h4>8427384030</h4>
            <h4>bharatdhir@bitswaves.org</h4>
          </div>
        </v-card>
      </v-flex>

      <v-flex sm4 xs12 class="contact">
        <v-card class="card" elevation="5" color="rgba(0,0,0,0.75)" dark>
          <div class="img-1">
            <v-avatar size="175" class="img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Sanyukta_1.jpg?alt=media&token=a0b09fe2-a2df-44b6-a50d-e3db7726a24a"
                class="image"
              >
            </v-avatar>
          </div>

          <div class="details">
            <h3>Sanyukta Jain</h3>
            <h4>Chief Coordinator</h4>
            <h4>9990931969</h4>
            <h4>sanyukta@bitswaves.org</h4>
          </div>
        </v-card>
      </v-flex>

      <v-flex sm4 xs12 class="contact">
        <v-card class="card" elevation="5" color="rgba(0,0,0,0.75)" dark>
          <div class="img-1">
            <v-avatar size="175" class="img-container">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Kratik.jpeg?alt=media&token=ce9f2c52-ec0b-43ba-9925-d262817847ec"
                class="image"
              >
            </v-avatar>
          </div>

          <div class="details">
            <h3>Kratik Lodha</h3>
            <h4>Operations Head</h4>
            <h4>8275145404</h4>
            <h4>kratik@bitswaves.org</h4>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
        </v-container>
    </div>
</template>



<script>
export default {
    
}
</script>


<style scoped>
.developers{
    height:100%;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Backgrounds%2FBackground_Events.jpg?alt=media&token=d2a2bd28-36f6-43de-825c-8de42b473ed8");
}
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script:400");
@import url("https://fonts.googleapis.com/css?family=Nanum+Pen+Scriptanddisplay=swap");
@import url("https://fonts.googleapis.com/css?family=Permanent+Markeranddisplay=swap");

.heading-1 {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 3.5em;
  font-family: "Permanent Marker", cursive;
  color: rgb(32, 32, 32);
}

.heading-2 {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
  font-size: 2.5em;
  background: #151515;
  /* background: black; */
  color: white;
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.image {
  margin: auto;
  /* width: 6vw; */
  /* height: auto; */
  /* border-radius: 50%; */
}

.card {
  padding-top: 7%;
  padding-bottom: 3%;

  /* background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%); */
  /* background-color:orange; */
}

.img-container {
  padding: auto;
  image-orientation: from-image;
}

.contact {
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 5%;
}

.details {
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}

.img-1 {
  /* padding-left: 30%;
    padding-right: 30%; */
  text-align: center;
}

.outside {
  width: 100%;
  height: 100vh;
  background: url("https://firebasestorage.googleapis.com/v0/b/waves-assets.appspot.com/o/Backgrounds%2FBackground_Events-min.jpg?alt=media&token=f73ff590-5812-43e8-b6ee-62cc2cd7e442");
  padding-left: 0px;
  padding-right: 0px;
}

.row {
  margin-bottom: 3%;
}
</style>