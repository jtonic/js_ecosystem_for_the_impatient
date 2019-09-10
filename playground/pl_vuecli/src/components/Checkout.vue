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
        <br />
        <select name="county" id="county" v-model="checkoutInfo.county.val">
          <option disabled value selected>State</option>
          <option v-bind:value="checkoutInfo.county.counties.B">B</option>
          <option v-bind:value="checkoutInfo.county.counties.BR">BR</option>
          <option v-bind:value="checkoutInfo.county.counties.GL">GL</option>
        </select>
      </fieldset>
    </form>
    <br />
    <div>
      <pre>
            First name:  {{checkoutInfo.firstName}}
            Last name:   {{ checkoutInfo.lastName }}
            Gift:      {{checkoutInfo.gift.val}}
            Gender: {{checkoutInfo.gender.val}}
            County: {{checkoutInfo.county.val}}
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
        county: {
          val: '',
          counties: {
            GL: 'Galati',
            BR: 'Braila',
            B: 'Bucuresti',
          },
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