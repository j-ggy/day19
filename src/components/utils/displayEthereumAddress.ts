function displayEthereumAddress(address:string): string {
    if (!address) return address;

    return (
        address.slice(0,6) + '..' + address.slice(address.length - 4, address.length)
    ) 
}

export default displayEthereumAddress;