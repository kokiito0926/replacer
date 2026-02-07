## replacer

replacerは、標準入力から受け取ったテキストに置換処理をおこなうことができるコマンドラインのツールです。  
正規表現を書かずに済むので、直感的にテキストを置換することができるようになります。

## インストール

```bash
$ npm install --global @kokiito0926/replacer
```

## 使用方法

```bash
$ echo "Hello, world!" | replacer --search "Hello" --replace "Hi"
```

## ライセンス

[MIT](LICENSE)
