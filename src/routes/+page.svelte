<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { getCookie, setCookie } from '$lib/cookies';
	import { onMount } from 'svelte';
	import { asset } from '$app/paths';

	import * as cv from '$lib/resume';
	import Phone from '$lib/icons/phone.svelte';
	import Envelope from '$lib/icons/envelope.svelte';
	import Qrcode from '$lib/icons/qrcode.svelte';

	let lang: string = $state('kr');
	let dlgQrCode: HTMLDialogElement;

	onMount(() => {
		if (browser) {
			lang = getCookie('lang') ?? 'kr';
		}
	});

	$effect(() => {
		// console.log({ lang });
		setCookie('lang', lang, 7);
	});
</script>

<div class="relative flex flex-col items-center p-4">
	<!-- <header class="fixed-x top-0 grid w-full grid-cols-[1fr_max-content_1fr] p-2">
		<div class="justify-self-start">start</div>
		<div class="col-start-2">center</div>
		<div class="col-start-3 flex items-center gap-4 justify-self-end">
			<div class="join">
				<input
					class="join-item btn btn-xs btn-soft"
					type="radio"
					name="lang"
					value="kr"
					aria-label="한글"
					bind:group={lang}
				/>
				<input
					class="join-item btn btn-xs btn-soft"
					type="radio"
					name="lang"
					aria-label="En"
					value="en"
					bind:group={lang}
				/>
			</div>
			<div class="">
				<button
					class="btn btn-xs btn-circle btn-primary btn-soft"
					onclick={() => dlgQrCode?.showModal()}><Qrcode /></button
				>
			</div>
		</div>
	</header> -->

	<!-- language select -->
	<!-- <div class="join absolute top-4 right-16">
		<input
			class="join-item btn btn-xs btn-soft"
			type="radio"
			name="lang"
			value="kr"
			aria-label="한글"
			bind:group={lang}
		/>
		<input
			class="join-item btn btn-xs btn-soft"
			type="radio"
			name="lang"
			aria-label="En"
			value="en"
			bind:group={lang}
		/>
	</div> -->
	<!-- qrcode -->
	<!-- <div class=" absolute top-4 right-4">
		<button
			class="btn btn-xs btn-circle btn-primary btn-soft"
			onclick={() => dlgQrCode?.showModal()}><Qrcode /></button
		>
	</div> -->

	<div class="relative grid grid-cols-1 gap-6 sm:grid-cols-[300px_500px]">
		<div></div>
		<div class="flex justify-end gap-4">
			<div class="join">
				<input
					class="join-item btn btn-xs btn-soft"
					type="radio"
					name="lang"
					value="kr"
					aria-label="한글"
					bind:group={lang}
				/>
				<input
					class="join-item btn btn-xs btn-soft"
					type="radio"
					name="lang"
					aria-label="En"
					value="en"
					bind:group={lang}
				/>
			</div>
			<div class="">
				<button
					class="btn btn-xs btn-circle btn-primary btn-soft"
					onclick={() => dlgQrCode?.showModal()}><Qrcode /></button
				>
			</div>
		</div>
		<!-- left -->
		<div class="flex min-w-80 flex-col">
			{@render hero(lang)}
			{@render contact(lang)}
			<div class="bg-primary flex-1"></div>
			{@render specialization(true, lang)}
			{@render advisory(true, lang)}
		</div>
		<!-- right -->
		<div class="mt-20 flex flex-col">
			{@render experience(false, lang)}
			{@render education(false, lang)}
			{@render award(false, lang)}
			{@render reference(false, lang)}
		</div>
	</div>
</div>

