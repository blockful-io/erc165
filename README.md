# erc165
Functions for generating interface ID from smart contracts following ERC-165 requirements

## demo

[site](https://eip165-demo.vercel.app)


## Setup :gear:

**install**


```
yarn add eip165
```
ou  
```
npm install eip165
```

## How to start developing and testing this project :clipboard:

1. Before you start, make sure your environment is ready for React development, as per the official instructions described here. [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/).
2. Clone this repository using the command ``` git clone < project-url.git > ```.
3. Install project dependencies using ``` yarn ```.

## Good habits :thumbsup:

### GIT

#### Naming the branches

Development branches must be created from the dev branch, checking out with the command `git checkout dev`.

1. If the branch is for a new feature, create it with the name `feature/branch-name` with the command `git checkout -b feature/branch-name`.
2. If the branch is from a patch, create it with the name `fix/branch-name` with the command `git checkout -b fix/branch-name`.
3. If the branch is from a release, create it with the name `release/branch-name` with the command `git checkout -b release/branch-name`.


> Remember to create the branch name in English, using the ES6 standard, with the name in lowercase and separated by a hyphen.

#### Commit pattern

The commits in Git can be done in Portuguese and describing well what the actions present in this commit. Remember to commit at least once a day. You can also do several commits to separate well what is going into the repository. Imagining a commit to fix the text of a button, you could use the command `git commit -m "fix callback"` and the commando `git push` to push code and commit to repository.

You can also commit 'broken' code to the repository, remembering to add the initials of `Work In Progress` at the beginning of the commit message, for example: `git commit -m "[WIP] fix callback"`.
