<template>
  <div>
    <form>
      <fieldset>
        <legend>Checkout info:</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" v-model="checkoutInfo.firstName" />
        <br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" v-model="checkoutInfo.lastName" />
        <br />
        <input
          type="checkbox"
          name="gift"
          id="gift"
          value="true"
          v-model="checkoutInfo.gift.val"
          v-bind:true-value="checkoutInfo.gift.asGift"
          v-bind:false-value="checkoutInfo.gift.notAsGift"
        />
        <label for="gift">Gift</label>
        <br />
        <input
          type="radio"
          name="male"
          id="male"
          v-bind:value="checkoutInfo.gender.male"
          v-model="checkoutInfo.gender.val"
        />
        <label for="male">Male</label>
        <input
          type="radio"
          name="female"
          id="female"
          v-bind:value="checkoutInfo.gender.female"
          v-model="checkoutInfo.gender.val"
        />
        <label for="female">Female</label>
      </fieldset>
    </form>
    <br />
    <div>
      <pre>
            First name:  {{checkoutInfo.firstName}}
            Last name:   {{checkoutInfo.lastName}}
            Gift:      {{checkoutInfo.gift.val}}
            Gender: {{checkoutInfo.gender.val}}
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      checkoutInfo: {
        firstName: '',
        lastName: '',
        gift: {
          val: 'Send as a gift',
          asGift: 'Send as a gift',
          notAsGift: 'Not send as a gift',
        },
        gender: {
          val: 'Male',
          male: 'Male',
          female: 'Female',
        },
      },
    }
  },
  computed: {
    user() {
      return {
        id: this.$route.params.id,
      }
    },
  },
}
</script>

<style scoped>
</style>