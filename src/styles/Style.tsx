import styled from '@emotion/styled'

export const Wrapper = styled.div({
    border: '1px solid #cecece',
    margin: 'auto',
    maxWidth: '300px',
    borderRadius: '0.3rem',
    boxShadow: '4px 6px 12px 0px #00000012'
})


export const FormWrapper = styled.div({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '2em',
    margin: 'auto',
    maxWidth: '300px'
})

export  const Button = styled.button({
    border: '0px transparent',
    backgroundColor: 'transparent'
})

export const SingleTask = styled.div<{isCompleted : boolean}>( props =>({
    color: props.isCompleted ? '#fffff' : "#000000"


}));