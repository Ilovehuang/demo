# demo
HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
git reset --hard "HEAD^" --- 回退到上次提交,^几个代表回退到前几个
git reset --hard commit_id --可以回到指定的版本库

穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
git log -- 查看从近到远的提交日志
git log --pretty=online 可以减少输出信息

要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。
git reflag 可以查看提交的版本库

