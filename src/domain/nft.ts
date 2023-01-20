enum NFTType {
    Ethereum,
    IMX,
    Solana
}

type NFT = {
    imageURL: string;
    name: string;
    description: string;
    nftType: NFTType;
}

export { NFTType };
export type { NFT };
