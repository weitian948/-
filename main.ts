// main.ts

// Deno.serve 是 Deno 内置的、创建 HTTP 服务器的标准方法。
Deno.serve(async (req) => {
  // 当服务器收到一个请求 (req) 时，这部分代码会运行。

  // 1. 解析请求的 URL
  //    req.url 包含了完整的请求地址，例如 "https://weitianai.cn/cut"
  //    我们使用 URL 构造函数来方便地获取其中的各个部分。
  const url = new URL(req.url);

  // 2. 检查路径是否为 '/cut'
  //    url.pathname 就是 URL 中域名后面的部分。
  if (url.pathname === '/cut') {
    // 如果路径完全匹配 '/cut'，则执行以下操作：

    // 2.1. 读取 index.html 文件的内容
    const htmlContent = await Deno.readTextFile('./index.html');

    // 2.2. 创建一个成功的 HTTP 响应 (Response)
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  // 3. 如果路径不是 '/cut'，则返回一个 404 Not Found 错误
  //    这可以防止用户访问根域名 weitianai.cn 或其他不存在的路径时看到你的页面。
  return new Response('Not Found', {
    status: 404, // 状态码 404 表示未找到
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
});
