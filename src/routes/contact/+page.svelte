<script lang="ts">
  import * as config from "$lib/config";
  import {createForm} from "svelte-forms-lib";
	import { fly } from "svelte/transition";
  import * as yup from "yup";
  import { supabase } from "$lib/supabaseClient";

  const validationFormSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required('Please, enter a name'),
    email: yup.string().email().required('Please, enter a valid email'),
    message: yup.string().min(25).max(500).required('Please, enter a message'),
  });

  let apiResult: boolean | null = null;
  const { form, errors, handleChange, handleSubmit, isSubmitting, handleReset } = createForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      try {
        let result = await supabase.from("contact").insert(values);
        apiResult = result.data != null ? false : true;
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
  {#if apiResult === null}
  <div in:fly={{x: -50}}>
    <h2>Contact Me</h2>
    <p>
      <span in:fly={{x: -50, delay:700}}>Enter the details,</span>
      <span in:fly={{x: -50, delay:1400}}> let's get in touch.</span></p>
  </div>
  {:else if apiResult === true}
  <div in:fly={{x: -50}}>
    <h2>Thank you!</h2>
    <p>
      <span in:fly={{x: -50, delay:700}}>I will get back to you soon.</span>
    </p>
  </div>
  {:else if apiResult === false}
  <div in:fly={{x: -50}}>
    <h2>Oops!</h2>
    <p>
      <span in:fly={{x: -50, delay:700}}>Something went wrong.</span>
      <span in:fly={{x: -50, delay:1400}}> Please, try again.</span>
    </p>
  </div>
  {/if}
  <form on:submit|preventDefault={handleSubmit} method="POST">
    <label for="name">Name</label>
    {#if $errors.name}
      <p in:fly class="error">{$errors.name}</p>
    {/if}
    <input 
      type="text"
      id="name"
      name="name"
      on:change={handleChange}
      bind:value={$form.name}
      
    />

    <label for="email">Email</label>
    {#if $errors.email}
      <p in:fly class="error">{$errors.email}</p>
    {/if}
    <input 
      type="email"
      id="email"
      name="email"
      on:change={handleChange}
      bind:value={$form.email}
    />

    <label for="message">Message</label>
    {#if $errors.message}
      <p in:fly class="error">{$errors.message}</p>
    {/if}
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
.error {
  margin: 0 0 -8px 10px;
  padding: 0;
  text-transform: capitalize;
  color: var(--red-3);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-bold);
  text-align: start;
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