import Icon from "react-icons-kit";
import { chevronRight } from 'react-icons-kit/feather/chevronRight'
import styled from 'styled-components'

function Subscribe() {

    const _subscribe = (e) => {
        e.preventDefault();
    }

    return (
        <FormWrapper>
            <Form onSubmit={_subscribe}>
                <Input placeholder="Stay in loop with me " />
                <Button type="submit" name="submit">
                    <Icon icon={chevronRight} />
                </Button>
            </Form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
        padding:10px;
    `;
const Form = styled.form`
    padding-top:30px;
`;
const Input = styled.input`
        margin:10px 0px;
        padding: 5px 10px;
        max-width: 300px;
        width: 100%;
        border-radius:5px 0px 0px 5px;
        border:1px solid ${({ theme }) => theme.accent};
        background:${({ theme }) => theme.bg};
        color:${({ theme }) => theme.accent};
        outline:none;
    `;
const Button = styled.button`
        padding:5px 10px;
        background:${({ theme }) => theme.accent};
        color:${({ theme }) => theme.bg2};
        border:1px solid ${({ theme }) => theme.accent} ;
        border-radius:0px 5px 5px 0px;
        outline:none;
    `;
export default Subscribe;