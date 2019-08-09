// Min Rewards

// Imagine that you're a teacher who's just graded the final exam in a class.  You have a list of student scores on the final exam in a particular order (not necessarily sorted) and you want to reward your students.  You decide to do so fairly by giving them arbitrary rewards following two rules: first, all students must receive at least one reward; ScriptProcessorNode, any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.  Assume that all students have different scores; in other words, the scores are all unique.  Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to the students, all the while satisfying the two rules.  

// O(n^2) time | O(n) space - where n is the length of the input array
function minRewards(scores) {
    const rewards = scores.map(_ => 1);
    for (let i = 1; i < scores.length; i++) {
        let j = i - 1;
        if (scores[i] > scores[j]) {
            rewards[i] = rewards[j] + 1;
        } else {
            while (j >= 0 && scores[j] > scores[j + 1]) {
                rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
                j--;
            }
        }
    }
    return rewards.reduce((a,b) => a + b);
}