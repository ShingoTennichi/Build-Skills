# Git

```sh
git add File_Name—add to stage_index
git add . —add to stage_index
git rm Deleted_File_Name—add to stage_index
git rm --cached -r .DS_Store—delete a cashed file
git reset File_Name—delete from stage_index
git reset HEAD .—back to HEAD condition
git status— check between stage_index and Local_Folder
git diff ??—
git diff Branch1 Branch2 —check the difference between Branch1 and Branch2
git stash—temporary stash files to change branch
git stash save “comment”—add a comment
git stash push --File_Name—stash a particular file
git stash list—check stashed files
git stash pop—get back stashed files and delete the files from stash
git stash apply stash@{Number}—get back a particular stashed files
git stash drop stash@{Number}—delete a particular stashed file
git stash clear—delete all stashed files
git commit -m “comment” — save stage_index to stage_commit with message
git amend -m “comment”— change a comment just I committed
git push — update to GitHub
**git push -u origin BranchName—register to remote repo**must do this code when you make New Branch Name <—! -u and -set-upstream are the same  !—>
git merge Branch_Name—merge branches
git branch—show all branch names
git branch <Name>—create new branch
git branch -d <local-branch>—delete the local branch
git branch -m New_name— change branch name
git branch -vv—show origin branch?
git remote add origin main—only first time?
git fetch?—
git pull <Branch Name>—
git clone URL
```
