<template>
    <layout pagetitle="Enter the passcode" pagedefaultbacklink="/memories">
     <div id="pincode">
    <div class="table">
      <div class="cell">

        <div id="anleitung">
          <br>
          <h1 v-if="wrong">
            <strong class="color">Enter the Correct pincode</strong><br>
          </h1>
        </div>

        <div id="fields">
          <div class="grid">
              <input type="text" id="screen" v-model="screen" disabled>
          </div>
        </div>

        <div id="numbers">
          <div class="grid">
            <div class="grid__col grid__col--1-of-3" id="one" value="1" @click="one()" data-number><button>1</button></div>
            <div class="grid__col grid__col--1-of-3" id="two" value="2"  @click="two()" data-number><button>2</button></div>
            <div class="grid__col grid__col--1-of-3" id="three" value="3"  @click="three()" data-number><button>3</button></div>

            <div class="grid__col grid__col--1-of-3" id="four" value="4"  @click="four()" data-number><button>4</button></div>
            <div class="grid__col grid__col--1-of-3" id="five" value="5"  @click="five()" data-number><button>5</button></div>
            <div class="grid__col grid__col--1-of-3" id="six" value="6"  @click="six()" data-number><button>6</button></div>

            <div class="grid__col grid__col--1-of-3" id="seven" value="7"  @click="seven()" data-number><button>7</button></div>
            <div class="grid__col grid__col--1-of-3" id="eight" value="8"  @click="eight()" data-number><button>8</button></div>
            <div class="grid__col grid__col--1-of-3" id="nine" value="9"  @click="nine()" data-number><button>9</button></div>

            <div class="grid__col grid__col--1-of-3"></div>
            <div class="grid__col grid__col--1-of-3" value="0" id="zero"  @click="zero()" data-number><button>0</button></div>
<div class="grid__col grid__col--1-of-3"><button class="btn-back"  data-num="back" @click="back">&larr;</button></div>

          </div>
        </div>

      </div>
    </div>
  </div>
</layout>
</template>

<script>
import layout from '../components/layout.vue'
import { App } from '@capacitor/app'
export default {
  components: {
    layout
  },
  data() {
    return {
      screen: '',
      passcodecheck:'',
      codecorrect: this.$store.state.checkpin,
      wrong:false
    }
  },
  methods: {
    back() {
      this.screen = this.screen.substring(0, this.screen.length - 1 )
    },
      one() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else {
          let one = document.getElementById("one")
          this.screen = this.screen + one.innerText
      }
      },
      two() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let two = document.getElementById("two")
          this.screen = this.screen + two.innerText
          }
      },
      three() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let three = document.getElementById("three")
         this.screen = this.screen + three.innerText
          }
      },
      four() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let four = document.getElementById("four")
          this.screen = this.screen + four.innerText
          }
      },
      five() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let five = document.getElementById("five")
          this.screen = this.screen + five.innerText
          }
      },
      six() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let six = document.getElementById("six")
          this.screen = this.screen + six.innerText
          }
      },
      seven() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let seven = document.getElementById("seven")
          this.screen = this.screen + seven.innerText
          }
      },
      eight() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let eight = document.getElementById("eight")
          this.screen = this.screen + eight.innerText
          }
      },
      nine() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let nine = document.getElementById("nine")
          this.screen = this.screen + nine.innerText
          }
      },
      zero() {
          if(this.screen.length === 4) {
              console.log("fuck")
          }else{
          let zero = document.getElementById("zero")
          this.screen = this.screen + zero.innerText
          }
      }
  },
  watch: {
    screen: function() {
    if(this.screen.length === 4) {
        if(this.$store.state.passcode === this.screen) {
            this.$store.state.passcodeentered = true
            this.$router.replace('/memories')
        }else{
            this.$router.push('/memories/enterpassword')
            this.wrong = true
            this.screen = ''
        }
    }
    },
      ionViewDidEnter(){
        if(this.$router.currentRoute._value.href === '/memories/enterpassword'){
       document.addEventListener('ionBackButton', (ev) => {
           ev.detail.register(10, () => {
            this.$store.state.passcodeentered = false
            App.exitApp()
        });
       });
    }
    }
  }
}
</script>

<style scoped>
.color {
    color: red;
}
#restartbtn {
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin: 20px;
}
.table {
  display: table;
  height: 100%;
  width: 100%;
  position: relative;
}

.cell {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  width: 100%;
  text-align: center;
}


/*------
# Pincode
----*/

#pincode {
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  background-color: #272a2f;
  background-image: url('./mountain.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  top: 50%;
  left: 50%;
  margin-top: -50vh;
  /* Negative half of height. */
  margin-left: -50vw;
  /* Negative half of width. */
}

#numbers {
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  display: block;
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  transition: all 1s ease-out;
  opacity: 1;
}

#numbers.hide {
  opacity: 0.3;
}

#pincode button {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.35);
  border: 0;
  color: #fff;
  font-size: 25px;
  line-height: 50px;
  border-radius: 100%;
  opacity: 1;
  outline: 0;
  border: 2px solid #272a2f;
}

#pincode button:active {
  background-color: rgba(0, 0, 0, 0.6);
  outline: 0;
}

#fields {
  max-width: 200px;
  padding: 0 20px;
  margin: 50px auto;
  position: relative;
  display: block;
}

#fields .numberfield {
  text-align: center;
}

#fields .numberfield span {
  height: 10px;
  width: 10px;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 100%;
  position: relative;
  display: inline-block;
  text-align: center;
}

#fields .numberfield span .active {
  background-color: white;
}

#fields .numberfield.right span {
  background-color: #272a2f;
  border-color: #272a2f;
  transition: all .5s ease-in-out;
  -webkit-transition: all .5s ease-in-out;
}


/*------
# Toast Grid
----*/

.grid {
  list-style: none;
  margin-left: -20px;
}

.grid__col--1-of-3,
.grid__col--2-of-6,
.grid__col--4-of-12 {
  width: 33.33333%;
}

.grid__col--1-of-4,
.grid__col--2-of-8,
.grid__col--3-of-12 {
  width: 25%;
}

.grid__col {
  box-sizing: border-box;
  display: inline-block;
  margin-right: -.25em;
  min-height: 1px;
  padding-left: 20px;
  vertical-align: top;
}

.grid__col--centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.grid__col--d-first {
  float: left;
}

.grid__col--d-last {
  float: right;
}

.grid--no-gutter {
  margin-left: 0;
  width: 100%;
}

.grid--no-gutter .grid__col {
  padding-left: 0;
}

.grid--no-gutter .grid__col--span-all {
  margin-left: 0;
  width: 100%;
}

.grid__col--ab {
  vertical-align: bottom;
}

.grid__col--am {
  vertical-align: middle;
}

#screen {
  background-color: transparent;
  text-align: center;
  word-spacing: 20px;
  height: 35px;
}

#hastylink {
  position: fixed;
  bottom:5px;
  left: 0;
  right: 0;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  text-align: center;
}
</style>