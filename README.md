# TimeFilterForCourseNCKU
NCKU Course Time Filter Extension
## what is this !?
這是一個可以協助「隱藏」成功大學選課系統之課程列表中「與自身課表相衝堂」的課...的一個chrome擴充功能
## 功能
- 使用者可以選取自己的課表(哪幾節已經有課把它叉叉掉)
- 這個工具可以幫忙把「叉叉掉」部分的時間(的課)從螢幕上消失
## Install
0. 下載```TimeFilterForCourseNCKU```資料夾
1. 開啟 Chrome 並進入 [擴充功能] 設定頁。進入 [擴充功能] 設定頁的方式有兩種方式，列舉如下。
> 在 Chrome 瀏覽器的右上角按一下 [自訂及管理 Google Chrome] 按鈕 (三條橫線，國外都稱這圖示是「漢堡」，不過我比較喜歡稱之為「三層肉」)，指向 [更多工具]，然後按一下 [擴充功能]。
> 也可以在電腦版 Chrome 瀏覽器網址列上輸入 chrome://extensions/，然後按一下 Enter 鍵。
2. 進入 Chrome 瀏覽器的 [擴充功能] 設定頁，並確認勾選 [開發人員模式]。
3. 按一下 [載入未封裝擴充功能]，接下來請瀏覽至放置擴充功能的資料夾，然後按一下 [確定] 即可完成擴充功能的手動安裝程序。

ref:https://www.alexclassroom.com/internet/google/google-chrome/how-to-manually-install-chrome-extension/

## How To Use
0. (首次使用)按下chrome右上角的拼圖icon，點擊TimeFilterForCourseNCKU右側的圖釘標示
1. 開啟「成大」選課頁面
2. 按下chrome右上角的粉紅色TimeFilterForCourseNCKU圖示，會跳出一個課表
3. 點擊所有你有課的地方，點擊了之後有課的地方會出現叉叉，等等跟叉叉衝堂的課就會被消失
4. 點擊magic按鈕，衝堂的課將被消失

### 特殊功能
- 按鈕```時間未定義及密集課程```開啟時將「顯示」時間未定義及密集課程；(OFF:隱藏)
- 按鈕```中午的課程及A~E的課程```開啟時將「顯示」中午的課程及A~E的課程；(OFF:隱藏)
> ex:```[5]N```或```[3]A~B```

## 限制
- 已經確認可執行的環境:windows10搭配chrome最新版
- 視窗大小「最小」大約需```1125px*625px```
- 中午(N)與晚上(A~E)的課不在擴充功能的判定範圍
---
## 技術細節
- 未封裝
- 應該bug不少，有發現的話請麻煩丟issue

### TODO
- 記憶使用者設定
- 反向邏輯
- 讀取課表
- 美化UI、ICON
