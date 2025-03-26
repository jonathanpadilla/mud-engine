module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
  tagFormat: "${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", { "npmPublish": true }],
    "@semantic-release/github",
    "@semantic-release/git"
  ]
}