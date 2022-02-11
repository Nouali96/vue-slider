const app = new Vue({
    el: '#app',
    data: {
        activeSlide:0,
        clock: null,
        items: [
            {
                url:'img/01.jpg',
                name:'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url:'img/02.jpg',
                name:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                url:'img/03.jpg',
                name:'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                name:'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url:'img/05.jpg',
                name:'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
    },
    mounted: function () {
        this.autoplay();
    },
    methods: {
        gotoNext() {
            this.activeSlide++;
            if (this.activeSlide > this.items.length - 1) {
                this.activeSlide = 0;
            }
        },
        gotoPrev() {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.items.length -1;
            }
        },
        gotoSlide(index) {
            this.activeSlide = index;
        },
        autoplay() {
            this.clock = setInterval(() => {
                this.gotoNext();
            }, 3000);
        },
        stopPlay() {
            clearInterval(this.clock);
            this.clock = null;
        }
    }
});
