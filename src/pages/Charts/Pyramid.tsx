import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { Header, Text } from '../../component';
import { useStateContext } from '../../context/ContentProvider';



const Pyramid = () => {
const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Pyramid'/>
      <Text>Food Comparison Chart</Text>
      <AccumulationChartComponent id='charts'
        tooltip={{enable:true}}
        legendSettings={{background:'white'}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
      <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' height='75%' width='45%' dataLabel={{visible:true, name:'text'}}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>;
    </div>
  )
}

export default Pyramid