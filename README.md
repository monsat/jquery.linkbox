jQuery Link Box Plugin
----------------------

divのボックスなどをリンク可能にするプラグインです。

### USAGE

```html
<html>
<head>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
  <script type="text/javascript" src="js/jquery.linkbox.js"></script>
</head>
<body>
  <div data-click="linkbox">
    <a href="https://github.com/monsat/jquery.linkbox/">Link Text</a>
    <p>This box is clickable.</p>
  </div>
</body>
</html>
```

*data-click="linkbox"* という属性を持つbox全体をクリック可能にします。
要素内の先頭のaタグのURLに遷移します。

```html
<div data-click="linkbox">
  <a href="https://github.com/monsat/jquery.linkbox/">This is a normal link</a>
  <p>This box is clickable.</p>
  <a href="https://github.com/monsat/" data-linkbox="target">Link Text</a>
</div>
```

要素内に *data-linkbox="target"* という属性を持つaタグが存在する場合、そのリンクのURLに遷移します。

### style

linkboxというクラスがhover時に追加されます。
次のようにスタイルを設定してください。

```css
.linkbox {
  background-color: #eee;
  cursor: pointer;
}
```


### require

- jQuery 1.7 or higher

## Licence

MIT Licence