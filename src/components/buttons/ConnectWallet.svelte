<script lang='ts'>
  import connectMetamask from "../utils/connectMetamask";
  import connectGME from "../utils/connectGME";
//   import connectPhantom from "../utils/connectPhantom"

</script>

<button on:click={async () => await connectMetamask()}>MetaMask</button>
<button on:click={async () => await connectGME()}>GME Wallet</button>
<!-- <button on:click={async () => await connectPhantom()}>Phantom Wallet</button> -->

<style>
</style>