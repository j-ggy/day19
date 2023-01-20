<script lang="ts">
    import type { NFT } from "../domain/nft"
  import truncateDescription from "./utils/truncateDescription";
    export let nft:NFT;
</script>

<div class="nft">
    <div class="aligned">
        {nft.name} <br />
        <img src={nft.imageURL} /> <br  />
    </div>
{truncateDescription(nft.description)} <br />
</div>

<style>
    img {
        max-width:250px;
        max-height: 320px;
    }
    .aligned {
        align-self:center;
        text-align: center;
    }
    .nft {
        display: flex;
        flex-direction: column;
        vertical-align: top;
        background-color: rgb(127, 159, 191);
        color: white;
        padding: 1rem;
        height: 400px;
        width: 250px;
        overflow: hidden;
        border-radius: 10px;
}
</style>