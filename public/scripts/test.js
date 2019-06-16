const hotspots = [
    {
      id: 1,
      title: 'iMac 27"',
      description: 'Accuracy. Brightness. Clarity. Regardless of how you measure the quality of a display, Retina is in a class by itself. The pixel density is so high that you won’t detect a single one while using iMac. Text is so sharp, you’ll feel like you’re reading email and documents on a printed page.',
      price: '$1,299.00',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/437221/imac.png',
      position: { top: '20%', left: '38%'}
    },
    {
      id: 2,
      title: 'Magic Mouse 2',
      description: 'Featuring a new design, Magic Mouse 2 is completely rechargeable, so you’ll eliminate the use of traditional batteries. It’s lighter, has fewer moving parts thanks to its built-in battery and continuous bottom shell, and has an optimized foot design.',
      price: '$99.00',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/437221/magic-mouse.png',
      position: { top: '85%', left: '75%'}
    },
    {
      id: 3,
      title: 'Magic Keyboard',
      description: 'The Magic Keyboard combines a sleek new design with a built-in rechargeable battery and enhanced key features. With an improved scissor mechanism beneath each key for increased stability, as well as optimized key travel and a lower profile, the Magic Keyboard provides a remarkably comfortable and precise typing experience.',
      price: '$79.00',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/437221/magic-keyboard.png',
      position: { top: '85%', left: '48%'}
    }
  ]
  
  const HotspotDetails = {
    name: 'HotspotDetails',
    template: `
      <transition
        name="detail"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
      >
        <div class="hotspot-details">
          <a href="#" @click.prevent="close" class="hotspot-details__close">
            <svg class="icon icon-close" viewBox="0 0 24 24">
              <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
            </svg>
          </a>
          <div class="hotspot-details__left">
            <div class="hotspot-details__content">
              <div class="carousel" ref="carousel">
                <div class="carousel-cell" v-for="item in allItems">
                  <img :src="item.image" width="80%" />
                </div>
              </div>
            </div>
          </div>
          <div class="hotspot-details__right">
            <div class="hotspot-details__content">
              <transition name="product-fade" mode="out-in">
                <h3 class="hotspot-details__title animated" :key="selectedItem.id">{{ selectedItem.title }}</h3>
              </transition>
              <transition name="product-fade" mode="out-in">
                <div class="hotspot-details__description animated" :key="selectedItem.id">{{ selectedItem.description }}</div>
              </transition>
              <transition name="product-fade" mode="out-in">
                <div class="hotspot-details__price animated" :key="selectedItem.id">{{ selectedItem.price }}</div>
              </transition>
            </div>
          </div>
          <div class="hotspot-details__nav">
            <a href="#" @click.prevent="selectProduct(index)" class="hotspot-details__nav-item" v-for="(item, index) in allItems">
              <img :src="item.image" width="80%" />
            </a>
          </div>
        </div>
      </transition>
    `,
    props: {
      item: { type: Object },
      selectedIndex: { type: Number },
      allItems: { type: Array }
    },
    data() {
      return {
        selectedItem: this.item
      }
    },
    mounted() {
      this.carousel = new Flickity(this.$refs.carousel, {
        cellAlign: 'left',
        contain: true,
        draggable: false,
        initialIndex: this.selectedIndex,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false
      });
      this.carousel.on('select', this.onProductSelected);
    },
    beforeDestroy() {
      setTimeout(() => {
        this.carousel.off('select', this.onProductSelected);
        this.carousel.destroy();
      }, 600);
    },
    methods: {
      close() {
        this.$emit('close');
      },
      selectProduct(index) {
        this.carousel.select(index);
      },
      onProductSelected() {
        this.selectedItem = this.allItems[this.carousel.selectedIndex];
      },
      beforeEnter(el) {
        el.style.setProperty(`--top`, this.item.position.top);
        el.style.setProperty(`--left`, this.item.position.left);
      },
      afterEnter(el) {
        el.classList.add('is-loaded');
      },
      beforeLeave(el) {
        el.classList.remove('is-loaded');
      }
    }
  }
  
  const App = {
    name: 'app',
    components: {
      HotspotDetails
    },
    template: `
      <div class="app">
        <div class="image-hotspot" :class="{'is-selected': open }">
          <hotspot-details 
            :item="selectedHotspot"
            :selected-index="selectedIndex"
            :all-items="hotspots"
            @close="closeDetails"
            v-if="open"
          ></hotspot-details>
          <transition-group name="hotspots">
            <a 
              href="#" 
              class="hotspot-point" 
              v-for="(hotspot, index) in hotspotItems"
              :style="{ top: hotspot.position.top, left: hotspot.position.left }"
              @click.prevent="hotspotClicked(hotspot, index)"
              :key="index"
            >
                <span :data-price="hotspot.price">
                  <svg class="icon icon-close" viewBox="0 0 24 24">
                    <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
                  </svg>
                </span>
            </a>
          </transition-group>  
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/437221/hotspot-image.jpg" alt="" @click="closeDetails">
        </div>
      </div>
    `,
    data () {
      return {
        hotspots,
        open: false,
        hotspotPosition: null,
        selectedHotspot: null
      }
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
        this.selectedHotspot = hotspot;
        this.selectedIndex = index;
  
        this.open = true;
      }
    }
  }