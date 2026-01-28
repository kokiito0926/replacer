## リプレイサー（replacer）

リプレイサー（replacer）を用いると、かんたんに文字列を置換することができます。  
正規表現を書かずに済むので、直感的に文字列を置換することができるので便利なのかもしれません。

## インストール

```bash
$ npm install --global @kokiito0926/replacer
```

## 実行方法

```bash
$ replacer "Hello, world!" --search "H" --replace "P"
$ echo "Hello, world!" | replacer --search "H" --replace "P"
```

## ライセンス

[MIT](LICENSE)
