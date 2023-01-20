import {ethers} from "ethers";
import type { NFT } from "../../domain/nft";
import account from "../../store/account";
import nfts from "../../store/nfts";
import fetchNftsByAddress from "./fetchNftsByAddress";
  type EthereumWindow = {
      ethereum: any;
  }
  async function connectMetamask() {
      const provider = new ethers.providers.Web3Provider((window as any as EthereumWindow).ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const providedAccount = accounts[0];
      account.set(providedAccount);
      const fetchedNfts: NFT[] = await fetchNftsByAddress(providedAccount);
      console.log(fetchedNfts)
      nfts.set(fetchedNfts);
  }

export default connectMetamask;