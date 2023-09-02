const height = prompt("Enter height");
const treeHeight = parseInt(height);

switch (treeHeight){
    case 0:
        alert("Enter a positive number");
        break;
    case 1:
        alert("Enter bigger number");
        break;
    default:
        console.log(`Дякуємо! Починаємо побудову ялинки з висотою ${treeHeight}.`)
        for (let i = 1; i <= treeHeight; i++) {
            let spaces = " ".repeat(treeHeight - i);
            let sticks = "|".repeat(2 * i - 1);
            console.log(spaces + sticks);
        }
        break;
}