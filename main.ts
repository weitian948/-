// main.ts

// Deno.serve 是 Deno 内置的、创建 HTTP 服务器的标准方法。
Deno.serve(async (req) => {
  // 当服务器收到一个请求 (req) 时，这部分代码会运行。

  // 1. 读取 index.html 文件的内容
  //    Deno.readTextFile 是一个异步函数，会读取指定文件的文本内容。
  //    './index.html' 表示读取与 main.ts 文件在同一目录下的 index.html 文件。
  const htmlContent = await Deno.readTextFile('./index.html');

  // 2. 创建一个 HTTP 响应 (Response)
  //    第一个参数是响应的主体内容，这里就是我们刚读取的HTML字符串。
  //    第二个参数是一个选项对象，我们在这里设置 HTTP 头 (headers)。
  return new Response(htmlContent, {
    headers: {
      // 告诉浏览器我们发送的是 HTML 内容，并且使用 UTF-8 编码。
      // 这对于正确显示中文等字符至关重要。
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
});