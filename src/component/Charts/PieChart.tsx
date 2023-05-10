import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip,
  AccumulationDataLabel } from'@syncfusion/ej2-react-charts';

import { useStateContext } from '../../context/ContentProvider';
import { ecomPieChartData } from '../../data/dummy';


const Doughnut = () => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
    width='290px'
    height='180px'
      id='pie-chart'
      legendSettings={{ visible: false }}
              enableSmartLabels={true}
              enableAnimation={false}
              center={{x: '60%', y: '60%'}}
              tooltip={{ enable: false }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={ecomPieChartData}
          xName="x"
          yName="y"
          explode={true} explodeOffset='10%' explodeIndex={0}
          dataLabel={{
            visible: true,
            position: 'Inside', name: 'text',
            font: {
              fontWeight: '600'
            }
          }}
          radius='70%'
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;
