import React from 'react'
import ReactDOM from "react-dom";
import activeAccount from '../../mock-data/activeAccount.json'
import { Chart, Coordinate, Interval, Tooltip, Axis } from 'bizcharts';
import DataSet from '@antv/data-set'
import moment from 'moment'



const AccountActiveChart = () => {
    console.log(activeAccount)
    const data = [
        { post: 'post1', click: 24 },
        { post: 'post2', click: 33 },
        { post: 'post3', click: 48 },
    ];
    const scale = {
        date: {
            type: 'time',
            tickCount: 20,

        }

    }
    //moment.get(year) return a number therefore here set the year to be a number
    const ds1 = new DataSet({
        state: {
            year: 2021
        }
    })


    const dv1 = ds1.createView().source(activeAccount).transform({
        type: 'filter',
        callback(row) {
            return moment(row.date).get('year') === ds1.state.year
        }
    }).transform({
        type: 'map',
        callback(row) {
            const newDate = moment(row.date).format('YYYY-MM-DD')
            row.date = newDate
            return row
        }
    }).transform({
        type: 'sort-by',
        fields: ['date'],
        order: 'ASC'
    });

    const dv2 = new DataSet().createView().source(data).transform({
        type: 'percent',
        field: 'click',
        dimension: 'click',
        as: 'percent'
    })
    return (
        <div className="account-active-chart">
            <div className="bizchart">
                日点击率统计
                <Chart height={320} width={300} autoFit data={dv1} >
                    <Interval position="date*click" />
                </Chart>
            </div>
            <div className="bizchart">
                帖子点击分布
                <Chart height={320} width={300} autoFit data={dv2} >
                    <Interval position="click"
                        adjust="stack"
                        color='post'
                        label={['post', {
                            layout: {
                                type: 'limit-in-plot',
                                cfg: { action: 'ellipsis' }
                            },
                            content: (data) => {
                                return `percentage:${Math.round(data.percent * 100)}%`
                            }
                        }]}

                    />
                    <Tooltip showTitle={false} />
                    <Coordinate type='theta' />
                    <Axis visible={false} />
                </Chart>
            </div>


        </div>
    )
}

export default AccountActiveChart
