console.log('=== Node.js process started ===');

console.log('PID:', process.pid);
console.log('Platform:', process.platform);
console.log('Node version:', process.version);

console.log('Memory usage:', process.memoryUsage());

let counter = 0;

setInterval(() => {
  counter += 1;

  console.log({
    tick: counter,
    time: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage().heapUsed,
  });
}, 1000);