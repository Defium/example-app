<template>
  <wide-window class="wallpaper">
    <div>
	<span>Your "fullscreen" app goes here</span>
	<div>{{function1(2) }} </div> <!-- Will output 4 -->
	</div>
  </wide-window>
</template>

<script>
import WideWindow from '@/os/components/window/WideWindow.vue';

export default {
  name: 'MyDefiumApp',
  components: {
     WideWindow,
  },
  data: () => ({
	canBe1: {dicts: 'dicts},
	canBe2: 'strings',
	canBe3: ['arrays'],
	canBe4: 5,
	canBe5: 5.0,
	canBe5: false,
  }),
  methods: {
	function1(input) {
	retun imput + 2;
  },
};
</script>

<style>

.wallpaper {
  background: #fff;
}

</style>
