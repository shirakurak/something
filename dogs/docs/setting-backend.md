
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
だいたい次のサイトを参考。わかりやすい。
- [MySQLの使い方](https://www.dbonline.jp/mysql/)

以下の手順に沿って、MySQLのインストールから、動作確認まで実施。
- 次を参考に、MySQLのダウンロード/インストールを実施する。
  - [MySQL Community Serverのダウンロード](https://www.dbonline.jp/mysql/install/index1.html)
  - [MySQL Community Serverのインストール](https://www.dbonline.jp/mysql/install/index2.html)
    - rootのpasswordはメモしとこうね
    - Portはデフォルトのままにしておいた:`3306`
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
    - ↑かわいい
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
  - テーブルを作成
    - ```
      mysql> create table users (id int, name varchar(10), password varchar(10));
      Query OK, 0 rows affected (0.22 sec)
      mysql> show tables;
      +------------------+
      | Tables_in_testdb |
      +------------------+
      | users            |
      +------------------+
      1 row in set (0.04 sec)
      ```
  - データを作成  
    - ```
      mysql> insert into users values (1, 'taro', 'password');
      Query OK, 1 row affected (0.03 sec)
      mysql> select * from users;
      +------+------+----------+
      | id   | name | password |
      +------+------+----------+
      |    1 | taro | password |
      +------+------+----------+
      1 row in set (0.00 sec)
      ```

- MySQL Workbench
  - あとで書けたら書く

### 5. Spring Boot

- プロジェクト作成についてメモ
  - `ファイル>新規>その他>Spring Boot>Spring スタータープロジェクト`
  - 名前：`backend`, タイプ：`Maven`, Javaバージョン：`16`
  - Spring Boot バージョン：`2.5.4`
  - 依存関係は選択せず、完了


### 6. MyBatis

## 確認手順


---
`.gitignore`
  - `Servers`？
  - `.mvn`, `mvnw`, `mvnw.cmd` 
