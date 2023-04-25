import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from "@syncfusion/ej2-react-charts"
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy"
import { useStateContext } from "../../context/ContentProvider"


const  LineChart = () => {
const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width:0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark'? '#33373E' : '#fff' }
      legendSettings={{background:'white'}}
    >
      <Inject
        services={[DateTime, Legend, Tooltip, LineSeries]}
      />
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item}/>
          ))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart