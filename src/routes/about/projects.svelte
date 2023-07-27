<script lang='ts'>
  import { fly, draw, fade } from "svelte/transition";
	import type { Post } from "$lib/types";
  import { sineOut } from "svelte/easing";

  export let projects: Post[];
  let hoveredProject: Post | null = null;

   
  
</script>

<section id="projects" >
  <div class="blob">
    {#if hoveredProject}
      <img 
        in:fade={{duration: 1000}}
        src={hoveredProject.image} 
        alt={hoveredProject.title}
        loading="lazy" />
    {:else}
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="500" height="500"
      viewBox="0 0 1080 1080"
    >
      <path 
        in:draw={{delay: 500, duration: 2000, easing: sineOut}}
        fill="none" stroke="black" stroke-width="7"
        d="M 547.00,669.00
          C 626.00,670.00 678.00,602.00 678.00,540.00
            678.00,478.00 627.00,401.00 545.00,402.00
            463.00,403.00 410.00,471.00 411.00,539.00
            412.00,607.00 468.00,668.00 547.00,669.00 Z" 
      />
      <path 
        in:draw={{delay: 500, duration: 2000, easing: sineOut}}
        id="wheel"
        fill="none" stroke="black" stroke-width="7"
        d="M 798.00,458.00
          C 798.00,458.00 778.00,409.00 778.00,409.00
            778.00,409.00 829.00,365.00 829.00,365.00
            829.00,365.00 719.00,255.00 719.00,255.00
            719.00,255.00 674.00,302.00 674.00,302.00
            674.00,302.00 621.00,282.00 621.00,282.00
            621.00,282.00 621.00,217.00 621.00,217.00
            621.00,217.00 472.00,213.00 472.00,213.00
            472.00,213.00 467.00,277.00 467.00,277.00
            467.00,277.00 417.00,305.00 417.00,305.00
            417.00,305.00 369.00,259.00 369.00,259.00
            369.00,259.00 264.00,363.00 264.00,363.00
            264.00,363.00 311.00,408.00 311.00,408.00
            311.00,408.00 291.00,460.00 291.00,460.00
            291.00,460.00 222.00,464.00 222.00,464.00
            222.00,464.00 222.00,611.00 222.00,611.00
            222.00,611.00 288.00,611.00 288.00,611.00
            288.00,611.00 309.00,662.00 309.00,662.00
            309.00,662.00 266.00,709.00 266.00,709.00
            266.00,709.00 372.00,817.00 372.00,817.00
            372.00,817.00 418.00,771.00 418.00,771.00
            418.00,771.00 469.00,789.00 469.00,789.00
            469.00,789.00 469.00,855.00 469.00,855.00
            469.00,855.00 621.00,852.00 621.00,852.00
            621.00,852.00 621.00,792.00 621.00,792.00
            621.00,792.00 671.00,769.00 671.00,769.00
            671.00,769.00 717.00,812.00 717.00,812.00
            717.00,812.00 823.00,711.00 823.00,711.00
            823.00,711.00 780.00,665.00 780.00,665.00
            780.00,665.00 801.00,613.00 801.00,613.00
            801.00,613.00 865.00,610.00 865.00,610.00
            865.00,610.00 866.00,459.00 866.00,459.00
            866.00,459.00 798.00,458.00 798.00,458.00 Z"
      />
    </svg>
    {/if}
  </div>
  <div class="projects-container" in:fly={{y:200, delay:500}}>
    <h2>Projects</h2>
    <div class="tags">
      <a href="#projects">svelte</a>
      <a href="#projects">react</a>
      <a href="#projects">typescript</a>
    </div>
    <ol>
      {#each projects as project}
        <li 
          class="project"
          on:mouseenter={() => hoveredProject = project}
          on:mouseleave={() => hoveredProject = null}
        >
            <a href={`/blog/post/${project.slug}`} target="_blank">
              {project.title}
            </a>
        </li>
      {/each}
    </ol>
  </div>

</section>

<style>

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: start;
    height: 700px;
    padding-block: var(--size-fluid-4);
  }
  .projects-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-block: var(--size-8);
    padding-inline: var(--size-3);
  }
  .projects-container ol {
    width: 80%;
    display: flex;
    gap: var(--size-2);
    flex-direction: column;
    align-items: center;
    margin-block: var(--size-2);
    overflow-y: auto;
  }
  .project {
    width: 100%;

    padding-block: var(--size-2);
    padding-inline: var(--size-7);
    background: var(--surface-3);
    font-size: var(--font-size-fluid-1);
  }

  .project::before {
    content: "> ";
    font-weight: bold;
    background: var(--linear-gradient-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .project:hover {
      animation: project-hover .3s ease-out forwards;
  }

  .project a {
    color: var(--text-1);
  }

  .blob {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 1px var(--surface-5);*/
    border: none;
    border-radius: var(--radius-blob-5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-blob-5);
  }
  
  svg {
    width: 100%;
    height: 100%;
    animation: rotate 10s linear infinite;
  }
  @media (max-width: 1024px) {
    section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      background: var(--surface-3);
      border-radius: var(--radius-3);
    }
    .projects-container {
      width: 100%;
      align-items: center;
      padding-inline: var(--size-fluid-4);
      padding-top: var(--size-fluid-2);
      padding-bottom: 0;
    }
    .projects-container ol {
      display: inline-flex;
      height: 100%;
      margin-block: var(--size-3);

    }
    .project {
      display: flex;
      width: 100%;
      height: 200px;

      text-align: center;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-3);
      background: var(--surface-2);
      text-transform: uppercase;
      font-size: var(--font-size-fluid-3);
      font-weight: bold;
    }

    .project a{
      color: var(--surface-5);
    }
    .project::before {
      content: "";
    }
    .blob {
      display: none;
    }
    svg {
      display: block;
    }
  }

  @keyframes project-hover {
    0% {
      
    }
    100% {
      background: var(--surface-4);
      padding-left: var(--size-8);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);

    }
  }

</style>