import type { NFT } from "../../domain/nft"
import fetchEthereumNfts from "./fetchEthereumNfts";
import fetchImxNfts from "./fetchImxNfts";
// import fetchSolanaNfts from "./fetchSolanaNfts"

async function fetchNftsByAddress(ethereumAddress:string): Promise<NFT[]> {
    const imxNfts: NFT[] = await fetchImxNfts(ethereumAddress);
    const ethereumNfts: NFT[] = await fetchEthereumNfts(ethereumAddress);
    // const solNfts: NFT{} = await fetchSolanaNfts(solanaAddress);
    return imxNfts.concat(ethereumNfts);
}

export default fetchNftsByAddress;