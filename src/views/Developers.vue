<template>
   <div class="container developers row">
         <vue-particles color="#fff" :particleOpacity="0.6" :particlesNumber="100" shapeType="circle" :particleSize="3" 
         linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="4"
        :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles-js" ></vue-particles>
         <div class="col-sm-6 col-md-4">
            <div class="profile-card">
               <div class="profile-img">
                  <img src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg" alt="Team Image" />
               </div>
               <div class="profile-content">
                  <h2 class="title">RAJATH REGHUNATH
                     <span>Head Developer</span>
                     <span>rrgodhorus@gmail.com</span>
                  </h2>
                  <ul class="social-link">
                     <li><a href="https://github.com/rrgodhorus"><i class="fab fa-github"></i></a></li>
                     &emsp;
                     <li><a href="https://www.linkedin.com/in/rajath-reghunath-4180b8163"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="profile-card">
               <div class="profile-img">
                  <img src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg" alt="Team Image" />
               </div>
               <div class="profile-content">
                  <h2 class="title">Manav Seksaria
                     <span>Designer, Developer</span>
                     <span>seksariamanav.2000@gmail.com</span>
                  </h2>
                  <ul class="social-link">
                     <li><a href="https://github.com/rrgodhorus"><i class="fab fa-github"></i></a></li>
                     &emsp;
                     <li><a href="https://www.linkedin.com/in/rajath-reghunath-4180b8163"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="profile-card">
               <div class="profile-img">
                  <img src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg" alt="Team Image" />
               </div>
               <div class="profile-content">
                  <h2 class="title">Nikhil Boddupalli
                     <span>Designer,Developer</span>
                     <span>nikhil2001.12.5@gmail.com</span>
                  </h2>
                  <ul class="social-link">
                     <li><a href="https://github.com/f20180106"><i class="fab fa-github"></i></a></li>
                     &emsp;
                     <li><a href="https://www.linkedin.com/in/nikhil-boddupalli-504257129/"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-sm-6 col-md-4">
            <div class="profile-card">
               <div class="profile-img">
                  <img src="https://static.pexels.com/photos/14661/pexels-photo-14661.jpeg" alt="Team Image" />
               </div>
               <div class="profile-content">
                  <h2 class="title">Henry Polles
                     <span>Designer,Developer</span>
                  </h2>
                  <ul class="social-link">
                     <li><a href="https://github.com/rrgodhorus"><i class="fab fa-github"></i></a></li>
                     &emsp;
                     <li><a href="https://www.linkedin.com/in/rajath-reghunath-4180b8163"><i class="fab fa-linkedin-in"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
   </div>
</template>

<script>
  export default {

  }
</script>

<style scoped src='./bootstrap.min.css'></style>
<style scoped>
.developers{
    background-color: black;
    width: 100vw;
}
* { margin: 0 !important;}


  .particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }

@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css';

.profile-card{
            position:relative;
            overflow: hidden;
            margin-bottom:10px;
        }
        .profile-card .profile-img img{
            width:100%;
            height:auto;
        }
        .profile-card .profile-content::before{
            content: "";
            position:absolute;
            top:0;
            left:0;
            width:50%;
            height:40%;
            border:3px solid #222;
            border-right:3px solid transparent;
            border-bottom:3px solid transparent;
            transform: scale(1,1);
            transition: all 0.50s linear;
        }
        .profile-card .profile-content::after{
            content: "";
            position:absolute;
            bottom:0;
            right:0;
            width:50%;
            height:40%;
            border:3px solid #222;
            border-left:3px solid transparent;
            border-top:3px solid transparent;
            transition: all 0.50s linear;
        }
        .profile-card:hover .profile-content:before{
            top:20px;
            left:20px;
        }
        .profile-card:hover .profile-content:after{
            bottom:20px;
            right:20px;
        }
        .profile-card .profile-content::after{
            content: "";
            position:absolute;
            bottom:0;
            right:0;
            width:50%;
            height:40%;
            border:3px solid #222;
            border-left:3px solid transparent;
            border-top:3px solid transparent;
            transform: scale(1,1);
            transition: all 0.50s linear;
        }
        .profile-card .profile-content{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            padding:50% 4%;
            text-align: center;
            background-color: rgba(255,255,255,0.4);
        }
        .profile-card .profile-content .title{
            font-size:24px;
            color:#333;
            opacity:0;
            letter-spacing:2px;
            transform: translateY(-100px);
            transition:all 900ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.20s;
        }
        .profile-card:hover .title{
            opacity:1;
            transform: translateY(0);
        }
        .profile-card:hover .title::after{
            content:"";
            display:block;
            width:50%;
            margin:10px auto;
            border-bottom:2px solid #222;
        }
        .profile-card .profile-content .title > span{
            display:block;
            margin:5px 0;
            font-size: 14px;
        }
        .profile-card .profile-content .social-link{
            margin:20px 0;
            padding:0;
            opacity:0;
            transform: translateY(100px);
            transition:all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.20s;
        }
        .profile-card:hover .social-link{
            opacity:1;
            transform: translateY(0);
        }
        .profile-card .profile-content .social-link li{
            display: inline-block;
            list-style: none;
            margin:0 4px;
        }
        .profile-card .profile-content .social-link li a{
            color:#333;
            text-align: center;
        }
        .fa-github{
          font-size: 95px;

        }
        .fa-github:hover{
          font-size: 100px;
          color: #6e5494;
          background-color: rgba(256,256,256,0.5);
          border: 10px;
          border-radius: 50px;
          transition: all 0.5s;

        }
        .fa-linkedin-in{
          font-size: 95px;

        }
        .fa-linkedin-in:hover{
          font-size: 100px;
          color: #0077B5;
          line-height: 100%;
          background-color: rgba(256,256,256,0.5);
          border: 100px;
          border-radius: 20px;
          transition: all 0.5s;

        }

</style>
