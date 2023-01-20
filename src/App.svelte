<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import NftView from "./components/NFTView.svelte";
  import account from "./store/account"

</script>

<NavBar />

{#if $account}
  <NftView />
{:else}
  Connect Wallet to see your NFTs
{/if}
<style>

</style>