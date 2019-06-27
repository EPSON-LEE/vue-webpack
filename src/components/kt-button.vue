<template>
	<div
    :disabled="disabled"
    class="kt-button"
    :class="{
      disabled: disabled,
      round: round
    }"
    >
		<slot></slot>
	</div>
</template>


<script>
export default {
  name: "KtButton",
  props: {
    disabled: Boolean,
    round: Boolean
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    }
  },
  data() {
    return {
    }
  }
}
</script>


<style>
	.kt-button {
		border: 1px solid #41a259;
		background-color: #41a259;
		display: inline-block;
		border-radius: 2px;
		height: 14px;
		line-height: 14px;
		color: #fff;
		padding: 10px 19px;
		cursor: pointer;
		white-space: nowrap;
	}
  .disabled {
    border: #c4d6c9;
    cursor: not-allowed;
    background-color: #adb9b0;
  }
  .disabled,
  .disabled:hover,
  .disabled:focus {
    border-color: transparent;
    background-color: #adb9b0 !important;
  }
  .round {
    border-radius: 15px;
  }
  .kt-button:hover {
    border-color: #c6e2ff;
    background-color: #2ec354;
  }
</style>

