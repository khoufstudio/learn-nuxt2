<script setup>
import { ref, onMounted } from 'vue'
const headers = [
  'section 1',
  'section 2',
  'how this works',
  'placeholder',
  'section 5'
]

const currentSection = ref('')

onMounted(() => {
  const options = {
    // rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      currentSection.value = entry.target.getAttribute('id')
    })
  },
  options
  )

  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
})
</script>
<template>
  <main>
    <article>
      <h1>My Article</h1>

      <section v-for="(header, index) in headers" :key="index">
        <h2 :id="index" class="font-bold">
          {{ header }}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </article>
    <aside>
      <div>
        {{ currentSection }}
        <a
          v-for="(header, index) in headers"
          :key="index"
          :href="`#${index}`"
          :class="[currentSection == index ? 'font-bold' : 'font-sans']"
        >
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>
<style>
main {
    display: flex;
  }

  article {
      width: 75%;
      margin-bottom: 500px;
    }

    aside {
        width: 25%;
      }

      aside > div {
          position: sticky;
          top: 20px;
          padding-left: 2em;
        }
      aside > div > a {
        display: block;
        color: #2c3e50;
        text-decoration: none;
        border-left: 1px solid #ccc;
      }
</style>
