// import { generateNonce, generateRandomness } from "@mysten/zklogin";

// const FULLNODE_URL = "https://fullnode.devnet.sui.io"; // replace with the RPC URL you want to use
// const suiClient = new SuiClient({ url: FULLNODE_URL });
// const { epoch, epochDurationMs, epochStartTimestampMs } =
//   await suiClient.getLatestSuiSystemState();

// const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
// const ephemeralKeyPair = new Ed25519Keypair();
// const randomness = generateRandomness();
// export default nonce = generateNonce(
//   ephemeralKeyPair.getPublicKey(),
//   maxEpoch,
//   randomness
// );
