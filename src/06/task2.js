getQuestionCount2 = (answers) =>
  Object.values(
    answers.reduce(
      (groupObj, group) =>
        group.split("").reduce((indObj, ind) => {
          indObj[ind] = (indObj[ind] || answers.length) - 1;
          return indObj;
        }, groupObj),
      {}
    )
  ).reduce((sum, item) => (sum += item === 0), 0);

exports.getQuestionCount2 = getQuestionCount2;

exports.getQuestionSum2 = (gsResponse) =>
  gsResponse.reduce(
    (gsSum, gResponse) =>
      gsSum +
      Object.values(
        gResponse.reduce(
          (gResponseMap, pResponse) =>
            pResponse.split("").reduce((pResponseMap, response) => {
              pResponseMap[response] =
                (pResponseMap[response] || gResponse.length) - 1;
              return pResponseMap;
            }, gResponseMap),
          {}
        )
      ).reduce((gSum, resCount) => (gSum += resCount === 0), 0),
    0
  );
