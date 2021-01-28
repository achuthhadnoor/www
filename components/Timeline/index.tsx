import { IMonths } from "../../types/timeline";
import styled from 'styled-components'

interface IProps {
    months: IMonths[],
    props?: any
}

const Timeline = ({ months }: IProps) => (
    <TimelineWrapper>{
        months.map((month: IMonths) =>
            <>
                <h1>Timeline</h1>
                <MonthWrapper>
                <Month>{month.month}, </Month><Month> {month.year}</Month>
                <Division style={{flex:1}}/>
                </MonthWrapper>
            </>
        )
    }
    </TimelineWrapper>
)

const TimelineWrapper = styled.div`

`;

const MonthWrapper = styled.div`
    display:flex;
    align-items:center;
`;

const Month = styled.span`
    text-transform:uppercase;
`;
const Division = styled.hr`
    border:1px solid ${({theme})=>theme.bg3};
    flex:1;
    margin-left:10px;
`;

export default Timeline;
