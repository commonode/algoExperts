# Solution

```js
// O(n) time | O(d) space - where n is the number of people in the org and d is the depth (height) of the org chart
function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
    let numImportantReports = 0;
    for (const directReport of manager.directReports) {
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
        if (!!orgInfo.lowestCommonManager) return orgInfo;
        numImportantReports += orgInfo.numImportantReports;
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++;
    const lowerstCommonManager = numImportantReports === 2 ? manager : null;
    return {lowestCommonManager, numImportantReports};
}
```