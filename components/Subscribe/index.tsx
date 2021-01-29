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
                <Button type="submit" aria-label="submit">
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
        max-width: 200px; 
        border:1px solid ${({ theme }) => theme.accent};
        background:${({ theme }) => theme.bg};
        color:${({ theme }) => theme.accent};
        outline:none;
        &:: placeholder{
            color:${({ theme }) => theme.color3};
        }
    `;
const Button = styled.button`
        padding:5px 10px;
        background:${({ theme }) => theme.accent};
        color:${({ theme }) => theme.bg2};
        border:1px solid ${({ theme }) => theme.accent} ; 
        outline:none;
    `;
export default Subscribe;