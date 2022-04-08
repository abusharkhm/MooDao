import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "MooDAO",

      // This is the location of our governance token, our ERC-20 contract!
      voting_token_address: "0x065AF9Ee9cC90cC2dbE6a7cBA5AEE528a7eF01a1",

      // Members can vote immediately when a proposal is created.
      voting_delay_in_blocks: 0,

      // Voting period after a proposal is made. Set to 1 day.
      voting_period_in_blocks: 6570,

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 0,

      // Minimum # of tokens a user needs to be allowed to create a proposal. Set to 0.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();