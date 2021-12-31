# setting-backend

## 1. Java

- コマンドプロンプトにて、`java --version`：

  ``` cmd
    java 16.0.2 2021-07-20
    Java(TM) SE Runtime Environment (build 16.0.2+7-67)
    Java HotSpot(TM) 64-Bit Server VM (build 16.0.2+7-67, mixed mode, sharing)
  ```

## 2. Eclipse

- `ヘルプ>Eclipse IDEについて`
  - Version: `2021-06 (4.20.0)`

- Eclipseで使用するJavaのバージョン
  - `ウィンドウ>設定>Java>インストール済みのJRE`

## 3. Maven

- `ウィンドウ>設定>Maven>インストール`
  - `3.8.1`

## 4. MySQL

以下の手順に沿って、MySQLのインストールから、動作確認まで実施。

- 次を参考に、MySQLのダウンロード/インストールを実施する。
  - [MySQL Community Serverのダウンロード](https://www.dbonline.jp/mysql/install/index1.html)
  - [MySQL Community Serverのインストール](https://www.dbonline.jp/mysql/install/index2.html)
    - rootのpassword：`password123`
    - Portはデフォルトのまま:`3306`
- 次を参考に、コマンドプロンプトからのMySQLへの接続を行える。
  - [コマンドラインツールにPATHを設定する](https://www.dbonline.jp/mysql/connect/index6.html)

    ``` cmd
      C:\Users\name>mysql --version
      mysql  Ver 8.0.26 for Win64 on x86_64 (MySQL Community Server - GPL)
    ```

  - [MySQLコマンドラインツールの起動とMySQLへの接続](https://www.dbonline.jp/mysql/connect/index1.html)

    ``` cmd
      mysql> quit 
      Bye
    ```

- 動作確認
  - コマンドプロンプトにて、MySQLに接続

    ``` cmd
      C:\Users\name>mysql -u root -p
      Enter password: *************
    ```

  - データベース作成

    ``` cmd
      mysql> create database testdb;
      Query OK, 1 row affected (0.16 sec)
    ```

  - 作成済みのデータベース一覧を確認

    ``` cmd
      mysql> show databases;
      +--------------------+
      | Database           |
      +--------------------+
      | information_schema |
      | mysql              |
      | performance_schema |
      | sakila             |
      | sys                |
      | testdb             |
      | world              |
      +--------------------+
      7 rows in set (0.00 sec)
    ```

  - 使用するデータベースを選択
    - データベースを作成し、選択したうえでテーブル等を作成する。

    ``` cmd
      mysql> use testdb;
      Database changed
    ```

  - 使用しているデータベースを確認

    ``` cmd
      mysql> select database();
      +------------+
      | database() |
      +------------+
      | testdb     |
      +------------+
      1 row in set (0.00 sec)
    ```

以下の手順は、Spring Bootの動作確認の前手順として必要。

- テーブルを作成
  - `dogs/docs/dogs.ddl`を実行
  - 次のコマンドで確認：`show tables;`
- データを作成  
  - `dogs/docs/test_data.sql`を実行(複数のinsert文を一気にコピペして実行することが可能)
  - 例えば、次のsqlで確認：`select * from users;`

参考

- [MySQLの使い方](https://www.dbonline.jp/mysql/)

TODO:
`pom.xml`の`mysql-connector-java`の`dependency`の警告部分修正したい。

- MySQL Workbench
  - あとで書けたら書く

参考

- [Spring Boot + MyBatisでデータベースに接続する方法](https://medium-company.com/spring-boot-mybatis/)

## 5. Spring Boot

- プロジェクト作成についてメモ
  - `ファイル>新規>その他>Spring Boot>Spring スタータープロジェクト`
  - 名前：`backend`, タイプ：`Maven`, Javaバージョン：`16`
  - Spring Boot バージョン：`2.5.4`
  - 依存関係は選択せず、完了

## 6. MyBatis

たぶん特別インストールするものはない。
構築時に行ったのは以下。

- `pom.xml`に以下を追加し、プロジェクトを右クリック：`Maven>プロジェクトの更新`

  ``` xml
    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>2.2.0</version>
    </dependency>
  ```

  - [ここ](https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter)の最新版(May, 2021)。
- MySQL接続情報を書く
  - `/backend/src/main/resources/application.properties`

    ``` properties
      spring.datasource.url=jdbc:mysql://localhost:3306/testdb
      spring.datasource.username=root
      spring.datasource.password=password123
      spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    ```

- データは`4. MySQL`で用意したものを利用。

## 7. DBViewer

- 次を参考に、EclipseにDBViewerをインストールする。
  - [【Eclipse】DBViewerのインストール](https://qiita.com/nkojima/items/2a865b819071e7943761)
- パースペクティブを`DBViewer`に切り替える。
  - `DBツリー・ビュー`の`DBViewerPlugin`を右クリックし、`登録`を選択。
  - `データベース定義`ウィンドウで以下を入力
    - データベース定義名：`testdb`
    - JDBCドライバー：`{ユーザディレクトリ}\.m2\repository\mysql\mysql-connector-java\8.0.26\mysql-connector-java-8.0.26.jar`
    - `次へ`を押下
  - `データベース定義`ウィンドウで以下を入力
    - JDBC Driver：`com.mysql.cj.jdbc.Driver`
    - JDBCタイプ：`Type4`
    - 接続文字列：`jdbc:mysql://localhost:3306/testdb`
    - 接続ユーザ：`root`
    - 接続パスワード：`password123`
    - `完了`を押下
- 接続確認
  - `DBツリー・ビュー`の`DBViewerPlugin`配下の`testdb`を右クリックし、`接続`を選択。
  - `4. MySQL`で作成したDB情報が見れることを確認。

※DBViewerによりDB接続している場合、コマンドプロンプトから`alter`文や`drop`文を実行できないことに注意。

## 確認手順

`4. MySQL`を実施し、以下のデータが作成されているとする。
`backend`を右クリックし、`実行>9 Spring Boot アプリケーション`を選択。
※コンソールの赤四角ボタンで停止できる

コンソールに以下が表示されることを確認。

``` console
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
[32m :: Spring Boot :: [39m              [2m (v2.5.4)[0;39m

[2m2021-09-23 11:42:35.334[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mcom.example.demo.BackendApplication     [0;39m [2m:[0;39m Starting BackendApplication using Java 16.0.1 on DESKTOP-OCJD0NN with PID 392 (C:\Users\surak\Documents\github\something\dogs\backend\target\classes started by surak in C:\Users\surak\Documents\github\something\dogs\backend)
[2m2021-09-23 11:42:35.338[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mcom.example.demo.BackendApplication     [0;39m [2m:[0;39m No active profile set, falling back to default profiles: default
[2m2021-09-23 11:42:37.191[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mo.s.b.w.embedded.tomcat.TomcatWebServer [0;39m [2m:[0;39m Tomcat initialized with port(s): 1598 (http)
[2m2021-09-23 11:42:37.208[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mo.apache.catalina.core.StandardService  [0;39m [2m:[0;39m Starting service [Tomcat]
[2m2021-09-23 11:42:37.209[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36morg.apache.catalina.core.StandardEngine [0;39m [2m:[0;39m Starting Servlet engine: [Apache Tomcat/9.0.52]
[2m2021-09-23 11:42:37.371[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mo.a.c.c.C.[Tomcat].[localhost].[/]      [0;39m [2m:[0;39m Initializing Spring embedded WebApplicationContext
[2m2021-09-23 11:42:37.372[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mw.s.c.ServletWebServerApplicationContext[0;39m [2m:[0;39m Root WebApplicationContext: initialization completed in 1907 ms
[2m2021-09-23 11:42:38.720[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mo.s.b.w.embedded.tomcat.TomcatWebServer [0;39m [2m:[0;39m Tomcat started on port(s): 1598 (http) with context path ''
[2m2021-09-23 11:42:38.746[0;39m [32m INFO[0;39m [35m392[0;39m [2m---[0;39m [2m[           main][0;39m [36mcom.example.demo.BackendApplication     [0;39m [2m:[0;39m Started BackendApplication in 4.32 seconds (JVM running for 5.469)
わん！
```

ブラウザで[ログイン](http://localhost:1598/api/login)画面にアクセスして確かめられる：`http://localhost:1598/api/login`

参考

- [簡単なWebAPIを作ってみよう編](https://zenn.dev/sugaryo/books/spring-boot-run-up/viewer/api_controller)
