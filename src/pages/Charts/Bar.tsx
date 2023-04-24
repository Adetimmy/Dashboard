import { ColumnSeries, Tooltip, DataLabel, Highlight, BarSeries, Category, Legend, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective } from'@syncfusion/ej2-react-charts'
import { Header } from '../../component'
import { barCustomSeries } from '../../data/dummy'
import { useStateContext } from '../../context/ContentProvider'



const Bar = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title=''/>
      <ChartComponent
        id='charts'
        style={{backgroundColor:'red'}}
        chartArea={{border: {width:0}}}
        tooltip={{enable:true}}
        background={currentMode === 'Dark'? '#33373E' : '#fff' }
        legendSettings={{enableHighlight:true}}
        primaryXAxis={{  'None' : 'Trim', valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, edgeLabelPlacement: 'Shift' }}
        primaryYAxis={{
          title: 'Medal Count',
          majorTickLines: { width: 0 }, lineStyle: { width: 0 }, maximum: 50, interval: 10,
      }} 
      >
        <Inject 
          services={[BarSeries, Category, Legend, ColumnSeries, Tooltip, DataLabel, Highlight]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map(
            (item, index) => (
              <SeriesDirective key={index} {...item} />
            ) 
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar