<template>
	<div class="main">
		<div class="input">
			<span style="color: #fff">M：</span>
			<input id="m" type="number" value="15">
			<span style="color: #fff">N：</span>
			<input id="n" type="number" value="10">
		</div>
		<div id="jpg"></div>
	</div>
</template>


<script>
export default {
	name: "boom",
	props: [],
	data() {
		return {
      m: 15,
      n: 10,
      w: 640,
      h: 360
    }
	},
	created() {
  },
  mounted() {
    this.once()
  },
	methods: {
		once() {
      let vm = this
			document.getElementById("jpg").innerHTML = "";

			const a = new Array(n)
				.fill(0)
				.map((v, i) => new Array(m).fill(0).map((v, j) => ({ i, j })))
				.flatMap(v => v)
				.map(v =>
					Object.assign(v, {
						div: document.createElement("div"),
						rotate: new Array(3)
							.fill(-180)
							.map(v => v + Math.random() * 360 + "deg"),
						move: new Array(3)
							.fill(-200)
							.map(v => v + Math.random() * 400 + "px")
					})
				)
				.map(function(v) {
					v.div.style.width = 100 / m + "%";
					v.div.style.height = 100 / n + "%";
					v.div.style.backgroundPosition = `${(v.j * 100) / (m - 1)}% ${(v.i *
						100) /
						(n - 1)}%`;
					setTimeout(() => {
						v.div.style.transform = `rotateX(${v.rotate[0]}) rotateY(${
							v.rotate[1]
						}) rotateZ(${v.rotate[2]}) translate3d(${v.move.join(",")}) `;
						v.div.style.opacity = 0;
					}, 1000);

					return v;
				})
				.reduce((a, b) => {
					a.appendChild(b.div);
					return a;
				}, document.createDocumentFragment());
			document.getElementById("jpg").appendChild(a);

			setTimeout(() => {
				vm.once();
			}, 5000);
		}
	}
};
</script>


<style>
	.main {
		background-color: #666;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#jpg {
		height: 360px;
		width: 640px;
	}

	#jpg > div {
		float: left;
		background-image: url("https://s2.ax1x.com/2019/06/27/ZnZktK.md.jpg");
		transition: all 0.3s ease-out;
		transform-origin: center;
		perspective: 50px;
		opacity: 1;
		background-size: 640px 360px;
	}

	.input {
		position: absolute;
		top: 20px;
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
</style>

