import React from 'react';
import {Text, View} from 'react-native';
import ReportAreaChart from '../../components/ReportAreaChart';

export default function ReportScreen(props) {
    console.log('554', props.isAuthenticated);
    return (
        <View>
            <Text>Semantic Analysis of Trial reponses</Text>
            <Text>Number of reviews charted { props.reportsCount}</Text>
            { props.isAuthenticated ?
                <Text>Authenticated to cognito</Text>
            :
                <Text>Please login</Text>
            }
            <ReportAreaChart data={props.dailyKeyWordSummaries}/>
            <ReportAreaChart data={props.dailyComprehendSummaries}/>
        </View>
    )

}