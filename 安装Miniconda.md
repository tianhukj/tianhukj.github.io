# \[python\]我们应该如何安装Miniconda虚拟环境？（详细）


### 一、什么是Conda?

&nbsp;       Conda是一个开源的包管理和[环境管理器](https://so.csdn.net/so/search?q=%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86%E5%99%A8&spm=1001.2101.3001.7020)，它可以生成一个虚拟的开发环境，让这个环境的包或者一些依赖与外界完全独立。在日常中，我们使用最多的是python的Conda环境。

### 二、我们为什么需要Conda?

&nbsp;       大家可能会有疑问，我们可以把python等环境或者依赖直接安装在操作系统中·，那我们为什么还需要Conda，那么我们下面来看一个例子。

&nbsp;       假如，某天我打开了github,我看到了一个我感兴趣的开源项目，我观察到它依赖了这些环境![](https://i-blog.csdnimg.cn/direct/15646cc9473541529ff3e53eb85f24aa.png)

我安装了这些环境，并且运行了这些项目。在另一个某天，我又发现了一个我感兴趣的开源项目，它依赖了以下环境![](https://i-blog.csdnimg.cn/direct/258c0a3b6af746ddb1431b7e53d9ee3d.png)

在我部署这个项目时我发现它依赖了torch1.10然而在我部署第一个项目时，我已经安装了torch2.30,此时的环境已经产生冲突了，我应该怎么解决？是卸载掉原来的项目的环境还是换一台电脑来解决呢？其实都不是，遇到环境冲突的问题我们应该使用虚拟环境来解决。所以我们要使用到Conda。

### 三、我们应该怎么理解Conda

&nbsp;       Conda作为一个虚拟环境，其独有的特点就是与系统中的环境独立，每个Conda环境之间也相对独立。我们可以使用Conda创建一个独立的环境来运行我们的项目。假如把我们的操作系统比作一个很大的箱子，箱子内部有很多的小盒子，一个盒子就是一个环境，这些盒子里面的东西只能在盒子里面活动，不会干涉到盒子外面。就像我们的虚拟环境一样，所有的虚拟环境都是自己内部可以产生变化，不会影响到其它环境和整个系统。

### 四、Conda安装包的下载

&nbsp;       我们目前使用最多的Conda有Anaconda和Miniconda。从名字就能看出Miniconda是Anaconda的小化精简版。Anaconda里面附带了大量的用户可能使用的包和组件，Miniconda中用户自定义程度较高，所以这里我们选择安装Miniconda。我们可以直接在浏览器中搜索Miniconda。

![](https://i-blog.csdnimg.cn/direct/b4523f34e022422fb3dea9bab6cd6fa1.png)

如果你也是使用的edge浏览器，那么你搜索到的第一个应该就是Anaconda的官网了。虽说我们要下载的是Miniconda但是还是要去Anaconda的官网，毕竟Miniconda也是Anaconda的一部分嘛。如果你搜索不到跟我一样的官网，或者是使用的浏览器跟我不一样，那就可以考虑点击下面的Anaconda官网链接，这个链接会直接跳转到和我同一个界面。官网链接：[Miniconda — Anaconda documentation](https://docs.anaconda.com/miniconda/ "Miniconda — Anaconda documentation")

进入的速度可能会因为网络环境不同而不同，但是应该大部分的地区都是可以打开的。如果你实在打不开可以尝试更换网络环境或者使用一些正向代理手段。

如果你成功进入，那么应该可以看到以下界面：

![](https://i-blog.csdnimg.cn/direct/aabcd4d57efc4b0681d5b6ffb46f235d.png)

尽管网站是英文的，但是我们在这个网站的操作很少，所以大家也不用慌。我们往下滑，看到下面这个被我框出的地方。

![](https://i-blog.csdnimg.cn/direct/06d4a3e93851470aae29adcc5eae8262.png)

这里有windows系统的下载链接也有Mac系统的下载链接，当然下面还有Linux的。这次我们主讲在windows中安装Miniconda。我们可以看到这个框分了三个栏。

![](https://i-blog.csdnimg.cn/direct/c6cb03e250494435845c730cf280530b.png)

第一个栏就是我们操作系统了，第二个栏是一个可以点击的下载链接，第三个栏是下载这个文件的哈希值，用来校验这个文件的完整性。我们现在就可以点击第二栏中蓝色的下载链接下载Miniconda的安装包了。点击以后浏览器应该可以弹出下载框。![](https://i-blog.csdnimg.cn/direct/bd2364554c394e9885e1ffc122b8d9a6.png)

我们把文件下载到一个我们找得到的地方。我这里是在我的磁盘中新建一个叫“Miniconda”的文件夹。下载的速度可能比较慢，请大家耐心等待。

![](https://i-blog.csdnimg.cn/direct/82bfaf799568429e91b5d00d719c40d6.png)

下载好以后如图所示。这样我们的Miniconda的安装包就下载好啦。

### 五、安装Conda

&nbsp;       我们双击这个安装包，不出意外的话你应该能看到下面这个安装引导程序。

![](https://i-blog.csdnimg.cn/direct/2b8f3010ccef4e97b6bd49b3bfd2fa2f.png)

打开了这个界面以后我们可以直接点击“Next”进入下一步。

![](https://i-blog.csdnimg.cn/direct/be9574d894ee43cf8faba28d69670620.png)

这里是问我们同不同意它的协议，我们点击“I Agree”表示我同意，点击以后就进入了下一步。

![](https://i-blog.csdnimg.cn/direct/46e7f4da7926497f99041ff83f681121.png)

这里有两个选项，第一个是“只为我安装”，第二个是“为这个计算机的所有用户安装”，我这里选择的是只为我安装。然后点击“Next”进入下一步。

![](https://i-blog.csdnimg.cn/direct/1cc8c57027aa46ffaf94ecce6b0b19d8.png)

这里它让我们选择一个安装路径，我们选择一个合适的位置安装即可，但是不建议C盘哦，选择好位置以后可以看到它下面也告诉我们了安装所需的空间是412.3MB，我们确定好安装路径以后点击“Next”进入下一步。

![](https://i-blog.csdnimg.cn/direct/6da5f0d31bf14d6e8be8cb1446dcb791.png)

如果你同我一样遇到了这个问题，那这是正常的，这个问题表示，安装的文件夹不为空，也就是文件夹中有东西，我们选择一个空的文件夹再次点击“Next”。

![](https://i-blog.csdnimg.cn/direct/bb2c925192294137b3e44b6d7c2e9b7e.png)

如果你同我一样遇到了这个问题，很有可能是你选择的路径中有中文或者其它编码的字符，我们尽量使用纯英文的路径，记住，是整个路径。我们更换好路径并且确定了整个路径都没有中文以后再次点击“Next”。

![](https://i-blog.csdnimg.cn/direct/5fc3aee4ae4a487197a07de1c748a5cc.png)

我们可以看到这个界面中有四个选项，我们一一来解读。

第一个选项问我们是不是要创建快捷方式，这里我们打上勾也就是要创建快捷方式。

第二个选项问我们是不是要将Conda添加到环境变量，这里我们不打勾，官方也不推荐我们添加。我们后续会手动添加。

第三个选项是要不要把Miniconda做为系统python使用，这里看个人，如果你的系统中已经有你安装的python环境了，那就不用选择这个了。如果你是新手，那么还是可以勾上的，毕竟这会帮你省下一个安装python的时间嘛。我这里将第三个选项打勾了，后面我们可以测试效果。

第四个选项是问我们要不要在安装完成以后清除缓存，我们这里可以打勾。![](https://i-blog.csdnimg.cn/direct/1e13aa2efb0e4fcc9d98f2f877a1900c.png)

选择好以上后我们点击“Install”开始安装。![](https://i-blog.csdnimg.cn/direct/2c6858a7564f49a5a7b60eb0c1ec58f5.png)

等待进度条走完。

![](https://i-blog.csdnimg.cn/direct/8cdb77078df94429badc6aba2920d798.png)

当下面的“Next”亮起时就表示安装已经完成了，我们点击“Next”。

![](https://i-blog.csdnimg.cn/direct/5d586800e07245d99bed8c6d95ef4943.png)

在下面的界面中我们可以看到两个选项，我们都不要打勾，下面还有一个“Finish”，我们点击。窗口被关闭，至此我们的安装已经完成。

如果你之前勾选了将Miniconda作为系统主python那个选项的话，我们到这一步可以简单的验证一下。我们按“win+R”打开运行框，在运行框中输入“powershell”并且回车。

![](https://i-blog.csdnimg.cn/direct/b490fbd164414adc82eb3110cfcd448d.png)

回车以后应该就能看到下面这个界面了。![](https://i-blog.csdnimg.cn/direct/b14be150f6b4453bbe02cdb77781acdf.png)

当然，你的背景色可能跟我不一样，不过不影响。我们在这个命令框中输入“python”后回车。

![](https://i-blog.csdnimg.cn/direct/66301c33e974497dad5bfbedcbb2ff1d.png)

如果你以前没安装过python并且在安装了Miniconda以后，输入“python”回车后出现了跟我一样的输出，就说明你的Miniconda是安装成功的。

### 六、将Conda添加到环境变量

&nbsp;       我们为了让我们的conda在任何地方都能被找到所以我们要将其添加到环境变量，我们右键此电脑，点击属性。

![](https://i-blog.csdnimg.cn/direct/03ad59a4fe3b48618f935eacb9ecc72f.png)

注意右键的是这里的此电脑。右键后点击属性应该就能看到下面这个界面了。

![](https://i-blog.csdnimg.cn/direct/b071b0a6aaec48d2962513776880bed1.png)

我们这里点击高级系统设置。![](https://i-blog.csdnimg.cn/direct/40c152e009ec4264ab05b49b49836fbd.png)

在弹出的窗口中点击“环境变量”。

![](https://i-blog.csdnimg.cn/direct/b52da8cf14474929a359ae5370fa2cbe.png)、

完成上面这个步骤以后，你应该就能看到这个界面了，我们要把Conda安装到系统变量。我们将“系统变量”往下滑找到“Path”。

![](https://i-blog.csdnimg.cn/direct/c99ee394746b4b4382d99fb105509fc3.png)

找到“Path”以后我们点击一下它，我们再点击“编辑”。

![](https://i-blog.csdnimg.cn/direct/54bde597a012452887586d9c8986fd02.png)

一定记得是点击它以后我们再点击编辑。

随后我们就会打开这个窗口

![](https://i-blog.csdnimg.cn/direct/1f6011a449d5430797b5f8bd0537a769.png)

我们点击“新建”，再点击“浏览”，这个顺序一定不能错了。否则你可能会修改到别的系统变量。

![](https://i-blog.csdnimg.cn/direct/b1218ed4ced04d5691b5a3c5beb209ee.png)

请记住一定是上图这个顺序。我们现在把Conda的路径添加到环境变量。

![](https://i-blog.csdnimg.cn/direct/0f1e818fb26a4b528a8340d3bea288ec.png)

我们需要添加这几个路径为环境变量，这些路径都在你的Conda安装目录下。

![](https://i-blog.csdnimg.cn/direct/bb4716d876cb4ff491ddbc2e0e2e43d7.png)

添加完成后，我们每个窗口都点击“确定”，一路确定下来。

### 七、验证Conda安装

&nbsp;       经过了上面的步骤，我们的Conda已经安装完成。下面我们进行验证。我们继续使用“win+R”打开运行框，输入“cmd”回车。请注意这里使用的是cmd，如果使用powershell会出一定的问题。

![](https://i-blog.csdnimg.cn/direct/a12efc816ef54fc4b8fe908071df9f71.png)

我们在cmd命令框中输入“conda”并且回车。

![](https://i-blog.csdnimg.cn/direct/fc6ffb62357b4ad28670b850b58865ad.png)

如果出现了我这样的效果，那么说明你的conda已经安装成功了。如果你被提示命令找不到，或者这个命令可能是外部命令之类的。这意味着你安装过程中可能失败，在下面第九节我将带你解决这些问题。

### 八、如何使用Conda

#### 1.创建Conda虚拟环境

&nbsp;       我们可以使用下面这个命令来创建一个Conda的虚拟环境。

```bash
conda create --name test python=3.8
```

&nbsp; 这里的conda就表示的conda，create是conda创建环境指令，--name是一个选项，我们可以为我们的虚拟环境命名，紧跟的test就是我们创建的虚拟环境名字了，后面的python=3.8表示我们想创建一个python版本为3.8的虚拟环境。输入上面命令以后回车。

![](https://i-blog.csdnimg.cn/direct/f8b7cc40909e4e03b5a8176cf7f0526a.png)

出现这样的输出以后我们这里输入“Y”回车，也可以直接回车。默认会选择Y

![](https://i-blog.csdnimg.cn/direct/f9a97d4e7756470c8dd4e7d9c46b8113.png)

出现下面这些输出时就表示虚拟环境已经创建成功了。

#### 2.进入虚拟环境

&nbsp;       我们要进入环境首先要初始化conda我们输入下面的命令来初始化conda。

```bash
conda init
```

![](https://i-blog.csdnimg.cn/direct/649e1a8cc1cb4f83a42c820c04c87a9b.png)

看到有以下输出就表示初始化完成了。输入下面的命令回车就能进入虚拟环境了。

```bash
conda activate test

```

![](https://i-blog.csdnimg.cn/direct/c0ce8498b3ad4328a891f9dc3c1e6684.png)

如果你发现命令行前面的名字已经变成了你虚拟环境的名字，那么就说明你已经成功的进入了虚拟环境了。这里的test是我们虚拟环境的名字。

我们也可以输入下面的命令来退出当前所在的虚拟环境。

```bash
conda deactivate

```

![](https://i-blog.csdnimg.cn/direct/e89a7ba872d7424d8a01d41e92f81097.png)

#### 3.删除虚拟环境

我们可以使用下面的命令来删除虚拟环境。

```bash
conda remove -n test --all

```

这里的test也是我们虚拟环境的名字。输入指令回车以后会出现

![](https://i-blog.csdnimg.cn/direct/a15f1c272224412387bfccdd559a4005.png)

这里我们同样输入Y并且回车。

![](https://i-blog.csdnimg.cn/direct/4f854c88f917401eb6be8d4e4dd0f147.png)

这里也是输入Y回车。

输入以后回车大概率是没有输出的，不过，俗话说，没有输出就是最好的输出，这个环境也确实被卸载掉了。可以前往软件安装路径下的“envs”文件夹检查，这个文件夹会包含你创建的所以虚拟环境，假如你创建了一个虚拟环境叫“yolo”那么在这个文件夹下也会对应有一个文件夹叫“yolo”，我们在删除虚拟环境时也可以直接简单粗暴的把这个文件夹下的虚拟环境文件夹删了。

![](https://i-blog.csdnimg.cn/direct/22e76894491b40eaa7b2370e9e485151.png)

### 九、错误的解决办法

#### 1.提示“conda”命令找不到或者说这是外部命令

这个我们分情况讨论，当然最有可能的是环境变量的问题。我们首先确定安装没有问题。我们在windows的所有应用中搜索“miniconda”。

![](https://i-blog.csdnimg.cn/direct/2e5497027f9c402b80de454cf9b952ea.png)

如果你能搜索出来，那么就可以点击第一个，它会打开一个cmd框，你在cmd框中输入“conda”观察有没有以下输出。

![](https://i-blog.csdnimg.cn/direct/2153e20460574b98ae375af361f8b372.png)

大概率是有的。如果你没有上面这样的输出，或者说你在windows的所有应用中搜索不出miniconda，那么你的安装已经出现问题，请跟着安装教程再次安装。

如果你能完成上面这些步骤，但是在自己打开的cmd窗口中被提示命令找不到，说明环境变量添加有问题，检查环境变量是不是真的添加进去了，添加完成后点击确定没。

#### 2.进入虚拟环境时出现CondaError: Run 'conda init' before 'conda activate'

这个错误往往是你在进入虚拟环境前忘记输入“conda init”，如果i你输入“conda init”以后你仍然出现这个错误，那就检查你是不是进入了powershell进行了上面这些操作，如果是，请切换到cmd。

#### 3.在卸载虚拟环境时时出现CondaValueError: no package names supplied,

你可能是忘记了在命令的最后面加上“--all”，完整的环境卸载命令应该是“conda remove -n test --all”

### 十、结语

&nbsp;       在这个章节中，我们已经成功的安装了Conda，在后续，可能会有许多项目会用到 Conda虚拟环境。希望在后续的学习中Conda能成为你得心应手的工具。

&nbsp;

------
转载至https://blog.csdn.net/c858845275/article/details/140871564
CC 4.0 BY-SA版权
