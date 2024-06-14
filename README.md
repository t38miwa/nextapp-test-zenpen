
## サービスのURL
以下のURLからサービスをお試しいただけます。
https://nextapp-test-zenpen.vercel.app/

## サービスへの想い
私は地方在住のNBA（世界一のバスケットボールリーグ）を愛してやまない大学生です。<br>
特にニューヨーク・ニックスというチームの大ファンです。なので同じようにNBAが好きな人と語り合うのがすごく好きです。ですが、地方ではそのような仲間を見つけることはなかなか困難で、その原因として母数が少ないことと、都会に比べてNBA関連のイベントが少ないことが理由にあると考えています。<br>
そこで私はNBAを愛してやまない人々が交流できるようなプラットフォームを作成したいと考え、このサービスの開発を始めました。「NYK再建プロジェクト」というYoutubeチャンネルの素晴らしいコミュニティを地方でも広げていきたいと考えたのが開発を始めたいちばんのきっかけです。このサービスではNBAに限らずバスケットボールが好きな人がお互いのプロフィールを閲覧できたり、イベントに参加したり、自分たちで新たにイベントを作成することだってできます。<br>
まだまだ完成には程遠いですが、いつかNYK再建民（NYK再建プロジェクトの視聴者のことをこう呼びます）の人々のつながりをもっと深められるようなサービスを目指しています。

## 機能一覧
|トップ画面|ログイン画面| 
|:----------:|:-----------:|
|![スクリーンショット 2024-06-14 11.13.27.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/5b6448d6-3194-6f0f-b11c-e49e31224ba4.png)|![スクリーンショット 2024-06-14 11.15.57.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/55374fce-92f8-bf3e-648b-876fefa582c2.png)| 
|プロフィールの一覧を確認することができます。検索欄にキーワードを入れればそれにマッチしたプロフィールが表示されます。ユーザーの嗜好に合わせた並び替えを今後実装したい|最低限のログイン機能を実装しています。後ほど外部サービスと連携する予定（nextAuth.JSなど）| 

|プロフィール画面|プロフィール編集画面| 
|:----------:|:-----------:|
|![スクリーンショット 2024-06-14 11.19.54.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/2f733d8d-cddd-a03f-0a16-01571d77e58f.png)|![スクリーンショット 2024-06-14 11.20.51.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/5ea48f29-7d0c-2025-0916-f08430639111.png)| 
|個人のプロフィールを閲覧可能です。|自分のプローフィルをあとから編集することができます。| 

|新規プロフィール作成画面|マップ機能画面| 
|:----------:|:-----------:|
|![スクリーンショット 2024-06-14 11.21.51.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/4a93358a-13ea-9666-e575-f932958e14c4.png)|![スクリーンショット 2024-06-14 11.22.25.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/14965de8-b8c0-a7ab-4549-4c0d0755b471.png)| 
|新たにプロフィールを作成できます。|NBA観戦ができる店を探すことができます。イベントを作る際に役立ちます。| 

|イベント一覧画面|イベント参加登録場面| 
|:----------:|:-----------:|
|![スクリーンショット 2024-06-14 11.22.53.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/8a7806ce-fa92-0f08-67ad-ae4b24f3d25b.png)|![スクリーンショット 2024-06-14 11.23.19.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3685116/188c7932-b224-7773-50b8-d4afd6c736d9.png)| 
|イベントを探すことができます。キーワードや住んでいる地域、参加を希望する月日などからイベントを絞り込めます。ユーザーの嗜好に合わせた並び替えを今後実装したい|イベントへの参加登録を行えます。まだ未実装ですが、主催者へ通知がいく機能を実装予定です。| 

## 使用技術
|      Category      |      Technology Stack      | 
|:------------------:|:---------------------------:|
| Frontend           | JavaSciript(TypeScriptに移行予定), React, Next.JS | 
| Backend            | JavaSciript(TypeScriptに移行予定), Next.JS | 
| Infrastructure     | Vercel                      | 
| Database           | MongoDB                     | 


## システム構成図とER図を書く

## 今後の展望
おもに２つのフェーズに分けて開発を進めていきます。将来的には数字を用いて選手の貢献度やチームの強さなどを測ることができる機能やシミュレーションを活用した未来予測などができる機能も実装したい。
現在は１フェーズ目の開発途中です。<br>
### ＜フェーズ１＞
・主催者への通知機能の実装<br>
・TypeScriptへの移行<br>
・細かな点の修正（CSSやコード、データ、フォルダなどを読みやすいように修正）を行い、公開する<br>
### ＜フェーズ２＞
・シミュレーションやAIを活用したプロフィール一覧やイベント一覧の並び替えを設計、実装したい<br>
・ニックスの選手の勝利貢献度やPER（Players Efficiency Rate）、パーセンタイル値の割り出しなどを直感的に行える機能を実装したい。<br>
・チームや選手の未来予測をできる機能を実装したい<br>
