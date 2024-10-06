# Git

```sh
# check the difference between local and staged files
git status

# add to the stage
git add <file_name>
# add files at once
git add .

# commit the changes in the stage
git commit -m “comment”

# connect remote and local branch
git push -u origin < branch_name>
# upload local files to remote
git push

# delete file from local repo and add to the stage as a deleted file
git rm <file_name>
# delete a cashed file?
git rm --cached -r <file_name>

# undo a staged file
git reset file_name ➡️ delete from the stage
# undo all changes
git reset HEAD .
# undo a staged file that is deleted in local repo
# *** the deleted file won't be restored ***
git reset HEAD <file_name>

git diff
# check the difference between Branch1 and Branch2
git diff Branch1 Branch2

# temporary stash files to change branch
git stash
# add a comment
git stash save “comment”
# stash a particular file
git stash push --file_name
# check stashed files
git stash list
# get back stashed files and delete the files from stash
git stash pop
# get back a particular stashed files
git stash apply stash@{Number}
# delete a particular stashed file
git stash drop stash@{Number}
# delete all stashed files
git stash clear

git amend -m “comment” ➡️ change a comment just I committed

git merge Branch_Name ➡️ merge branches

git branch ➡️ show all branch names
git branch <Name> ➡️ create new branch
git branch -d <local-branch> ➡️ delete the local branch
git branch -m New_name ➡️ change branch name
git branch -vv ➡️ show origin branch?

git remote add origin main ➡️ only first time?

git fetch? ➡️

git pull <Branch Name> ➡️

git clone URL

git rebase -i <hash>

git squash
```
