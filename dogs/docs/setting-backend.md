# setting-backend

### 1. Java

- コマンドプロンプトにて、`java --version`：
    ```
    java 16.0.2 2021-07-20
    Java(TM) SE Runtime Environment (build 16.0.2+7-67)
    Java HotSpot(TM) 64-Bit Server VM (build 16.0.2+7-67, mixed mode, sharing)
    ```

### 2. Eclipse

- `ヘルプ>Eclipse IDEについて`
  - Version: `2021-06 (4.20.0)`

- Eclipseで使用するJavaのバージョン
  - `ウィンドウ>設定>Java>インストール済みのJRE`

### 3. Maven

- `ウィンドウ>設定>Maven>インストール`
  - `3.8.1`

### 4. MySQL
以下の手順に沿って、MySQLのインストールから、動作確認まで実施。
- 次を参考に、MySQLのダウンロード/インストールを実施する。
  - [MySQL Community Serverのダウンロード](https://www.dbonline.jp/mysql/install/index1.html)
  - [MySQL Community Serverのインストール](https://www.dbonline.jp/mysql/install/index2.html)
    - rootのpassword：`password123`
    - Portはデフォルトのまま:`3306`
- 次を参考に、コマンドプロンプトからのMySQLへの接続を行える。
  - [コマンドラインツールにPATHを設定する](https://www.dbonline.jp/mysql/connect/index6.html)
    - ```
      C:\Users\name>mysql --version
      mysql  Ver 8.0.26 for Win64 on x86_64 (MySQL Community Server - GPL)
      ```
  - [MySQLコマンドラインツールの起動とMySQLへの接続](https://www.dbonline.jp/mysql/connect/index1.html)
    - ```
      mysql> quit 
      Bye
      ```
- 動作確認
  - コマンドプロンプトにて、MySQLに接続
    - ```
      C:\Users\name>mysql -u root -p
      Enter password: *************
      ```
  - データベース作成
    - ```
      mysql> create database testdb;
      Query OK, 1 row affected (0.16 sec)
      ```
  - 作成済みのデータベース一覧を確認
    - ```
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
    - ```
      mysql> use testdb;
      Database changed
      ```
  - 使用しているデータベースを確認
    - ```
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
  - ```
    mysql> create table users (user_id int, user_name varchar(10), password varchar(10));
    Query OK, 0 rows affected (0.22 sec)

    mysql> create table dogs (dog_id int, dog_name varchar(50), area varchar(10));
    Query OK, 0 rows affected (1.16 sec)
    ```
  - ```
    mysql> show tables;
    +------------------+
    | Tables_in_testdb |
    +------------------+
    | dogs             |
    | users            |
    +------------------+
    2 rows in set (0.11 sec)
    ```
- データを作成  
  - ```
    mysql> insert into users values (1, 'taro', 'password');
    Query OK, 1 row affected (0.03 sec)
    
    mysql> insert into dogs values (3001, 'ケルベロス', '群馬');
    Query OK, 1 row affected (0.02 sec)
    mysql> insert into dogs values (3002, 'チワワ', '大阪');
    Query OK, 1 row affected (0.02 sec)
    ```
  - ```
    mysql> select * from users;
    +------+------+----------+
    | id   | name | password |
    +------+------+----------+
    |    1 | taro | password |
    +------+------+----------+
    1 row in set (0.00 sec)

    mysql> select * from dogs;
    +--------+------------+------+
    | dog_id | dog_name   | area |
    +--------+------------+------+
    |   3002 | チワワ     | 大阪 |
    |   3001 | ケルベロス | 群馬 |
    +--------+------------+------+
    2 rows in set (0.00 sec)
    ```

あとでテーブル定義書を書く必要あり。
制約も入れて。正規化も必要に応じて。

参考
- [MySQLの使い方](https://www.dbonline.jp/mysql/)

TODO:
`pom.xml`の`mysql-connector-java`の`dependency`の警告部分修正したい。

- MySQL Workbench
  - あとで書けたら書く

参考
- [Spring Boot + MyBatisでデータベースに接続する方法](https://medium-company.com/spring-boot-mybatis/)

### 5. Spring Boot

- プロジェクト作成についてメモ
  - `ファイル>新規>その他>Spring Boot>Spring スタータープロジェクト`
  - 名前：`backend`, タイプ：`Maven`, Javaバージョン：`16`
  - Spring Boot バージョン：`2.5.4`
  - 依存関係は選択せず、完了


### 6. MyBatis

たぶん特別インストールするものはない。
構築時に行ったのは以下。
- `pom.xml`に以下を追加し、プロジェクトを右クリック：`Maven>プロジェクトの更新`
  - ```
    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>2.2.0</version>
    </dependency>
    ```
  - [ここ](https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter)の最新版(May, 2021)。
- MySQL接続情報を書く
  - `/backend/src/main/resources/application.properties`
    - ```
      spring.datasource.url=jdbc:mysql://localhost:3306/testdb
      spring.datasource.username=root
      spring.datasource.password=password
      spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
      ```
- データは`4. MySQL`で用意したものを利用。

## 確認手順

`4. MySQL`を実施し、以下のデータが作成されているとする。
`backend`を右クリックし、`実行>9 Spring Boot アプリケーション`を選択。
※コンソールの赤四角ボタンで停止できる

コンソールに以下が表示されることを確認。
```
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

※以下のメソッドは消去したので、あとで消す
ブラウザで以下にアクセス
http://localhost:1598/test1

コンソールに以下が表示される
```
[2m2021-09-23 11:50:06.631[0;39m [32m INFO[0;39m [35m8216[0;39m [2m---[0;39m [2m[nio-1598-exec-1][0;39m [36mo.a.c.c.C.[Tomcat].[localhost].[/]      [0;39m [2m:[0;39m Initializing Spring DispatcherServlet 'dispatcherServlet'
[2m2021-09-23 11:50:06.631[0;39m [32m INFO[0;39m [35m8216[0;39m [2m---[0;39m [2m[nio-1598-exec-1][0;39m [36mo.s.web.servlet.DispatcherServlet       [0;39m [2m:[0;39m Initializing Servlet 'dispatcherServlet'
[2m2021-09-23 11:50:06.632[0;39m [32m INFO[0;39m [35m8216[0;39m [2m---[0;39m [2m[nio-1598-exec-1][0;39m [36mo.s.web.servlet.DispatcherServlet       [0;39m [2m:[0;39m Completed initialization in 0 ms
hello()メソッドが呼び出されました。
[2m2021-09-23 11:50:06.699[0;39m [32m INFO[0;39m [35m8216[0;39m [2m---[0;39m [2m[nio-1598-exec-1][0;39m [36mcom.zaxxer.hikari.HikariDataSource      [0;39m [2m:[0;39m HikariPool-1 - Starting...
[2m2021-09-23 11:50:07.559[0;39m [32m INFO[0;39m [35m8216[0;39m [2m---[0;39m [2m[nio-1598-exec-1][0;39m [36mcom.zaxxer.hikari.HikariDataSource      [0;39m [2m:[0;39m HikariPool-1 - Start completed.
```

ブラウザ画面に`あった`と表示される。

pull後に確認すべきことを書けたら書く。

以下にブラウザでアクセスして確かめられる
- [ログイン](http://localhost:1598/api/login/userId/1/password/password)
- [ワンちゃん一覧](http://localhost:1598/api/dogs)

※この辺のURLあたりは別途検討必要かも

参考：
- [簡単なWebAPIを作ってみよう編](https://zenn.dev/sugaryo/books/spring-boot-run-up/viewer/api_controller)

---
`.gitignore`
  - `Servers`？
  - `.mvn`, `mvnw`, `mvnw.cmd` 