<!-- hero -->
{#snippet hero(lang: string = 'kr')}
	<div class="flex flex-col">
		<!-- portrait image -->
		<div class="relative flex justify-center bg-cover pt-8">
			<img
				class="border-base-100 z-10 h-48 w-48 rounded-full border-4 object-cover"
				src={asset('/images/portrait.jpg')}
				alt="Seo Kyung-Won"
			/>
			<div
				class="bg-primary absolute inset-0 -mb-1"
				style="clip-path: polygon(0 0, 100% 80%, 100% 100%, 0 100%);"
			></div>
		</div>
		<!-- name and title -->
		<div class="bg-primary flex flex-col gap-3 p-6">
			{#if lang === 'en'}
				<div class="text-primary-content font-boldx text-5xl">Kyung-Won</div>
				<div class="text-primary-content text-5xl font-bold">Seo</div>
				<div class="flex flex-col gap-0">
					<div class="text-primary-content">Pharmaceutical Regulatory</div>
					<div class="text-primary-content">Affairs Consultant</div>
				</div>
			{:else}
				<div class="text-primary-content text-5xl font-bold">서경원</div>
				<div class="text-primary-content text-lg">의료제품 규제 전문 컨설턴트</div>
			{/if}
		</div>
	</div>
{/snippet}

<!-- contact -->
{#snippet contact(lang: string = 'kr')}
	<div class="bg-primary text-primary-content flex flex-col gap-2 p-4">
		{#if lang === 'en'}
			<div class="mb-1 font-bold">CONTACT</div>
			<div class="flex items-center gap-2">
				<Phone />
				<div class="text-sm font-light">+82-10-9986-7585</div>
			</div>
			<div class="flex items-center gap-2">
				<Envelope />
				<div class="text-sm font-light">seokyungwon@medisol.tech</div>
			</div>
		{:else}
			<div class="mb-1 font-bold">연락처</div>
			<div class="flex items-center gap-2">
				<Phone />
				<div class="text-sm font-light">010-9986-7585</div>
			</div>
			<div class="flex items-center gap-2">
				<Envelope />
				<div class="text-sm font-light">seokyungwon@medisol.tech</div>
			</div>
		{/if}
	</div>
{/snippet}

<!-- items -->
{#snippet twolineitem(item: cv.ResumeItem)}
	<div class="flex flex-col">
		<div class="flex items-center justify-between">
			<div class="text-sm font-black">{item.title}</div>
			<div class="text-xs font-semibold opacity-80">{item.period}</div>
		</div>
		<div class="text-sm">{item.org}</div>
	</div>
{/snippet}

<!-- specialization -->
{#snippet specialization(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-primary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				SPECIALIZATIONS
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex items-center gap-2 text-sm font-light">
				Development & regulatory approval strategies for pharmaceuticals, medical devices, and
				cosmetics
			</div>
			<div class="flex items-center gap-2 text-sm font-light">
				Regulatory strategy and agency liaison for MFDS and Other Regulatory Bodies
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				전문분야
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex items-center gap-2 text-sm font-light">
				의약품, 의료기기, 화장품 개발 및 허가 전략
			</div>
			<div class="flex items-center gap-2 text-sm font-light">식약처 등 규제기관 대응 전략</div>
		{/if}
	</div>
{/snippet}

<!-- award -->
{#snippet award(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-primary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				HONORS AND AWARDS
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.awards.en as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				수상경력
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.awards.kr as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- reference -->
{#snippet reference(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-prmary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				PUBLICATIONS
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.references.en as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				저서
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.references.kr as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- experience -->
{#snippet experience(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-primary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				WORK EXPERIENCE
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.experiences.en as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				업무경력
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.experiences.kr as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- advisory -->
{#snippet advisory(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-primary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				ADVISORY & BOARD MEMBERSHIPS
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.advisories.en as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				자문경력
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.advisories.kr as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- education -->
{#snippet education(left: boolean, lang: string = 'kr')}
	<div
		class={left
			? 'bg-primary text-primary-content flex flex-col gap-2 p-4'
			: 'flex flex-col gap-2 p-4'}
	>
		{#if lang === 'en'}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				EDUCATION
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.educations.en as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{:else}
			<div class={left ? 'text-primary-content mb-1 font-bold' : 'text-primary mb-1 font-bold'}>
				교육
			</div>
			<hr class={left ? 'text-primary-content' : 'text-primary'} />
			<div class="flex flex-col gap-3">
				{#each cv.educations.kr as item}
					{@render twolineitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- Open the modal using ID.showModal() method -->

<dialog class="modal" bind:this={dlgQrCode}>
	<div class="modal-box">
		<div class="text-center">https://www.seokyungwon.com</div>
		<div>
			<img src={asset('/images/urlqrcode.png')} alt="url qr code" />
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
