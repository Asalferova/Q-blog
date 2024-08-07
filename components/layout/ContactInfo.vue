<script lang="ts" setup>

interface IContact {
  title: string;
  phone?: string;
  email?: string;
  address?: string;
  mapLink?: string;
  headingId: string;
}

const contacts = ref<IContact[]>([
  {
    title: "For all questions",
    phone: "+79202780068",
    email: "qtim@agency.com",
    headingId: "contact-info-heading",
  },
  {
    title: "Office in Russia",
    address: "139 Ruben Station Lake, Drew, NM 52678",
    mapLink: "https://www.google.com/maps/",
    headingId: "russia-office-heading",
  },
  {
    title: "Office in Dubai",
    address: "139 Ruben Station Lake, Drew, NM 52678",
    mapLink: "https://www.google.com/maps",
    headingId: "dubai-office-heading",
  },
]);
</script>
<template>
  <div
    class="flex flex-col gap-[3.6rem] max-w-[15.2rem]"
    aria-label="Contact Information"
  >
    <article
      v-for="(contact, index) in contacts"
      :key="index"
      class="flex items-center"
      :aria-labelledby="contact.headingId"
    >
      <address :aria-labelledby="contact.headingId">
        <p :id="contact.headingId" class="text-base pb-[0.8rem]">
          {{ contact.title }}
        </p>
        <p v-if="contact.phone" class="text-base pb-[0.8rem]">
          <a :href="`tel:${contact.phone}`" aria-label="Phone number">{{
            contact.phone
          }}</a>
        </p>
        <a
          v-if="contact.email"
          class="text-base"
          :href="`mailto:${contact.email}`"
          target="_blank"
          aria-label="Email address"
          >{{ contact.email }}</a
        >
        <p v-if="contact.address" class="text-base pb-[0.8rem]">
          {{ contact.address }}
        </p>
        <div v-if="contact.mapLink">
          <nuxt-link
            :to="contact.mapLink"
            target="_blank"
            :aria-label="`Google Maps link to ${contact.title}`"
          >
            <ui-button variant="circle colored">
              <icon name="my-icon:direction" class="text-base inline-block" />
            </ui-button>
          </nuxt-link>
        </div>
      </address>
    </article>
  </div>
</template>
<style>
address {
  font-style: normal;
}
</style>
