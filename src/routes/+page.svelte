<script lang="ts">
    import { copy } from 'svelte-copy';

    import { readGZ, readJSON } from '$lib';
    import { getCharacterAbils } from "$lib/gcsim-to-multiopt";
    import { convertAbils } from '$lib/gcsim-to-multiopt/convert';
    import getAbilities from '$lib/gcsim-to-multiopt/config/abil_name';

    import type { Sample } from '$lib/gcsim-to-multiopt/gcsim_types';
    import type { CustomMultiTarget } from '$lib/gcsim-to-multiopt/go_types';

    let sample: Sample | null = null;
    let charName = '';
    let charNames: string[] = [];
    let ignoredMods: string[] = [];
    let availabledMods: string[] = [];
    let target: CustomMultiTarget | null = null;
    let errors: string[] = [];
    let addConvert = '';

    const addConvertPlaceholder = `{
    "Normal 0": ["normal", "0"],
    "Bake-Kurage": ["skill", "dmg"],
    "Sea-Dyed Foam": ["artifact:OceanHuedClam", "heal"]
}`;

    function updateCharacterAbils() {
        if (!sample) {
            return;
        }
        errors = [];
        const [abilities, mods] = getCharacterAbils(sample, charName, ignoredMods);
        availabledMods = mods;

        let convert = getAbilities(charName);
        if (addConvert) {
            try {
                const addConvertData = JSON.parse(addConvert);
                convert = { ...convert, ...addConvertData };
            } catch (e) {
                errors.push("Invalid abilities JSON");
            }
        }

        const [convertedTarget, errorList] = convertAbils(abilities, convert);
        target = convertedTarget;
        errors.push(...new Set(errorList.map(e => e.message)));
    };

    async function handleFile(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
        const file = event.currentTarget.files?.[0];
        if (!file) {
            return;
        }

        const sampleFile = file.name;
        if (sampleFile.endsWith('.gz')) {
            sample = await readGZ(file);
        } else if (sampleFile.endsWith('.json')) {
            sample = await readJSON(file);
        } else {
            alert('Unsupported file type.');
        }

        if (!sample) {
            return;
        }
        charNames = sample.character_details?.map((detail) => detail.name) ?? [];
        charName = charNames[0] ?? ''; // default
    }

    $: ignoredMods = ignoredMods.filter(mod => availabledMods.includes(mod));
</script>

<svelte:head>
    <title>gcsim to go-multiopt</title> 
</svelte:head>

<main>
    <h1>gcsim to go-multiopt</h1>

    {#if sample == null}
        Run the sim, open the "Sample" tab and press "Download".
        <br>
    {/if}
    <input
        type="file"
        accept=".gz,.json"
        on:change={handleFile}
    />

    {#if charNames.length > 0}
        <label for="charName">Character:</label>
        <select bind:value={charName}>
            {#each charNames as name}
                <option value={name}>{name}</option>
            {/each}
        </select>
    {/if}
    
    {#if sample != null}
        <p><button on:click={updateCharacterAbils}>Generate</button></p>
    {/if}

    {#if availabledMods.length > 0}
    <h2>Ignored Mods</h2>
        {#each availabledMods as mod}
            <div>
                <input type="checkbox" bind:group={ignoredMods} value={mod} />
                {mod}
            </div>
        {/each}
    {/if}

    {#if errors.length > 0}
        <h2>Errors</h2>
        <ul>
            {#each errors as error}
                <li>{error}</li>
            {/each}
        </ul>

        You can manually add abilities that aren't on the site (JSON, "Ability Name in gcsim": ["path", "in", "genshin-optimizer"]).
        <br>
        <textarea
            id="addConvert"
            bind:value={addConvert}
            placeholder={addConvertPlaceholder}
        ></textarea>
    {/if}

    {#if target != null}
        <h2>Result</h2>
        <button use:copy={JSON.stringify(target)}>Copy</button>
        <pre>{JSON.stringify(target, null, 2)}</pre>
    {/if}
</main>
