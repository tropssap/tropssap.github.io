<script lang="ts">
  import { onMount } from "svelte";
  import Comic from "../../lib/Comic.svelte";
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

  let title: string;
  let date: string;
  let img: string;
  let alt: string;
  let comicImg: HTMLImageElement;

  async function comicDownload() {
    const params = new URLSearchParams({
      email: "d.igolinskiy@innopolis.university",
    }); // Fetch the ID from the Innopolis API
    const response1: Response = await fetch(
      `https://fwd.innopolis.app/api/hw2?${params}`
    );
    const json1: string = await response1.json();
    const paramsID = new URLSearchParams({
      num: json1,
    });
    const response2 = await fetch(
      `https://getxkcd.vercel.app/api/comic?${paramsID}`
    );
    const data: Comic = await response2.json();

    img = data.img;
    alt = data.alt;
    title = data.title;
    date = new Date(
      +data.year,
      +data.month - 1,
      +data.day
    ).toLocaleDateString();
  }

  onMount(async () => {
    await comicDownload();
  });
</script>

<Comic
  {title}
  {date}
  {comicDownload}
  imgParams={{ src: img, alt: alt, comicImg: comicImg }}
/>
