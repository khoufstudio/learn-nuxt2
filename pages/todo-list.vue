<template>
  <div>
    <section class="todo-wrapper">
      <h1 class="todo-title">
        {{ today.day }}<br>{{ today.date }}
      </h1>
      <form @keydown.enter.prevent="">
        <input
          v-model="new_todo"
          type="text"
          class="input-todo"
          :class="{ active: new_todo }"
          placeholder="Take the garbage out"
          @keyup.enter="addItem"
        >
        <div class="btn btn-add" :class="{ active: new_todo }" @click="addItem">
          +
        </div>
      </form>

      <div v-if="pending.length > 0">
        <p class="status busy">
          You have {{ pending.length }} pending item<span v-if="pending.length>1">s</span>
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <li v-for="(item) in pending" :key="item.title">
            <input :id="'item_' + item.id" v-model="item.done" class="todo-checkbox" type="checkbox">
            <label :for="'item_' + item.id" />
            <span class="todo-text">{{ item.title }}</span>
            <span class="delete" @click="deleteItem(item)" />
          </li>
          </transition>
        </transition-group>
      </div>

      <transition name="slide-fade">
        <p v-if="!pending.length" class="status free">
          <img src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg" alt="celebration">Time to chill!  You have no todos.
        </p>
      </transition>

      <div v-if="completed.length > 0 && showComplete">
        <p class="status">
          Completed tasks: {{ completedPercentage }}
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list archived">
          <li v-for="(item) in completed" :key="item.title">
            <input :id="'item_' + item.id" v-model="item.done" class="todo-checkbox" type="checkbox">
            <label :for="'item_' + item.id" />
            <span class="todo-text">{{ item.title }}</span>
            <span class="delete" @click="deleteItem(item)" />
          </li>
          </transition>
        </transition-group>
      </div>
      <div class="control-buttons">
        <div v-if="completed.length > 0" class="btn btn-secondary" @click="toggleShowComplete">
          <span v-if="!showComplete">Show</span><span v-else>Hide</span> Complete
        </div>
        <div v-if="todoList.length > 0" class="btn btn-secondary" @click="clearAll">
          Clear All
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      todoList: [
        { id: 0, title: 'Go to codepen and get inspired', done: false },
        { id: 1, title: 'Pick a project', done: false },
        { id: 4, title: 'Create a new pen', done: true }
      ],
      new_todo: '',
      showComplete: false
    }
  },
  computed: {
    pending () {
      return this.todoList.filter(function (item) {
        return !item.done
      })
    },
    completed () {
      return this.todoList.filter(function (item) {
        return item.done
      })
    },
    completedPercentage () {
      return (Math.floor((this.completed.length / this.todoList.length) * 100)) + '%'
    },
    today () {
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1 // January is 0!
      const yyyy = today.getFullYear()

      if (dd < 10) {
        dd = '0' + dd
      }

      if (mm < 10) {
        mm = '0' + mm
      }

      today = {
        day: weekday[today.getDay()],
        date: mm + '-' + dd + '-' + yyyy
      }

      return (today)
    }
  },
  watch: {
    todoList: {
      handler (updatedList) {
        localStorage.setItem('todo_list', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    // get all todos when loading the page
    getTodos () {
      if (localStorage.getItem('todo_list')) {
        this.todoList = JSON.parse(localStorage.getItem('todo_list'))
      }
    },
    // add a new item
    addItem () {
      // validation check
      if (this.new_todo) {
        this.todoList.unshift({
          id: this.todoList.length,
          title: this.new_todo,
          done: false
        })
      }
      // reset new_todo
      this.new_todo = ''
      // save the new item in localstorage
      return true
    },
    deleteItem (item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
    },
    toggleShowComplete () {
      this.showComplete = !this.showComplete
    },
    clearAll () {
      this.todoList = []
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}

body{
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  color: #444;
  background-color: #fefefe;
  background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 20px;
  margin: 0;
  min-height: 100vh;
  position: relative;
}

.todo-wrapper{
  width: 400px;
  max-width: 100%;
  min-height: 500px;
  margin: 20px auto 40px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 40px 20px;
  -webkit-box-shadow: 0 0 15px 0 rgba(0,0,0,0.05);
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.05);
  background-color: #f4f7fc;
  overflow: hidden;
  position: relative;
}

.todo-title{
  font-size: 1.2em;
  color: #f65c65;
  font-weight: normal;
}

form{
  overflow: overlay;
}

form label{
  display: block;
  text-align: center;
  font-size: 1.2em;
}

.btn, input {
  line-height: 2em;
  border-radius: 3px;
  border: 0;
  display: inline-block;
  margin: 15px 0;
  padding: 0.2em 1em;
  font-size: 1em;
}

input[type='text'] {
  border: 1px solid #ddd;
  min-width: 80%;
  transition: all ease-in 0.25s;
}

input:focus{
  outline: none;
  border: 1px solid #a3b1ff;
}

input::placeholder{
  color: rgba(0,0,0,0.3);
  font-style: italic;
}

.btn{
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
}

.btn-add {
  background: #ddd;
  color: #fefefe;
  border-color: #ddd;
  min-width: 17%;
  pointer-events: none;
  transition: all ease-in 0.25s;
  font-size: 2.2em;
  line-height: 0.5em;
  padding: 0.3em 0.3em;
  float: right;
}

.btn-add.active{
  background: #6664ff;
  border-color: #6664ff;
  pointer-events: visible;
}

.btn-add.active:hover{
  background: #4442f6;
  border-color: #4442f6;
}

.btn-add:active{
  transform: scale(0.95);
}
.control-buttons{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
}
.btn-secondary{
  display: inline-block;
  position: relative;
  border: 0;
  padding: 0;
  margin: 0 10px;
}

.btn-secondary:after{
  position: absolute;
  content: '';
  width: 0;
  height: 3px;
  background-color: #f4586e;
  bottom: 0px;
  left: 0;
  transition: all ease-in 0.25s;
}

.btn-secondary:hover:after{
  width: 100%;
}

ul.todo-list{
  padding: 0;
  margin-bottom: 30px;
}

ul.todo-list li{
  position: relative;
  list-style-type: none;
  display: block;
  margin: 10px 0;
  background: #e0e8f5;
  border-radius: 3px;
  padding-left: 38px; /* custom checkbox width + 16 */
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 49px; /* delete button + 5 */
  overflow: hidden;
}

ul.todo-list.archived li{
  background: #fff;
}

.todo-text{
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
}

ul.todo-list li .delete{
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  width: 0;
  background-color: #f56468;
  color: #fff;
  transition: all ease-in 0.25s;
}

ul.todo-list li .delete:after{
  position: absolute;
  content: '';
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  background-image: url('https://nourabusoud.github.io/vue-todo-list/images/trash.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all ease-in 0.25s;
}

ul.todo-list li:hover .delete{
  width: 44px;
  opacity: 1;
}

ul.todo-list li:hover .delete:after{
  transform: translate(-50%, -50%) scale(1);
}

.todo-checkbox{
  position: absolute;
  opacity: 0;
  display: none;
}

.todo-checkbox + label {
  position: absolute;
  cursor: pointer;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 2px;
  border: 1px solid #cfdcec;
  background-color: #fff;
}

.todo-checkbox:checked + label:after{
  position: absolute;
  content: '';
  top: 30%;
  left: 50%;
  height: 3px;
  width: 6px;
  border: solid #fc6c48;
  border-width: 0 0 2px 2px;
  transform-origin: center center;
  transform: rotate(-45deg) translate(-50%, -50%);
}

.todo-checkbox:checked + label:after{
  display: block;
}

.todo-checkbox:checked ~ .todo-text{
  color: #888;
  text-decoration: line-through
}

.status.free{
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
}
.status.free img{
  display: block;
  width: 50px;
  margin: 10px auto;
  vertical-align: middle;
}

.todo-item-enter-active, .todo-item-leave-active {
  transition: opacity ease 0.25s, transform ease-in-out 0.3s;
  transform-origin: left center;
}

/* .todo-item-leave-active below version 2.1.8 */
.todo-item-enter, .todo-item-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
/* .slide-fade-leave-active below version 2.1.8 */
.slide-fade-enter, .slide-fade-leave-to {
  transform: scale(1.1);
  opacity: 0;
}

/* Footer */
footer{
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff;
  bottom: 20px;
  left: 0;
}

footer a{
  color: #fff;
}
</style>
