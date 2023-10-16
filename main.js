const { app, BrowserWindow } = require('electron');

// process.noAsar = true;

app.whenReady().then(async() => {
  /**
   * 28.0.0-alpha.2: needs `process.noAsar = true`
   * 27.0.0: works fine
   */
  const { default: printStuff } = await import('my-esm-dependency')
  
  printStuff('it works!');

  const bw = new BrowserWindow();
  
  await bw.loadURL('about:blank');
  
  bw.show();
});
