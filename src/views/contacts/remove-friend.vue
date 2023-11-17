<template>
  <ContanctsLayout>
    <template #header>
      <SelectUser />
      <ContanctsSearch />
    </template>
    <template #main>
      <ListContact
        :source="[
          { key: 1 },
          { key: 2 },
          { key: 3 },
          { key: 4 },
          { key: 1 },
          { key: 2 },
          { key: 3 },
          { key: 4 },
          { key: 1 },
          { key: 2 },
          { key: 3 },
          { key: 4 },
          { key: 1 },
          { key: 2 },
          { key: 3 },
          { key: 4 }
        ]"
        type="contact"
        position="right"
        v-model="select"
      />
    </template>
  </ContanctsLayout>
</template>
<script lang="ts" setup>
import ListContact from '../../components/Message-Contact/List-Contact.vue'
import SelectUser from './select-user.vue'
import ContanctsLayout from './contancts-layout.vue'
import ContanctsSearch from './contancts-search.vue'

const select = ref([])
</script>
<style lang="scss" scoped></style>
