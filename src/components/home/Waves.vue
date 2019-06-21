<template>
  <div>
    <div id="container">
      <v-img
        v-if="$vuetify.breakpoint.lgAndUp"
        width="90vw"
        height="70vh"
        contain
        class="img-lg-and-up"
        :src="wavesLogo"
      ></v-img>
      <v-img
        v-else-if="$vuetify.breakpoint.smAndUp"
        width="80vw"
        height="60vh"
        contain
        class="img-sm-to-md"
        :src="wavesLogo"
      ></v-img>
      <v-img v-else width="80vw" height="30vh" contain class="img-xs-only" :src="wavesLogo"></v-img>
      <v-btn
        v-if="touch"
        id="navigate-down"
        color="transparent"
        class="blue--text"
        @click="$vuetify.goTo('#home-about',{offset:0})"
        small
        dark
        absolute
        right
        fab
      >
        <v-icon>mdi-arrow-down-bold</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  PlaneBufferGeometry,
  TextureLoader,
  RepeatWrapping,
  CubeCamera,
  LinearMipMapLinearFilter,
  WebGL
} from "three-full";
import { OrbitControls, Water, Sky } from "three-full";
import waterNormalsImage from "@/assets/waternormals.jpg";
import wavesLogo from "@/assets/logo_waves.png";
export default {
  name: "Waves",
  data() {
    return {
      touch: false,
      container: null,
      camera: null,
      scene: null,
      renderer: null,
      light: null,
      controls: null,
      water: null,
      waterNormalsImage: waterNormalsImage,
      wavesLogo: wavesLogo
    };
  },
  methods: {
    init: function() {
      this.container = document.getElementById("container");
      this.renderer = new WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.appendChild(this.renderer.domElement);

      this.scene = new Scene();

      this.camera = new PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      this.camera.position.set(30, 30, 100);
      //Light
      this.light = new DirectionalLight(0xffffff, 0.8);
      this.scene.add(this.light);

      //Water
      let waterGeometry = new PlaneBufferGeometry(10000, 10000);
      this.water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new TextureLoader().load(waterNormalsImage, function(
          texture
        ) {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        }),
        alpha: 1,
        sunDirection: this.light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 8,
        fog: this.scene.fog !== undefined
      });
      this.water.rotation.x = -Math.PI / 2;
      this.scene.add(this.water);

      // Skybox
      var sky = new Sky();
      var uniforms = sky.material.uniforms;
      uniforms["turbidity"].value = 10;
      uniforms["rayleigh"].value = 2;
      uniforms["luminance"].value = 1;
      uniforms["mieCoefficient"].value = 0.005;
      uniforms["mieDirectionalG"].value = 0.8;
      var parameters = {
        distance: 400,
        inclination: 0.465,
        azimuth: 0.06
      };
      var cubeCamera = new CubeCamera(0.1, 1, 512);
      cubeCamera.renderTarget.texture.generateMipmaps = true;
      cubeCamera.renderTarget.texture.minFilter = LinearMipMapLinearFilter;
      this.scene.background = cubeCamera.renderTarget;
      const that = this;
      function updateSun(that) {
        var theta = Math.PI * (parameters.inclination - 0.5);
        var phi = 2 * Math.PI * (parameters.azimuth - 0.5);
        that.light.position.x = parameters.distance * Math.cos(phi);
        that.light.position.y =
          parameters.distance * Math.sin(phi) * Math.sin(theta);
        that.light.position.z =
          parameters.distance * Math.sin(phi) * Math.cos(theta);
        sky.material.uniforms["sunPosition"].value = that.light.position.copy(
          that.light.position
        );
        that.water.material.uniforms["sunDirection"].value
          .copy(that.light.position)
          .normalize();
        cubeCamera.update(that.renderer, sky);
      }
      updateSun(that);
      //   //
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxPolarAngle = Math.PI * 0.495;
      this.controls.target.set(-200, 10, 200);
      this.controls.minDistance = 40.0;
      this.controls.maxDistance = 200.0;
      this.controls.autoRotate = true;
      this.controls.rotateSpeed = 1.0;
      this.controls.enableZoom = false;
      this.controls.enablePan = false;
      this.controls.update();

      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render: function() {
      var time = performance.now() * 0.001;
      this.water.material.uniforms["time"].value += 1.0 / 60.0;
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    if (WebGL.isWebGLAvailable() === false) {
      document.body.appendChild(WebGL.getWebGLErrorMessage());
    }
    this.init();
    this.animate();
    window.addEventListener("touchstart", () => {
      this.touch = true;
    });
    window.addEventListener("touchend", () => {
      setTimeout(() => {
        this.touch = false;
      }, 2000);
    });
  }
};
</script>

<style scoped>
/* #info {
  position: absolute;
  top: 800px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
} */
#container {
  text-align: center;
}
#navigate-down {
  top: 80vh;
}
.img-lg-and-up {
  position: absolute;
  top: 0vh;
  left: 5vw;
}
.img-xs-only {
  position: absolute;
  left: 5vw;
  top: 30vh;
}
.img-sm-to-md {
  position: absolute;
  left: 10vh;
  top: 20vh;
}
</style>

