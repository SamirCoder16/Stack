// Stack Implement.

const arr = [];
const max = 5;

const notify = () => {
  console.log('\nPush stack ------ press 1');
  console.log('Pop stack  ------ press 2');
  console.log('Show stack ------ press 3');
  console.log('Leave stack ----- press 0');
};

while (true) {
  notify();
  const value = parseInt(prompt("Enter your choice:"));

  switch (value) {
    case 1:
      if (arr.length < max) {
        const pushValue = prompt("Enter value to push:");
        arr.push(pushValue);
        console.log(`✅ Pushed: ${pushValue}`);
      } else {
        console.log("⚠️ Stack Overflow!");
      }
      break;

    case 2:
      if (arr.length > 0) {
        const removed = arr.pop();
        console.log(`🗑️ Popped: ${removed}`);
      } else {
        console.log("⚠️ Stack is Empty");
      }
      break;

    case 3:
      if (arr.length > 0) {
        console.log("📦 Stack elements:");
        for (let i = 0; i < arr.length; i++) {
          console.log(`  ${i + 1}. ${arr[i]}`);
        }
      } else {
        console.log("📭 Stack is Empty");
      }
      break;

    case 0:
      console.log("👋 Exited...");
      break;

    default:
      console.log("❌ Enter a valid number!");
  }

  if (value === 0) break; // exit condition
}
