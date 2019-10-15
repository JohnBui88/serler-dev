// -------------------------- GET DATA --------------------------
export const getDataByCondition = condition => dispatch => {
  console.log(condition);
  const data = [
    {
      analyst: "Analyst 1",
      author: "Author 1",
      doi: "DOI 9310239",
      participants: "Participant 1",
      researchQuestion: "Research Question 1",
      researchResult: "Research Result 1",
      seMethod: "SE Method 1",
      seMethodology: "SE Methodology 1",
      title: "Title 1",
      type: "Type 1",
      year: "2016"
    },
    {
      analyst: "Analyst 2",
      author: "Author 2",
      doi: "DOI 9310239",
      participants: "Participant 2",
      researchQuestion: "Research Question 2",
      researchResult: "Research Result 2",
      seMethod: "SE Method 2",
      seMethodology: "SE Methodology 2",
      title: "Title 2",
      type: "Type 2",
      year: "2017"
    },
    {
      analyst: "Analyst 3",
      author: "Author 3",
      doi: "DOI 9310239",
      participants: "Participant 3",
      researchQuestion: "Research Question 3",
      researchResult: "Research Result 3",
      seMethod: "SE Method 3",
      seMethodology: "SE Methodology 3",
      title: "Title 3",
      type: "Type 3",
      year: "2018"
    },
    {
      analyst: "Analyst 4",
      author: "Author 4",
      doi: "DOI 9310239",
      participants: "Participant 4",
      researchQuestion: "Research Question 4",
      researchResult: "Research Result 4",
      seMethod: "SE Method 4",
      seMethodology: "SE Methodology 4",
      title: "Title 4",
      type: "Type 4",
      year: "2019"
    },
    {
      analyst: "Analyst 5",
      author: "Author 5",
      doi: "DOI 9310239",
      participants: "Participant 5",
      researchQuestion: "Research Question 5",
      researchResult: "Research Result 5",
      seMethod: "SE Method 5",
      seMethodology: "SE Methodology 5",
      title: "Title 5",
      type: "Type 5",
      year: "2016"
    },
    {
      analyst: "Analyst 6",
      author: "Author 6",
      doi: "DOI 9310239",
      participants: "Participant 6",
      researchQuestion: "Research Question 6",
      researchResult: "Research Result 6",
      seMethod: "SE Method 6",
      seMethodology: "SE Methodology 6",
      title: "Title 6",
      type: "Type 6",
      year: "2017"
    },
    {
      analyst: "Analyst 7",
      author: "Author 7",
      doi: "DOI 9310239",
      participants: "Participant 7",
      researchQuestion: "Research Question 7",
      researchResult: "Research Result 7",
      seMethod: "SE Method 7",
      seMethodology: "SE Methodology 7",
      title: "Title 7",
      type: "Type 7",
      year: "2018"
    },
    {
      analyst: "Analyst 8",
      author: "Author 8",
      doi: "DOI 9310239",
      participants: "Participant 8",
      researchQuestion: "Research Question 8",
      researchResult: "Research Result 8",
      seMethod: "SE Method 8",
      seMethodology: "SE Methodology 8",
      title: "Title 8",
      type: "Type 8",
      year: "2019"
    }
  ];
  getDataSuccess(dispatch, data);
};

const getDataSuccess = (dispatch, data) => {
  dispatch({
    type: "home_data_success",
    data
  });
};
