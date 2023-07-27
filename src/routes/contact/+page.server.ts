import type { Actions } from "./$types";  

export const prerender = false;

export const load = (async (event) => {
  return {};
}) 

export const actions = {
  default: async (event) => {
    return {};
  },
  sendEmail: async (event) => {
    return {};
  }
} satisfies Actions;