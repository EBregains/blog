<script lang="ts">
  import * as config from "$lib/config";
  import {createForm} from "svelte-forms-lib";
	import { fly } from "svelte/transition";
  import {supabase} from "$lib/supabaseClient";

  let apiResult = null;

  const { form, errors, handleChange, handleSubmit, isSubmitting, handleReset } = createForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        let result = await supabase.from("contact").insert(values);
        apiResult = result.data ? true : false;
      } catch (ex) {
        
        apiResult = false;
      }

      handleReset();
    },
  }) 
</script>

<svelte:head>
  <title>{config.title} | Contact</title>
</svelte:head>

<section>
  
  <div in:fly={{x: -50}}>
    <h2>Contact Me</h2>
    <p>
      <span in:fly={{x: -50, delay:700}}>Enter the details,</span>
      <span in:fly={{x: -50, delay:1400}}> let's get in touch.</span></p>
  </div>

  <form on:submit|preventDefault={handleSubmit} method="POST">
    <label for="name">Name</label>
    <input 
      type="text"
      id="name"
      name="name"
      on:change={handleChange}
      bind:value={$form.name}
    />

    <label for="email">Email</label>
    <input 
      type="email"
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}
    />

    <label for="message">Message</label>
    <textarea 
      id="message"
      name="message"
      cols="30"
      rows="6"
      on:change={handleChange}
      bind:value={$form.message}
    />

    <button type="submit" disabled={$isSubmitting}>Send</button>

  </form>
</section>

<style>
section {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  margin-block: var(--size-4);
}
form {
  display: flex;
  flex-direction: column;
  gap: var(--size-2);
  width: 40%;
  max-width: 600px;
}
button {
  margin-top: var(--size-2);
}
div{
  text-align: center;
}

@media (max-width: 768px) {
  section {
    flex-direction: column;
    justify-content: space-evenly;
  }
  form {
    margin-block: var(--size-4);
    width: 80%;
    max-width: 600px;
  }
  div {
    padding-block: var(--size-8);
  }
}
</style>