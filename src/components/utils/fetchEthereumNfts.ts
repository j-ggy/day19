import { NFTType, type NFT } from "../../domain/nft";
import { Network, Alchemy } from 'alchemy-sdk';



async function fetchEthereumNfts(address: string): Promise<NFT[]> {
    const settings = {
        apiKey: "gfTrK6HUFMszsYP2cRbzBGDnZIoGJAHr",
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const nfts = await alchemy.nft.getNftsForOwner(address);
    const domainNfts: NFT[] = [];

    nfts.ownedNfts.forEach(function(alchemyNft) {
        const media = alchemyNft.media
        const imageURL = media.length ? media[0].gateway : "";
        const nft: NFT = {
            name: alchemyNft.title,
            description: alchemyNft.description,
            imageURL: imageURL,
            nftType: NFTType.Ethereum
        }

        domainNfts.push(nft);
    })
    return domainNfts;
}

export default fetchEthereumNfts;