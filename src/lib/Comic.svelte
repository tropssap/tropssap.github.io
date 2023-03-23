<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  interface Comic {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  }

  export let title: string;
  export let date: string;
  export let imgParams: {
    src: string;
    alt: string;
    comicImg: HTMLImageElement;
  };
  export let comicDownload: () => Promise<void>;
</script>

<div id="imageContainer">
  <h2 class="title">{title}</h2>
  <p class="date">{date}</p>
  <img
    src={imgParams.src}
    alt={imgParams.alt}
    bind:this={imgParams.comicImg}
    class="comic"
  />
  <button on:click={comicDownload}>Look for new comic</button>
</div>

<style>
  .comic {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .date {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  div {
    gap: 8px;
    width: 100%;
    margin: 0 auto;
    background-color: #f1f1f1;
    font-family: Arial, sans-serif;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 1rem;
    color: #333;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem 1rem;
    color: #333;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: #333;
    color: #fff;
  }
</style>
