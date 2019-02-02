import React from 'react';
import { AreaChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View} from 'react-native';

class ReportAreaChart extends React.Component {

    render() {
        const data = [50,10,40,95,-4,-24,85,91,35,53,-53,24,50,-20,-80];
        console.log('987', this.props);
        contentInset = { top: 30, bottom: 30 };
        return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={ this.props.data }
                    contentInset = {contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={value => `${value}`}
                />
                <AreaChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={ this.props.data }
                    contentInset={contentInset}
                    curve={ shape.curveNatural }
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid/>
                </AreaChart>
            </View>
        )
    }
}

export default ReportAreaChart;

