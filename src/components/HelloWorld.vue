<!-- <script setup lang="ts">
defineProps<{
  msg: string
}>()
</script> -->

<template>
  <div class="container">
    <form action="" class="form">
      <img class="form_img" src="../assets/photo_2023-09-11_20-54-12 (2).jpg" width="200" alt="" />
      <div class="input">
        <input type="text" class="input" placeholder="Ismingiz" />
        <input type="text" class="input" placeholder="Faniliyangiz" />
      </div>
      <div class="input">
        <input type="date" class="input" placeholder="Tug'ilgan sana" />
        <input type="number" class="input" placeholder="Telefon raqam" />
      </div>
      <input type="text" placeholder="Yahshash manzili" />
      <div class="input">
        <select id="">
          <option value="Lavozim">Lavozim</option>
          <option value="Menejer">Menejer</option>
          <!-- <option value="Boshqa">Boshqa</option> -->
        </select>
        <select id="">
          <option value="2.000.000-6.000.000">2.000.000-6.000.000</option>
          <option value="5.000.000-10.000.000">5.000.000-10.000.000</option>
          <option value="10.000.000+">10.000.000+</option>
        </select>
      </div>
      <input type="text" placeholder="Oldingi ish joyi :">
    </form>
  </div>
</template>

<style scoped>
select {
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  list-style-type: none;
}
.container {
  width: 500px;
  padding: 40px;
}
.form_img {
  border-radius: 8px;
}
.input {
  display: flex;
  align-items: center;
  gap: 10px;
}
.form {
  display: grid;
  flex-direction: column;
  gap: 20px;
}

input {
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  list-style-type: none;
}
</style>
