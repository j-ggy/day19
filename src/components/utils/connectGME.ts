import {ethers} from "ethers";
import type { NFT } from "../../domain/nft";
import account from "../../store/account";
import nfts from "../../store/nfts";
import fetchNftsByAddress from "./fetchNftsByAddress";
import detectGamestopProvider from "@gamestopnft/detect-gamestop-provider";

  type EthereumWindow = {
      ethereum: any;
  }
  async function connectGME() {
    const gmeProvider = await detectGamestopProvider()
    const provider = new ethers.providers.Web3Provider(gmeProvider);
    const accounts = await provider.send("eth_requestAccounts", []);
    const providedAccount = accounts[0];
    account.set(providedAccount);
    const fetchedNfts: NFT[] = await fetchNftsByAddress(providedAccount);
    console.log(fetchedNfts)
    nfts.set(fetchedNfts);
  }

export default connectGME;