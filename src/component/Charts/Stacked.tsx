import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective } from "@syncfusion/ej2-react-charts"
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy"

interface StackedProps{
  width:string
  height:string
}

const Stacked = ({height, width}:StackedProps) => {
  return (
   <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: { width:0 }}}
      tooltip={{enable:true}}
      legendSettings={{ background: 'white'}}
   >
    <Inject services={[
      Legend,
      Category,
      StackingColumnSeries, 
      Tooltip
    ]} 
    />

    <SeriesCollectionDirective>
      {
        stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>
        
        )
      }
    </SeriesCollectionDirective>
   </ChartComponent>
  )
} 

export default Stacked