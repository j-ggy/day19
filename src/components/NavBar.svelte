<script lang="ts">
  import ConnectWallet from "./buttons/ConnectWallet.svelte";
  import account from "../store/account";
  import displayEthereumAddress from "./utils/displayEthereumAddress";
</script>

<nav class="navbar">   
    <li id="title-item">NFT VIEWER TITLE</li>
    <ul class="nav-buttons">
        {#if $account}
          <li id="addr-text">{displayEthereumAddress($account)}</li>
        {:else}
          <li class="nav-item" style="margin-right:45px"><ConnectWallet /></li>
        {/if}
    </ul>
</nav>


<style>


nav {
  background-color: rgba(150, 74, 160, 0.738);
  display: flex;
  justify-content: space-between;
}

#title-item {
  display: inline-block;
  padding: 1em;
  font-size: 1.5em;
  font-weight: 500;
}

.nav-buttons {
  list-style: none;
}
.nav-item {
  display: inline-block;
  padding: 14px 15px;
  text-decoration: none;
}



#addr-text {
  padding-top: 24px;
  padding-right: 85px;
}

</style>