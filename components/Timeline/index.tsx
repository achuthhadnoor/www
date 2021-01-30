import React from 'react';
import { IMonths } from "../../types/timeline";
import styled from 'styled-components'
import Entries from "./Entries";

interface IProps {
    months: IMonths[],
    props?: any
}

const Timeline = ({ months }: IProps) => (
    <TimelineWrapper>{
        months.map((month: IMonths,i:number) =>
            <React.Fragment key={i}>
                <h1 style={{padding:10,fontWeight:600,fontSize:'1.5em'}}>Timeline</h1>
                <MonthWrapper>
                    <Month>{month.month},{"  "} </Month><Month> {month.year}</Month>
                    <Division style={{ flex: 1 }} />
                </MonthWrapper>
                <Entries entries={month.entries}/> 
            </React.Fragment>
        )
    }
    </TimelineWrapper>
)

const TimelineWrapper = styled.div`
    margin-top:30px;
`; 

const MonthWrapper = styled.div`
    display:flex;
    align-items:center;
    padding:10px;
`;

const Month = styled.span`
    text-transform:uppercase;
`;
const Division = styled.hr`
    border:1px solid ${({ theme }) => theme.bg3};
    flex:1;
    margin-left:10px;
`;

export default Timeline;
