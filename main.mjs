import { app, BrowserWindow } from 'electron';

// doesn't work when packaged - `process.noAsar = true` doesn't make a difference
import printStuff from 'my-esm-dependency';

// process.noAsar = true;
// const { default: printStuff } = await import('my-esm-dependency'); // this works with `process.noAsar = true`

app.whenReady().then(async() => {
  printStuff('it works!');

  const bw = new BrowserWindow();
  
  await bw.loadURL('about:blank');
  
  bw.show();
});
