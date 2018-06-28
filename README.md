# Geckos-Team-04
Goal of this project is to create clone of [thumbtack.com](thumbtack.com) website. | Chingu Voyage-6 | https://chingu.io/

## Thumbtack clone
See the project here: https://thumbtack.com
See the clone here: https://thumbtack-clone.herokuapp.com

[![Waffle.io - Issues in progress](https://badge.waffle.io/chingu-voyage6/Geckos-Team-04.png?label=in%20progress&title=In%20Progress)](http://waffle.io/chingu-voyage6/Geckos-Team-04)

https://travis-ci.org/chingu-voyage6/Geckos-Team-04.svg?branch=dev

# Development

## Git Branches

 - master - Current production release. Updated only from development branch PRs.
 - dev - Candidate for next release, nothing gets pushed into this branch. Code gets tested and undergoes peer review before being pulled into this branch from other developer branches.
 - developer branches - 4 types of branches: feature, bug, refactor and style. This is where work gets done, when creating branch, type is specified first followed by a name like so `feature/carousel` and as Waffle is used to track progress add number of the issue `feature/carousel-#13.

 ## Waffle

 To enable updating of the issues on Waffle, first create an issue and add issue number to the branch name feature/carousel-#13, when the branch is pushed remotely, Waffle automatically moves the card to "In Progress" column. After done with work, head over to GitHub and issue a pull request back to dev branch, with standard GitHub text `closes #13`, this will let GitHub know that the pull request should close issue when it is successfully merged and also issue on Waffle will be moved into "Done" column.

