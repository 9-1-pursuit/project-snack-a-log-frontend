# Snack-A-Log Pair Programming Lab

## Overview

In this lab activity, you will practice collaborating on a project. You'll be building an app to track snacks and whether or not they are healthy.

## Getting Started

- Go through [working in groups](./working-in-groups.md) with your partner(s).
- Choose one person to be the owner, the other person(people) will be collaborators.
- This person should use this repository as a template (look for the big green button). This will create it as a type of fork that is not tied back to the original repository.
- Then, go into settings and add your partners as collaborators.
- The collaborators will get an email asking them to confirm joining the repository.
- Everyone should now clone the repo onto their machines.

### Practice Collaboration with GitHub

- Everyone should go into the repository and `touch [yourname].md`
- In `[yourname].md` put a fun fact about yourself.
- Add, commit and push this to the `main` branch.
- Once everyone is done, `git pull` the changes down.

In this case, all of you worked in different files and had a very small task to complete.

Let's create a more realistic workflow for a job.

#### Creating A Development Branch

The `main` branch is the production branch. This is what clients see and this is what is deployed online. It is very important to try to avoid pushing breaking changes to this branch.

What is better practice is to have a branch like `dev` where changes are added and tested before they are merged into `main`. Let's give it a try.

- One team member should run `git switch -c dev` - this will create a new branch called `dev` and switch to it. Run `git branch` to confirm—it should show a star next to your new `dev` branch.
- That same team member should now run `git push origin dev`. This will push the `dev` branch to the remote "origin"... that is, GitHub.

Now _everyone_ should:

- `git switch -c dev` - this will create a new branch called `dev` and switch to it.
- `git branch` to confirm you are now on the `dev` branch.
- `git switch -c [yourname]` - to make a new branch with your name. This will create it based on what's currently on the `dev` branch, since that's where you were when you made it.

On the job, you would use a branch name that describes what you are working on—`bug-fixes`, `new-feature` etc. But for practice, we will just go with your name so you can see how your work merges with your collaborators' work.

- Go back to your markdown file and add another fun fact.
- git add, commit, but this time `git push origin [yourname]`
- Go to GitHub and you should now see new branches.
- Create a pull request for each branch into `dev`. Don't compare it to `main`... we don't touch that until we've got a real release version!

As best practice, someone else should merge your changes in. That gives them a chance to review your work and discuss the changes.

Once everyone's work is merged into `dev`, everyone on their own machines should:

- `git switch dev`
- `git pull origin dev`

and you should see the changes to `dev` (all your updated markdown files).

One person should now confirm everything is in order with the dev branch (all markdown files are there and updated). Then, since you've added a couple of working features (or at least, working fun facts), you have a new release—create a pull request to merge `dev`'s' changes into `main`.

To bring the changes into the `dev` (or other) branch, make sure you are on the correct branch, then `git pull origin main` - in this case, since `dev` is what we merged into master, there should be no changes.

- switch to your branch (`git switch [yourname]`) and try `git pull origin main` - to get the latest changes from `main` to your branch.

## Workflows

You will likely make mistakes. You will work on the wrong branch, you will push to the wrong branch, you will create merge conflicts. All of this is really important! Now is the time to make these mistakes and learn how to deal with them, rather than on the job.

For now, don't worry about best practices in fixing mistakes, just communicate with your partner(s) about how to fix it amongst yourselves and continue onwards. As you practice, you will get better at finding solutions and using them.

At first, group work goes very slowly as you all are learning each other's work styles and learning how you communicate best. There is a lot to work out as far as who works on what. Don't get discouraged if it is a slow start. It will get better.

You should also deploy a very basic version of your app ASAP. The less code you have, the easier it will be to debug and get deployed. The longer you hold off, the harder it will be to find what is wrong.

## Getting Ready for Interviews

Often, interviewers are less interested in the technical aspects of group projects and far more interested in:

- How do you work in a group? (Pair program, work on own, but have check-ins?)
- How do you resolve disagreements for a project?
- How do you resolve if people in your group have very different work styles?
- How do you decide who works on what?
- How do you organize your project (did you use Trello or another tool?)
- How do you resolve merge conflicts?

## Specific README's

- [Back-end README](./README_BE.md)
- [Front-end README](./README_FE.md)
