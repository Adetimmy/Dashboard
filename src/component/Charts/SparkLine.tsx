import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

type SparkLineProps = {
  currentColor:string
  id:string
  type:any
  height:string
  width:string
  data:Object[]
  color:string
}

const SparkLine = ({currentColor,id,type,height,width,data,color}:SparkLineProps) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType='Numeric'
        fill={color}
        border={{color:currentColor, width:2}}
        dataSource={data}
        xName='x'
        yName='y'
        type={type}
        tooltipSettings={{
          visible:true,
          format:'${x} : data ${y}',
          trackLineSettings: {
            visible: true,
          }
        }}
        >
          <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
    
  )
}

export default SparkLine