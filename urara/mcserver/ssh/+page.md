---
title: SSH連線雜談
summary: 其實vscode就可以取代掉winscp了，還可以在macos跟linux上面用...
created: 2025-11-10
tags: 
  - 'mc server'
  - 'Linux'
---

既然開了mc伺服器，就當然要玩模組啦  
幸好小葳有教我們怎麼弄
<script>
  import {YouTube} from 'sveltekit-embed'
</script>
<YouTube youTubeId="f2nvfJuI5GU" />
<br />
但其實vscode就可以取代掉winscp了，還可以在macos跟linux上面用  
（本人是macos使用者）  

##  remote ssh extension
如果用過vscode，應該知道extension（延伸模組）是什麼東西  
你現在在用的繁體中文翻譯、語法高亮、型別檢查  
那些有的沒的，都是延伸模組的一部分  
為了方便，我叫他插件就好，看得懂就好

首先去安裝remote ssh，不多贅述  
之後首頁會有個「連線」按鈕，點它會要你在搜尋框```username```跟```host```  
如果之前有用過putty，應該會對它有點印象  

接下來需要到```/.ssh```一樣要先有一組公私鑰  
把私鑰放在```/.ssh```資料夾下，然後把它「鎖起來」  
只能讓檔案擁有者讀跟寫，否則連線會被擋掉

我是macos，要這樣操作：  
```zsh title="zsh"
chmod 600 /.ssh/config
```
windows好像沒有內建chmod，但是用git bash可以達到同樣的目的  
可以在檔案總管右鍵，有一個"open git bash here"  
然後做一樣的事情就可以調整權限了

那個```config```要填寫```Host```, ```User```跟```IdentityFile```  
這樣就能讀到你的私鑰，這裡舉個例子  
```bash
Host 104.197.41.181
  Hostname 104.197.41.181
  User littlezhaidi
  IdentityFile ~/.ssh/littlezhaidi.pem
```

## 檔案管理
vscode的邏輯是以「工作區」為一個單位  
好像就沒有```../```可以返回上一層目錄  
但相對來說，看起來就會比較乾淨（應該吧？）

上傳檔案可以直接拖放，  
但是不像winscp會有一些選項可以點  
下載也是右鍵下載就行，不用複製一份到本機  
優點還是目錄、終端、編輯器在同一個視窗裡  
畢竟人家是IDE嘛

## 小技巧
雖說標題是技巧，大部分寫到的是容易踩雷的點  
但還是有提到一些技巧啦  
### ctrl + 滑鼠左鍵  

以那個資料夾為工作區，開啟一個新的視窗  
非常好用，尤其是還不習慣vscode快捷鍵的新手（我）  
開啟連結也是一樣的操作，如果沒聽過可以記起來

### 上傳檔案失敗
小葳當初是這樣教的：
```bash title="bash"
sudo chmod 777 /home/your-gmail
```
簡單粗暴，把家目錄開放成所有人能讀寫跟執行  
要不然就是沒事```sudo```一下，確保不卡權限

但如果你去問ai，他會一直跟你強調「有安全疑慮」  
當然，這台伺服器可能就你自己用而已  
要繼續這樣用（應該）是完全沒問題的  
但還是有其他解決方法啦

我的做法是統一在vscode操作  
因為你在gcp那邊，會以你的google帳號創建一個使用者  
所以小葳教的這個方法，其實有兩個使用者在共用一台電腦  
只是他沒有提到而已（為了影片節奏）

類似這種感覺：
```bash
cd /home
ls -l
```
```bash title="output"
drwx------  4  zhaidigmail zhaidigmail 4096 Nov 10 10:06 zhaidigmail
drwx------  11 zhaidikey   zhaidikey   4096 Nov 10 10:06 zhaidikey
```
或是把兩個使用者加到一個「群組」裡面  
記得重啟終端來更新權限  
但這個方法我沒試過，就不亂講了

### screen: No Sockets found
原因有可能跟前面一樣，你開錯使用者了  
但也可能是shell script把screen殺掉了  
先不考慮這個狀況

有一個很簡單的解法：
```bash title="bash"
sudo [选项] 命令
```
這大家都會用，其中的```選項```其實可以輸入```-u```  
在後面接上使用者名稱，可以用他的身份執行指令  
就像這樣：
```bash title="bash"
sudo -u littlezhaidi screen -ls
```
```title="output"
  There is a screen on:
    #略...
  1 Sockets in /run/screen/S-littlezhaidi.
```
用起來比較麻煩，但很有用，不用切來切去的

```bash title="bash"
sudo -u littlezhaidi screen -r mcserver
whoami
```
```title="output"
  littlezhaidi
```

### 快速瀏覽log檔案（260216更新）
最近才發現我忘了這東西，有點搞笑  
因為我當初就是為了這件事，才換到vscode的  
雖然說winscp不能在macos上用，也是原因之一啦  

作為服主，當然會開始擔心伺服器狀況，  
畢竟之前有這麼多崩服經驗。  
而伺服器產出的log，就是健康狀況的最佳指標。  
但問題是這東西被壓縮了，winscp上面比較難打開。  
這時候就是vscode插件發力的時候了:D  

一般來說，我們沒辦法直接預覽被壓縮的檔案。  
![alt](https://img.littlezhaidi.me/260216ssh/compressed.png)  
我用的是這個插件，不太直覺但是能用。  
![alt](https://img.littlezhaidi.me/260216ssh/extention.png)  
安裝完成之後，按一下右上角插件的圖標，就能看到檔案內容了。
![alt](https://img.littlezhaidi.me/260216ssh/content.png)  
檔案裡面一整片白色文字，說真的很難看出重要內容。  
如果想要跟我一樣的語法高亮，可以去設定vscode檔案關聯，  
把`.gz`檔案跟`log`設定連結，這樣就有語法高亮了。
![alt](https://img.littlezhaidi.me/260216ssh/association.png)  

這篇文之後一定會再更新的，一定。  
因為ssh幾乎是每次都要用到的，沒有理由不學到新東西