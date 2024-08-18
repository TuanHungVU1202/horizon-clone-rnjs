'use client'

import Chart, { ArcElement, Legend, Tooltip } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3455],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],

        labels: ['Nordea', 'S-pankki', 'OP']
    }
    return <Doughnut
        data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
}

export default DoughnutChart