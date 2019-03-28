# demo
git 回退，日志
HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
git reset --hard "HEAD^" --- 回退到上次提交,^几个代表回退到前几个
git reset --hard commit_id --可以回到指定的版本库

穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
git log -- 查看从近到远的提交日志
git log --pretty=online 可以减少输出信息

要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。
git reflag 可以查看提交的版本库


git的工作区和暂存区
管理修改:git add把修改的内容都放到暂存区，如果先不git add到暂存区，就不会添加到commit中去了
撤销修改:git checkout -- filename 回到最近一次git commit 或者 git add时的状态
        git reset HEAD <file> 把暂存区的修改撤回，回到工作区 git reset既可以回退版本，也可以把暂存区的修改回退到工作区，当我们是用HEAD时,表示最新版本
        然后在丢弃工作区的修改 git checkout -- filename



