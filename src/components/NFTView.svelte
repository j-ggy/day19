<script lang="ts">
    import nfts from "../store/nfts"
    import Nft from "./NFT.svelte"
</script>

{#if $nfts && $nfts.length}
  <div class="nfts-grid">
    {#each $nfts as nft}
        <Nft {nft} />
    {/each}
  </div>
{:else}
    Loading...
{/if}

<style>
    .nfts-grid {
        max-width:1100px;
        margin: 0 auto;
        display: grid;
        gap: 5rem;
    }
    @media (min-width: 600px) {
        .nfts-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 900px) {
        .nfts-grid { grid-template-columns: repeat(3, 1fr); }
    }

</style>