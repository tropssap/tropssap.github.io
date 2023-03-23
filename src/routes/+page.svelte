<script lang="ts">
  import Projects from "../lib/Projects.svelte";
</script>

<main>
  <section id="bio">
    <h2>Bio</h2>
    <p>
      I'm a web developer with experience in front-end frameworks such as React
      and Nuxt. I've worked on a variety of projects, including e-commerce
      websites and interactive data visualizations.
    </p>
  </section>
  <Projects />
</main>

<style>
  * {
    width: 100%;
    margin: 0 auto;

    background-color: #f1f1f1;
    font-family: Arial, sans-serif;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  section {
    margin: 40px 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
</style>
