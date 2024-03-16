setOnClick(eById("submit-game-to-leaderboard"), () => {
  const score = getScore();
  if (score > 0) {
    submitScore(score);
  }
});
