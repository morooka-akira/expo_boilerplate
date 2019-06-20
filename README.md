## 公式ページ

https://github.com/expo/web-examples/

まずは公式 README を読んでみる

## プロジェクトの作成

```
expo init <プロジェクト名>
```

## 依存パッケージのインストール

```
yarn add react-native-web react-dom
yarn add expo@next
```

## Web 版のデバッグ起動

```
expo start --web --non-interactive
```

## Lint の設定

### パッケージインストール

```
yarnn add -D eslint @typescript-eslint/eslint-plugin
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn add -D eslint-plugin-react eslint-plugin-react eslint-plugin-react-hooks
```

### .eslintrc.js の設定

- ファイル参照

## VSCode の設定

- settings.json 参照

## commit 前に lint のチェック

```
yarn add -D lint-staged husky
```

### config

- .huskyrc, .lintstagedrc を参照

## 参考

http://watanabeyu.blogspot.com/2019/02/typescript-eslinttypescriptlinteslintai.html
# expo_boilerplate
