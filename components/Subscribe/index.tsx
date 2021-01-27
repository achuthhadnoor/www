import Icon from "react-icons-kit";
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import styled from 'styled-components'

function Subscribe (){

const _subscribe = (e)=>{
    e.preventDefault();
}

    return(
        <FormWrapper>
            <Form onSubmit={_subscribe}>
                <Input/>
                <Button type="submit">
                    <Icon icon={chevronRight}/>
                </Button>
            </Form>
        </FormWrapper>
    )
}

    const FormWrapper = styled.div``
    const Form = styled.form``
    const Input = styled.input``
    const Button = styled.button``
export default Subscribe;