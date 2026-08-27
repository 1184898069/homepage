# homepage

张雯轩的个人页。静态站点，无构建步骤。

线上预期地址：<https://1184898069.github.io/homepage/>

## 本地预览

仓库根目录就是站点根目录。任选一种方式：

```bash
# 用系统默认浏览器打开
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

或起一个本地静态服务（更接近 GitHub Pages 的路径行为）：

```bash
python3 -m http.server 8080
```

然后打开 <http://localhost:8080/>。

资源一律使用相对路径（`styles.css`、`favicon.svg`），因此在 GitHub Project Pages 的 `/homepage/` 基路径下也能工作。

## 启用 GitHub Pages

1. 打开仓库 **Settings → Pages**
2. Build and deployment 选择 **Deploy from a branch**
3. Branch 选 **main**，文件夹选 **/ (root)**
4. 保存。首次发布通常要一两分钟。

完成后访问：<https://1184898069.github.io/homepage/>

不需要 GitHub Actions。不要改成 docs 文件夹或单独的 gh-pages 分支，除非你有意调整目录结构。
