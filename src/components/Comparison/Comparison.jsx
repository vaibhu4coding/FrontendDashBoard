import React from 'react'
import {CChart} from '@coreui/react-chartjs'
const Comparison = () => {
  return (
    <CChart
          type="bar"
          data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                  {
                      label: 'Last year',
                      backgroundColor: '#b1effe',
                      data: [5000, 10000, 20000, 32000, 12000, 13000],
                  },
                  {
                    label: 'This year',
                    backgroundColor: '#0068f7',
                    data: [6000, 2000, 40000, 21000, 9200, 8700],
                },
              ],
          }}
          labels="months"
/>
  )
}

export default Comparison