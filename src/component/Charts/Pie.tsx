import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from "@syncfusion/ej2-react-charts"
import { pieChartData, ecomPieChartData } from "../../data/dummy"

const Pie = () => {
  return (
    <AccumulationChartComponent
      id="charts"
      legendSettings={{
        visible: true
      }}
      enableAnimation={true}
      enableSmartLabels={true}
      tooltip={{enable:true}}
      
    >
      <Inject services={[PieSeries, AccumulationLegend,
AccumulationDataLabel, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          dataSource={pieChartData}
          xName="x"
          yName="y"
          type="Pie"
          radius="r"
          innerRadius="20%"
          dataLabel={{
            visible:true,
            position:"Outside",
            name:'x',
          }
           
          }
        />
      </AccumulationSeriesCollectionDirective>

    </AccumulationChartComponent>
  )
}

export default Pie