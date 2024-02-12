import styled from "@emotion/styled";

export const Wrapper = styled.div({
  border: "1px solid #cecece",
  margin: "auto",
  maxWidth: "300px",
  borderRadius: "0.3rem",
  boxShadow: "4px 6px 12px 0px #00000012",
});

export const FlexRow = styled.div({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent : "center"
})

export const FormWrapper = styled.div({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  padding: "2em",
  margin: "auto",
  maxWidth: "300px",
});

export const AddTaskInput = styled.input({
  padding: "0.5em",
  margin: "0.5em",
  color: "#555",
  background: "#f3f3f3",
  border: "none",
  borderRadius: "4px",
  outline: "none",
  fontSize: "16px",
});

export const Button = styled.button({
  border: "0px transparent",
  backgroundColor: "transparent",
});

export const SingleTask = styled.div<{ isCompleted: boolean }>((props) => ({
  color: props.isCompleted ? "#bb2d3b" : "#000000",
}));



export const FlexCardsContainer = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center'


})

export const CategoryLabel = styled.div({
  padding: "5px",
  fontFamily: "'Kanit', sans-serif"
})