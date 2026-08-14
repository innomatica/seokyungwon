<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { getCookie, setCookie } from '$lib/cookies';
	import { onMount } from 'svelte';

	import {
		type ResumeItem,
		educations,
		experiences,
		advisories,
		awards,
		references
	} from '$lib/contents';
	import AionyHaust from '$lib/assets/aiony-haust.jpg';
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

<div class="relative flex flex-col items-center p-8">
	<!-- <header class="fixed-x top-0 grid w-full grid-cols-[1fr_max-content_1fr] p-2">
		<div class="justify-self-start">start</div>
		<div class="col-start-2">center</div>
		<div class="col-start-3 justify-self-end">
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
		</div>
	</header> -->

	<!-- language select -->
	<div class="join absolute top-4 right-16">
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
	<!-- qrcode -->
	<div class=" absolute top-4 right-4">
		<button
			class="btn btn-xs btn-circle btn-primary btn-soft"
			onclick={() => dlgQrCode?.showModal()}><Qrcode /></button
		>
	</div>

	<div class="relative grid grid-cols-1 gap-6 sm:grid-cols-[300px_500px]">
		<!-- left -->
		<div class="flex min-w-64 flex-col">
			{@render hero(lang)}
			{@render contact(lang)}
			{@render specialization(lang)}
			{@render award(lang)}
			{@render reference(lang)}
		</div>
		<!-- right -->
		<div class="mt-20 flex flex-col">
			<!-- {@render careers(lang)} -->
			{@render experience(lang)}
			{@render advisory(lang)}
			{@render education(lang)}
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
				src={'/images/aiony-haust.jpg'}
				alt="Aiony Haust"
			/>
			<div
				class="bg-primary absolute inset-0 -mb-1"
				style="clip-path: polygon(0 0, 100% 80%, 100% 100%, 0 100%);"
			></div>
		</div>
		<!-- name and title -->
		<div class="bg-primary flex flex-col gap-3 p-6">
			{#if lang === 'en'}
				<div class="text-primary-content font-boldx text-5xl">Kyungwon</div>
				<div class="text-primary-content text-5xl font-bold">Seo</div>
				<div class="flex flex-col gap-0">
					<div class="text-primary-content">Pharmaceutical Regulatory</div>
					<div class="text-primary-content">Affairs Consultant</div>
				</div>
			{:else}
				<div class="text-primary-content text-5xl font-bold">서경원</div>
				<div class="text-primary-content text-lg">의약규제 전문 컨설턴트</div>
			{/if}
		</div>
	</div>
{/snippet}

<!-- contact -->
{#snippet contact(lang: string = 'kr')}
	<div class="bg-primary text-primary-content flex flex-col gap-1 p-4">
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

<!-- specializations -->
{#snippet specialization(lang: string = 'kr')}
	<div class="bg-primary text-primary-content flex flex-col gap-1 p-4 text-sm">
		{#if lang === 'en'}
			<div class="mb-1 font-bold">SPECIALIZATIONS</div>
			<div class="flex items-center gap-2 font-light">first area</div>
			<div class="flex items-center gap-2 font-light">second area</div>
			<div class="flex items-center gap-2 font-light">third area</div>
		{:else}
			<div class="mb-1 font-bold">전문분야</div>
			<div class="flex items-center gap-2 font-light">(전문분야 1)</div>
			<div class="flex items-center gap-2 font-light">(전문분야 2)</div>
			<div class="flex items-center gap-2 font-light">(전문분야 3)</div>
		{/if}
	</div>
{/snippet}

<!-- awards -->
{#snippet awarditem(item: ResumeItem)}
	<div class="flex items-center gap-2">
		<div class="text-xs">{item.period}</div>
		<div class="text-sm">{item.org}</div>
		<div class="text-sm">{item.title}</div>
	</div>
{/snippet}

{#snippet award(lang: string = 'kr')}
	<div class="bg-primary text-primary-content flex flex-col gap-1 p-4 text-sm">
		{#if lang === 'en'}
			<div class="mb-1 font-bold">AWARDS</div>
			<div class="flex flex-col gap-2">
				{#each awards.en as item}
					{@render awarditem(item)}
				{/each}
			</div>
		{:else}
			<div class="mb-1 font-bold">수상경력</div>
			<div class="flex flex-col gap-2">
				{#each awards.kr as item}
					{@render awarditem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet reference(lang: string = 'kr')}
	<div>references</div>
{/snippet}

<!-- experience -->
{#snippet expitem(item: ResumeItem)}
	<div class="flex flex-col">
		<div class="flex items-center justify-between">
			<div class="font-black">{item.title}</div>
			<div class="text-sm font-light">{item.period}</div>
		</div>
		<div class="text-sm">{item.org}</div>
	</div>
{/snippet}

{#snippet experience(lang: string = 'kr')}
	<div class=" flex flex-col gap-1 p-4 text-sm">
		{#if lang === 'en'}
			<div class="text-primary mb-1 font-bold">WORK EXPERIENCE</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each experiences.en as item}
					{@render expitem(item)}
				{/each}
			</div>
		{:else}
			<div class="text-primary mb-1 font-bold">업무경력</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each experiences.kr as item}
					{@render expitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet advisory(lang: string = 'kr')}
	<div class=" flex flex-col gap-1 p-4 text-sm">
		{#if lang === 'en'}
			<div class="text-primary mb-1 font-bold">ADVISORY ROLE</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each advisories.en as item}
					{@render expitem(item)}
				{/each}
			</div>
		{:else}
			<div class="text-primary mb-1 font-bold">자문경력</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each advisories.kr as item}
					{@render expitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet education(lang: string = 'kr')}
	<div class=" flex flex-col gap-1 p-4 text-sm">
		{#if lang === 'en'}
			<div class="text-primary mb-1 font-bold">EDUCATION</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each educations.en as item}
					{@render expitem(item)}
				{/each}
			</div>
		{:else}
			<div class="text-primary mb-1 font-bold">교육</div>
			<hr class="text-primary" />
			<div class="flex flex-col gap-2">
				{#each educations.kr as item}
					{@render expitem(item)}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<!-- Open the modal using ID.showModal() method -->

<dialog class="modal" bind:this={dlgQrCode}>
	<div class="modal-box">
		<div class="p-2 text-center">https://www.seokyungwon.com</div>
		<div>
			<img src="/images/urlqrcode.png" alt="url qr code" />
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
