<template>
	<section class="bg-gray-50 relative">
		<Container class="relative py-16 z-10 lg:flex flex-col items-center">
			<div class="self-start">
				<SectionTitle>Жюри и менторы</SectionTitle>
			</div>

			<div>

				<div class="absolute z-0 inset-0 pt-16 lg:relative lg:-mx-6">
					<Container class="relative flex justify-end lg:justify-start">
						<ul class="max-w-60 space-y-8">
							<li>
								<h3 class="font-bold text-2xl">20+ менторов</h3>
								<p class="mt-4 text-black/70 leading-snug">Представители корпораций, инвесторов и успешных стартапов</p>
							</li>
							<li>
								<h3 class="font-bold text-2xl">4+ ментора</h3>
								<p class="mt-4 text-black/70 leading-snug">На 1 участника стартапа</p>
							</li>
							<li>
								<h3 class="font-bold text-2xl">10+ часов</h3>
								<p class="mt-4 text-black/70 leading-snug">Индивидуальной работы (тестирование гипотез, проработка дизайна пилотного исследования)</p>
							</li>
						</ul>
					</Container>
				</div>

				<ul class="grid grid-cols-4 gap-6 mt-12 xl:grid-cols-3 lg:grid-cols-1">
					<li
						class="member-item bg-white text-center pt-8 pb-12 px-8 max-w-xs"
						v-for="(member, idx) in members" :key="`member-${idx}`"
					>
						<div class="max-w-36 mx-auto">
							<img :src="member.image" />
						</div>
						<div class="mt-6">
							<h4 class="font-medium leading-snug" v-html="member.name"></h4>
							<p class="text-gray-400 mt-3 text-sm leading-snug">{{ member.description }}</p>
						</div>
					</li>
				</ul>
			</div>

		</Container>

		<div class="absolute z-0 inset-0 overflow-hidden">
			<Container class="relative">
				<div class="absolute top-0 left-[780px] xl:left-1/2 lg:left-0 right-0 bg-skolkovo w-[999999px] h-[800px] lg:h-[700px]"></div>
			</Container>
		</div>
	</section>
</template>

<script setup lang="ts">

import Container from '~/components/ui/Container.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'

const members = [
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
	{ name: 'Александр <br>Гусев', image: 'http://ilab.sk-dev.ru/files/78/foto-8.png', description: 'к.т.н., директор по развитию платформы прогнозной аналитики Webiomed, эксперт по искусственному' },
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
	{ name: 'Борис <br>Зингерман', image: 'http://ilab.sk-dev.ru/files/78/foto-6.png', description: 'Генеральный директор Ассоциации разработчиков и пользователей' },
]

</script>

<style scoped lang="scss">

.member-item:nth-child(4) {
	grid-column-start: 1;
}

@screen xl {
	.member-item:nth-child(4) {
		grid-column-start: auto;
	}

	.member-item:nth-child(3) {
		grid-column-start: 1;
	}
}

@screen lg {
	.member-item:nth-child(3) {
		grid-column-start: auto;
	}
}

</style>
