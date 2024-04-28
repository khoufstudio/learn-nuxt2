<template>
  <div class="py-5">
    <div ref="intersectionTarget" class="card-container">
      <div v-for="(chat, key) in chats" :key="key" class="card show">
        item {{ chat }}
      </div>
    </div>
  </div>
</template>
<script>
/*
const cards = document.querySelectorAll(".card");

const obs = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    },
    { threshold: 0.5 }
  );
});

const cardContainer = document.querySelector(".card-container");

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];

  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);

  lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => obs.observe(card));

*/
export default {
  data () {
    return {
      // chats: [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      chats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    }
  },
  mounted () {
    // const element = document.documentElement
    // element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          console.log('entry', entry.isIntersecting)

          if (entry.isIntersecting) {
            this.loadNewCards()
            obs.unobserve(entry.target)

            obs.observe(document.querySelector('.card:last-child'))
          }
        },
        { threshold: 1 }
      )
    })

    this.$nextTick(() => {
      // this.$refs.intersectionTarget.scrollTo(0, document.body.scrollHeight)
      // this.$refs.intersectionTarget.scrollTo(0, 0)

      const cu = this.$refs.intersectionTarget.children

      obs.observe(cu[29])
    })
  },
  methods: {
    loadNewCards () {
      console.log('dsfdsf')
      const chatLength = this.chats.length
      for (let i = chatLength + 1; i < chatLength + 20; i++) {
        // this.chats.push(i)
        this.chats = [...this.chats, i]
      }
      console.log(this.chats)
    }
  }
}
</script>
<style>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.card {
  background: white;
  border: 1px solid black;
  padding: .5rem;
  transform: translateX(100px);
  opacity: 0;
  transition: 150ms;
}

.card.show {
  transform: translateX(0);
  opacity: 1;
}
</style>
