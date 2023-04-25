import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Selection, Page, Inject, Edit, Filter, Sort } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../component'

const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg'>
      <Header category='Page' title='Customers' />
      <GridComponent  
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting:true, allowEditing:true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customer 