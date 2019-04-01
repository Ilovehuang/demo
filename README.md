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

git的删除数据
想要删除文件的情况
添加一个文件,git add filename ,git commit -m "add filename",提交到了版本库
            rm re.txt删除了文件。工作区和版本库不一致了
            git rm re.txt从版本库删除文件,并且提交git commit

git的分之管理
创建分支 git checkout -b dev 创建并且切换到分支
查看当前分支 git branch;
查看分支和病情可 git log --graph --pretty=oneline --abbrev-commit


git Bug分支
git stash   --- 把工作现场存储在某一个地方
git stash pop -- 把工作的内容恢复也把stash的内容给删了


git Feature分支

开发一个新feature，最好新建一个分支
如果要丢弃一个没有被合并过的分支，可以通过git branch -D <name>强行删除。

git 多人协作
查看远程库信息，使用git remote -v；

本地新建的分支如果不推送到远程，对其他人就是不可见的；

从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；

在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。

