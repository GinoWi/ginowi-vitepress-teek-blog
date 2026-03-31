---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

::: code-group
```js
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

```ts
interface CodeBlock {
  /**
   * 是否启用新版代码块
   *
   * @default true
   */
  enabled?: boolean;
  /**
   * 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
   *
   * @default 700
   */
  collapseHeight?: number | boolean;
  /**
   * 复制代码完成后的回调
   */
  copiedDone?: (TkMessage: Message) => void;
  /**
   * 代码块底部是否显示展开/折叠遮罩层
   *
   * @default false
   * @since 1.4.0
   */
  overlay?: boolean;
  /**
   * 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
   *
   * @default 400
   * @since 1.4.0
   */
  overlayHeight?: number;
  /**
   * 语言文本显示样式，为 text-transform 的值
   *
   * none：文本中的单词保持默认风格
   * capitalize：文本中的每个单词以大写字母开头
   * lowercase：文本中的每个单词全部转为小写
   * uppercase：定文本中的单次全部转为大写
   *
   * @default 'uppercase'
   */
  langTextTransform?: "none" | "capitalize" | "lowercase" | "uppercase";
}
```
:::

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
