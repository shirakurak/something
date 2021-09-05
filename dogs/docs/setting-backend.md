
## 1. Java

- コマンドプロンプトにて、`java --version`：
    ```
    java 16.0.2 2021-07-20
    Java(TM) SE Runtime Environment (build 16.0.2+7-67)
    Java HotSpot(TM) 64-Bit Server VM (build 16.0.2+7-67, mixed mode, sharing)
    ```

## 2. Eclipse

- Eclipseで使用するJavaのバージョン
  - `ウィンドウ>設定>Java>インストール済みのJRE`

※shirakuraは、`2021年8月23日時点の最新版`をインストールして使用する予定

### 3. Maven

- `ウィンドウ>設定>Maven>インストール`
  - `3.8.1`

## 4. MySQL

- Port：`3306`
- インストール手順参考：
  - https://www.dbonline.jp/mysql/

## 5. Spring Boot

- プロジェクト作成についてメモ
  - `ファイル>新規>その他>Spring Boot>Spring スタータープロジェクト`
  - 名前：`backend`, タイプ：`Maven`, Javaバージョン：`16`
  - Spring Boot バージョン：`2.5.4`
  - 依存関係は選択せず、完了

---
`.gitignore`
  - `Servers`？
  - `.mvn`, `mvnw`, `mvnw.cmd` 
