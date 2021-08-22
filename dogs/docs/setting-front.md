# フロント セットアップ手順

## 前提

Git bashがインストールされていること

## 1. Node.jsをインストール

- version
  - 14.17.5
- インストール方法
  - 公式からインストーラをダウンロードしてインストール
    - [nodejs.org/ja/](https://nodejs.org/ja/)
- インストール確認
  - bashで以下のコマンドを実行し、バージョンが返ってくることを確認

    ```bash
      node -v
    ```

## 2. yarnをインストール

- version
  - 1.22.10
- インストール方法
  - Node.jsをインストールした状態で、bashで以下のコマンド実行

    ``` bash
      npm install --global yarn
    ```

- インストール確認
  - bashで以下のコマンドを実行し、バージョンが返ってくることを確認

    ``` bash
      yarn --version
    ```

## 3. Reactアプリを作成 (githubから`front`を落とせば不要？)

- yarnをインストールした状態で、bashで以下のコマンドを実行
  - `create-react-app ${アプリ名}`：指定したアプリ名でReactアプリを生成する
  - `--template typescript`：TypeScriptファイルで生成する

  ``` bash
    npx create-react-app front --template typescript
  ```

## 4. Reactアプリを起動

- bashで以下のコマンドを実行し、Reactアプリのディレクトリに移動する

  ```bash
    cd front
  ```

- bashで以下のコマンドを実行し、サーバを起動する

  ```bash
    cd front
    yarn start
  ```
