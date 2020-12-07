getQuestionCount = (answers) => answers.reduce((ansSet, ans) => ans.split("").reduce((set, char) => set.add(char),ansSet), new Set() ).size

exports.getQuestionCount = getQuestionCount;

exports.getQuestionSum = (inputArr) =>
  inputArr.reduce((sum, input) => sum + getQuestionCount(input), 0);
