# \[python\]如何正确的安装pytorch?(详细)




### 一、我们为什么需要安装pytorch?

&nbsp;       pytorch作为目前最主流的开源[机器学习库](https://so.csdn.net/so/search?q=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%BA%93&spm=1001.2101.3001.7020)之一，凭借庞大的社区支持和易于开发的特性，收获了一大波开发者与项目分支。像我们熟知的“GLM”，“YOLO”,"GPT-Sovits"，“Stable Diffusion”......这些开源项目中都有pytorch的身影。不管是现在的大语言模型或者是一些专用模型都已经离不开pytorch。所以，我们现在就来学习如何安装这个强大的机器学习库吧！

### 二、检查自己的环境

&nbsp;       下面讲的可能需要你具有一定的计算机硬件知识，你需要通过观察自己硬件环境来决定安装哪种版本的pytorch。在下面我会讲几种情况，大家根据自己的情况来判断自己应该在下一步如何操作。

#### 1.拥有NVIDIA的GPU（俗称N卡）

&nbsp;       当然这样的情况是比较好的，因为你大概率能使用你的GPU来运行pytorch。当然也不是绝对的，有的较早期的显卡也不支持CUDA。CUDA是NVIDIA的GPU独有的，拥有CUDA pytorch就能把计算任务分给GPU，从而加速深度学习和模型训练。

#### 2.拥有AMD的GPU(俗称A卡)

&nbsp;       这种情况也就相对复杂了，因为没有CUDA所以很有可能你无法安装pytorch的GPU版本。退而求其次你只能选择CPU版本。当然这也不是绝对的，在AMD的较新系列显卡中，我们可以使用AMD的ROCM技术来模拟CUDA，从而也能实现对深度学习的加速，而且pytorch有具有一个专门的ROCM版本。当然，我这里硬件不允许所以不演示这种方案了。大家可以自行在网络上进行搜索。之前也提到了，这种方案只支持比较新的AMD的GPU如果你的GPU是6000系以下的基本都没有适配，只能考虑安装CPU版本的。

#### 3.只拥有CPU

&nbsp;       如果你是自己组建的多核计算服务器，或者是硬件实在不允许，那你就只能考虑pytorch的CPU版本。这个版本的pytorch只能进行最基本的深度学习，没有加速功能，这也就意味着运行模型的速度会慢许多。甚至在一些场景中只能进行推理不能进行训练。但是这也是安装最简单，并且最容易适配的方案。

通过检查自己的环境相信你已经知道了自己适合哪个版本的pytorch了，下面就让我们根据自己的环境来安装pytorch吧。

### 三、安装pytorch

&nbsp;       我们在这里主要讲NVIDIA的和CPU的安装方案，AMD显卡的方案因为我的硬件限制所以没办法进行演示。下面我们分情况讨论，请大家自己前往对应的情况进行操作。

#### 1.拥有NVIDIA的GPU

&nbsp;       如果你有NVIDIA的GPU那么大概率可以使用这个GPU进行加速，之前我们也提到了。我们使用N卡进行加速使用的是它的CUDA，所以我们要做的第一件事当然就是安装CUDA的驱动。

虽然我们直接安装pytorch也能调用显卡进行加速，但是始终不是处于一个非常完美的状态，所以，也是为了让pytorch充分调用我们的硬件资源，我们还是先安装CUDA的驱动。不同型号的显卡它们对应的CUDA驱动也不同，我们首先就需要去查看自己的显卡所对应的CUDA版本是多少。我们这里使用“CMD”命令行进行查看。使用“WIN+R”输入CMD回车。打开如下窗口：

![](https://i-blog.csdnimg.cn/direct/30232793caad4d0d897aeec90df318ce.png)

![](https://i-blog.csdnimg.cn/direct/5d7995ab00404fc1a9b29cd919d38faa.png)

我的窗口我自己改了一下背景，你自己的应该就是黑的，不过不影响，都是一样的，只要确定自己打开的是“CMD命令行”就行，可以观察窗口的左上角来看自己启动的是哪一种命令行。

我们在“CMD命令行”中输入“nvidia-smi.exe”

![](https://i-blog.csdnimg.cn/direct/35736321fa2444cd97191cc806b62d30.png)

回车以后应该就能出现下图的输出了。如果你没有得到像下图一样的输出。或者被提示命令找不到那你就要考虑一下显卡驱动是否被正常安装或者重新审查自己的硬件环境了。这一步的输出是下一步的前提，所以，使用N卡的小伙伴一定要过了这一步。

![](https://i-blog.csdnimg.cn/direct/e9f59b81d4de43feb2c43561394e0469.png)

得到这些输出以后，我们可以看到打印出了许多东西。大致就有我们显卡的型号，驱动的版本和CUDA的版本。下面我们着重来看CUDA版本。

![](https://i-blog.csdnimg.cn/direct/1f996247852a48ba8420c865b0e724b3.png)

如上图，被我框出的地方可以看出这里就是我们CUDA的版本信息了。当然，这里只是我们CUDA能支持到的最新版本，我们实际安装的时候，不一定要安装这个最新版，CUDA是向下兼容的。也就是说，我这里看到的是12.3版本，其实我也可以安装11.7,10.5这些版本。我们这里只是安装CUDA的驱动。pytorch中的CUDA版本对于这个是向下兼容的。举个例子，假如你安装了12.3的CUDA驱动，那么你安装的pytorch对应到的CUDA版本可以是12.3以下的。

好了我们现在已经确定了自己的CUDA能支持到什么版本。我们可以直接去NVIDIA的官网下载对应的CUDA驱动了。官网地址：[CUDA Toolkit Archive | NVIDIA Developer](https://developer.nvidia.com/cuda-toolkit-archive "CUDA Toolkit Archive | NVIDIA Developer")

进到官网以后我们可以看到如下界面：

![](https://i-blog.csdnimg.cn/direct/8dd9f1859cf949ec81328354fb98c89d.png)

这里有非常多的CUDA驱动版本，我们要找到我们需要的版本，刚才通过查看，我能安装的CUDA最新的驱动为12.3，所以我们这里用12.3作为演示，大家可以根据自己的CUDA版本进行选择。

![](https://i-blog.csdnimg.cn/direct/dbb68e62b14c4a998edb6b7db09e77cb.png)

当我们选择好想要的CUDA驱动以后就可以直接点击CUDA的版本号进入下载界面。

![](https://i-blog.csdnimg.cn/direct/71d614b7bfa74367bf73829309e5be31.png)

下载界面如图所示，第一步要我们选择系统，我这里是windows，所以选择第二个。选择以后它就会弹出下一个选项。

![](https://i-blog.csdnimg.cn/direct/0d2f3b3b487f455c86c0ba078696e110.png)

第二个选项是系统架构，只有一个选项所以我们点击这个选项。

![](https://i-blog.csdnimg.cn/direct/c516292a508f49a391d7cbba933570df.png)

第三个是系统的版本，我这里是windows11,所以这里我选择的11，大家根据自己的情况进行选择。

![](https://i-blog.csdnimg.cn/direct/dcf5ef2d668a4a5183ae1956477491e1.png)

第四个选择是问是要本地安装还是网络安装，我们这里推荐使用本地安装。网络安装可能会因为网络不稳定而中断。

我们可以点击下面的下载按钮进行下载。

![](https://i-blog.csdnimg.cn/direct/8ad5070dc35d4df6b6f9be1e00f4ed37.png)

点击了下载以后浏览器过一会儿应该就能弹出下载了。

![](https://i-blog.csdnimg.cn/direct/fa2934f264f943d0bd456e949fe51bf1.png)

我们把这个安装包下载到一个我们能找到的地方。

![](https://i-blog.csdnimg.cn/direct/06cbabb80e2740b4a2ad33733fb89fd8.png)

我们这里点击这个exe文件进行安装。

双击以后，弹出一个路径选项，这是一个临时解压路径，所以就算在C盘也没关系。它后面会自己删除。

![](https://i-blog.csdnimg.cn/direct/186a7e3b81974c4ab7a579107414ec97.png)

直接点击OK以后就会进入一个解压阶段。

![](https://i-blog.csdnimg.cn/direct/d4dc91bb47d4453fbeca87d7df58c4ff.png)

解压结束以后，就弹出如下检测兼容性的界面。

![](https://i-blog.csdnimg.cn/direct/976fa637d6d74bfe873e1a3416044a8f.png)

如果这里兼容性检查不通过就要考虑是不是下载的CUDA驱动版本大于显卡支持CUDA的最大版本。

![](https://i-blog.csdnimg.cn/direct/8f733b49336d4bc49245d605c7ab1c22.png)

这里的协议我们选择“同意并继续”。

![](https://i-blog.csdnimg.cn/direct/7f38711f589243d392677dc75a83ecb0.png)

这里我们选择自定义并且点击“下一步”。

![](https://i-blog.csdnimg.cn/direct/8015bd0bcaf44a888bf3447882331d7f.png)

来到这个选择界面，这里我们只勾选“CUDA”即可。

如果你的电脑中没有安装“Visual Studio”，那就点击CUDA旁边的加号把“Visual Studio Integration”的勾去掉。

![](https://i-blog.csdnimg.cn/direct/53ac74d7c73d46bbb69d3529342ff257.png)

这里也选择好以后我们继续点击“下一步”。

![](https://i-blog.csdnimg.cn/direct/6e71090578b84dd3811056a9295823a4.png)

这里我们选择安装的位置，大家选择安装在非C盘的路径即可。我们继续点击下一步。

![](https://i-blog.csdnimg.cn/direct/218afe8631ba4adf80bc85984157ccc0.png)

&nbsp;随后就开始安装了，我们等待安装完成。

![](https://i-blog.csdnimg.cn/direct/c9414e597dbb48668b83fc0943ff0292.png)

这里它已经提醒我们安装完成了。

我们可以简单的来验证一下我们的安装。

我们打开“cmd命令”窗口，输入“nvcc -V”后回车，效果如下图：

![](https://i-blog.csdnimg.cn/direct/b30434ac1bdc436392abcc8c6aa9e3c2.png)

这里输出了我们的CUDA版本信息说明我们的CUDA驱动已经安装成功了。如果你输入“nvcc -V”以后出现nvcc fatal   : No input files specified; use option --help for more information，很有可能是你的V没有大写引起的。

我们下一步就可以开始安装pytorch了，这里安装pytorch的前提是我们具有python的环境或者具有python的虚拟环境，如果你还不会安装python或者不会安装虚拟环境的话可以参考我下面这两篇文章：

安装python：[\[python\]我们应该如何正确的安装和卸载python？(详细)-CSDN博客](https://blog.csdn.net/c858845275/article/details/140757292 "[python]我们应该如何正确的安装和卸载python？(详细)-CSDN博客")

安装python虚拟环境：[\[python\]我们应该如何安装Miniconda虚拟环境？（详细）\_python miniconda-CSDN博客](https://blog.csdn.net/c858845275/article/details/140871564 "[python]我们应该如何安装Miniconda虚拟环境？（详细）_python miniconda-CSDN博客")

当然这两个有一个就行，如果你直接在系统中安装了python下面的pytorch就可以直接在系统中安装。可以直接打开“powershell”进行操作。如果你是安装的虚拟环境，你可以在虚拟环境中安装pytorch，并且我也非常推荐这种方式，这种方式很大程度上会解决版本冲突问题。下面我会使用虚拟环境进行演示。如果你想直接在系统中安装pytorch，你就可以直接跳过虚拟环境创建的那一步。好的，我们现在开始在虚拟环境中安装pytorch。

首先，我们在创建虚拟环境。使用如下命令：

```cobol
`conda create -n pytorch python=3.8`

AI写代码
```

这里我们创建了一个名为pytorch的虚拟环境，并且指定了python版本为python3.8.

虚拟环境创建完成以后，我们输入下面的命令进入虚拟环境：

```undefined
`conda activate pytorch`

AI写代码
```

![](https://i-blog.csdnimg.cn/direct/2c8ce2fa1e0a4b38aa12216c386164c6.png)

在成功进入虚拟环境以后，我们就可以开始安装pytorch了。我们可以去pytorch的官网，可以在浏览器中直接搜索“pytorch”。

![](https://i-blog.csdnimg.cn/direct/461b85207c7940dcb5802f90f6fd87b4.png)

可以看出途中框出的网站就是pytorch的官方网站了。如果实在搜索不到pytorch的官方网站，或者害怕找错了，也可以直接点击下面的链接进入。pytorch官方网站：[PyTorch](https://pytorch.org/ "PyTorch")

我们进入网站，就可以看到如下界面，可能会随着pytorch的更新网站也更新，不过道理都是一样的。![](https://i-blog.csdnimg.cn/direct/04e3de7259424b49949e7461c3f0c869.png)我们在这个网站中往下滑，找到如下图这个地方，这就是我们安装pytorch的关键了。

![](https://i-blog.csdnimg.cn/direct/6c5760c634064961a00b62a4943b4f6a.png)

我们下面要重点解读这个框中的每个项是什么意思，应该怎么选。

首先是框中的“PyTorch Build”项，这是pytorch的稳定版和预览版，“Stable (2.4.0)”表示的是稳定版，“Preview (Nightly)”表示的是预览版，我们这里尽量去选择稳定版，或者根据自己的项目进行选择。

“Your OS”选项表示我们的操作系统，每种操作系统的安装命令不一样，我这里是windows所以理所当然的选择windows。

“Package”选项就是安装源，我们可以选择conda源，pip源等，这里推荐使用pip源。

“Language”选项表示我们使用的是什么编程语言，我们在这里选择python，毕竟之前做的准备都是python的。

“Compute Platform”选项就表示我们要安装哪个CUDA版本的pytorch了。这个可以根据自己项目来定，我这里选择一个CUDA11.8的pytorch。 

“Run this Command”项就是我们的安装命令，这个安装链接是根据我们上面的选项生成的，后面会使用这个命令进行安装。

如果这里没有你想安装的pytorch版本，那就可以点击下图框中的链接。

![](https://i-blog.csdnimg.cn/direct/feb420b8a14a4f0ab3b84a6fb3f53413.png)

点击以后往下滑就能找到以前版本的pytorch的安装命令了。大家根据自己需求对安装命令进行选择。![](https://i-blog.csdnimg.cn/direct/83b2f8adeb84487e8a706e3edaf6b16a.png)

我们选择好安装命令以后我们将其复制。将命令粘贴到启动了虚拟环境的命令框。

![](https://i-blog.csdnimg.cn/direct/823ba700293e4618b15a66bbf310d50b.png)

我们回车进行安装。

我们等待所有模块下载安装完成。如果你在安装的时候下载非常慢，就可以考虑使用whl包进行安装，可以在下载时获取到下载的链接，你可以复制这些链接将whl包下载到电脑上再安装。具体安装whl包可以参考：[\[python\]如何安装whl包并解决依赖关系（详细）-CSDN博客](https://blog.csdn.net/c858845275/article/details/140905106 "[python]如何安装whl包并解决依赖关系（详细）-CSDN博客")

如果你觉得whl包的方式太麻烦了，还有一个换源的办法，目前，只有阿里云有pytouch的CUDA版的镜像，那么我们现在就来教大家如何使用阿里源进行拉取。

假如我们已经找到了pytouch的下载链接，如下：

```cobol
`pip install torch==2.0.0 torchvision==0.15.1 torchaudio==2.0.1 --index-url https://download.pytorch.org/whl/cu118`


```

我们需要将这段下载代码后半部分的“--index-url https://download.pytorch.org/whl/cu118”删除，替换为下面的代码：

```cobol
`-f https://mirrors.aliyun.com/pytorch-wheels/cu118`


```

替换完成以后，我们的下载代码变成了：

```cobol
`pip install torch==2.0.0 torchvision==0.15.1 torchaudio==2.0.1 -f https://mirrors.aliyun.com/pytorch-wheels/cu118`


```

这里的“-f”是“--find-links”的缩写，表示从下面的链接去寻找要下载的包，-f的后面跟着的就是阿里云touch源的地址。

下载完成以后，如下图所示：

![](https://i-blog.csdnimg.cn/direct/ae4bdb29de4a4e1ca779b716cdc08821.png)

在安装成功以后使用“pip list”,查看已经安装的包，我们可以看到这里已经有三个跟pytorch有关的了，并且后面跟了CUDA的版本。下面我们来验证一下安装是否成功。

我们依次在虚拟环境的命令行中依次输入以下命令：

```haskell
python
import torch
torch.cuda.is_available()





```

这里注意，是依次输入，输入一次回车一次。当返回“True”时就表示pytorch已经安装成功了。

![](https://i-blog.csdnimg.cn/direct/4966831bc80947e3b97add2c448b6e08.png)至此，我们的pytorchGPU版本已经安装完成。

#### 2.只有CPU

&nbsp;       下面这种情况同样是针对只有CPU的情况，在这种情况下，我们只能安装CPU版的pytorch。在安装之前，我们同样要确定我们拥有python的环境或者拥有python的虚拟环境，具体的安装步骤可以查看下面的文章：

python安装：[\[python\]我们应该如何正确的安装和卸载python？(详细)-CSDN博客](https://blog.csdn.net/c858845275/article/details/140757292 "[python]我们应该如何正确的安装和卸载python？(详细)-CSDN博客")

虚拟环境安装：[\[python\]我们应该如何安装Miniconda虚拟环境？（详细）\_python miniconda-CSDN博客](https://blog.csdn.net/c858845275/article/details/140871564 "[python]我们应该如何安装Miniconda虚拟环境？（详细）_python miniconda-CSDN博客")

如果确定了拥有python环境或者虚拟环境以后我们就可以开始安装pytorch了。我们这里主要演示虚拟环境安装。如果在系统中安装的python那么就直接在一个“powershell”窗口中进行。

首先，我们在创建虚拟环境。使用如下命令：

```cobol
`conda create -n pytorch python=3.8`


```

这里我们创建了一个名为pytorch的虚拟环境，并且指定了python版本为python3.8.

虚拟环境创建完成以后，我们输入下面的命令进入虚拟环境：

```undefined
`conda activate pytorch`


```

![](https://i-blog.csdnimg.cn/direct/2c8ce2fa1e0a4b38aa12216c386164c6.png)

关于进入官网的办法和相关选项都在前面介绍过了，唯一的不同就是我们在这里要选择CPU

![](https://i-blog.csdnimg.cn/direct/7f1ed7c243a840c3ac3651604c56122f.png)

点击CPU后我们将其复制到虚拟环境的命令框中。

![](https://i-blog.csdnimg.cn/direct/0379c6dff18142928643ec8f7c9131b9.png)

回车以后等待安装完成。在安装完成以后我们使用“pip list” 查看安装的包。

![](https://i-blog.csdnimg.cn/direct/1b5d8a4553ca4872866dc67a6ebf0e64.png)

这里我们可以看到torch已经在列表中了，下面我们来验证一下。我们依次输入下面的命令：

```scss
python
import torch
print(torch.__version__)





```

注意这里的命令都是依次输入，输入一次回车一次，运行后就能出现pytorch的版本+CPU

![](https://i-blog.csdnimg.cn/direct/fb01eb3419574afbbdb6420ab1bd728b.png)

如果在这个过程中出现了错误首先检查自己的输入是否正确，如果依然报错可能就需要考虑是否是安装失败了。检查后重新安装。

出现图中的效果就表示安装已经成功了。

### 四、结语

&nbsp;       在这一小节中我学习了pytorch的安装教程，这也算是我们迈出了认识机器学习的第一步。我希望在此努力的大家都能坚持到最后。

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

-------
版权声明：本文为博主原创文章，遵循 [CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，原文链接
https://blog.csdn.net/c858845275/article/details/140966947
