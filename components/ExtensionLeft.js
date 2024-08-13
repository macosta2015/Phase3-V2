// SELECT ExtensionLeft TO CLICK OR UNCLICK
async function ExtensionLeft(newPage) {
    console.log("ExtensionLeft");

    await newPage.evaluate(() => {
        // Selector to find the tab-list-item element based on the data-id attribute
        const tabItem = document.querySelector('tab-list-item[data-id="e30941a9804ec64336179006"]');

        if (tabItem) {
            // Simulate a click on the tab-list-item
            tabItem.click();
            // Scroll the element into view smoothly and centered
            tabItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('Tab item not found.');
        }
    });
}

module.exports = ExtensionLeft;
