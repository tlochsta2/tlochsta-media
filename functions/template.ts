export function getTemplate({
  redirectPath,
  withError
}: {
  redirectPath: string;
  withError: boolean;
}): string {
  return `
  <!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="utf-8">
    <title>tlochsta media</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#603cba">
<meta name="theme-color" content="#ffffff">
</head>

<body class="bg-gray-900 text-white flex items-center justify-center h-screen">
    <main class="max-w-md w-full bg-purple-800 p-8 rounded-lg shadow-lg">
        <form method="post" action="/cfp_login" class="space-y-6">
            <h1 class="text-3xl font-semibold text-center mb-6"><img src="https://github.com/tlochsta-media/static-edition/blob/main/android-chrome-384x384.png?raw=true" style="max-height: 120px;display:inline" ></h1>
            <div class="relative">
                <input type="hidden" name="redirect" value="${redirectPath}">
                <input type="password" name="password" autocomplete="current-password" autofocus
                    class="w-full px-4 py-2 rounded-lg bg-purple-900 border border-gray-700 focus:outline-none border-purple-500"
                    placeholder="Password" required id="password">
            </div>
            <button type="submit"
                class="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Sign in
            </button>
            ${withError ? `<p class="mt-1 mb-3 text-center text-white">Incorrect password, please try again.</p>` : ''}
        </form>
    </main>
</body>

</html>

  `;
}
