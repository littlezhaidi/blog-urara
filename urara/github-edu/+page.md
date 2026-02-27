---
title: 申請github education
summary: 事情是這樣的，學長說那裡有免費域名...
created: 2025-08-05
updated: 2025-08-05
publish: 2025-11-04
tags:
  - Github
---


事情是這樣的，學長說那裡有免費域名  
而且還有很多看起來很屌的東西可以免費使用  
這次主要講帳號申請的過程，畢竟我寫文的當下也不知道會不會過申請  

首先要有一個github帳號，還好我國中就已經搞了  
申請edu的條件主要是要證明自己是在學學生，其他部分沒什麼特殊要求  
（btw這些優惠只有一年的期限）   

一開始看的是這篇文章  
[Github学生认证及学生包申请指南](https://github.com/JimmyLing233/Github-Student-Certification-Guide)  
所以我就用手機拍了一張我跟學生證的照片，丟去github上面申請  
畢竟說學生證是最可信的證明  
![image alt](https://img.littlezhaidi.me/250805ghedu/upload-proof.webp)  

抱著要等待一段時間的心態，我跑去看其他文章  
[gcp-free-tier](https://kucw.io/blog/gcp-free-tier/)  
[vm-ssh-setup](https://blog.kyomind.tw/vm-ssh-setup/)  
結果不到五分鐘就被駁回了:nerd:  

（兩張圖是同一個訊息，畢竟這裡是圖片存放區所以都保留）  
![image alt](https://img.littlezhaidi.me/250805ghedu/denied.webp)  

## 駁回理由

簡單來說，我的帳號太過於免洗  
很多資料沒有填，2FA也沒開  
再加上學生證照片模糊:thinking:，所以說當然不給過  

這些細節其實沒有很重要，因為就是照他的指示做就好  
但似乎沒有多少文章特別強調到，只有提到學生證上面要有註冊日期  
（csdn上是有人講到啦，但是不能看全文）  

## 後來怎麼通過的？？

這次就紀錄一些我更改這些資訊時的github介面長怎樣，有哪些格子是必填的  
首先是`profile`，螢光筆似乎是必填選項  
`name`要填真實姓名，不能用網名（reason第6點）  
學校名稱我是用複製的  
![image alt](https://img.littlezhaidi.me/250805ghedu/profile.webp)  

reason第3點，要填寫付款資訊（星號必填）  
只是為了確認真實姓名以及地址，不用真的有個付款方式  
地址我直接填學校地址，不知道行不行的通[（當初這裡也是）](https://discord.com/channels/1325105067787026473/1381984610388414526)  
![alt](https://img.littlezhaidi.me/250805ghedu/payment.webp)  

還有郵遞區號，我當初是去google找的  
但是這裡似乎不用填得很詳細，所以我就直接照抄之前的資料  

接下來是2FA，說真的我是後來看這部影片才知道一定要開才給過  
[【Github Education】｜教育版註冊教學](https://www.youtube.com/watch?v=yKrFy97mHnI)  
幸好我的DC也有用過，不用重新摸索這玩意要怎麼用  

就是你手機裡面要有這東西（一定要手機才行）  
掃qrcode就可以連結帳號，再用他的六位數驗證碼登入就行  
![alt](https://img.littlezhaidi.me/250805ghedu/authenticator.webp)  

以後登入畫面就長這樣  
跟你在不同地方登入，要電子郵件認證的輸入驗證碼畫面差不多  
![alt](https://img.littlezhaidi.me/250805ghedu/2fa.webp)  

至於照片太模糊，我發現其實不是手機鏡頭問題  
我其實可以直接用電腦上傳圖片🤡（手機沒這介面）  
所以為了提供更完整的證明，我把段考成績單拿出來跟學生證一起拍照[（參考這位）](https://william8510.pixnet.net/blog/post/576720564)  
畢竟第5點有說，可以把很多證明文件塞到一張照片裡（只要不模糊）  


然後記得對焦，我在猜第一次是不是對焦到我臉上了，導致學生證模糊不清😆  
幸好github會自動偵測與就讀學校相關的郵件信箱，省很多麻煩  
![alt](https://img.littlezhaidi.me/250805ghedu/email-address.webp)  

然後就過了，其實真的滿快的，居然不到半小時  
（我還以為還要再跑一次翻譯的流程）  
![alt](https://img.littlezhaidi.me/250805ghedu/approved.webp)  

## 結語＆補充說明

還有一個我想講的點：  
你看這張圖有個"share location"嘛，原本是希望你在校園內操作這個驗證  

這樣可以很快速證明你是在校生，畢竟你人都在學校裡面了  

但畢竟現在是暑假，我也不知道我是怎麼通過這個驗證的  
可能是我家本來跟學校就很近吧（？），所以沒遇到問題  
如果你家住山上，那可能要注意這東西  

我記得有篇文章說會問你「你現在為什麼不在校園內」，就照實回答就行  
（我記得理由可以是現在是暑假，學期尚未開始，這樣也給過）  

讓我比較覺得神奇的是，我基本上都是用中文做這些驗證的  
像是資料填中文、名字填中文、成績單跟學生證也是直接拍照，沒經過翻譯  

那就拿我玩貓戰的那句老話出來  
反正我過了就行，其他不是我的事了👍