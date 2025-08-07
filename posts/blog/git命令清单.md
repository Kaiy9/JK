# Git 命令清单

## 1. 新建 git 仓库

```sh
# 在当前目录新建一个 Git 仓库
git init

# 新建一个目录，将其初始化为 Git 仓库
git init [project-name]

# 下载一个项目和它的整个代码历史
git clone [url]
```

## 2. 配置

```sh
# 显示当前的Git配置
git config --list

# 设置提交代码时的用户信息
git config [--global] user.name "名称"
git config [--global] user.email "邮箱地址"
```

## 3. 向暂存区添加 / 删除文件

```sh
# 添加指定文件或指定目录到暂存区
git add [文件路径 / 目录路径]

# 添加所有文件到暂存区
git add .

# 停止追踪指定文件并保留在工作区
git rm --cached [文件路径]

# 删除工作区文件并且提交到暂存区
git rm [文件路径]
```

## 4. 代码提交

```sh
# 提交暂存区到仓库区
git commit -m [提交信息]

# 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）
git commit --amend -m [提交信息]
```

## 5. 分支

```sh
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [分支名]

# 新建一个分支，并切换到该分支
git checkout -b [分支名]

# 新建一个分支，指向指定commit
git branch [分支名] [commit id]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [分支名] [远程分支名]

# 新建一个空白分支
git checkout --orphan [分支名]

# 切换到指定分支，并更新工作区
git checkout [分支名]

# 切换到上一个分支
git checkout -

# 合并指定分支到当前分支
git merge [分支名]

# 删除分支
git branch -d [分支名]

# 删除远程分支
git push origin --delete [分支名]
git branch -dr [remote/分支名]
```

## 6. 标签

```sh
# 列出所有 tag
git tag

# 根据当前 commit 创建一个 tag
git tag [tag]

# 根据指定 commit 创建一个 tag
git tag [tag] [commit id]

# 删除本地 tag
git tag -d [tag]

# 删除远程 tag
git push origin :refs/tags/[tagName]

# 查看 tag 信息
git show [tag]

# 提交指定 tag
git push [remote] [tag]

# 提交所有 tag
git push [remote] --tags

# 新建一个分支，指向某个tag
git checkout -b [分支名] [tag]
```

## 7. 查看信息

```sh
# 显示变更的文件
git status

# 显示当前分支的版本历史
git log

# 显示commit历史，以及每次commit发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git log -S [keyword]

# 显示某个文件的版本历史，包括文件改名
git log --follow [文件路径]
git whatchanged [文件路径]

# 显示指定文件相关的每一次diff
git log -p [文件路径]

# 显示过去5次提交
git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
git blame [file]

# 显示暂存区和工作区的差异
git diff

# 显示工作区与当前分支最新 commit 之间的差异
git diff HEAD

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"

# 显示当前分支的最近几次提交
git reflog
```

## 8. 提交

```sh
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [name] [url]

# 删除远程仓库
git remote remove [name]

# 查看远程仓库地址
git remote get-url [name]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```

## 9. 撤销

```sh
# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
git reset [文件路径]

# 重置暂存区与工作区，与上一次 commit 保持一致
git reset --hard

# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
git reset [commit id]

# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
git reset --hard [commit id]

# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
git reset --keep [commit id]

# 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit id]

# 暂存操作
# 只暂存被追踪的文件
git stash
# 暂存所有文件并添加说明
git stash [save '说明信息'] [-u]
# 查看 stash 列表
git stash list
# 取出最近一次的 stash
git stash apply
# 取出 stash 列表里对应数字的暂存
git stash apply 数字
# 取出并删除最近一次的 stash
git stash pop
# 清空所有 stash
git stash clear
```

## 10. 日志

```sh
# 查看提交过的完整日志
git log

# 查看精简日志（精简版本号和提交信息）
git log --oneline

# 查看精简日志（完整版本号和提交信息）
git log --pretty=oneline

# 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）
git reflog
```

---


# Git 常用命令

## 删除本地分支以及远程分支

```shell
// 修改本地分支
git branch -m old_branch new_branch

// 删除本地分支
git branch -d old_branch

// 删除远程分支
git push origin :old_branch

// 新增远程分支
git push --set-upstream origin new_branch

// 清理无效的远程追踪分支
git remote prune origin

// 强制更新远程分支
git remote update origin --prune

// 从远端加载并在本地创建一个分支
git checkout -b myBranch origin/myBranch

// 强制git pull覆盖
git fetch --all
git reset --hard origin/master
git pull

// 撤回已提交但未推送（保持修改状态）
git log # 找到id
git reset id
```

## 修改远程分支名字

```shell
# 1. 切到要修改分支下
git checkout br_rename_old

# 2. 修改本地分支名字
git branch -m old_name new_name

# 3. 将远程分支删掉
git push origin --delete old_name

# 4. 将本地分支推送到远程
git push --set-upstream origin new_name
```

## 重置到某个commit

```shell
git log
git reset --hard <commitid>
git push origin HEAD --force
```

## 使用submodule
```shell
# 添加
git submodule add <new_submodule_url> <submodule_path>

# 删除
git submodule deinit <submodule_path>
git rm <submodule_path>
rm -rf .git/modules/<submodule_path>
```

## 强制改变仓库

```shell
git remote set-url origin https://github.com/yqchilde/xxx.git
git config user.name "yqchilde"    
git config user.email "yqchilde@gmail.com"             
git push origin main 
```